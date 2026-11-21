---
lesson: what-happens-when-you-get-liquidated
article: leverage-isnt-what-wipes-you-out
title: Liquidation, step by step
summary: The liquidation lesson one small step at a time, with a few quick questions and a calculator. About 4 minutes.
---

# Liquidation, step by step

One small idea per screen, a few quick questions, and a calculator at the end. About **4 minutes**.

> **Hypothetical examples.** Every number here is made up, but the arithmetic is exact. Fees are left out unless we say so.

<!-- step -->

## Three words first

**Margin** is the money you put down to open a trade. Think of it as a deposit.

**Leverage** lets your trade be bigger than that deposit. The exchange lends you the rest.

**Liquidation** is when the exchange closes your trade for you, because your losses have nearly used up your deposit.

<!-- step -->

## Quick check

You put down **$100** at **10x** leverage. How big is your trade?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">$100</button>
<button type="button" data-opt="b">$1,000</button>
<button type="button" data-opt="c">$10</button>
<p class="quiz-why" hidden>$100 × 10 = <strong>$1,000</strong>. Your deposit is $100, but every price move hits the full $1,000.</p>
</div>

<!-- step -->

## What liquidation looks like

You put down **$100** at **10x**, so you hold **$1,000** of a coin.

The price falls **10%**. Your $1,000 is now worth **$900**.

You've lost **$100**. That's your whole deposit, so the exchange closes the trade. You're **liquidated**, even if the price bounces back a minute later.

<!-- step -->

## How close is it?

A rough rule: the price only has to move about **100% ÷ your leverage** against you.

| Leverage | Move that wipes your margin |
| --- | --- |
| 5x | about 20% |
| 10x | about 10% |
| 100x | about 1% |

In real life it's a little closer, because exchanges keep a small safety buffer and charge fees.

<!-- step -->

## Quick check

You use **20x**. Roughly how far does the price need to move against you?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">About 20%</button>
<button type="button" data-opt="b">About 5%</button>
<button type="button" data-opt="c">About 1%</button>
<p class="quiz-why" hidden>100 ÷ 20 = <strong>about 5%</strong>, and in practice a little less.</p>
</div>

<!-- step -->

## Same leverage, very different damage

Two traders, both with **$1,000**, both at **10x**. The price falls 10% and both get liquidated.

- **Trader A** put down **$100**. Position: $1,000. Loses **$100**.
- **Trader B** put down **all $1,000**. Position: $10,000. Loses **everything**.

<!-- step -->

## Quick check

Same leverage, same price drop. What made the difference?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">The leverage</button>
<button type="button" data-opt="b">How much money they put in</button>
<button type="button" data-opt="c">Luck</button>
<p class="quiz-why" hidden>The <strong>position size</strong>. The leverage was the same. Trader B's trade was ten times bigger.</p>
</div>

<!-- step -->

## What actually sets your loss

If your stop loss is hit, your loss is:

**position size × distance to your stop**

Try it:

<div class="calc" data-calc="stop-loss">
  <p class="calc-row"><label>Position size $<input data-in="size" type="number" min="0" value="200" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Stop is <input data-in="stop" type="number" min="0" max="100" step="0.1" value="5" inputmode="decimal">% away</label></p>
  <p class="calc-out">If the stop is hit, you lose about <strong data-out="loss">$10</strong>.</p>
</div>

Notice there's no leverage box. It doesn't change this number.

<!-- step -->

## So what does leverage change?

Take that **$200** position with a **5%** stop.

- With **no leverage**, you put in $200.
- With **5x**, you put in $40 of margin.

If the stop is hit, you lose about **$10 either way**. Leverage changed how much cash is tied up, not your risk.

<!-- step -->

## The one check

There's one thing leverage does change: **where your liquidation price sits.**

Your stop has to come **before** your liquidation price. If it doesn't, the exchange closes you out before your plan gets a chance.

<!-- step -->

## Quick check

Your stop is **5%** away. You use **25x**. Which comes first if the price falls?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">My stop</button>
<button type="button" data-opt="b">Liquidation</button>
<p class="quiz-why" hidden>At 25x, liquidation is only <strong>about 4%</strong> away (100 ÷ 25). That's before your 5% stop. Lower the leverage until liquidation sits well beyond the stop.</p>
</div>

<!-- step -->

## Put it all together

Change the numbers and see whether your stop or your liquidation price comes first.

<div class="calc" data-calc="liq-size">
  <p class="calc-row"><label>Account $<input data-in="account" type="number" min="1" value="1000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Risk <input data-in="risk" type="number" min="0.1" max="100" step="0.1" value="1" inputmode="decimal">% per trade</label></p>
  <p class="calc-row"><label>Stop <input data-in="stop" type="number" min="0.1" max="99" step="0.1" value="5" inputmode="decimal">% away</label></p>
  <p class="calc-row"><label>Leverage <input data-in="lev" type="number" min="1" max="200" step="1" value="5" inputmode="numeric">x</label></p>
  <p class="calc-out">Loss at stop: <strong data-out="loss">$10</strong>. Position: <b data-out="size">$200</b>. Margin: <b data-out="margin">$40</b>. Liquidation roughly <b data-out="liq">20%</b> away.</p>
  <p class="calc-verdict" data-out="verdict">Your stop comes first.</p>
</div>

<!-- step -->

## What can still go wrong

- **Stops can slip** in very fast moves. Leave a wide gap between your stop and your liquidation price.
- **Cross margin** lets a bad trade use your whole balance. Isolated margin only risks what you put in.
- **Fees** are charged on the full position, and many futures charge funding while you hold.
- **No stop means your liquidation price is your stop.**

<!-- step -->

## You've got it

**Leverage doesn't decide how much you lose. Your position size and your stop do, as long as your stop comes before your liquidation price.**

Before any trade, write down five things: **entry, stop, position size, loss at stop, and liquidation price.** If you can't fill in all five, the trade isn't ready.
