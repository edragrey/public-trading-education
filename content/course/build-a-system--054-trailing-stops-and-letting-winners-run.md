---
title: "Trailing stops and letting winners run"
module: build-a-system
order: 54
summary: How a trailing stop follows price up, the honest trade-offs of different ways to trail it, and why one big winner often pays for many small losses.
date: 2026-11-26
needs: a-plan-for-taking-profits
---

Cutting losses is half of trading. The other half is letting your good trades grow. A trailing stop is the usual tool for that.

## Two words first

A **trailing stop** is a stop that moves **up** behind the price as it rises, and never moves back down.

**Letting a winner run** means staying in a winning trade while it keeps going, instead of selling at the first small gain.

## How it works

> **Hypothetical example.** You buy at $100 with a stop at $95. Price rises to $110, and you move the stop up to $104. It rises to $125, and you move the stop to $118. Then it falls and hits $118. You sell there with a gain of $18 per unit, which is more than 3R, even though you did not sell at the top.

The stop only ever goes up. If price turns, you are out with most of the move.

## Ways to trail

- **Under swing lows:** move the stop below each new higher low. It follows the structure of the trend (see the market structure lesson).
- **A set distance:** keep the stop a fixed amount or percent below the highest price so far.
- **A moving average:** exit when price closes below it.
- **A volatility distance:** keep the stop a few times the typical daily range below the high (the volatility lesson covers this).

Whichever you pick, decide it in advance.

## The trade-off

- A **tight** trail keeps more of the gain but gets you stopped out by normal wiggles.
- A **wide** trail lets the trend breathe but gives back more when it ends.

No setting avoids both. Letting winners run means accepting that you will **give back some profit** at the end.

## Why it matters for the maths

Many good systems win less than half the time. They stay profitable because the average win is much larger than the average loss. Trailing stops are one way those big wins happen, and the expectancy lesson shows why they matter.

## Common mistakes

- Trailing so tightly that every normal dip stops you out.
- Moving the stop down "to give it room". It only moves up.
- Not deciding the trailing rule until you are already in profit.
- Judging a trail by one trade instead of many.

## Go deeper

<details><summary>Why you will always give some back</summary><p>A trailing stop only fires after price has already fallen. So you will never sell at the exact top. The cost of staying in a big move is giving back a slice at the end.</p></details>

## Check yourself

<details><summary>1. A trailing stop moves which way?</summary><p>Only in your favour: up for a buy, never back down.</p></details>

<details><summary>2. Name two ways to set a trailing stop.</summary><p>For example under swing lows, a fixed distance below the high, a moving average, or a volatility distance.</p></details>

<details><summary>3. What does a tight trail cost you?</summary><p>You get stopped out by normal wiggles and miss bigger moves.</p></details>

<details><summary>4. What does a wide trail cost you?</summary><p>You give back more profit when the trend ends.</p></details>

<details><summary>5. Why can a 40% win rate still be profitable?</summary><p>If the average win is much larger than the average loss, which letting winners run helps create.</p></details>

## Try it (no real money)

Open a past chart of an uptrend. Mark where a stop under each swing low would have sat, and see where you would have exited.

**Key idea:** a trailing stop lets winners grow while protecting gains, and the price is giving some back at the end.
