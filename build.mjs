// Tiny static site builder: markdown in content/, HTML out in dist/.
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

const root = path.dirname(new URL(import.meta.url).pathname);
const cfg = JSON.parse(fs.readFileSync(path.join(root, "site.config.json"), "utf8"));
const out = path.join(root, "dist");
fs.rmSync(out, { recursive: true, force: true });

function read(file) {
  const raw = fs.readFileSync(file, "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = {};
  let body = raw;
  if (m) {
    for (const line of m[1].split("\n")) {
      const i = line.indexOf(":");
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
    body = m[2];
  }
  return { meta, body, html: marked.parse(body) };
}
const esc = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const slugOf = (f) => path.basename(f, ".md").replace(/^.*--/, "").replace(/^\d+-/, "");
const fmtDate = (d) => (d ? new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "");
const mdFiles = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "README.md").map((f) => path.join(dir, f)) : []);

const nav = [
  ["/", "Home"], ["/course/", "Course"], ["/articles/", "Articles"], ["/glossary/", "Glossary"], ["/about/", "About"],
];

function page(urlPath, title, content, { description = cfg.description } = {}) {
  const fullTitle = title ? `${title} · ${cfg.name}` : `${cfg.name}: ${cfg.tagline}`;
  const links = nav.map(([href, label]) => {
    const cur = href === "/" ? urlPath === "/" : urlPath.startsWith(href);
    return `<a href="${href}"${cur ? ' aria-current="page"' : ""}>${label}</a>`;
  }).join("");
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<link rel="stylesheet" href="/style.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%231f5f4a'/><path d='M7 21l6-6 4 4 8-8' stroke='white' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>">
</head>
<body>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="/">${esc(cfg.name)}</a>
    <nav aria-label="Main">${links}</nav>
  </div>
</header>
<main class="wrap">
${content}
</main>
<footer class="site-footer">
  <div class="wrap">
    <p><strong>Educational, not financial advice.</strong> Nothing on this site is a recommendation to buy or sell anything. Trading carries risk, including losing the money you put in. Examples marked hypothetical are made up.</p>
    <p>&copy; ${new Date().getFullYear()} ${esc(cfg.name)}</p>
  </div>
</footer>
<script src="/site.js" defer></script>
</body>
</html>`;
  const dir = path.join(out, urlPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

// Lessons: content/course/<module>--<NN>-<slug>.md (module also in frontmatter)
const lessons = mdFiles(path.join(root, "content/course")).map((f) => {
  const d = read(f);
  const module = d.meta.module || path.basename(f).split("--")[0];
  return { ...d, module, order: Number(d.meta.order || 99), slug: slugOf(f), url: `/course/${module}/${slugOf(f)}/` };
}).sort((a, b) => a.order - b.order);

// Articles: content/articles/<slug>.md, newest first
const articles = mdFiles(path.join(root, "content/articles")).map((f) => {
  const d = read(f);
  return { ...d, slug: slugOf(f), url: `/articles/${slugOf(f)}/` };
}).sort((a, b) => String(b.meta.date || "").localeCompare(String(a.meta.date || "")));

const card = (l, kicker) => `<li class="card"><a href="${l.url}">${kicker ? `<span class="kicker">${esc(kicker)}</span>` : ""}<span class="card-title">${esc(l.meta.title)}</span>${l.meta.summary ? `<span class="card-sum">${esc(l.meta.summary)}</span>` : ""}</a></li>`;

// Home
{
  const h = read(path.join(root, "content/pages/home.md"));
  const latest = lessons.slice(0, 3);
  const mods = cfg.modules.map((m, i) => `<li><span class="num">${i + 1}</span><div><strong>${esc(m.title)}</strong><span>${esc(m.summary)}</span></div></li>`).join("");
  const market = cfg.marketToday?.enabled
    ? `<section class="market"><h2>Market today</h2><p><a href="/market-today/">Read today's note</a></p></section>`
    : `<section class="market muted"><h2>Market today</h2><p>${esc(cfg.marketToday?.note || "")}</p></section>`;
  page("/", "", `
<section class="hero">
  <h1>${esc(h.meta.title)}</h1>
  <div class="lead">${h.html}</div>
  <p><a class="btn" href="${latest[0]?.url || "/course/"}">Start the first lesson</a> <a class="btn ghost" href="/course/">See the course</a></p>
</section>
<section><h2>The course in four steps</h2><ol class="steps">${mods}</ol></section>
${latest.length ? `<section><h2>Latest lessons</h2><ul class="cards">${latest.map((l) => card(l, cfg.modules.find((m) => m.slug === l.module)?.title)).join("")}</ul></section>` : ""}
${market}`);
}

