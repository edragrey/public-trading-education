---
title: Size your trade from your stop, not your gut
module: survive-first
order: 30
summary: How to work out how big a trade should be, using only three numbers, so a wrong trade costs exactly what you planned.
date: 2026-11-21
---

Most beginners pick a trade size by feel: "I'll put $500 in, that seems about right." This lesson replaces that feeling with a small sum you can do in your head.

## Two words first

**Position size** is how much money is in the trade: the total value of what you buy.

**Stop distance** is how far the price can move against you, from where you buy to your stop, before you get out. Usually written as a percentage.

## The rule

**Position size = the amount you'll risk ÷ stop distance**

That's it. You already chose the amount you'll risk in the 1% lesson. Your stop distance comes from the chart (the stops lesson). The position size is whatever falls out of the sum.

> **Hypothetical example.** The coin and the numbers are made up, but the arithmetic is exact. Fees are left out.

1. Your account is **$2,000**. You'll risk **1%**, so **$20**.
2. You want to buy a coin at **$50**. Your stop is at **$47.50**.
3. That's a **$2.50** drop, which is **5%** of $50.
4. Position size = $20 ÷ 5% = **$400**. That's 8 coins at $50.
5. If the stop is hit, 8 coins × $2.50 = **$20** lost. Exactly what you planned.

## Wider stop, smaller trade

The magic is that **the loss stays the same** whatever the stop distance. Only the size changes.

| Stop distance (hypothetical) | Position size for a $20 risk | Loss if stopped |
| --- | --- | --- |
| 2% | $1,000 | $20 |
| 5% | $400 | $20 |
| 10% | $200 | $20 |
| 20% | $100 | $20 |

A tight stop allows a bigger trade. A wide stop forces a smaller one. Either way, a wrong trade costs $20.

<div class="calc" data-calc="position-size">
  <p class="calc-row"><label>My account is $<input data-in="account" type="number" min="1" value="2000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>I'll risk <input data-in="risk" type="number" min="0.1" max="100" step="0.1" value="1" inputmode="decimal">%</label></p>
  <p class="calc-row"><label>I buy at $<input data-in="entry" type="number" min="0" step="any" value="50" inputmode="decimal"></label></p>
  <p class="calc-row"><label>My stop is at $<input data-in="stop" type="number" min="0" step="any" value="47.5" inputmode="decimal"></label></p>
  <p class="calc-out">I risk <strong data-out="loss">$20</strong>. My stop is <b data-out="dist">5%</b> away, so my position is <b data-out="size">$400</b> (about <b data-out="units">8</b> units).</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

## When the answer is "too big"

Sometimes the sum gives a position bigger than your whole account. With a $2,000 account, a $20 risk and a 0.5% stop, the sum says $4,000.

You have two honest choices: **take a smaller position** (and risk less than planned), or **skip the trade**. Borrowing to reach the number is leverage, and Survive first covers that separately, later. For now, if it doesn't fit, it doesn't fit.

## Why not just pick the size first?

Because then your stop gets chosen by your wallet instead of by the chart. People who pick "$500" first often place the stop wherever the loss feels bearable. The market doesn't care what feels bearable. Your stop should go where your idea is proven wrong, and the size should follow.

## Common mistakes

- Picking the position size first and putting the stop wherever it fits.
- Ignoring fees when working out the real loss at your stop.
- Not shrinking the trade when the stop is far away.

## Go deeper

<details><summary>Rounding down</summary><p>If the sum gives 47.8 units and you can only buy 47, round down. Rounding up risks slightly more than you planned.</p></details>

## Check yourself

<details><summary>1. You'll risk $30. Your stop is 3% below your entry. How big should the position be?</summary><p>$30 ÷ 3% = $1,000.</p></details>

<details><summary>2. You move your stop from 5% away to 10% away. What happens to your position size if your risk stays the same?</summary><p>It halves. Twice the stop distance means half the size, so the loss stays the same.</p></details>

<details><summary>3. The sum says $3,000 but your account is $2,000. What do you do?</summary><p>Take a smaller position, or skip the trade. Don't borrow to make the number fit.</p></details>

<details><summary>4. Account $4,000, risk 1%, entry $10, stop $9.50. How many units?</summary><p>$40 risk ÷ $0.50 = 80 units.</p></details>

<details><summary>5. Your stop is twice as far away. What happens to the correct size?</summary><p>It halves, because the loss per unit doubled.</p></details>

## Try it (no real money)

Pick any price chart. Choose an imaginary entry and a stop. Work out the stop distance as a percentage, then the position size for 1% of your account. Check it with the calculator above.

**Key idea:** Choose your risk, find your stop, and let the position size fall out of the sum. Never the other way round.
