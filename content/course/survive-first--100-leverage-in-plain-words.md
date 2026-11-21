---
title: Leverage in plain words
module: survive-first
order: 100
section: Leverage
summary: What leverage and margin are, why they make gains and losses bigger at the same speed, and what they cost.
date: 2026-11-23
---

You'll see leverage everywhere in crypto: "10x", "50x", "100x" on every exchange's trading screen. This short lesson explains what it actually does, before the next one shows what happens when it goes wrong.

## Two words

- **Margin** is the money you put down to open a trade. Think of it as a deposit.
- **Leverage** lets you open a trade bigger than that deposit. The exchange lends you the rest.

At **5x**, $100 of margin opens a **$500 position**. At **10x**, the same $100 opens **$1,000**.

## It makes both directions bigger

> **Hypothetical example.** The numbers are made up, but the arithmetic is exact. Fees are left out.

You put down **$100** at **5x**, so your position is **$500**.

| The price moves | Your position | On your $100 |
| --- | --- | --- |
| up 4% | +$20 | **+20%** |
| down 4% | −$20 | **−20%** |
| down 20% | −$100 | **−100%, all of it** |

Leverage doesn't make you more right. It makes every move, good or bad, hit your margin harder. A small move against you becomes a big loss of your deposit.

## Where you meet it

Leverage usually comes with **futures** (often called "perps" in crypto) and **margin trading**. Buying a coin or a stock outright, with your own money, has no leverage: that's 1x.

## What it costs

- **Fees on the full position.** You usually pay trading fees on the $500, not on your $100.
- **Funding.** Many crypto futures charge or pay a small "funding" fee every few hours for as long as you hold.
- **Margin mode.** "Isolated" margin means only the margin you chose for this trade can be lost. "Cross" margin means your whole balance backs the trade, so a bad trade can eat into all of it. Check which one is switched on before you trade.

## Should you use it?

While you're learning, this course suggests you don't. Not because leverage is evil, but because it adds a new way to lose (getting closed out by the exchange) on top of everything else. The next lesson shows exactly how that works, and the one check that keeps it from surprising you.

## Check yourself

<details><summary>1. You put down $200 at 3x. How big is your position?</summary><p>$600 (200 × 3).</p></details>

<details><summary>2. At 10x, the price moves 2% against you. Roughly how much of your margin have you lost?</summary><p>About 20% (2% × 10), before fees.</p></details>

**Key idea:** Leverage makes your trade bigger than your money, so every move against you hits your margin harder. It changes the size of the swing, not the odds of being right.
