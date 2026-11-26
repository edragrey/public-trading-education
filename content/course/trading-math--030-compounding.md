---
title: "Compounding: growth on growth"
module: trading-math
order: 30
summary: Why small steady gains build up, why big swings drag you down, and how to see both in your own numbers.
date: 2026-11-26
needs: percentages-and-percent-change
---

Compounding is the idea that gains (or losses) apply to a number that has **already changed**. It is the most powerful idea in money, and it works in both directions.

## Two words first

**Simple growth** adds the same amount each time. $100 growing $10 each month: $110, $120, $130.

**Compounding** adds a percentage of the **current** amount each time. $100 growing 10% each month: $110, $121, $133.10. Each step builds on the one before.

## The pattern

**Final amount = start × (1 + rate) ^ number of periods**

The "^" means "times itself that many times". You don't need to do this by hand. The calculator below does it.

> **Hypothetical example.** $1,000 at +2% a month for 12 months: it becomes about **$1,268**. Without compounding it would be $1,240. The gap is small at first and widens with time. This is a made-up steady rate, not a promise: real markets never move in a straight line.

<div class="calc" data-calc="compound">
  <p class="calc-row"><label>Start with $<input data-in="start" type="number" min="0" step="any" value="1000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Gain per period <input data-in="rate" type="number" step="any" value="2" inputmode="decimal">%</label></p>
  <p class="calc-row"><label>Number of periods <input data-in="n" type="number" min="1" max="600" step="1" value="12" inputmode="decimal"></label></p>
  <p class="calc-out">With compounding you end with <strong data-out="end">$1,268</strong>. Without it: <b data-out="simple">$1,240</b>.</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

Try a negative rate such as −2. Losses compound too.

## The other side: swings cost you

Two paths, both averaging +5% a period over two periods:

- Steady: +5%, +5%. $100 → $110.25.
- Wild: +50%, −40%. $100 → $150 → **$90**.

The average looks the same on paper and the results are very different. **Volatility drags compounding down.** This is another reason the course keeps stressing small, steady risk.

<figure class="fig"><svg viewBox="0 0 320 170" role="img" aria-label="Two paths from $100 over two periods. Steady +5% then +5% ends at $110. A swing of +50% then −40% ends at $90, although both average +5%."><line class="axis" x1="20" y1="130" x2="300" y2="130"/><line class="guide" x1="20" y1="100" x2="300" y2="100"/><text class="lbl" x="22" y="94">$100</text><path class="ln draw" d="M30 100 L160 90 L290 79"/><path class="ln ln-loss draw" d="M30 100 L160 30 L290 112"/><circle class="dot-acc" cx="290" cy="79" r="5"/><circle class="dot-loss" cx="290" cy="112" r="5"/><text class="t-gain" x="288" y="70" text-anchor="end">Steady: $110</text><text class="t-loss" x="288" y="132" text-anchor="end">Swing: $90</text><text class="lbl" x="160" y="22" text-anchor="middle">+50%</text><text class="lbl" x="30" y="152">start</text><text class="lbl" x="160" y="152" text-anchor="middle">after 1</text><text class="lbl" x="290" y="152" text-anchor="end">after 2</text></svg><figcaption>Same 5% average, very different ends. Hypothetical.</figcaption></figure>

## The honest warning

Compounding tables are popular on social media: "$100 into $1 million in a year". These assume the same big gain every period without a single bad month. Real results never look like that. Use compounding to understand why steady beats flashy, not to forecast.

## Common mistakes

- Planning around a smooth growth rate that markets don't deliver.
- Forgetting that losses compound as well.
- Taking bigger risks to speed things up, which usually does the opposite.

## Go deeper

<details><summary>The rule of 72</summary><p>Divide 72 by the percentage growth per period to estimate how long it takes to double. At 2% a month, 72 ÷ 2 = about 36 months. A rough rule, handy for sanity checks.</p></details>

## Check yourself

<details><summary>1. $100 grows 10% a year for 2 years with compounding. How much?</summary><p>$100 → $110 → $121.</p></details>

<details><summary>2. Is a 50% gain followed by a 50% loss a wash?</summary><p>No. $100 → $150 → $75. You are down 25%.</p></details>

<details><summary>3. Why do big swings hurt even if the average gain looks fine?</summary><p>Because each loss applies to a bigger number, and each gain starts from a smaller one. Volatility drags the result down.</p></details>

<details><summary>4. A site shows $100 turning into $1M in a year. What's wrong?</summary><p>It assumes the same huge gain every period with no bad periods, which real markets never give.</p></details>

<details><summary>5. At 3% a month, roughly how long to double?</summary><p>72 ÷ 3 = about 24 months.</p></details>

## Try it (no real money)

Use the calculator with a modest rate such as 1% and a long horizon. Then try −1%. See how both directions build.

**Key idea:** compounding rewards steady gains and punishes big swings, so protect what you have first.
