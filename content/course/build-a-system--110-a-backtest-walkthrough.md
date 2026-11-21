---
title: "A backtest walkthrough: testing a rule on past data"
module: build-a-system
order: 110
summary: Step by step, test one simple rule on past prices, and learn why a good-looking backtest can still mislead.
date: 2026-11-21
---

A **backtest** applies your written rule to past prices to see how it would have done. It's the second of the three tests in the earlier lesson. Here's a worked example, with the traps.

> **All the numbers below are made up** to show the method. They aren't real results, and they don't suggest any strategy works.

## Step 1: write one rule exactly

> **Rule:** On the daily chart, buy when the price closes above its 50-day moving average. Place a stop 5% below entry. Sell when the price closes below the 50-day average or the stop is hit.

Everything has to be specific enough that another person gets the same trades.

## Step 2: choose the data and the period

- Use daily candles for one market.
- Choose a long enough period to include **up, down and sideways** phases. Many traders also split it: build the rule on the first part, then test on a part you haven't looked at.
- You can export price history from most charting platforms as a spreadsheet.

## Step 3: list every trade

Go through the chart one candle at a time (cover the right side). Record each trade: entry, exit, result in R (where 1R = the amount risked).

> **Hypothetical results, 12 trades:**
> +2.1R, -1R, -1R, +0.4R, -1R, +3.5R, -1R, -0.6R, +1.8R, -1R, -1R, +2.7R

## Step 4: add it up

- Wins: 5 of 12 (win rate about 42%).
- Total: 2.1 + 0.4 + 3.5 + 1.8 + 2.7 = +10.5R from wins, and -6.6R from losses.
- Net: **+3.9R**, average **+0.33R per trade** (expectancy).

Subtract costs. If fees and slippage average 0.1R per trade, expectancy drops to about **+0.23R**. If costs were 0.4R, it would be negative.

## Step 5: look at the shape, not just the total

- **Longest losing streak:** here, 3 in a row at the start and 2 later. Could you stay calm through that?
- **Largest drawdown:** the biggest fall from a peak in R.
- **Which trades made the profit?** Here, one +3.5R trade is a large share. If that one trade hadn't happened, the result would look quite different.

## The traps

- **Overfitting:** tweaking the rule until it fits the past perfectly (for example changing "50" to "47" because it looked better). It then fails on new data.
- **Too few trades:** 12 trades prove very little. Many dozens are better.
- **Hindsight:** you know how the story ends. Only take trades the rule would have taken, even the ugly ones.
- **Ignoring costs and slippage.**
- **One market, one period:** a rule that worked in one bull market may fail in the next.

## What to do next

A backtest that looks decent is **a reason to paper trade the rule, then trade very small**, not a reason to go big. The forward test in the earlier lesson is what tells you if it holds up.

## Common mistakes

- Changing the rule after seeing results.
- Counting only the best trades.
- Believing a backtest as proof.

## Go deeper

<details><summary>Out-of-sample testing</summary><p>Build and tune your rule on one block of data, then test it once, unchanged, on a separate block. If it only works on the first block, it was probably fit to that period.</p></details>

## Check yourself

<details><summary>1. Why must the rule be written exactly?</summary><p>So the trades are repeatable and you can't pick or ignore trades with hindsight.</p></details>

<details><summary>2. Expectancy: +3.9R over 12 trades. What's the average per trade?</summary><p>3.9 ÷ 12 = +0.325R.</p></details>

<details><summary>3. Why subtract costs?</summary><p>Fees and slippage can turn a small edge into a loss.</p></details>

<details><summary>4. What is overfitting?</summary><p>Tweaking a rule until it fits past data perfectly, so it fails on new data.</p></details>

<details><summary>5. What should a decent backtest lead to?</summary><p>Paper trading, then very small real trades. Not big size.</p></details>

## Try it (no real money)

Write one exact rule and backtest it on a year of daily candles, recording each trade in R. Calculate win rate, expectancy after an estimated cost, and the longest losing streak.

**Key idea:** A backtest shows how a rule would have behaved, not how it will. Keep it honest: exact rules, costs included, enough trades, and no tweaking until it looks good.
