---
title: "Win rate isn't everything: expectancy"
module: survive-first
order: 60
summary: Why a strategy that wins most of the time can still lose money, and the one number that tells you whether it really works.
date: 2026-11-21
needs: think-in-probabilities, risk-and-reward
---

"This strategy wins 80% of the time!" is one of the most common lines on trading social media. It sounds great. On its own, it tells you almost nothing. This lesson shows why, and what to look at instead.

## Two words first

**Win rate** is the share of your trades that make money. 6 winners out of 10 trades is a 60% win rate.

**Expectancy** is what you make or lose **on average per trade**, over many trades. It combines how often you win with how much you win and lose.

## The sum

**Expectancy = (win rate × average win) − (loss rate × average loss)**

The loss rate is just 100% minus the win rate.

## Two hypothetical traders

> **Hypothetical example.** Both traders are made up, but the arithmetic is exact. Fees are left out.

**Trader A** wins **80%** of trades. Average win: **$10**. Average loss: **$50**.

- 0.8 × $10 = $8 in
- 0.2 × $50 = $10 out
- Expectancy: **−$2 per trade**. Over 100 trades, about **−$200**.

**Trader B** wins only **40%** of trades. Average win: **$30**. Average loss: **$10**.

- 0.4 × $30 = $12 in
- 0.6 × $10 = $6 out
- Expectancy: **+$6 per trade**. Over 100 trades, about **+$600**.

| | Win rate | Avg win | Avg loss | Per trade, on average |
| --- | --- | --- | --- | --- |
| Trader A | 80% | $10 | $50 | **−$2** |
| Trader B | 40% | $30 | $10 | **+$6** |

Trader A feels right most days and slowly loses money. Trader B is wrong most days and slowly makes it.

<div class="calc" data-calc="expectancy">
  <p class="calc-row"><label>I win <input data-in="win" type="number" min="0" max="100" step="1" value="40" inputmode="decimal">% of trades</label></p>
  <p class="calc-row"><label>My average win is $<input data-in="avgwin" type="number" min="0" step="any" value="30" inputmode="decimal"></label></p>
  <p class="calc-row"><label>My average loss is $<input data-in="avgloss" type="number" min="0" step="any" value="10" inputmode="decimal"></label></p>
  <p class="calc-out">On average I make <strong data-out="exp">$6</strong> per trade. Over 100 trades that's about <b data-out="hundred">$600</b>.</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

## Why high win rates are so tempting

Winning feels good, and losing feels bad. So it's natural to take profits quickly (lots of small wins) and hold losers hoping they come back (a few big losses). That's exactly Trader A's pattern. A stop (the stops lesson) and a planned target (the risk and reward lesson) are what stop it from creeping in.

## The honest small print

- **You need lots of trades.** Ten trades tell you very little. Expectancy only starts to mean something after 30, 50 or more, all written down honestly.
- **The past isn't a promise.** Even a good expectancy over 100 trades can change when the market changes.
- **Fees count.** Take them off your average win and add them to your average loss (the hidden costs lesson). A small positive expectancy can turn negative once you include them.

## Common mistakes

- Chasing a high win rate while ignoring how big the losses are.
- Judging expectancy from a handful of trades.
- Forgetting to include costs in the calculation.

## Go deeper

<details><summary>Expectancy in R</summary><p>Measure results in R (units of what you risked). Expectancy = (win rate × average win in R) - (loss rate × average loss in R). It lets you compare strategies with different sizes.</p></details>

## Check yourself

<details><summary>1. A strategy wins 90% of the time. Is it profitable?</summary><p>You can't tell. You also need the average win and the average loss. One large loss can wipe out many small wins.</p></details>

<details><summary>2. Win rate 50%, average win $20, average loss $10. What's the expectancy?</summary><p>(0.5 × $20) − (0.5 × $10) = $10 − $5 = +$5 per trade.</p></details>

<details><summary>3. Why isn't 10 trades enough to know your expectancy?</summary><p>Because luck dominates over a few trades. It takes many trades before the average settles down and means something.</p></details>

<details><summary>4. Win rate 35%, average win 3R, average loss 1R. Expectancy?</summary><p>0.35 × 3 - 0.65 × 1 = +0.40R.</p></details>

<details><summary>5. Win rate 80%, average win 0.2R, average loss 1R. Expectancy?</summary><p>0.8 × 0.2 - 0.2 × 1 = -0.04R, slightly negative despite winning most trades.</p></details>

## Try it (no real money)

If you've traded before, look back at your last 10 to 20 trades, even ones on paper. Count the wins and losses, and work out the average of each. Put them in the calculator. If you haven't traded, keep this lesson in mind for the journal lesson later.

**Key idea:** How often you win matters less than how much you win and lose. Expectancy puts the two together.
