---
lesson: leverage-in-plain-words
title: Leverage, step by step
summary: Margin, leverage and what a small move does to you, with a picture. About 3 minutes.
---

# Leverage, step by step

One small idea per screen. About **3 minutes**.

> **Hypothetical numbers.** The arithmetic is exact. Fees are left out.

<!-- step -->

## Two words

**Margin:** the money you put down to open a trade. A deposit.

**Leverage:** lets you open a trade bigger than that deposit. The exchange lends you the rest.

<figure class="fig"><svg viewBox="0 0 320 150" role="img" aria-label="With 10x leverage, $100 of margin controls a $1,000 position. A 10% fall in the position wipes out the margin."><text class="lbl" x="8" y="26">Your margin</text><rect class="bar-bid" x="8" y="32" width="22" height="22" rx="4"/><text class="t" x="38" y="49">$100</text><text class="lbl" x="8" y="82">Your position at 10x</text><rect class="bar-gold grow" x="8" y="88" width="300" height="22" rx="4"/><text class="t" x="16" y="104" fill="var(--ink)">$1,000</text><text class="t-loss" x="8" y="140">A 10% fall = −$100 = all of your margin</text></svg><figcaption>Leverage makes the trade bigger than your money.</figcaption></figure>

<!-- step -->

## Quick check

You put down **$200** at **3x**. How big is your position?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">$200</button>
<button type="button" data-opt="b">$600</button>
<button type="button" data-opt="c">$60</button>
<p class="quiz-why" hidden>$200 × 3 = <strong>$600</strong>.</p>
</div>

<!-- step -->

## It makes both directions bigger

You put down **$100** at **5x**, so your position is **$500**.

| The price moves | Your position | On your $100 |
| --- | --- | --- |
| up 4% | +$20 | **+20%** |
| down 4% | −$20 | **−20%** |
| down 20% | −$100 | **−100%** |

Leverage doesn't make you more right. It makes every move hit your margin harder.

<!-- step -->

## Quick check

At **10x**, the price moves **2% against you**. Roughly how much of your margin is gone?

<div class="quiz" data-answer="c">
<button type="button" data-opt="a">2%</button>
<button type="button" data-opt="b">10%</button>
<button type="button" data-opt="c">About 20%</button>
<p class="quiz-why" hidden>2% × 10 = about <strong>20%</strong>, before fees.</p>
</div>

<!-- step -->

## What it costs

- **Fees on the full position,** not just your margin.
- **Funding,** a small regular fee on many crypto futures.
- **Margin mode:** isolated risks only the margin you chose; cross can put your whole balance behind a bad trade.

<!-- step -->

## Should you use it?

While you're learning, this course suggests you don't. Leverage adds a new way to lose, getting closed out by the exchange, on top of everything else.

**Key idea:** Leverage changes the size of the swing, not the odds of being right.
