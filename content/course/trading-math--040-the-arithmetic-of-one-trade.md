---
title: "The arithmetic of one trade"
module: trading-math
order: 40
summary: Work out profit, loss, fees, break-even and position size for a single trade, step by step, with nothing hidden.
date: 2026-11-26
needs: averages-ratios-and-r-multiples
---

Before any trade, you should be able to do five sums on paper: how big, how much you make, how much you lose, what it costs and where you break even. None needs more than multiplication and division.

## Two words first

**Position size** is how much money (or how many units) you put into one trade.

**Break-even price** is the price at which you walk away with exactly what you started with, **after fees**.

## Step by step

> **Hypothetical example.** You have a $2,000 account and decide to risk 1%. A coin trades at **$2.00**. Your plan says the idea is wrong if the price drops to **$1.90**.

**1. Money at risk.** 1% of $2,000 = **$20**.

**2. Distance to the stop.** ($2.00 − $1.90) ÷ $2.00 = 5%.

**3. Position size.** $20 ÷ 5% = **$400** (200 units). If the stop is hit, you lose about $20.

**4. Target.** Aiming for 2R means making $40. That is 10% on $400, so a target of **$2.20**.

**5. Fees.** If the platform charges 0.1% per side, $400 costs $0.40 to open and about $0.44 to close. Total about **$0.84**, more than 4% of your $20 risk. Small per trade, large over a year.

<figure class="fig"><svg viewBox="0 0 320 160" role="img" aria-label="A trade ladder: target $2.20, entry $2.00, stop $1.90. Risk $20 on a $400 position, reward $40."><rect fill="var(--accent-soft)" x="100" y="22" width="90" height="72"/><rect fill="var(--loss-soft)" x="100" y="94" width="90" height="36"/><line class="guide" x1="40" y1="22" x2="300" y2="22"/><line class="guide" x1="40" y1="94" x2="300" y2="94"/><line class="guide" x1="40" y1="130" x2="300" y2="130"/><text class="t-gain" x="198" y="18">Target $2.20 (+$40)</text><text class="t" x="198" y="89">Entry $2.00</text><text class="t-loss" x="198" y="146">Stop $1.90 (−$20)</text><text class="t-gain" x="10" y="62">2R</text><text class="t-loss" x="10" y="116">1R</text><circle class="dot pulse" cx="145" cy="94" r="5"/></svg><figcaption>$400 position: risk $20, aim for $40. Hypothetical.</figcaption></figure>

## Profit and loss in one line

**Profit = (sell price − buy price) × units − fees**

Here: selling 200 units at $2.20 gives (0.20 × 200) = $40, minus $0.84 = **$39.16**.

<div class="calc" data-calc="breakeven">
  <p class="calc-row"><label>Entry price $<input data-in="entry" type="number" min="0" step="any" value="2" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Position size $<input data-in="size" type="number" min="0" step="any" value="400" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Fee per side <input data-in="fee" type="number" min="0" step="any" value="0.1" inputmode="decimal">%</label></p>
  <p class="calc-out">Round-trip fees: about <strong data-out="cost">$0.8</strong>. Break-even price: about <b data-out="be">$2.004</b> (the price must rise <span data-out="bepct">0.2%</span> just to cover fees).</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

## Leverage changes the size, not the sums

With leverage, your position is bigger than your own money, but the maths above is the same. The risk is the position size times the distance to your stop. Check that number first, not the margin you put up.

## Common mistakes

- Deciding position size from how much you "feel like" trading.
- Counting a profit before fees.
- Putting the stop where it feels comfortable instead of where the idea is wrong, then not adjusting the size.

## Go deeper

<details><summary>Slippage</summary><p>Your real fill can be a little worse than the price you saw, especially in fast or thin markets. Treat it as an extra cost, and allow for it when you set the stop.</p></details>

## Check yourself

<details><summary>1. Account $5,000, risk 2%. How much is at risk?</summary><p>2% of $5,000 = $100.</p></details>

<details><summary>2. Entry $50, stop $45, risk $100. Position size?</summary><p>Distance = 5 ÷ 50 = 10%. $100 ÷ 10% = $1,000.</p></details>

<details><summary>3. Buy 100 units at $3, sell at $3.30, fees $1 total. Profit?</summary><p>(0.30 × 100) − $1 = $29.</p></details>

<details><summary>4. Why must a price rise just to break even?</summary><p>Fees are paid on the way in and on the way out, so the price has to move enough to cover both.</p></details>

<details><summary>5. Does leverage change how much you can lose to your stop?</summary><p>The size of the position does. Check position size × distance to the stop.</p></details>

## Try it (no real money)

Take a real chart and pick an entry and stop. Do the five steps on paper and note the position size and break-even price.

**Key idea:** five simple sums (risk, distance, size, target, fees) tell you what a trade can cost before you place it.
