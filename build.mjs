// Tiny static site builder: markdown in content/, HTML out in dist/.
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import access from "./access.config.js";
import { accountsEnabled, isFreePath } from "./lib/token.js";
// Accounts are on only when every env var is set in Vercel (see docs/accounts.md). Changing them needs a redeploy.
const ACCOUNTS = accountsEnabled(process.env);

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
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, "$1");
    }
    body = m[2];
  }
  return { meta, body, html: marked.parse(body) };
}
const esc = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const slugOf = (f) => path.basename(f, ".md").replace(/^.*--/, "").replace(/^\d+-/, "");
const idOf = (s) => String(s).toLowerCase().replace(/&amp;/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const fmtDate = (d) => (d ? new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "");
const readTime = (body) => `${Math.max(1, Math.round(body.split(/\s+/).length / 200))} min read`;
const mdFiles = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "README.md").map((f) => path.join(dir, f)) : []);

// Small line icons (24px grid, stroke = currentColor).
const ICONS = {
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  chart: '<path d="M4 19h16"/><path d="M5 15l4-4 3 3 6-7"/><path d="M15 7h3v3"/>',
  list: '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 8.5h6M9 12h6M9 15.5h4"/>',
  mind: '<path d="M12 20c-4 0-7-3-7-7 0-3.5 2.5-6.5 6-7 .3 2 1.5 3 3 3.5"/><path d="M12 20c4 0 7-3 7-7 0-2.5-1.5-4.7-3.6-5.9"/><path d="M12 20v-6"/><path d="M12 14c0-2 1.5-3.5 3.5-3.5"/>',
  book: '<path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5c-.8 0-1.5.7-1.5 1.5z"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5c.8 0 1.5.7 1.5 1.5z"/>',
  pen: '<path d="M4 20l4-1 10.5-10.5a2.1 2.1 0 0 0-3-3L5 16l-1 4z"/><path d="M14 7l3 3"/>',
  text: '<path d="M5 6V4.5h14V6"/><path d="M12 4.5v15"/><path d="M9 19.5h6"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/>',
  user: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3"/>',
  scale: '<path d="M12 4v16M7 20h10M5 8h14"/><path d="M5 8l-2.5 6a3 3 0 0 0 5 0z"/><path d="M19 8l-2.5 6a3 3 0 0 0 5 0z"/>',
};
const icon = (name, cls = "icon") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.book}</svg>`;
const MODULE_ICONS = { "start-here": "info", "how-markets-work": "scale", "survive-first": "shield", "read-the-market": "chart", "build-a-system": "list", "the-traders-mind": "mind", "thinking-in-probabilities": "scale", "going-further": "book" };
const modIcon = (slug) => MODULE_ICONS[slug] || "book";

const logo = `<img class="logo" src="/logo.jpg" alt="" aria-hidden="true">`;

// Runs before the page paints so a saved theme never flashes. "tb-theme" is light, dark, or unset (match device).
const themeBoot = `try{var t=localStorage.getItem("tb-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

const nav = [
  ["/", "Home"], ["/course/", "Course"], ["/articles/", "Articles"], ["/glossary/", "Glossary"], ["/about/", "About"],
];

function page(urlPath, title, content, { description = cfg.description, wide = false } = {}) {
  const fullTitle = title ? `${title} · ${cfg.name}` : `${cfg.name}: ${cfg.tagline}`;
  const links = nav.map(([href, label]) => {
    const cur = href === "/" ? urlPath === "/" : urlPath.startsWith(href);
    return `<a href="${href}"${cur ? ' aria-current="page"' : ""}>${label}</a>`;
  }).join("");
  const footLinks = nav.map(([href, label]) => `<a href="${href}">${label}</a>`).join("");
  const html = `<!doctype html>
<html lang="en"${ACCOUNTS ? ' class="accounts-on"' : ""}>
<head>
<meta charset="utf-8">
<script>${themeBoot}</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta name="theme-color" content="#f6f3ec" media="(prefers-color-scheme: light)" data-tc="light">
<meta name="theme-color" content="#0f1513" media="(prefers-color-scheme: dark)" data-tc="dark">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/style.css">
<link rel="icon" href="/logo.jpg" type="image/jpeg">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap wide">
    <a class="brand" href="/">${logo}<span>${esc(cfg.name)}</span></a>
    <nav aria-label="Main">${links}</nav>
    ${ACCOUNTS ? `<a class="account-btn" href="/account/" data-account-link${urlPath === "/account/" ? ' aria-current="page"' : ""}>${icon("user")}<span data-account-label>Sign in</span></a>` : ""}
    <button class="theme-btn" type="button" data-theme-toggle aria-label="Switch to dark theme">${icon("moon", "icon i-moon")}${icon("sun", "icon i-sun")}</button>
  </div>
</header>
<main id="main" class="wrap${wide ? " wide" : ""}">
${content}
</main>
<footer class="site-footer">
  <div class="wrap wide">
    <div class="disclaimer">
      ${icon("info")}
      <p><strong>Educational, not financial advice.</strong> Nothing on this site is a recommendation to buy or sell anything. Trading carries risk, including losing the money you put in. Examples marked hypothetical are made up.</p>
    </div>
    <div class="foot-row">
      <a class="brand small" href="/">${logo}<span>${esc(cfg.name)}</span></a>
      <nav aria-label="Footer">${footLinks}<a href="/privacy/">Privacy</a></nav>
      <fieldset class="theme-pick" data-theme-pick><legend>Theme</legend><button type="button" data-set="light">Light</button><button type="button" data-set="dark">Dark</button><button type="button" data-set="auto">Match device</button></fieldset>
      <p class="copy">&copy; ${new Date().getFullYear()} ${esc(cfg.name)}</p>
    </div>
  </div>
</footer>
<script src="/theme.js" defer></script>
<script src="/site.js" defer></script>
</body>
</html>`;
  const dir = path.join(out, urlPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

// Turn "**Key idea:** ..." paragraphs into a highlighted box and wrap tables so they scroll on phones.
const enhanceProse = (html) => html
  .replace(/<p><strong>Key idea:<\/strong>([\s\S]*?)<\/p>/g, `<div class="key-idea">${icon("check")}<p><strong>Key idea</strong>$1</p></div>`)
  .replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, "</table></div>")
  .replace(/<blockquote>/g, `<blockquote>${icon("info")}<div>`).replace(/<\/blockquote>/g, "</div></blockquote>");

// Lessons: content/course/<module>--<NN>-<slug>.md (module also in frontmatter)
const lessons = mdFiles(path.join(root, "content/course")).map((f) => {
  const d = read(f);
  const module = d.meta.module || path.basename(f).split("--")[0];
  return { ...d, module, order: Number(d.meta.order || 99), slug: slugOf(f), url: `/course/${module}/${slugOf(f)}/` };
}).sort((a, b) => (cfg.modules.findIndex((m) => m.slug === a.module) - cfg.modules.findIndex((m) => m.slug === b.module)) || (a.order - b.order));

// Articles: content/articles/<slug>.md, newest first
const articles = mdFiles(path.join(root, "content/articles")).map((f) => {
  const d = read(f);
  return { ...d, slug: slugOf(f), url: `/articles/${slugOf(f)}/` };
}).sort((a, b) => String(b.meta.date || "").localeCompare(String(a.meta.date || "")));

const isCore = (l) => !l.meta.kind;

// Curated step-by-step versions: content/steps/<lesson-slug>.md, split by <!-- step -->.
// The shared prelude is metadata for the page, not a lesson screen.
const stripWalkPrelude = (part) => part
  .split("\n")
  .filter((line, i) => !(i === 0 && /^#\s+/.test(line)) && !/^One (?:small )?(?:idea|gate) per screen,/.test(line))
  .join("\n")
  .trim();
const steps = Object.fromEntries(mdFiles(path.join(root, "content/steps")).map((f) => {
  const d = read(f);
  const lesson = d.meta.lesson || slugOf(f);
  const parts = d.body.split(/^<!--\s*step\s*-->\s*$/m).map((p) => p.trim()).filter(Boolean);
  if (parts.length > 1) {
    const first = stripWalkPrelude(parts[0]);
    parts.splice(0, 1, ...(first ? [first] : []));
  }
  return [lesson, { ...d, parts }];
}));
const stepsUrl = (l) => `${l.url}steps/`;
let nextMod, nextFirst;
const lessonBySlug = (slug) => lessons.find((l) => l.slug === slug);

// Every core lesson gets a guided view. Curated step files stay hand-crafted; the rest
// are split at section headings so the course never has a dead-end "full lesson only" path.
const autoWalk = (l) => ({
  meta: {
    title: `${l.meta.title}, step by step`,
    summary: l.meta.summary || "Read this lesson one section at a time.",
  },
  parts: l.body.split(/(?=^##\s)/m).map((p) => p.trim()).filter(Boolean),
});
const walks = Object.fromEntries(lessons.filter(isCore).map((l) => [l.slug, steps[l.slug] || autoWalk(l)]));
const walkFor = (l) => walks[l.slug];

// Lessons in a module, grouped by "section" (order from site.config.json; no section = the first one).
const sectionOf = (m, l) => l.meta.section || m.sections?.[0] || "";
const groupLessons = (m, ls) => {
  if (!m.sections?.length) return [{ name: "", ls }];
  const names = [...m.sections, ...new Set(ls.map((l) => sectionOf(m, l)).filter((n) => !m.sections.includes(n)))];
  return names.map((name) => ({ name, ls: ls.filter((l) => sectionOf(m, l) === name) })).filter((g) => g.ls.length);
};

const modOf = (slug) => cfg.modules.find((m) => m.slug === slug);
// Module quizzes and cheat sheets ("kind" in the front matter) sit at the end of a module and are not numbered or counted as lessons.
const KIND_LABEL = { quiz: "Module quiz", cheatsheet: "Cheat sheet" };
const lessonCount = (slug) => lessons.filter((l) => l.module === slug && isCore(l)).length;
const countLabel = (n) => (n ? `${n} lesson${n > 1 ? "s" : ""}` : "Coming soon");

// A content card: chip, title, summary, meta, arrow.
const card = (l, { chip, chipIcon, meta } = {}) => `<li><a class="card" href="${l.url}">
  ${chip ? `<span class="chip">${chipIcon ? icon(chipIcon, "icon xs") : ""}${esc(chip)}</span>` : ""}
  <span class="card-title">${esc(l.meta.title)}</span>
  ${l.meta.summary ? `<span class="card-sum">${esc(l.meta.summary)}</span>` : ""}
  <span class="card-meta">${esc(meta || readTime(l.body))}<span class="go">Read ${icon("arrow", "icon xs")}</span></span>
</a></li>`;

const pageHead = (eyebrow, title, lead, extra = "") => `<header class="page-head">
  <p class="eyebrow">${eyebrow}</p>
  <h1>${title}</h1>
  ${lead ? `<p class="lead">${lead}</p>` : ""}${extra}
</header>`;

// Hero illustration: the hypothetical drawdown example from Survive first (buy $100, sell $65, price later hits $150).
const heroChart = `<figure class="hero-chart">
  <svg viewBox="0 0 440 270" role="img" aria-labelledby="hc-t hc-d">
    <title id="hc-t">Right forecast, losing trade</title>
    <desc id="hc-d">A hypothetical price line: bought at $100, fell to $65 where the trader sold for a 35% loss, then climbed to $150.</desc>
    <defs><linearGradient id="hc-g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--loss)" stop-opacity=".18"/><stop offset="1" stop-color="var(--loss)" stop-opacity="0"/></linearGradient></defs>
    <g class="hc-grid"><line x1="20" x2="420" y1="62" y2="62"/><line x1="20" x2="420" y1="122" y2="122"/><line x1="20" x2="420" y1="182" y2="182"/><line x1="20" x2="420" y1="232" y2="232"/></g>
    <line class="hc-buy" x1="20" x2="420" y1="132" y2="132"/>
    <text class="hc-lab" x="418" y="150" text-anchor="end">Bought at $100</text>
    <path d="M30 132 L62 120 L92 140 L120 152 L146 178 L170 168 L196 204 L196 232 L30 232 Z" fill="url(#hc-g)"/>
    <path class="hc-line" d="M30 132 L62 120 L92 140 L120 152 L146 178 L170 168 L196 204"/>
    <path class="hc-after" d="M196 204 L224 186 L250 192 L280 160 L306 150 L334 116 L360 104 L386 80 L410 66"/>
    <circle class="hc-dot-loss" cx="196" cy="204" r="6"/>
    <circle class="hc-dot-gain" cx="410" cy="66" r="6"/>
    <g class="hc-tag loss"><rect x="126" y="214" width="140" height="44" rx="10"/><text x="140" y="233">Sold at $65</text><text class="big" x="140" y="251">−35%</text></g>
    <g class="hc-tag gain"><rect x="276" y="14" width="140" height="40" rx="10"/><text x="290" y="31">Price later hits</text><text class="big" x="290" y="47">$150 ✓</text></g>
  </svg>
  <figcaption><span class="pill">Hypothetical</span> The forecast was right. The trade still lost a third. Survive first explains why.</figcaption>
</figure>`;

// Home
{
  const h = read(path.join(root, "content/pages/home.md"));
  const first = lessons[0];
  const latest = lessons.filter(isCore).slice(0, 3);
  const mods = cfg.modules.map((m, i) => `<li><a class="step" href="/course/#${m.slug}">
    <span class="step-top"><span class="step-icon">${icon(modIcon(m.slug))}</span><span class="step-num">Step ${i + 1}</span></span>
    <strong>${esc(m.title)}</strong><span class="step-sum">${esc(m.summary)}</span>
    <span class="step-count${lessonCount(m.slug) ? "" : " soon"}">${countLabel(lessonCount(m.slug))}</span>
  </a></li>`).join("");
  const market = cfg.marketToday?.enabled
    ? `<section class="band market"><span class="band-icon">${icon("calendar")}</span><div><h2>Market today</h2><p><a href="/market-today/">Read today's note</a></p></div></section>`
    : `<section class="band market"><span class="band-icon">${icon("calendar")}</span><div><h2>Market today <span class="pill soft">Coming soon</span></h2><p>${esc(cfg.marketToday?.note || "")}</p></div></section>`;
  const promises = [
    ["text", "Plain words", "Short lessons without jargon walls. When a word trips you up, the glossary has it."],
    ["scale", "Real numbers", "Made-up examples are labelled hypothetical. Real data names its source and date."],
    ["shield", "Risk first", "No tips, no predictions, no hype. Just the habits that keep you in the game."],
  ].map(([ic, t, s]) => `<li><span class="p-icon">${icon(ic)}</span><div><strong>${t}</strong><span>${s}</span></div></li>`).join("");
  page("/", "", `
<section class="hero">
  <div class="hero-text">
    <p class="eyebrow">Free beginner course · plain words</p>
    <h1>${esc(h.meta.title)}</h1>
    <div class="lead">${h.html}</div>
    <p class="cta"><a class="btn" href="${first?.url || "/course/"}">Start the first lesson ${icon("arrow", "icon xs")}</a><a class="btn ghost" href="/course/">See the course</a></p>
  </div>
  ${heroChart}
</section>
<section class="promises"><ul>${promises}</ul></section>
<section class="block">
  <div class="block-head"><h2>The course at a glance</h2><a href="/course/">All modules ${icon("arrow", "icon xs")}</a></div>
  <ol class="steps">${mods}</ol>
</section>
${latest.length ? `<section class="block"><div class="block-head"><h2>Start with these lessons</h2><a href="/course/">See all ${icon("arrow", "icon xs")}</a></div><ul class="cards${latest.length === 1 ? " solo" : ""}">${latest.map((l) => card(l, { chip: modOf(l.module)?.title, chipIcon: modIcon(l.module) })).join("")}</ul></section>` : ""}
${market}`, { wide: true });
}

// Course
{
  const total = lessons.filter(isCore).length;
  const sections = cfg.modules.map((m, i) => {
    const ls = lessons.filter((l) => l.module === m.slug);
    const item = (l) => `<li class="lesson-row"${isFreePath(l.url, access) ? "" : " data-gated"}${isCore(l) ? ` data-lesson-row data-course-lesson data-module="${esc(m.slug)}" data-lesson-slug="${esc(l.slug)}"` : ""}><a href="${l.url}"><span class="l-num">${isCore(l) ? ls.filter(isCore).indexOf(l) + 1 : (l.meta.kind === "quiz" ? "?" : "≡")}</span><span class="l-body"><span class="l-title">${esc(l.meta.title)}</span><span class="l-meta">${readTime(l.body)}${walkFor(l) ? ` · guided version` : ""}${isFreePath(l.url, access) ? "" : `<span class="lock-note">${icon("lock", "icon xs")}Free account</span>`}</span></span>${icon("arrow", "icon sm")}</a>${isCore(l) ? `<button class="lesson-check" type="button" data-lesson-done data-lesson-check data-lesson-slug="${esc(l.slug)}" aria-label="Mark ${esc(l.meta.title)} complete"><span class="check-icon">${icon("check", "icon xs")}</span><span class="check-label">Done</span></button>` : ""}</li>`;
    const list = ls.length
      ? groupLessons(m, ls).map((g) => `${g.name ? `<h3 class="lesson-group">${esc(g.name)}</h3>` : ""}<ol class="lesson-list">${g.ls.map(item).join("")}</ol>`).join("")
      : `<p class="soon-note">Lessons coming soon.</p>`;
    const coreCount = ls.filter(isCore).length;
    return `<section class="module" id="${m.slug}">
  <div class="module-head"><span class="step-icon">${icon(modIcon(m.slug))}</span><div><p class="eyebrow">Module ${i + 1} · ${countLabel(coreCount)}</p><h2>${esc(m.title)}</h2><p class="module-sum">${esc(m.summary)}</p><div class="module-progress" data-module-progress data-module="${esc(m.slug)}" data-total="${coreCount}"><span data-module-progress-label>0 of ${coreCount} complete</span><span class="progress-track"><span data-module-progress-bar></span></span></div></div></div>
  ${list}
</section>`;
  }).join("");
  page("/course/", "Course", `${pageHead("The course", "Learn the basics, one short lesson at a time", `${cfg.modules.length} modules, short lessons, plain words. Start at the top and work down.`,
    `<ul class="facts"><li>${icon("book", "icon sm")}${cfg.modules.length} modules</li><li>${icon("pen", "icon sm")}${countLabel(total)} so far</li><li>${icon("check", "icon sm")}${ACCOUNTS ? "Free account" : "Free, no sign-up"}</li></ul>`)}
<div class="course-progress" data-course-progress data-total="${total}"><div><strong data-course-progress-label>0 of ${total} lessons complete</strong><span data-progress-where>Saved on this device</span></div><span class="progress-track"><span data-course-progress-bar></span></span><button type="button" class="text-button" data-reset-progress>Reset progress</button></div>
<div class="modules">${sections}</div>`, { wide: true });
  for (const l of lessons) {
    const mi = cfg.modules.findIndex((m) => m.slug === l.module);
    const ml = lessons.filter((x) => x.module === l.module);
    const idx = ml.indexOf(l);
    const next = ml[idx + 1];
    page(l.url, l.meta.title, `
<article class="prose">
  <p class="crumb"><a href="/course/">Course</a> / <a href="/course/#${l.module}">Module ${mi + 1}: ${esc(cfg.modules[mi]?.title || l.module)}</a></p>
  <h1>${esc(l.meta.title)}</h1>
  <p class="meta-row"><span class="chip">${icon(modIcon(l.module), "icon xs")}${isCore(l) ? `Lesson ${ml.filter(isCore).indexOf(l) + 1}` : KIND_LABEL[l.meta.kind] || "Extra"}${l.meta.section ? ` · ${esc(l.meta.section)}` : ""}</span><span>${readTime(l.body)}</span>${l.meta.date ? `<span>${esc(fmtDate(l.meta.date))}</span>` : ""}</p>
  ${l.meta.summary ? `<p class="lead">${esc(l.meta.summary)}</p>` : ""}
  ${walkFor(l) ? `<a class="steps-banner" href="${stepsUrl(l)}">${icon("list")}<span><strong>Read this one screen at a time.</strong><span>${walkFor(l).parts.length} guided screens${steps[l.slug] ? " with quick questions" : ""}</span></span>${icon("arrow", "icon sm")}</a>` : ""}
  ${isCore(l) ? `<div class="completion-row"><button class="completion-toggle" type="button" data-lesson-done data-lesson-slug="${esc(l.slug)}"><span class="check-icon">${icon("check", "icon xs")}</span><span class="completion-label">Mark lesson complete</span></button><span class="completion-note" data-progress-where>Saved on this device</span></div>` : ""}
  ${enhanceProse(l.html)}
  <nav class="pager">${next
    ? `<a class="pager-card" href="${next.url}"><span class="eyebrow">Next lesson</span><span class="pager-title">${esc(next.meta.title)}</span>${icon("arrow")}</a>`
    : (nextMod = cfg.modules[cfg.modules.findIndex((m) => m.slug === l.module) + 1], nextFirst = nextMod && lessons.find((x) => x.module === nextMod.slug),
      nextFirst
        ? `<a class="pager-card" href="${nextFirst.url}"><span class="eyebrow">Next module: ${esc(nextMod.title)}</span><span class="pager-title">${esc(nextFirst.meta.title)}</span>${icon("arrow")}</a>`
        : `<a class="pager-card" href="/course/"><span class="eyebrow">You've reached the end of the course</span><span class="pager-title">Back to the course</span>${icon("arrow")}</a>`)}</nav>
</article>`, { description: l.meta.summary });
  }
}

// Step-by-step pages: one short screen at a time (all screens show stacked without JavaScript).
for (const l of lessons.filter(isCore)) {
  const s = walkFor(l);
  if (!s) continue;
  const slug = l.slug;
  const n = s.parts.length;
  const screens = s.parts.map((p, i) => `<section class="wstep" data-step="${i + 1}"${i ? " hidden" : ""}>${enhanceProse(marked.parse(p))}</section>`).join("");
  const done = `<div class="walk-done" hidden><p class="eyebrow">Keep going</p><ul class="walk-links">
    <li><button class="completion-toggle" type="button" data-lesson-done data-lesson-slug="${esc(l.slug)}"><span class="check-icon">${icon("check", "icon xs")}</span><span class="completion-label">Mark lesson complete</span></button></li>
    <li><a href="${l.url}">${icon("book", "icon sm")}<span>Read the full lesson</span></a></li>
    ${(s.meta.article && articles.find((a) => a.slug === s.meta.article)) ? `<li><a href="/articles/${s.meta.article}/">${icon("pen", "icon sm")}<span>Read the article: ${esc(articles.find((a) => a.slug === s.meta.article).meta.title)}</span></a></li>` : ""}
    <li><a href="/course/#${l.module}">${icon("list", "icon sm")}<span>Back to the course</span></a></li></ul></div>`;
  page(stepsUrl(l), s.meta.title || l.meta.title, `
<div class="walk prose" data-walk>
  <div class="walk-top"><a class="crumb" href="${l.url}">${icon("back", "icon xs")} Full lesson</a><span class="walk-count" aria-live="polite">Step <b data-walk-i>1</b> of ${n}</span></div>
  <div class="walk-bar" aria-hidden="true"><span data-walk-bar style="width:${100 / n}%"></span></div>
  ${screens}
  ${done}
  <nav class="walk-nav"><button type="button" class="btn ghost" data-walk-back>${icon("back", "icon xs")} Back</button><button type="button" class="btn" data-walk-next>Next ${icon("arrow", "icon xs")}</button></nav>
</div>`, { description: s.meta.summary || l.meta.summary });
}

// Articles
page("/articles/", "Articles", `${pageHead("Articles", "Longer reads, one idea at a time", "Deeper dives on single ideas, written in plain words.")}${
  articles.length
    ? `<ul class="cards">${articles.map((a) => card(a, { chip: fmtDate(a.meta.date), chipIcon: "pen" })).join("")}</ul>`
    : `<div class="empty"><span class="band-icon">${icon("pen")}</span><h2>The first articles are on their way</h2><p>In the meantime, the course is the best place to start.</p><p><a class="btn" href="${lessons[0]?.url || "/course/"}">Start the first lesson ${icon("arrow", "icon xs")}</a></p></div>`}`, { wide: true });
for (const a of articles) {
  page(a.url, a.meta.title, `<article class="prose"><p class="crumb"><a href="/articles/">Articles</a></p><h1>${esc(a.meta.title)}</h1><p class="meta-row"><span>${esc(fmtDate(a.meta.date))}</span><span>${readTime(a.body)}</span></p>${a.meta.summary ? `<p class="lead">${esc(a.meta.summary)}</p>` : ""}${enhanceProse(a.html)}<nav class="pager"><a class="pager-card" href="/articles/"><span class="eyebrow">Keep reading</span><span class="pager-title">All articles</span>${icon("arrow")}</a></nav></article>`, { description: a.meta.summary });
}

// Glossary: each "## Term" section becomes a card, grouped by first letter.
{
  const g = read(path.join(root, "content/glossary.md"));
  const terms = g.html.split(/<h2[^>]*>/).slice(1).map((chunk) => {
    const [term, def] = chunk.split("</h2>");
    return { term: term.trim(), def: def.trim(), id: idOf(term) };
  }).sort((a, b) => a.term.localeCompare(b.term));
  const letters = [...new Set(terms.map((t) => t.term[0].toUpperCase()))];
  const seen = new Set();
  const cards = terms.map((t) => {
    const L = t.term[0].toUpperCase();
    const first = !seen.has(L) && seen.add(L);
    return `<div class="g-card" id="${t.id}"${first ? ` data-letter="${L}"` : ""}>${first ? `<span class="g-anchor" id="letter-${L}"></span>` : ""}<dt><span class="g-l">${L}</span>${t.term}</dt><dd>${t.def}</dd></div>`;
  }).join("");
  page("/glossary/", "Glossary", `${pageHead("Glossary", esc(g.meta.title), "Common words, explained simply.")}
<div class="g-tools">
  <label class="search">${icon("search", "icon sm")}<span class="sr">Search the glossary</span><input type="search" placeholder="Search ${terms.length} terms…" data-glossary-search autocomplete="off"></label>
  <nav class="az" aria-label="Jump to letter">${letters.map((L) => `<a href="#letter-${L}">${L}</a>`).join("")}</nav>
</div>
<dl class="g-cards">${cards}</dl><p class="muted g-none" hidden>No term matches that search.</p>`, { wide: true });
}

// About: each "## Heading" section becomes a card; the "won't" list gets crosses instead of ticks.
{
  const a = read(path.join(root, "content/pages/about.md"));
  const [intro, ...parts] = a.html.split(/<h2[^>]*>/);
  const blocks = parts.map((chunk) => {
    const [h, body] = chunk.split("</h2>");
    const plain = h.replace(/&#39;|\u2019/g, "'");
    const kind = /won't/i.test(plain) ? "neg" : /advice/i.test(plain) ? "warn" : "";
    const ic = kind === "neg" ? "x" : /find/i.test(plain) ? "check" : /source|example/i.test(plain) ? "scale" : "info";
    return `<section class="about-card ${kind}"><span class="band-icon">${icon(ic)}</span><h2>${h}</h2>${body}</section>`;
  }).join("");
  page("/about/", "About", `${pageHead("About", "A calm place to learn how markets work", "")}<div class="about-intro lead">${intro}</div><div class="about-grid">${blocks}</div>`, { wide: true });
}

// Account: one page for sign-up, sign-in, progress, data download and deletion. The script in site.js fills it in.
page("/account/", "Your account", `${pageHead("Your account", "Save your progress", "")}
<div class="account" data-account>
  <section class="acct-card" data-acct="loading"><p class="muted">Loading…</p></section>
  <section class="acct-card" data-acct="off" hidden><h2>Accounts are coming soon</h2><p>Right now your progress is saved on this device only. Everything on the site is open.</p><p><a class="btn" href="/course/">Go to the course ${icon("arrow", "icon xs")}</a></p></section>
  <section class="acct-card" data-acct="out" hidden>
    <h2>Sign in or create a free account</h2>
    <p class="muted" data-acct-why>${access.freeModules.length ? `Lessons after <em>${access.freeModules.map((m) => esc(modOf(m)?.title || m)).join(", ")}</em> need a free account.` : "Lessons need a free account."} It saves which lessons you finished and your quiz answers, so you can pick up on any device.</p>
    <form data-acct-start novalidate>
      <label class="field"><span>Email</span><input type="email" name="email" autocomplete="email" required placeholder="you@example.com"></label>
      <label class="check"><input type="checkbox" name="updates"> <span>Email me now and then when new lessons come out (optional, you can stop any time).</span></label>
      <p class="fine">We'll email you a code to sign in. No password needed. We store your email and your course progress, nothing else. <a href="/privacy/">Privacy notice</a>.</p>
      <button class="btn" type="submit">Email me a code ${icon("arrow", "icon xs")}</button>
      <p class="form-msg" data-acct-msg role="status"></p>
    </form>
  </section>
  <section class="acct-card" data-acct="code" hidden>
    <h2>Check your email</h2>
    <p class="muted">We sent a 6-digit code to <strong data-acct-email></strong>. It works for 15 minutes.</p>
    <form data-acct-verify novalidate>
      <label class="field"><span>Code</span><input name="code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" required placeholder="123456"></label>
      <button class="btn" type="submit">Sign in ${icon("arrow", "icon xs")}</button>
      <button class="text-button" type="button" data-acct-back>Use a different email</button>
      <p class="form-msg" data-acct-msg role="status"></p>
    </form>
  </section>
  <section class="acct-card" data-acct="in" hidden>
    <h2>Signed in</h2>
    <p class="muted">as <strong data-acct-email></strong></p>
    <div class="course-progress"><div><strong data-acct-progress>0 lessons complete</strong><span data-acct-quiz></span></div></div>
    <p><a class="btn" href="/course/" data-acct-continue>Continue the course ${icon("arrow", "icon xs")}</a></p>
    <label class="check"><input type="checkbox" data-acct-updates> <span>Email me now and then when new lessons come out.</span></label>
    <h3>Your data</h3>
    <ul class="acct-actions">
      <li><a class="btn ghost" href="/api/account/" download>Download my data</a></li>
      <li><button class="btn ghost" type="button" data-acct-logout>Sign out</button></li>
      <li><button class="btn ghost danger" type="button" data-acct-delete>Delete my account</button></li>
    </ul>
    <p class="fine">Deleting removes your email and progress from our database straight away. <a href="/privacy/">Privacy notice</a>.</p>
    <p class="form-msg" data-acct-msg role="status"></p>
  </section>
</div>`);

// Privacy notice
{
  const pv = read(path.join(root, "content/pages/privacy.md"));
  const who = cfg.privacy?.controller && cfg.privacy?.contactEmail
    ? `${esc(cfg.privacy.controller)} runs this site and is responsible for your data. Write to <a href="mailto:${esc(cfg.privacy.contactEmail)}">${esc(cfg.privacy.contactEmail)}</a> with any question or request about it.`
    : "Contact details for data requests will be added here before accounts open.";
  pv.html = pv.html.replace(/<p>\{\{controller\}\}<\/p>/, `<p>${who}</p>`);
  page("/privacy/", "Privacy", `<article class="prose"><h1>${esc(pv.meta.title)}</h1>${pv.meta.date ? `<p class="meta-row"><span>Last updated ${esc(fmtDate(pv.meta.date))}</span></p>` : ""}${enhanceProse(pv.html)}</article>`, { description: "What we store when you create an account, and how to download or delete it." });
}

// 404 + assets
page("/404-tmp/", "Page not found", `<div class="empty"><span class="band-icon">${icon("search")}</span><h1>Page not found</h1><p>That page doesn't exist, or it moved.</p><p><a class="btn" href="/">Go to the home page</a></p></div>`);
fs.renameSync(path.join(out, "404-tmp/index.html"), path.join(out, "404.html"));
fs.rmSync(path.join(out, "404-tmp"), { recursive: true });
for (const f of ["style.css", "site.js", "theme.js", "logo.jpg"]) fs.copyFileSync(path.join(root, "src", f), path.join(out, f));
console.log(`Built ${lessons.length} lesson(s), ${articles.length} article(s) into dist/. Accounts ${ACCOUNTS ? "ON" : "off (env vars not set)"}.`);
