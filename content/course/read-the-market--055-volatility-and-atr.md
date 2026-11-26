---
title: "Volatility and ATR: how far does it normally move?"
module: read-the-market
order: 55
section: The chart
summary: A simple way to measure how much a price normally moves in a day, and how to use that number to place a stop that isn't too tight or too far.
date: 2026-11-26
needs: stop-losses, how-to-read-a-candlestick
---

Some coins move 1% on a quiet day. Others move 10%. If you put the same stop on both, one will stop you out by noise and the other may never be tested. You need a measure of **how much a price normally moves**.

## Two words first

**Volatility** is how much and how fast a price moves. A volatile market has big swings; a calm one has small ones.

**ATR** (Average True Range) is a common measure of it: the **average size of a candle** over a recent period, usually 14. Charting tools show it as a line you can add. You do not need to calculate it by hand.

## What ATR tells you

> **Hypothetical example.** A coin trades at $100 and its 14-day ATR is $4. On an average day, it moves about $4, or 4%.

- A stop only **$2** away is within a normal day's move. You would be stopped out by noise.
- A stop **$8** away (2 × ATR) gives the price room to breathe.

<figure class="fig"><svg viewBox="0 0 320 150" role="img" aria-label="Two stops from a $100 entry. A $2 stop sits inside normal daily movement and is stopped by noise. A $8 stop at 2 times ATR sits outside it."><rect fill="var(--gold-soft)" x="30" y="48" width="260" height="44"/><line class="axis" x1="30" y1="70" x2="300" y2="70"/><line class="guide" x1="30" y1="80" x2="300" y2="80" style="stroke:var(--loss)"/><line class="guide" x1="30" y1="124" x2="300" y2="124" style="stroke:var(--accent)"/><text class="t" x="296" y="64" text-anchor="end">Entry $100</text><text class="lbl" x="36" y="44">Normal daily range (ATR $4)</text><text class="t-loss" x="296" y="76" text-anchor="end">$98: inside the noise</text><text class="t-gain" x="296" y="118" text-anchor="end">$92: 2 × ATR, room to breathe</text></svg><figcaption>The shaded band is a normal day's move. Hypothetical.</figcaption></figure>

## Using ATR to set a stop

A common approach is to place the stop a multiple of ATR from your entry, such as 1.5 or 2 times, instead of a random number.

> **Hypothetical example.** Entry $100, ATR $4. You choose a stop 2 × ATR = $8 below: **$92**. Your plan risks $40 on this trade. Position size = $40 ÷ $8 per unit = **5 units**.

Notice what happens to **size**. A bigger ATR means a wider stop, so for the same dollar risk you must hold **fewer units**. Volatile markets call for smaller positions.

| | ATR | Stop distance (2 × ATR) | Units for $40 risk |
| --- | --- | --- | --- |
| Calm coin | $1 | $2 | 20 |
| Wild coin | $4 | $8 | 5 |

## ATR also helps with

- **Trailing stops:** trail a few ATRs below the highest price.
- **Targets:** is a target 1 ATR away (likely today) or 10 ATRs away (a long shot)?
- **Comparing markets:** ATR as a percent of price shows which is wilder.

## The honest limits

- ATR measures the **past**. A big news event can break it.
- It says nothing about direction, only size of movement.
- Volatility comes in waves: quiet periods often end with a burst.

## Common mistakes

- Using the same fixed-dollar stop on every market.
- Widening the stop for volatility but not shrinking the position.
- Treating ATR as a forecast.

## Go deeper

<details><summary>True range</summary><p>The "true" in true range means it includes gaps: it takes the largest of the candle's high-low range, or the distance from the previous close to the high or low. That way overnight gaps count too.</p></details>

## Check yourself

<details><summary>1. What does ATR measure?</summary><p>The average size of a candle over a recent period: how much a price normally moves.</p></details>

<details><summary>2. ATR is $5. Where is a 2 × ATR stop for a buy at $100?</summary><p>$10 below: $90.</p></details>

<details><summary>3. A bigger ATR: wider or tighter stop?</summary><p>Wider, so you need a smaller position for the same dollar risk.</p></details>

<details><summary>4. Does ATR show direction?</summary><p>No. Only how much a price tends to move.</p></details>

<details><summary>5. Risk $60, stop distance $12. Units?</summary><p>$60 ÷ $12 = 5 units.</p></details>

## Try it (no real money)

Add ATR (14) to a chart of two different coins. Compare ATR as a percent of price and note which is wilder.

**Key idea:** ATR measures how much a price normally moves, so stops are sized to the market and not guessed.
