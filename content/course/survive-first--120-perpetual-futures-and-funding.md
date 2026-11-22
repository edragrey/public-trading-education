---
title: "Perpetual futures: funding, margin and why they bite"
module: survive-first
order: 120
summary: Perpetual futures are the most common leveraged product in crypto. Plain-words guide to how they work, what funding is, and the costs and risks.
date: 2026-11-22
section: Leverage
---

You'll see "perps" everywhere in crypto. This lesson explains them without the jargon, so you can recognise the risks.

## What a perpetual future is

A **perpetual future** (a "perp") is a contract that follows the price of an asset and has **no expiry date**. You can go long or short (see the going long and short lesson) without owning the coin.

Because they're usually traded with leverage, small price moves become large gains or losses on your deposit.

## Margin

**Margin** is the money you put up to open the position.

- **Initial margin:** what you need to open it.
- **Maintenance margin:** the minimum you must keep. If your losses eat the margin down to that level, the exchange closes the position. That's **liquidation**, covered in the liquidation lesson.

> **Hypothetical example.** You put in $100 and use 10x leverage, so your position is $1,000. A 10% move against you means a $100 loss, which wipes out the margin. In practice the exchange closes you out *before* that, a bit earlier, because it needs a buffer.

## Isolated vs cross margin

- **Isolated margin:** only the margin you assigned to that position is at risk. The most you lose is that amount.
- **Cross margin:** your **whole account balance** backs the position. It's harder to liquidate, but one bad trade can drain everything.

Beginners are usually safer with isolated, because the loss is capped at what they chose.

## Funding

A perp can drift away from the real price. To keep it close, longs and shorts pay each other a small regular payment called the **funding rate**, often every few hours.

- **Positive funding:** longs pay shorts. Common when lots of traders are betting up.
- **Negative funding:** shorts pay longs.

It looks small. But on a leveraged position held for days, it adds up. Check the rate before holding.

> **Hypothetical example.** A position of $1,000 with funding of 0.01% every 8 hours costs about $0.10 per 8 hours, or about $0.30 a day. It's tiny at that rate, and much bigger if the rate is high or the position is large.

## Other costs and risks

- **Trading fees** on every open and close.
- **Spread and slippage**, especially in fast markets.
- **Liquidation fees.**
- **Exchange risk:** the platform can fail or freeze.
- **Auto-deleveraging:** in extreme moves, some exchanges may close winning positions to cover losses.

## A beginner-friendly approach

- Learn spot first.
- If you try perps, start with low leverage, isolated margin and a stop.
- Treat the liquidation price as a line you never want to approach.
- Check funding and fees before you open.

## Common mistakes

- Using high leverage because the position size looks small.
- Using cross margin without understanding it.
- Ignoring funding on long holds.
- Having no stop, and relying on liquidation to be the stop.

## Go deeper

<details><summary>Why leverage numbers mislead</summary><p>"10x" sounds modest. It means a move of roughly one tenth against you can wipe out the margin. Choosing leverage is really choosing how close your liquidation price is to your entry.</p></details>

## Check yourself

<details><summary>1. What makes a perp "perpetual"?</summary><p>It has no expiry date.</p></details>

<details><summary>2. Isolated margin: what's the most you can lose on that position?</summary><p>The margin assigned to it.</p></details>

<details><summary>3. What does positive funding mean?</summary><p>Longs pay shorts.</p></details>

<details><summary>4. What happens if losses eat your maintenance margin?</summary><p>The position is liquidated (closed by the exchange).</p></details>

<details><summary>5. Why is relying on liquidation as your stop a bad idea?</summary><p>You lose the entire margin, plus fees, instead of a planned small loss.</p></details>

## Try it (no real money)

Open the contract page of a perp on any exchange without trading. Find the funding rate, the maintenance margin, and the liquidation price at 3x, 10x and 20x for the same position. Write down the distance from entry to liquidation in each case.

**Key idea:** Perps follow a price without expiry and usually use leverage. Funding, fees and liquidation are the costs, so go slow and keep leverage low.
