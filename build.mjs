// Tiny static site builder: markdown in content/, HTML out in dist/.
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import access from "./access.config.js";
import { accountsEnabled, isFreePath } from "./lib/token.js";
import { STR } from "./src/i18n.mjs";
// Accounts are on only when every env var is set in Vercel (see docs/accounts.md). Changing them needs a redeploy.
const ACCOUNTS = accountsEnabled(process.env);

const root = path.dirname(new URL(import.meta.url).pathname);
const cfg = JSON.parse(fs.readFileSync(path.join(root, "site.config.json"), "utf8"));
const out = path.join(root, "dist");
let L = STR.en; // interface language for the page being built (set per language below)
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
const fmtDate = (d) => (d ? new Date(d + "T12:00:00Z").toLocaleDateString(L.locale, { day: "numeric", month: "long", year: "numeric" }) : "");
const readTime = (body) => L.minRead(Math.max(1, Math.round(body.split(/\s+/).length / 200)));
const mdFiles = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "README.md").map((f) => path.join(dir, f)) : []);

// Small line icons (24px grid, stroke = currentColor).
const ICONS = {
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  calc: '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8.5 7.5h7M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01"/>',
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
const MODULE_ICONS = { "start-here": "info", "how-markets-work": "scale", "trading-math": "calc", "survive-first": "shield", "read-the-market": "chart", "build-a-system": "list", "the-traders-mind": "mind", "thinking-in-probabilities": "scale", "going-further": "book" };
const modIcon = (slug) => MODULE_ICONS[slug] || "book";

const logo = `<img class="logo" src="/brand-logo.jpg" alt="" aria-hidden="true">`;

// Runs before the page paints so a saved theme never flashes. "tb-theme" is light, dark, or unset (match device).
const themeBoot = `(function(){try{var t=localStorage.getItem("tb-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}})()`;

const nav = () => [["/", L.nav.home], ["/course/", L.nav.course], ["/articles/", L.nav.articles], ["/glossary/", L.nav.glossary], ["/about/", L.nav.about]];
const tagline = () => (L.code === "es" && cfg.es?.tagline) || cfg.tagline;
const siteDesc = () => (L.code === "es" && cfg.es?.description) || cfg.description;
const OTHER = { en: "es", es: "en" };

function page(urlPath, title, content, { description = siteDesc(), wide = false } = {}) {
  const fullTitle = title ? `${title} · ${cfg.name}` : `${cfg.name}: ${tagline()}`;
  const links = nav().map(([href, label]) => {
    const cur = href === "/" ? urlPath === "/" : urlPath.startsWith(href);
    return `<a href="${href}"${cur ? ' aria-current="page"' : ""}>${label}</a>`;
  }).join("");
  const footLinks = nav().map(([href, label]) => `<a href="${href}">${label}</a>`).join("");
  const other = STR[OTHER[L.code]];
  let html = `<!doctype html>
<html lang="${L.code}"${ACCOUNTS ? ' class="accounts-on"' : ""}>
<head>
<meta charset="utf-8">
<script>${themeBoot}</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
@@ALT@@
<meta name="theme-color" content="#f6f3ec" media="(prefers-color-scheme: light)" data-tc="light">
<meta name="theme-color" content="#0f1513" media="(prefers-color-scheme: dark)" data-tc="dark">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/style.css">
<link rel="icon" href="/brand-logo.jpg" type="image/jpeg">
</head>
<body>
<a class="skip" href="#main">${L.skip}</a>
<header class="site-header">
  <div class="wrap wide">
    <a class="brand" href="/">${logo}<span>${esc(cfg.name)}</span></a>
    <nav aria-label="Main">${links}</nav>
    <a class="lang-btn" href="@@SWITCH@@" hreflang="${other.code}" lang="${other.code}" title="${esc(other.switchTitle)}" data-lang-switch>${L.switchLabel}</a>
    ${ACCOUNTS ? `<a class="account-btn" href="/account/" data-account-link${urlPath === "/account/" ? ' aria-current="page"' : ""}>${icon("user")}<span data-account-label>${L.signIn}</span></a>` : ""}
    <button class="theme-btn" type="button" data-theme-toggle aria-label="${esc(L.toDark)}">${icon("moon", "icon i-moon")}${icon("sun", "icon i-sun")}</button>
  </div>
</header>
<main id="main" class="wrap${wide ? " wide" : ""}">
${content}
</main>
<footer class="site-footer">
  <div class="wrap wide">
    <div class="disclaimer">
      ${icon("info")}
      <p>${L.disclaimer}</p>
    </div>
    <div class="foot-row">
      <a class="brand small" href="/">${logo}<span>${esc(cfg.name)}</span></a>
      <nav aria-label="Footer">${footLinks}<a href="/privacy/">${L.privacy}</a></nav>
      <fieldset class="theme-pick" data-theme-pick><legend>${L.theme}</legend><button type="button" data-set="light">${L.light}</button><button type="button" data-set="dark">${L.dark}</button><button type="button" data-set="auto">${L.auto}</button></fieldset>
      <p class="copy">&copy; ${new Date().getFullYear()} ${esc(cfg.name)}</p>
    </div>
  </div>
</footer>
<script src="/theme.js" defer></script>
<script src="/site.js" defer></script>
</body>
</html>`;
  // Spanish pages live under /es/ with the same paths. Internal links in templates and lesson text are written
  // as plain /course/... paths and get the prefix here, except assets and the API.
  if (L.prefix) html = html.replace(/href="\/(?!\/|es\/|api\/|style\.css|site\.js|theme\.js|brand-logo|logo\.jpg)/g, `href="${L.prefix}/`);
  const alt = ["en", "es"].map((c) => `<link rel="alternate" hreflang="${c}" href="${STR[c].prefix}${urlPath}">`).join("\n") + `\n<link rel="alternate" hreflang="x-default" href="${urlPath}">`;
  html = html.replace("@@ALT@@", alt).replace("@@SWITCH@@", `${other.prefix}${urlPath}`);
  const dir = path.join(out, L.prefix, urlPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

// Turn "**Key idea:** ..." paragraphs into a highlighted box and wrap tables so they scroll on phones.
const enhanceProse = (html) => html
  .replace(new RegExp(`<p><strong>${L.keyIdeaMarker.replace(":", ":")}</strong>([\\s\\S]*?)</p>`, "g"), `<div class="key-idea">${icon("check")}<p><strong>${L.keyIdea}</strong>$1</p></div>`)
  .replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, "</table></div>")
  .replace(/<blockquote>/g, `<blockquote>${icon("info")}<div>`).replace(/<\/blockquote>/g, "</div></blockquote>");

// One full build per language. English reads content/, Spanish reads content-es/ and falls back to the English file
// (with a notice) when a page is not translated yet, so a half-translated site never has broken links.
const dirFiles = (sub) => mdFiles(path.join(root, "content", sub)).map((f) => {
  if (L.code === "en") return { file: f, fallback: false };
  const es = path.join(root, L.contentDir, sub, path.basename(f));
  return fs.existsSync(es) ? { file: es, fallback: false } : { file: f, fallback: true };
});
const oneFile = (rel) => {
  const en = path.join(root, "content", rel);
  if (L.code === "en") return { file: en, fallback: false };
  const es = path.join(root, L.contentDir, rel);
  return fs.existsSync(es) ? { file: es, fallback: false } : { file: en, fallback: true };
};
const notice = (x) => (x.fallback ? `<p class="notice">${icon("info", "icon sm")}<span>${L.fallback}</span></p>` : "");
const csv = (v) => String(v || "").split(",").map((x) => x.trim()).filter(Boolean);

function buildSite(lang) {
  L = STR[lang];
  const ES = L.code === "es" ? cfg.es || {} : {};
  const mods = cfg.modules.map((m) => ({ ...m, ...(ES.modules?.[m.slug] || {}) }));
  const stages = (cfg.stages || []).map((s, i) => ({ ...s, ...(ES.stages?.[i] || {}) }));
  const secLabel = (m, name) => ES.modules?.[m.slug]?.sectionNames?.[name] || name;
  const modOf = (slug) => mods.find((m) => m.slug === slug);
  const KIND_LABEL = { quiz: L.moduleQuiz, cheatsheet: L.cheatSheet };
  const countLabel = L.lessonsCount;

  // Lessons: content/course/<module>--<NN>-<slug>.md (module also in frontmatter)
  const lessons = dirFiles("course").map(({ file: f, fallback }) => {
    const d = read(f);
    const module = d.meta.module || path.basename(f).split("--")[0];
    return { ...d, fallback, module, order: Number(d.meta.order || 99), slug: slugOf(f), url: `/course/${module}/${slugOf(f)}/` };
  }).sort((a, b) => (cfg.modules.findIndex((m) => m.slug === a.module) - cfg.modules.findIndex((m) => m.slug === b.module)) || (a.order - b.order));

  // Articles: content/articles/<slug>.md, newest first
  const articles = dirFiles("articles").map(({ file: f, fallback }) => {
    const d = read(f);
    return { ...d, fallback, slug: slugOf(f), url: `/articles/${slugOf(f)}/` };
  }).sort((a, b) => String(b.meta.date || "").localeCompare(String(a.meta.date || "")));

  const isCore = (l) => !l.meta.kind;

  // Curated step-by-step versions: content/steps/<lesson-slug>.md, split by <!-- step -->.
  // In Spanish only translated step files count; the rest are generated from the Spanish lesson.
  const stripWalkPrelude = (part) => part
    .split("\n")
    .filter((line, i) => !(i === 0 && /^#\s+/.test(line)) && !/^(?:One (?:small )?(?:idea|gate) per screen,|Una (?:idea|puerta) por pantalla,)/.test(line))
    .join("\n")
    .trim();
  const steps = Object.fromEntries(dirFiles("steps").filter((x) => !x.fallback || L.code === "en").map(({ file: f }) => {
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
  const lessonBySlug = (slug) => lessons.find((l) => l.slug === slug);

  // Every core lesson gets a guided view. Curated step files stay hand-crafted; the rest
  // are split at section headings so the course never has a dead-end "full lesson only" path.
  const autoWalk = (l) => ({
    meta: { title: `${l.meta.title}${L.guided}`, summary: l.meta.summary || "" },
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
  const lessonCount = (slug) => lessons.filter((l) => l.module === slug && isCore(l)).length;

  // Warm-ups: two Check-yourself questions from earlier lessons (3 back and about 20 back), so ideas come up again
  // after a gap. Built from the existing questions; a lesson can override with "warmup: slug, slug" in its front matter.
  const coreAll = lessons.filter(isCore);
  const questionsOf = (l) => {
    const sec = l.body.split(/^##\s+/m).find((p) => L.checkHeadings.some((h) => p.startsWith(h))) || "";
    return [...sec.matchAll(/<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)].map((m) => ({ q: m[1].replace(/^\s*\d+\.\s*/, "").trim(), a: m[2].trim() }));
  };
  const warmupFor = (l, i) => {
    let picks = [];
    if (l.meta.warmup) picks = csv(l.meta.warmup).map((s) => coreAll.findIndex((x) => x.slug === s)).filter((k) => k >= 0 && k < i).map((k, n) => [k, (i + n) % 5]);
    else if (i >= 3) {
      picks = [[i - 3, i % 5]];
      const far = i - 20 >= 0 ? i - 20 : i - 8;
      if (far >= 0 && far !== i - 3) picks.push([far, (i + 2) % 5]);
    }
    const items = picks.map(([k, qi]) => { const src = coreAll[k]; const qs = questionsOf(src); const x = qs.length ? qs[qi % qs.length] : null; return x && { ...x, from: src }; }).filter(Boolean);
    if (!items.length) return "";
    return `<section class="warmup"><h2>${L.warmupTitle}</h2><p class="muted">${L.warmupNote}</p>${items.map((x) => `<details><summary>${enhanceInline(x.q)}</summary>${x.a}<p class="warm-from">${L.warmupFrom} <a href="${x.from.url}">${esc(x.from.meta.title)}</a></p></details>`).join("")}</section>`;
  };
  const enhanceInline = (s) => s.replace(/<\/?p>/g, "");

  // A content card: chip, title, summary, meta, arrow.
  const card = (l, { chip, chipIcon, meta } = {}) => `<li><a class="card" href="${l.url}">
  ${chip ? `<span class="chip">${chipIcon ? icon(chipIcon, "icon xs") : ""}${esc(chip)}</span>` : ""}
  <span class="card-title">${esc(l.meta.title)}</span>
  ${l.meta.summary ? `<span class="card-sum">${esc(l.meta.summary)}</span>` : ""}
  <span class="card-meta">${esc(meta || readTime(l.body))}<span class="go">${L.read} ${icon("arrow", "icon xs")}</span></span>
</a></li>`;

  const pageHead = (eyebrow, title, lead, extra = "") => `<header class="page-head">
  <p class="eyebrow">${eyebrow}</p>
  <h1>${title}</h1>
  ${lead ? `<p class="lead">${lead}</p>` : ""}${extra}
</header>`;

  // Hero illustration: the hypothetical drawdown example from Survive first (buy $100, sell $65, price later hits $150).
  const heroChart = `<figure class="hero-chart">
  <svg viewBox="0 0 440 270" role="img" aria-labelledby="hc-t hc-d">
    <title id="hc-t">${L.heroTitle}</title>
    <desc id="hc-d">${L.heroDesc}</desc>
    <defs><linearGradient id="hc-g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--loss)" stop-opacity=".18"/><stop offset="1" stop-color="var(--loss)" stop-opacity="0"/></linearGradient></defs>
    <g class="hc-grid"><line x1="20" x2="420" y1="62" y2="62"/><line x1="20" x2="420" y1="122" y2="122"/><line x1="20" x2="420" y1="182" y2="182"/><line x1="20" x2="420" y1="232" y2="232"/></g>
    <line class="hc-buy" x1="20" x2="420" y1="132" y2="132"/>
    <text class="hc-lab" x="418" y="150" text-anchor="end">${L.heroBought}</text>
    <path d="M30 132 L62 120 L92 140 L120 152 L146 178 L170 168 L196 204 L196 232 L30 232 Z" fill="url(#hc-g)"/>
    <path class="hc-line" d="M30 132 L62 120 L92 140 L120 152 L146 178 L170 168 L196 204"/>
    <path class="hc-after" d="M196 204 L224 186 L250 192 L280 160 L306 150 L334 116 L360 104 L386 80 L410 66"/>
    <circle class="hc-dot-loss" cx="196" cy="204" r="6"/>
    <circle class="hc-dot-gain" cx="410" cy="66" r="6"/>
    <g class="hc-tag loss"><rect x="126" y="214" width="140" height="44" rx="10"/><text x="140" y="233">${L.heroSold}</text><text class="big" x="140" y="251">−35%</text></g>
    <g class="hc-tag gain"><rect x="276" y="14" width="140" height="40" rx="10"/><text x="290" y="31">${L.heroLater}</text><text class="big" x="290" y="47">$150 ✓</text></g>
  </svg>
  <figcaption><span class="pill">${L.hypothetical}</span> ${L.heroCaption}</figcaption>
</figure>`;

  // Home
  {
    const h = read(oneFile("pages/home.md").file);
    const hf = oneFile("pages/home.md").fallback;
    const first = lessons[0];
    const latest = lessons.filter(isCore).slice(0, 3);
    const modsHtml = mods.map((m, i) => `<li><a class="step" href="/course/#${m.slug}">
    <span class="step-top"><span class="step-icon">${icon(modIcon(m.slug))}</span><span class="step-num">${L.step} ${i + 1}</span></span>
    <strong>${esc(m.title)}</strong><span class="step-sum">${esc(m.summary)}</span>
    <span class="step-count${lessonCount(m.slug) ? "" : " soon"}">${countLabel(lessonCount(m.slug))}</span>
  </a></li>`).join("");
    const mnote = (L.code === "es" && cfg.es?.marketToday?.note) || cfg.marketToday?.note || "";
    const market = cfg.marketToday?.enabled
      ? `<section class="band market"><span class="band-icon">${icon("calendar")}</span><div><h2>${L.marketToday}</h2><p><a href="/market-today/">${L.readToday}</a></p></div></section>`
      : `<section class="band market"><span class="band-icon">${icon("calendar")}</span><div><h2>${L.marketToday} <span class="pill soft">${L.comingSoon}</span></h2><p>${esc(mnote)}</p></div></section>`;
    const promises = L.promises.map(([ic, t, s]) => `<li><span class="p-icon">${icon(ic)}</span><div><strong>${t}</strong><span>${s}</span></div></li>`).join("");
    page("/", "", `
<section class="hero">
  <div class="hero-text">
    <p class="eyebrow">${L.eyebrowHome}</p>
    <h1>${esc(h.meta.title)}</h1>
    <div class="lead">${h.html}</div>
    <p class="cta"><a class="btn" href="${first?.url || "/course/"}">${L.startFirst} ${icon("arrow", "icon xs")}</a><a class="btn ghost" href="/course/">${L.seeCourse}</a></p>
  </div>
  ${heroChart}
</section>
<section class="promises"><ul>${promises}</ul></section>
<section class="block">
  <div class="block-head"><h2>${L.glance}</h2><a href="/course/">${L.allModules} ${icon("arrow", "icon xs")}</a></div>
  <ol class="steps">${modsHtml}</ol>
</section>
${latest.length ? `<section class="block"><div class="block-head"><h2>${L.startWith}</h2><a href="/course/">${L.seeAll} ${icon("arrow", "icon xs")}</a></div><ul class="cards${latest.length === 1 ? " solo" : ""}">${latest.map((l) => card(l, { chip: modOf(l.module)?.title, chipIcon: modIcon(l.module) })).join("")}</ul></section>` : ""}
${market}`, { wide: true, description: h.meta.description });
  }

  // Course
  {
    const total = lessons.filter(isCore).length;
    const moduleHtml = (m) => {
      const i = mods.indexOf(m);
      const ls = lessons.filter((l) => l.module === m.slug);
      const item = (l) => `<li class="lesson-row"${isFreePath(l.url, access) ? "" : " data-gated"}${isCore(l) ? ` data-lesson-row data-course-lesson data-module="${esc(m.slug)}" data-lesson-slug="${esc(l.slug)}"` : ""}><a href="${l.url}"><span class="l-num">${isCore(l) ? ls.filter(isCore).indexOf(l) + 1 : (l.meta.kind === "quiz" ? "?" : "≡")}</span><span class="l-body"><span class="l-title">${esc(l.meta.title)}</span><span class="l-meta">${readTime(l.body)}${l.meta.optional === "true" ? ` · <span class="opt-note">${L.optional}</span>` : ""}${walkFor(l) ? ` · ${L.guidedVersion}` : ""}${isFreePath(l.url, access) ? "" : `<span class="lock-note">${icon("lock", "icon xs")}${L.freeAccount}</span>`}</span></span>${icon("arrow", "icon sm")}</a>${isCore(l) ? `<button class="lesson-check" type="button" data-lesson-done data-lesson-check data-lesson-slug="${esc(l.slug)}" aria-label="${esc(L.markDoneLabel(l.meta.title))}"><span class="check-icon">${icon("check", "icon xs")}</span><span class="check-label">${L.markDone}</span></button>` : ""}</li>`;
      const list = ls.length
        ? groupLessons(m, ls).map((g) => `${g.name ? `<h3 class="lesson-group">${esc(secLabel(m, g.name))}</h3>` : ""}<ol class="lesson-list">${g.ls.map(item).join("")}</ol>`).join("")
        : `<p class="soon-note">${L.lessonsSoon}</p>`;
      const coreCount = ls.filter(isCore).length;
      return `<section class="module" id="${m.slug}">
  <div class="module-head"><span class="step-icon">${icon(modIcon(m.slug))}</span><div><p class="eyebrow">${L.moduleWord(i + 1)} · ${countLabel(coreCount)}</p><h2>${esc(m.title)}</h2><p class="module-sum">${esc(m.summary)}</p><div class="module-progress" data-module-progress data-module="${esc(m.slug)}" data-total="${coreCount}"><span data-module-progress-label>${L.complete(0, coreCount)}</span><span class="progress-track"><span data-module-progress-bar></span></span></div></div></div>
  ${list}
</section>`;
    };
    const sections = stages.length
      ? stages.map((st) => `<div class="stage"><header class="stage-head"><h2 class="stage-title">${esc(st.title)}</h2><p>${esc(st.summary)}</p></header>${st.modules.map((s) => mods.find((m) => m.slug === s)).filter(Boolean).map(moduleHtml).join("")}</div>`).join("")
      : mods.map(moduleHtml).join("");
    page("/course/", L.nav.course, `${pageHead(L.courseWord, L.courseTitle, L.courseLead(mods.length),
      `<ul class="facts"><li>${icon("book", "icon sm")}${L.modules(mods.length)}</li><li>${icon("pen", "icon sm")}${L.lessonsSoFar(total)}</li><li>${icon("check", "icon sm")}${ACCOUNTS ? L.freeAccount : L.freeNoSignup}</li></ul>`)}
<div class="course-progress" data-course-progress data-total="${total}"><div><strong data-course-progress-label>${L.lessonsComplete(0, total)}</strong><span data-progress-where>${L.savedDevice}</span></div><span class="progress-track"><span data-course-progress-bar></span></span><button type="button" class="text-button" data-reset-progress>${L.resetProgress}</button></div>
<div class="modules">${sections}</div>`, { wide: true });
    for (const l of lessons) {
      const mi = mods.findIndex((m) => m.slug === l.module);
      const ml = lessons.filter((x) => x.module === l.module);
      const idx = ml.indexOf(l);
      const next = ml[idx + 1];
      const ci = coreAll.indexOf(l);
      const needs = csv(l.meta.needs).map(lessonBySlug).filter(Boolean);
      const body = enhanceProse(l.html).replace(new RegExp(`(<h2[^>]*>(?:${L.checkHeadings.join("|")})</h2>)`), `$1<p class="attempt">${L.attempt}</p>`);
      const nm = next ? null : mods[mi + 1];
      const nf = nm && lessons.find((x) => x.module === nm.slug);
      page(l.url, l.meta.title, `
<article class="prose">
  <p class="crumb"><a href="/course/">${L.crumbCourse}</a> / <a href="/course/#${l.module}">${esc(L.crumbModule(mi + 1, mods[mi]?.title || l.module))}</a></p>
  <h1>${esc(l.meta.title)}</h1>
  <p class="meta-row"><span class="chip">${icon(modIcon(l.module), "icon xs")}${isCore(l) ? L.lessonN(ml.filter(isCore).indexOf(l) + 1) : KIND_LABEL[l.meta.kind] || L.extra}${l.meta.section ? ` · ${esc(secLabel(mods[mi] || {}, l.meta.section))}` : ""}</span>${l.meta.optional === "true" ? `<span class="chip soft">${L.optional}</span>` : ""}<span>${readTime(l.body)}</span>${l.meta.date ? `<span>${esc(fmtDate(l.meta.date))}</span>` : ""}</p>
  ${l.meta.summary ? `<p class="lead">${esc(l.meta.summary)}</p>` : ""}
  ${notice(l)}
  ${needs.length ? `<p class="needs"><strong>${L.youllUse}:</strong> ${needs.map((n) => `<a href="${n.url}">${esc(n.meta.title)}</a>`).join(" · ")}</p>` : ""}
  ${l.meta.video ? `<a class="steps-banner" href="${esc(l.meta.video)}" rel="noopener">${icon("arrow")}<span><strong>${L.watch}</strong></span>${icon("arrow", "icon sm")}</a>` : ""}
  ${walkFor(l) ? `<a class="steps-banner" href="${stepsUrl(l)}">${icon("list")}<span><strong>${L.guidedBanner}</strong><span>${L.guidedScreens(walkFor(l).parts.length, !!steps[l.slug])}</span></span>${icon("arrow", "icon sm")}</a>` : ""}
  ${isCore(l) ? `<div class="completion-row"><button class="completion-toggle" type="button" data-lesson-done data-lesson-slug="${esc(l.slug)}"><span class="check-icon">${icon("check", "icon xs")}</span><span class="completion-label">${L.markLesson}</span></button><span class="completion-note" data-progress-where>${L.savedDevice}</span></div>` : ""}
  ${isCore(l) ? warmupFor(l, ci) : ""}
  ${body}
  <nav class="pager">${next
      ? `<a class="pager-card" href="${next.url}"><span class="eyebrow">${L.nextLesson}</span><span class="pager-title">${esc(next.meta.title)}</span>${icon("arrow")}</a>`
      : (nf
        ? `<a class="pager-card" href="${nf.url}"><span class="eyebrow">${esc(L.nextModule(nm.title))}</span><span class="pager-title">${esc(nf.meta.title)}</span>${icon("arrow")}</a>`
        : `<a class="pager-card" href="/course/"><span class="eyebrow">${L.endCourse}</span><span class="pager-title">${L.backCourse}</span>${icon("arrow")}</a>`)}</nav>
</article>`, { description: l.meta.summary });
    }
  }

  // Step-by-step pages: one short screen at a time (all screens show stacked without JavaScript).
  for (const l of lessons.filter(isCore)) {
    const s = walkFor(l);
    if (!s) continue;
    const n = s.parts.length;
    const screens = s.parts.map((p, i) => `<section class="wstep" data-step="${i + 1}"${i ? " hidden" : ""}>${enhanceProse(marked.parse(p))}</section>`).join("");
    const art = s.meta.article && articles.find((a) => a.slug === s.meta.article);
    const done = `<div class="walk-done" hidden><p class="eyebrow">${L.keepGoing}</p><ul class="walk-links">
    <li><button class="completion-toggle" type="button" data-lesson-done data-lesson-slug="${esc(l.slug)}"><span class="check-icon">${icon("check", "icon xs")}</span><span class="completion-label">${L.markLesson}</span></button></li>
    <li><a href="${l.url}">${icon("book", "icon sm")}<span>${L.readFull}</span></a></li>
    ${art ? `<li><a href="/articles/${s.meta.article}/">${icon("pen", "icon sm")}<span>${L.readArticle} ${esc(art.meta.title)}</span></a></li>` : ""}
    <li><a href="/course/#${l.module}">${icon("list", "icon sm")}<span>${L.backToCourse}</span></a></li></ul></div>`;
    page(stepsUrl(l), s.meta.title || l.meta.title, `
<div class="walk prose" data-walk>
  <div class="walk-top"><a class="crumb" href="${l.url}">${icon("back", "icon xs")} ${L.fullLesson}</a><span class="walk-count" aria-live="polite">${L.stepOf(1, n)}</span></div>
  <div class="walk-bar" aria-hidden="true"><span data-walk-bar style="width:${100 / n}%"></span></div>
  ${screens}
  ${done}
  <nav class="walk-nav"><button type="button" class="btn ghost" data-walk-back>${icon("back", "icon xs")} ${L.back}</button><button type="button" class="btn" data-walk-next>${L.next} ${icon("arrow", "icon xs")}</button></nav>
</div>`, { description: s.meta.summary || l.meta.summary });
  }

  // Articles
  page("/articles/", L.articles, `${pageHead(L.articles, L.articlesTitle, L.articlesLead)}${
    articles.length
      ? `<ul class="cards">${articles.map((a) => card(a, { chip: fmtDate(a.meta.date), chipIcon: "pen" })).join("")}</ul>`
      : `<div class="empty"><span class="band-icon">${icon("pen")}</span><h2>${L.articlesEmptyTitle}</h2><p>${L.articlesEmpty}</p><p><a class="btn" href="${lessons[0]?.url || "/course/"}">${L.startFirst} ${icon("arrow", "icon xs")}</a></p></div>`}`, { wide: true });
  for (const a of articles) {
    page(a.url, a.meta.title, `<article class="prose"><p class="crumb"><a href="/articles/">${L.articles}</a></p><h1>${esc(a.meta.title)}</h1><p class="meta-row"><span>${esc(fmtDate(a.meta.date))}</span><span>${readTime(a.body)}</span></p>${a.meta.summary ? `<p class="lead">${esc(a.meta.summary)}</p>` : ""}${notice(a)}${enhanceProse(a.html)}<nav class="pager"><a class="pager-card" href="/articles/"><span class="eyebrow">${L.keepReading}</span><span class="pager-title">${L.allArticles}</span>${icon("arrow")}</a></nav></article>`, { description: a.meta.summary });
  }

  // Glossary: each "## Term" section becomes a card, grouped by first letter.
  {
    const gf = oneFile("glossary.md");
    const g = read(gf.file);
    const firstLetter = (t) => t.replace(/<[^>]+>/g, "").normalize("NFD").replace(/[̀-ͯ]/g, "")[0].toUpperCase();
    const terms = g.html.split(/<h2[^>]*>/).slice(1).map((chunk) => {
      const [term, def] = chunk.split("</h2>");
      return { term: term.trim(), def: def.trim(), id: idOf(term) };
    }).sort((a, b) => a.term.localeCompare(b.term, L.code));
    const letters = [...new Set(terms.map((t) => firstLetter(t.term)))];
    const seen = new Set();
    const cards = terms.map((t) => {
      const Lt = firstLetter(t.term);
      const first = !seen.has(Lt) && seen.add(Lt);
      return `<div class="g-card" id="${t.id}"${first ? ` data-letter="${Lt}"` : ""}>${first ? `<span class="g-anchor" id="letter-${Lt}"></span>` : ""}<dt><span class="g-l">${Lt}</span>${t.term}</dt><dd>${t.def}</dd></div>`;
    }).join("");
    page("/glossary/", L.glossary, `${pageHead(L.glossary, esc(g.meta.title), L.glossaryLead)}${notice(gf)}
<div class="g-tools">
  <label class="search">${icon("search", "icon sm")}<span class="sr">${L.searchGloss}</span><input type="search" placeholder="${esc(L.searchPh(terms.length))}" data-glossary-search autocomplete="off"></label>
  <nav class="az" aria-label="${esc(L.jump)}">${letters.map((x) => `<a href="#letter-${x}">${x}</a>`).join("")}</nav>
</div>
<dl class="g-cards">${cards}</dl><p class="muted g-none" hidden>${L.noTerm}</p>`, { wide: true });
  }

  // About: each "## Heading" section becomes a card; the "won't" list gets crosses instead of ticks.
  {
    const af = oneFile("pages/about.md");
    const a = read(af.file);
    const [intro, ...parts] = a.html.split(/<h2[^>]*>/);
    const blocks = parts.map((chunk) => {
      const [h, body] = chunk.split("</h2>");
      const plain = h.replace(/&#39;|’/g, "'");
      const kind = /won't|no hará|no vamos/i.test(plain) ? "neg" : /advice|asesoramiento|consejo/i.test(plain) ? "warn" : "";
      const ic = kind === "neg" ? "x" : /find|encontrar|encontrarás/i.test(plain) ? "check" : /source|example|fuentes|ejemplos/i.test(plain) ? "scale" : "info";
      return `<section class="about-card ${kind}"><span class="band-icon">${icon(ic)}</span><h2>${h}</h2>${body}</section>`;
    }).join("");
    page("/about/", L.about, `${pageHead(L.about, L.aboutTitle, "")}${notice(af)}<div class="about-intro lead">${intro}</div><div class="about-grid">${blocks}</div>`, { wide: true });
  }

  // Account: one page for sign-up, sign-in, progress, data download and deletion. The script in site.js fills it in.
  const A = L.acct;
  page("/account/", L.account, `${pageHead(L.account, L.accountTitle, "")}
<div class="account" data-account>
  <section class="acct-card" data-acct="loading"><p class="muted">${A.loading}</p></section>
  <section class="acct-card" data-acct="off" hidden><h2>${A.offTitle}</h2><p>${A.off}</p><p><a class="btn" href="/course/">${A.goCourse} ${icon("arrow", "icon xs")}</a></p></section>
  <section class="acct-card" data-acct="out" hidden>
    <h2>${A.outTitle}</h2>
    <p class="muted" data-acct-why>${A.why(access.freeModules.map((m) => esc(modOf(m)?.title || m)).join(", "))}</p>
    <form data-acct-start novalidate>
      <label class="field"><span>${A.email}</span><input type="email" name="email" autocomplete="email" required placeholder="you@example.com"></label>
      <label class="check"><input type="checkbox" name="updates"> <span>${A.updates}</span></label>
      <p class="fine">${A.fine} <a href="/privacy/">${A.privacyNotice}</a>.</p>
      <button class="btn" type="submit">${A.send} ${icon("arrow", "icon xs")}</button>
      <p class="form-msg" data-acct-msg role="status"></p>
    </form>
  </section>
  <section class="acct-card" data-acct="code" hidden>
    <h2>${A.checkTitle}</h2>
    <p class="muted">${A.sent} <strong data-acct-email></strong>. ${A.valid}</p>
    <form data-acct-verify novalidate>
      <label class="field"><span>${A.code}</span><input name="code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" required placeholder="123456"></label>
      <button class="btn" type="submit">${A.signInBtn} ${icon("arrow", "icon xs")}</button>
      <button class="text-button" type="button" data-acct-back>${A.other}</button>
      <p class="form-msg" data-acct-msg role="status"></p>
    </form>
  </section>
  <section class="acct-card" data-acct="in" hidden>
    <h2>${A.inTitle}</h2>
    <p class="muted">${A.as} <strong data-acct-email></strong></p>
    <div class="course-progress"><div><strong data-acct-progress>${A.lessonsDone}</strong><span data-acct-quiz></span></div></div>
    <p><a class="btn" href="/course/" data-acct-continue>${A.cont} ${icon("arrow", "icon xs")}</a></p>
    <label class="check"><input type="checkbox" data-acct-updates> <span>${A.updatesIn}</span></label>
    <h3>${A.yourData}</h3>
    <ul class="acct-actions">
      <li><a class="btn ghost" href="/api/account/" download>${A.download}</a></li>
      <li><button class="btn ghost" type="button" data-acct-logout>${A.signOut}</button></li>
      <li><button class="btn ghost danger" type="button" data-acct-delete>${A.del}</button></li>
    </ul>
    <p class="fine">${A.delNote} <a href="/privacy/">${A.privacyNotice}</a>.</p>
    <p class="form-msg" data-acct-msg role="status"></p>
  </section>
</div>`);

  // Privacy notice
  {
    const pf = oneFile("pages/privacy.md");
    const pv = read(pf.file);
    const who = cfg.privacy?.controller && cfg.privacy?.contactEmail
      ? L.privacyWho(esc(cfg.privacy.controller), esc(cfg.privacy.contactEmail))
      : L.privacyNoContact;
    pv.html = pv.html.replace(/<p>\{\{controller\}\}<\/p>/, `<p>${who}</p>`);
    page("/privacy/", L.privacy, `<article class="prose"><h1>${esc(pv.meta.title)}</h1>${pv.meta.date ? `<p class="meta-row"><span>${L.privacyUpdated} ${esc(fmtDate(pv.meta.date))}</span></p>` : ""}${notice(pf)}${enhanceProse(pv.html)}</article>`, { description: L.privacyDesc });
  }
  return { lessons: lessons.length, articles: articles.length, fallbacks: lessons.filter((l) => l.fallback).length };
}

const stats = {};
for (const lang of ["en", "es"]) stats[lang] = buildSite(lang);
L = STR.en;

// 404 + assets
page("/404-tmp/", "Page not found", `<div class="empty"><span class="band-icon">${icon("search")}</span><h1>Page not found</h1><p>That page doesn't exist, or it moved.</p><p><a class="btn" href="/">Go to the home page</a></p></div>`);
fs.renameSync(path.join(out, "404-tmp/index.html"), path.join(out, "404.html"));
fs.rmSync(path.join(out, "404-tmp"), { recursive: true });
for (const f of ["style.css", "site.js", "theme.js", "logo.jpg", "brand-logo.jpg"]) fs.copyFileSync(path.join(root, "src", f), path.join(out, f));
console.log(`Built EN ${stats.en.lessons} lesson(s) and ES ${stats.es.lessons} lesson(s) (${stats.es.fallbacks} not translated yet, shown in English) into dist/. Accounts ${ACCOUNTS ? "ON" : "off (env vars not set)"}.`);
