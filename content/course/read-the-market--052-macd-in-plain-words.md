---
title: "MACD, in plain words"
module: read-the-market
order: 52
summary: The MACD compares a fast and a slow moving average to show whether momentum is building or fading. Here is how to read it without the jargon.
date: 2026-11-26
section: The chart
needs: moving-averages, momentum-and-rsi
---

You already know a moving average smooths price. The **MACD** (say "mack-dee") uses two of them to show whether price is speeding up or slowing down. It's drawn under the chart, like the RSI.

## Two words first

- **Fast average:** reacts quickly to recent prices (usually the last 12 candles).
- **Slow average:** reacts slowly (usually the last 26 candles).

## What it is made of

1. **The MACD line:** the fast average minus the slow average. When price has been rising, the fast one sits above the slow one, so the line is above zero. When price has been falling, it's below zero.
2. **The signal line:** a smoothed version of the MACD line (usually 9 candles). It's slower, so the MACD line crosses it from time to time.
3. **The histogram:** the little bars showing the gap between the MACD line and the signal line. Bars growing means momentum is building; bars shrinking means it's fading.

> **Hypothetical example.** A coin has been climbing. The fast average is $104 and the slow average is $100, so the MACD line reads +4. A week later the climb slows: fast $105, slow $103, MACD +2. Price is still rising, but the MACD is falling. Momentum is fading even though the price hasn't turned yet.

## How people read it

- **Above or below zero:** above zero means the recent trend is up; below zero, down.
- **Crossovers:** the MACD line crossing above the signal line is read as momentum turning up; crossing below, turning down.
- **Divergence:** price makes a new high but the MACD makes a lower high. Like the RSI, it hints the push is weakening.

## The honest limits

- The MACD is built from moving averages, so it **lags**. By the time it crosses, the move has already started.
- In a sideways range it crosses back and forth again and again, giving many false signals.
- It adds no new information beyond price. It's another view of the same history.

## Common mistakes

- Buying every upward crossover without checking the trend or placing a stop.
- Stacking MACD, RSI and a moving average and calling it three confirmations. They are all made from price.
- Using it in a choppy range, where it whipsaws.

## Go deeper

<details><summary>Why "12, 26, 9"?</summary><p>They're just the traditional settings from the 1970s. They aren't magic numbers. Changing them changes how fast the lines react, but not the idea. Don't spend days optimising them.</p></details>

<details><summary>Exponential averages</summary><p>The MACD uses a version of the moving average that gives more weight to recent candles, called an <em>exponential</em> average. It reacts a little faster than the simple average from the moving averages lesson.</p></details>

## Check yourself

<details><summary>1. What does the MACD line measure?</summary><p>The gap between a fast and a slow moving average. Above zero means the fast one is above the slow one.</p></details>

<details><summary>2. What does a shrinking histogram suggest?</summary><p>Momentum is fading, even if price is still moving the same way.</p></details>

<details><summary>3. Why does the MACD give false signals in a range?</summary><p>Price drifts sideways, so the two averages keep crossing without a real trend behind them.</p></details>

<details><summary>4. Is MACD plus RSI plus a moving average three independent confirmations?</summary><p>No. All three are calculated from the same price history.</p></details>

<details><summary>5. What should come before any MACD crossover trade?</summary><p>A view of the bigger trend and a planned stop.</p></details>

## Try it (no real money)

Add the MACD to a chart. Mark five crossovers. For each, write down what price did over the next ten candles and whether the market was trending or ranging at the time. Count how many worked in each condition.

**Key idea:** The MACD shows whether momentum is building or fading by comparing a fast and a slow average. It lags, it fails in ranges, and it's context, not a command.
