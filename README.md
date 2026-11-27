# Public trading-education site

A small, fast static site for beginner trading education. Pages: Home, Course, Explain, Articles, Glossary, About, plus Account and Privacy.

**Explain** turns public transcripts/articles and available YouTube captions into plain-language concept breakdowns, with labelled claims and follow-up questions. It has an account-free sample; live AI explanations require server configuration. See [docs/explainer.md](docs/explainer.md) for activation, privacy and verification.

Lessons after the free module need a free account that saves progress. See [docs/accounts.md](docs/accounts.md) for how it works and how to switch it on. Which lessons are free is set in `access.config.js`.
This repo is public-only content. Never add positions, wallets, trades, journal notes, watchlists, keys, tokens or private desk URLs.

## Rename the site

Change `name` (and `tagline` if you like) in `site.config.json`. That's the only place the name lives.

## Add a lesson

Create `content/course/<module>--<NN>-<short-slug>.md`, for example
`content/course/read-the-market--01-what-moves-a-price.md`:

```md
---
title: What moves a price
module: read-the-market
order: 1
summary: One sentence shown on the course page.
date: 2026-11-26
---

Lesson text in markdown...
```

Modules are `start-here`, `how-markets-work`, `trading-math`, `how-markets-really-work`, `survive-first`, `read-the-market`, `build-a-system`, `the-traders-mind`, `going-further`, `finish-line` (capstone, completion page and a 20-question final exam, labelled not accredited) (three stages: Foundations, Skills, Mind and world) (listed in `site.config.json`). Use `order` in steps of 10 so new lessons can slot in between. A module with `sections` in `site.config.json` groups lessons by their `section:` frontmatter.

### Group lessons into sections

A module can list `"sections"` in `site.config.json` (for example `["The basics", "Leverage"]`). Put `section: Leverage` in a lesson's frontmatter; lessons without one go in the first section. Use `order` to keep the reading order (for example basics 1–9, leverage 10+).

### Step-by-step version of a lesson

The one-screen version of every lesson is built automatically from the full lesson text (split at its `##` headings), so it always matches. A curated step file below only adds extras to it: its quick questions and any figure the lesson does not already have. Create `content/steps/<lesson-slug>.md` with `lesson: <lesson-slug>` (and optionally `article: <article-slug>`) in the frontmatter. Split screens with a line `<!-- step -->`. It's published at `<lesson url>steps/`, and the lesson page links to it automatically. Quick questions use:

```html
<div class="quiz" data-answer="b">
<button type="button" data-opt="a">First answer</button>
<button type="button" data-opt="b">Second answer</button>
<p class="quiz-why" hidden>Why b is right.</p>
</div>
```

## Add an article

Create `content/articles/<short-slug>.md` with `title`, `summary` and `date` in the frontmatter. Newest shows first.

## Glossary and About

Edit `content/glossary.md` (one `## Term` heading per word), its Spanish counterpart and the matching canonical entry in `content/concepts.json`. The glossary includes personal understanding marks and course/video references. Follow [docs/transcript-learning.md](docs/transcript-learning.md) before every transcript breakdown; do not repeat familiar definitions by default. Edit `content/pages/about.md` for About.

## Market today (later)

`content/market-today/` is reserved. Turn the home-page section on with `marketToday.enabled` in `site.config.json`.

## Content rules

Plain words. No predictions, no price levels or targets, no hype. Label made-up examples "hypothetical" and name sources for real data.
Every page footer says: educational, not financial advice.

## Build

`npm install && npm run build` writes the site to `dist/`. Vercel runs the same command.

## Look and feel

All colours, fonts and spacing are tokens at the top of `src/style.css` (dark mode follows the reader's device). Module icons are mapped by slug in `MODULE_ICONS` in `build.mjs`; a new module gets a book icon until you add one (`trading-math` uses the `calc` icon). The home-page chart illustrates the hypothetical drawdown example from Survive first.


## Spanish version (`/es/`)

Spanish pages live in `content-es/` and mirror `content/`: same filename, same front matter (slugs, `order`, `module`), translated text. Put a Spanish lesson at `content-es/course/<same-filename>.md`, a Spanish step-by-step at `content-es/steps/<same-slug>.md`, and so on. Anything without a Spanish file falls back to English (the build reports how many). Progress is shared between languages because slugs are identical. Use Spain Spanish, plain words, US dollars.

## Figures and animations

Simple diagrams are inline SVG in a `<figure class="fig">` (see the existing ones in `content/steps/`). Use the classes in `src/style.css` (`.box`, `.bar-bid`, `.ln`, `.dot`, `.lbl`, `.t`…) so they follow the light and dark themes. Animations (`.travel`, `.grow`, `.draw`, `.pulse`, `.eat`) only run when the reader has not asked for reduced motion. Give every figure a `role="img"` and an `aria-label`.