// Course
{
  const sections = cfg.modules.map((m, i) => {
    const ls = lessons.filter((l) => l.module === m.slug);
    const list = ls.length ? `<ul class="cards">${ls.map((l, j) => card(l, `Lesson ${j + 1}`)).join("")}</ul>` : `<p class="muted">Lessons coming soon.</p>`;
    return `<section class="module" id="${m.slug}"><h2><span class="num">${i + 1}</span>${esc(m.title)}</h2><p>${esc(m.summary)}</p>${list}</section>`;
  }).join("");
  page("/course/", "Course", `<h1>Course</h1><p class="lead">Four modules, short lessons, plain words. Start at the top and work down.</p>${sections}`);
  for (const l of lessons) {
    const mi = cfg.modules.findIndex((m) => m.slug === l.module);
    const ml = lessons.filter((x) => x.module === l.module);
    const idx = ml.indexOf(l);
    const next = ml[idx + 1];
    page(l.url, l.meta.title, `
<article class="prose">
  <p class="kicker"><a href="/course/#${l.module}">Module ${mi + 1}: ${esc(cfg.modules[mi]?.title || l.module)}</a> · Lesson ${idx + 1}</p>
  <h1>${esc(l.meta.title)}</h1>
  ${l.html}
  <nav class="pager">${next ? `<a href="${next.url}">Next lesson: ${esc(next.meta.title)} →</a>` : `<a href="/course/">← Back to the course</a>`}</nav>
</article>`, { description: l.meta.summary });
  }
}

// Articles
page("/articles/", "Articles", `<h1>Articles</h1><p class="lead">Longer reads on one idea at a time.</p>${
  articles.length ? `<ul class="cards">${articles.map((a) => card(a, fmtDate(a.meta.date))).join("")}</ul>` : `<p class="muted">The first articles are on their way. In the meantime, <a href="/course/">start the course</a>.</p>`}`);
for (const a of articles) {
  page(a.url, a.meta.title, `<article class="prose"><p class="kicker">${esc(fmtDate(a.meta.date))}</p><h1>${esc(a.meta.title)}</h1>${a.html}<nav class="pager"><a href="/articles/">← All articles</a></nav></article>`, { description: a.meta.summary });
}

// Glossary
{
  const g = read(path.join(root, "content/glossary.md"));
  page("/glossary/", "Glossary", `<article class="prose glossary"><h1>${esc(g.meta.title)}</h1><p class="lead">Common words, explained simply.</p>${g.html}</article>`);
}

// About
{
  const a = read(path.join(root, "content/pages/about.md"));
  page("/about/", "About", `<article class="prose"><h1>${esc(a.meta.title)}</h1>${a.html}</article>`);
}

// 404 + assets
page("/404-tmp/", "Page not found", `<h1>Page not found</h1><p><a href="/">Go to the home page</a></p>`);
fs.renameSync(path.join(out, "404-tmp/index.html"), path.join(out, "404.html"));
fs.rmSync(path.join(out, "404-tmp"), { recursive: true });
for (const f of ["style.css", "site.js"]) fs.copyFileSync(path.join(root, "src", f), path.join(out, f));
console.log(`Built ${lessons.length} lesson(s), ${articles.length} article(s) into dist/`);
