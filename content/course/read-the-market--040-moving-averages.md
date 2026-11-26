---
title: "Moving averages: smoothing out the noise"
module: read-the-market
order: 40
summary: A moving average turns jumpy prices into one smooth line. What it shows, what it can't, and why it always lags.
date: 2026-11-21
section: The chart
needs: market-structure
---

Candles are noisy. A **moving average (MA)** is a line that smooths them so the direction is easier to see.

## How it's made

Take the closing price of the last N candles, average them, and plot the result. Move forward one candle and do it again.

> **Hypothetical example.** A 5-day moving average with closes of $10, $11, $12, $11, $13 is (10 + 11 + 12 + 11 + 13) ÷ 5 = **$11.40**. Tomorrow the oldest close drops out and the newest comes in.

N is the **period**. A 20-period MA on a daily chart uses the last 20 days.

## Two common kinds

- **SMA (simple):** every candle counts equally.
- **EMA (exponential):** recent candles count more, so it reacts faster.

## What it tells you

- **Direction:** a rising line suggests prices have been trending up; a falling one down.
- **Price vs the line:** price above a long MA means it has been strong lately; below, weak.
- **Dynamic support/resistance:** price sometimes bounces near an MA. It's an area to watch, not a rule.
- **Crossovers:** when a fast MA crosses a slow one, some traders read it as a change in momentum.

## The big limitation: it lags

A moving average is built **only from past prices**, so it always arrives late. In a strong trend that's fine. In a sideways market, price keeps crossing it, and each cross is a false signal. Shorter periods are twitchier; longer ones are slower.

There's no "best" setting. Tools that look perfect on past data are often tuned to it.

## Common mistakes

- Thinking a crossover predicts the future.
- Stacking lots of averages until something lines up.
- Using one in a choppy range.
- Changing the period after a loss to "fix" it.

## Go deeper

<details><summary>Why 50 and 200 are watched</summary><p>The 50- and 200-day averages are widely followed, so many people react around them. That attention is part of why they sometimes matter. It's popularity, not magic.</p></details>

## Check yourself

<details><summary>1. How do you calculate a 3-period average of closes $9, $12, $15?</summary><p>(9 + 12 + 15) ÷ 3 = $12.</p></details>

<details><summary>2. How does an EMA differ from an SMA?</summary><p>It gives more weight to recent candles, so it reacts faster.</p></details>

<details><summary>3. Why does a moving average lag?</summary><p>It's built from past prices only.</p></details>

<details><summary>4. Where do moving averages work worst?</summary><p>Choppy, sideways markets, where price keeps crossing the line.</p></details>

<details><summary>5. Does a crossover predict the next move?</summary><p>No. It describes what has already happened.</p></details>

## Try it (no real money)

Add a 20 and a 50 moving average to a daily chart. Mark each crossover in the last year. For each, note whether the following month was trending or choppy.

**Key idea:** A moving average smooths past prices into a line. It helps you see direction, and it always lags.
