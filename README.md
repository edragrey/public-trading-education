# Public trading-education site

A small, fast static site for beginner trading education. Five pages: Home, Course, Articles, Glossary, About.
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

Modules are `start-here`, `how-markets-work`, `survive-first`, `read-the-market`, `build-a-system`, `the-traders-mind`, `thinking-in-probabilities`, `going-further` (listed in `site.config.json`). Use `order` in steps of 10 so new lessons can slot in between. A module with `sections` in `site.config.json` groups lessons by their `section:` frontmatter.

### Group lessons into sections

A module can list `"sections"` in `site.config.json` (for example `["The basics", "Leverage"]`). Put `section: Leverage` in a lesson's frontmatter; lessons without one go in the first section. Use `order` to keep the reading order (for example basics 1–9, leverage 10+).

### Step-by-step version of a lesson

Create `content/steps/<lesson-slug>.md` with `lesson: <lesson-slug>` (and optionally `article: <article-slug>`) in the frontmatter. Split screens with a line `<!-- step -->`. It's published at `<lesson url>steps/`, and the lesson page links to it automatically. Quick questions use:

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

Edit `content/glossary.md` (one `## Term` heading per word) and `content/pages/about.md`.

## Market today (later)

`content/market-today/` is reserved. Turn the home-page section on with `marketToday.enabled` in `site.config.json`.

## Content rules

Plain words. No predictions, no price levels or targets, no hype. Label made-up examples "hypothetical" and name sources for real data.
Every page footer says: educational, not financial advice.

## Build

`npm install && npm run build` writes the site to `dist/`. Vercel runs the same command.

## Look and feel

All colours, fonts and spacing are tokens at the top of `src/style.css` (dark mode follows the reader's device). Module icons are mapped by slug in `MODULE_ICONS` in `build.mjs`; a new module gets a book icon until you add one. The home-page chart illustrates lesson 1's hypothetical trade.
