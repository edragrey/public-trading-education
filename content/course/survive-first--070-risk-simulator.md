---
title: "Risk simulator: what your numbers imply over many trades"
module: survive-first
order: 80
summary: Plug in a win rate, a reward-to-risk and a risk per trade to see the average result and a typical losing streak. The point is to see how much the numbers matter.
date: 2026-11-22
needs: losing-streaks-and-drawdowns, size-your-trade-from-your-stop
section: The basics
---

You've met win rate, reward-to-risk, expectancy and losing streaks one at a time. This calculator puts them together, so you can play with your own numbers and see what they imply.

## How to read it

- **Expectancy (in R)** is the average result per trade, measured in units of what you risk. 
- **Average account change** assumes every trade risks the same share of the account and results come out at exactly the average. Real results scatter around that average, sometimes a lot.
- **Typical longest losing streak** is a rough estimate of the longest run of losses you'd see across that many trades. It is a **typical** value, not a limit. Longer streaks happen.

<div class="calc" data-calc="risk-sim">
  <p class="calc-row"><label>Win rate <input data-in="win" type="number" min="1" max="99" step="1" value="45" inputmode="decimal">%</label></p>
  <p class="calc-row"><label>Average win is <input data-in="rr" type="number" min="0.1" max="20" step="0.1" value="2" inputmode="decimal"> times my average loss</label></p>
  <p class="calc-row"><label>I risk <input data-in="risk" type="number" min="0.1" max="20" step="0.1" value="1" inputmode="decimal">% per trade</label></p>
  <p class="calc-row"><label>over <input data-in="n" type="number" min="1" max="1000" step="1" value="100" inputmode="numeric"> trades</label></p>
  <p class="calc-out">Expectancy: <strong data-out="exp">+0.35R</strong> per trade. Average account change: <strong data-out="avg">+42%</strong>. A typical longest losing streak: about <b data-out="streak">8</b> trades in a row.</p>
</div>

## Things to try

1. **Raise the win rate, lower the reward.** Set win rate 70% and reward 0.5. Expectancy can go negative even though you "win most of the time".
2. **Win rarely, win big.** Set win rate 30% and reward 3. It can still work, and the losing streak gets longer. Could you stay calm through it?
3. **Double the risk per trade.** Change 1% to 2%. The average result grows, and so does the damage of the bad streak. Compare with the losing streak calculator.
4. **Make the edge zero or negative.** Set win rate 40% and reward 1. Costs make it worse. This is what "no edge" looks like.

## What the calculator can't tell you

- Your real win rate and reward are **unknown** until you have many trades. Early numbers are noisy.
- It ignores fees and slippage. Subtract them.
- It assumes trades are independent and all alike. Real markets aren't.
- Averages hide the path. You live through the path, with its dips.

> **Hypothetical example.** With a 45% win rate and a 2-to-1 reward, expectancy is 0.45 × 2 - 0.55 = +0.35R. With 1% risk that's roughly +0.35% per trade on average. But in a 100-trade run you will probably see a streak of seven or eight losses at some point.

## Common mistakes

- Treating the output as a forecast.
- Typing in a win rate you hope for, not one you measured.
- Forgetting costs.
- Choosing the risk % that gives the biggest number, ignoring the drawdowns.

## Go deeper

<details><summary>Why the streak estimate is rough</summary><p>The estimate comes from a simple maths rule: with n trades and a chance <em>q</em> of losing each one, the longest run of losses is typically around log(n) ÷ log(1/q). It's a good ballpark, and real runs vary around it.</p></details>

## Check yourself

<details><summary>1. Win rate 50%, reward twice the loss. Expectancy?</summary><p>0.5 × 2 - 0.5 = +0.5R.</p></details>

<details><summary>2. Win rate 70%, reward half the loss size (0.5). Expectancy?</summary><p>0.7 × 0.5 - 0.3 = +0.05R. A high win rate with small wins gives a thin edge, and costs can erase it.</p></details>

<details><summary>3. Why is the streak figure "typical" and not a maximum?</summary><p>Streaks are random. Longer ones than the typical happen.</p></details>

<details><summary>4. Why not trust a win rate from ten trades?</summary><p>Too few trades. The number is noisy and can be far from the true one.</p></details>

<details><summary>5. What does doubling risk per trade do to bad streaks?</summary><p>It makes the drawdown from the same streak much deeper.</p></details>

## Try it (no real money)

Use your own paper trading journal. Work out your real win rate and average reward-to-risk from at least 20 trades. Enter them above, and compare the typical streak with the longest one you actually had.

**Key idea:** Win rate, reward and risk work together. The same numbers give an average and a bumpy path, so choose a risk you can live through.
