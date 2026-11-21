---
lesson: win-rate-and-expectancy
title: Expectancy, step by step
summary: Why winning often isn't the same as making money. One small step at a time, with quick questions and a calculator. About 4 minutes.
---

# Expectancy, step by step

One small idea per screen, a few quick questions, and a calculator at the end. About **4 minutes**.

> **Hypothetical examples.** Every number here is made up, but the arithmetic is exact. Fees are left out.

<!-- step -->

## "It wins 80% of the time!"

You'll see this line everywhere. It sounds like a great strategy.

But it only tells you **how often** it wins. Not **how much**.

<!-- step -->

## Two words

**Win rate:** the share of trades that make money.

**Expectancy:** what you make or lose **on average per trade**, over many trades.

<!-- step -->

## Meet Trader A

Wins **80%** of the time. Nice.

- Average win: **$10**
- Average loss: **$50**

Out of 10 trades: 8 wins × $10 = **$80**. 2 losses × $50 = **$100**.

<!-- step -->

## Quick check

After those 10 trades, where is Trader A?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">Up $80</button>
<button type="button" data-opt="b">Down $20</button>
<button type="button" data-opt="c">Exactly even</button>
<p class="quiz-why" hidden>$80 in, $100 out: <strong>down $20</strong>. That's −$2 per trade, even with an 80% win rate.</p>
</div>

<!-- step -->

## Meet Trader B

Wins only **40%** of the time.

- Average win: **$30**
- Average loss: **$10**

Out of 10 trades: 4 wins × $30 = **$120**. 6 losses × $10 = **$60**.

<!-- step -->

## Quick check

After those 10 trades, where is Trader B?

<div class="quiz" data-answer="a">
<button type="button" data-opt="a">Up $60</button>
<button type="button" data-opt="b">Down $60</button>
<button type="button" data-opt="c">Up $120</button>
<p class="quiz-why" hidden>$120 in, $60 out: <strong>up $60</strong>. That's +$6 per trade, while being wrong most of the time.</p>
</div>

<!-- step -->

## The sum

**Expectancy = (win rate × average win) − (loss rate × average loss)**

Trader A: (0.8 × $10) − (0.2 × $50) = **−$2**

Trader B: (0.4 × $30) − (0.6 × $10) = **+$6**

<!-- step -->

## Why Trader A happens

Winning feels good, so it's tempting to grab small profits fast. Losing feels bad, so it's tempting to hold losers and hope.

That makes lots of small wins and a few big losses. A **stop** and a **target** chosen in advance keep it in check.

<!-- step -->

## Quick check

A strategy wins **90%** of the time. Is it profitable?

<div class="quiz" data-answer="c">
<button type="button" data-opt="a">Yes, clearly</button>
<button type="button" data-opt="b">No, clearly</button>
<button type="button" data-opt="c">Can't tell yet</button>
<p class="quiz-why" hidden><strong>Can't tell.</strong> You also need the average win and the average loss. One big loss can wipe out nine small wins.</p>
</div>

<!-- step -->

## Try it yourself

<div class="calc" data-calc="expectancy">
  <p class="calc-row"><label>Win <input data-in="win" type="number" min="0" max="100" step="1" value="80" inputmode="decimal">% of trades</label></p>
  <p class="calc-row"><label>Average win $<input data-in="avgwin" type="number" min="0" step="any" value="10" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Average loss $<input data-in="avgloss" type="number" min="0" step="any" value="50" inputmode="decimal"></label></p>
  <p class="calc-out">On average: <strong data-out="exp">−$2</strong> per trade. Over 100 trades: <b data-out="hundred">−$200</b>.</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

<!-- step -->

## You've got it

**How often you win matters less than how much you win and lose. Expectancy puts the two together.**

One more thing: you need many trades, honestly written down, before your own expectancy means much. Ten isn't enough.
