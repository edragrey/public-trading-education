---
lesson: the-hidden-costs
title: The hidden costs, step by step
summary: Fees, spread, slippage and funding, with a picture and a calculator. About 4 minutes.
---

# The hidden costs, step by step

One small idea per screen, with a calculator at the end. About **4 minutes**.

> **Hypothetical numbers.** The fee rate is made up but typical.

<!-- step -->

## Four costs

**Trading fee:** what the exchange charges you to buy or sell, often about 0.1%.

**Spread:** the gap between bid and ask. Buy and sell straight away and you lose it.

**Slippage:** the gap between the price you expected and the price you got.

**Funding:** a regular fee on many crypto perpetual futures while you hold a leveraged position.

<figure class="fig"><svg viewBox="0 0 320 130" role="img" aria-label="One round trip pays four costs: a fee to get in, the spread, slippage and a fee to get out."><text class="t" x="8" y="20">One round trip, before the price moves</text><rect class="bar-neutral" x="8" y="34" width="50" height="30" rx="4"/><text class="lbl" x="33" y="82" text-anchor="middle">Fee in</text><rect class="bar-gold" x="58" y="34" width="76" height="30" rx="4"/><text class="lbl" x="96" y="82" text-anchor="middle">Spread</text><rect class="bar-ask" x="134" y="34" width="96" height="30" rx="4"/><text class="lbl" x="182" y="82" text-anchor="middle">Slippage</text><rect class="bar-neutral" x="230" y="34" width="82" height="30" rx="4"/><text class="lbl" x="271" y="82" text-anchor="middle">Fee out</text><text class="t-loss" x="160" y="116" text-anchor="middle">You start the trade already behind</text></svg><figcaption>Not to scale. Four small costs add up.</figcaption></figure>

<!-- step -->

## A round trip costs twice

You pay a fee when you buy **and** when you sell.

A **$1,000** trade at **0.1%** costs about **$1** to open and **$1** to close: **$2** for one round trip.

If you risk **$20** per trade, fees are already **10%** of your risk.

<!-- step -->

## Quick check

A $1,000 trade, 0.1% fee each way. About how much is one round trip?

<div class="quiz" data-answer="c">
<button type="button" data-opt="a">$1</button>
<button type="button" data-opt="b">$0.20</button>
<button type="button" data-opt="c">$2</button>
<p class="quiz-why" hidden>$1 to open plus $1 to close is <strong>$2</strong>.</p>
</div>

<!-- step -->

## Try your own numbers

<div class="calc" data-calc="fees">
  <p class="calc-row"><label>My trades are about $<input data-in="size" type="number" min="0" step="any" value="1000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>The fee is <input data-in="fee" type="number" min="0" max="5" step="0.01" value="0.1" inputmode="decimal">% each way</label></p>
  <p class="calc-row"><label>I make <input data-in="n" type="number" min="0" step="1" value="50" inputmode="numeric"> round trips a month</label></p>
  <p class="calc-row"><label>My account is $<input data-in="account" type="number" min="1" step="any" value="2000" inputmode="decimal"></label></p>
  <p class="calc-out">Fees cost me about <strong data-out="month">$100</strong> a month. That's <b data-out="pct">5%</b> of my account.</p>
</div>

<!-- step -->

## Leverage makes fees bigger

With leverage, fees are charged on the **whole position**. A $100 margin at 10x is a $1,000 position, so the fee feels like 1% of your own money instead of 0.1%.

<!-- step -->

## Keep costs down

- **Trade less.** Fewer, better trades is the simplest cut.
- **Check the fee page,** especially maker and taker rates.
- **Avoid thin markets,** where spread and slippage bite.

**Key idea:** Every trade has a cost, even the ones that go nowhere. Count costs before you count profits.
