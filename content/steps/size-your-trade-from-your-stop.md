---
lesson: size-your-trade-from-your-stop
title: Position size, step by step
summary: How big should a trade be? One small step at a time, with quick questions and a calculator. About 4 minutes.
---

# Position size, step by step

One small idea per screen, a few quick questions, and a calculator at the end. About **4 minutes**.

> **Hypothetical examples.** Every number here is made up, but the arithmetic is exact. Fees are left out.

<!-- step -->

## The usual way (and why it hurts)

Most beginners pick a trade size by feel: "I'll put **$500** in."

Then they put the stop wherever the loss feels bearable. The problem: the market doesn't know what feels bearable to you.

<!-- step -->

## The careful way

Flip it round. Decide three things first:

1. **How much you'll lose** if you're wrong (lesson 2: about 1% of your account).
2. **Where your stop goes**: the price where your idea is wrong.
3. Then let the **position size** fall out of a small sum.

<!-- step -->

## The sum

**Position size = amount you'll risk ÷ stop distance**

Stop distance is how far it is from where you buy to your stop, as a percentage.

<!-- step -->

## An example

- Account: **$2,000**. Risk 1%: **$20**.
- Buy at **$50**. Stop at **$47.50**. That's a **5%** drop.
- Position size: $20 ÷ 5% = **$400**.

If the stop is hit, you lose **$20**. Exactly what you planned.

<!-- step -->

## Quick check

You'll risk **$30**. Your stop is **3%** away. How big is the position?

<div class="quiz" data-answer="c">
<button type="button" data-opt="a">$30</button>
<button type="button" data-opt="b">$90</button>
<button type="button" data-opt="c">$1,000</button>
<p class="quiz-why" hidden>$30 ÷ 3% = <strong>$1,000</strong>. If the price drops 3%, $1,000 loses $30.</p>
</div>

<!-- step -->

## Wider stop, smaller trade

Same $20 risk, different stops:

| Stop distance | Position size | Loss if stopped |
| --- | --- | --- |
| 2% | $1,000 | $20 |
| 5% | $400 | $20 |
| 10% | $200 | $20 |

The size changes. **The loss doesn't.**

<!-- step -->

## Quick check

You move your stop from **5%** away to **10%** away, and keep the same risk. What happens to your position?

<div class="quiz" data-answer="a">
<button type="button" data-opt="a">It halves</button>
<button type="button" data-opt="b">It doubles</button>
<button type="button" data-opt="c">It stays the same</button>
<p class="quiz-why" hidden>Twice the distance means <strong>half the size</strong>, so the loss at the stop stays the same.</p>
</div>

<!-- step -->

## When it doesn't fit

Sometimes the sum says a position bigger than your account. A $20 risk with a 0.5% stop says **$4,000**, but you only have $2,000.

Two honest choices: **take a smaller position**, or **skip the trade**.

<!-- step -->

## Quick check

The sum says **$3,000**. Your account is **$2,000**. What do you do?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">Borrow to make it fit</button>
<button type="button" data-opt="b">Go smaller or skip it</button>
<button type="button" data-opt="c">Move the stop closer so it fits</button>
<p class="quiz-why" hidden><strong>Go smaller or skip it.</strong> Moving the stop just to make the numbers work means your wallet chose the stop, not the chart.</p>
</div>

<!-- step -->

## Try it yourself

Change any number.

<div class="calc" data-calc="position-size">
  <p class="calc-row"><label>Account $<input data-in="account" type="number" min="1" value="2000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Risk <input data-in="risk" type="number" min="0.1" max="100" step="0.1" value="1" inputmode="decimal">%</label></p>
  <p class="calc-row"><label>Buy at $<input data-in="entry" type="number" min="0" step="any" value="50" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Stop at $<input data-in="stop" type="number" min="0" step="any" value="47.5" inputmode="decimal"></label></p>
  <p class="calc-out">Risk: <strong data-out="loss">$20</strong>. Stop: <b data-out="dist">5%</b> away. Position: <b data-out="size">$400</b> (about <b data-out="units">8</b> units).</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

<!-- step -->

## You've got it

**Choose your risk, find your stop, and let the position size fall out of the sum. Never the other way round.**

Next time you look at a chart, try it with a pretend trade before you'd ever click buy.
