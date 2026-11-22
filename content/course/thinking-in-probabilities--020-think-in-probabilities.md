---
title: "Think in probabilities"
module: thinking-in-probabilities
order: 20
summary: One trade tells you almost nothing. A pattern with an edge only shows itself over many trades, like a casino's advantage.
date: 2026-11-22
---

A **probability** is how likely something is, such as "this setup works about 4 times in 10". An **edge** is a small, repeatable tilt in your favour: over many trades, your wins bring in more than your losses cost.

## The casino picture

A casino doesn't know who will win the next hand. It doesn't need to. The odds are slightly in its favour, so over thousands of hands it comes out ahead. A losing hand doesn't make it panic, because one hand is a tiny part of a long series.

Trading can work the same way **if you have an edge** and you take the trades the edge says to take.

## Why one trade is almost meaningless

> **Hypothetical example.** A setup that wins 40% of the time and pays 2 for every 1 risked. Over 10 trades you might get 2 wins, or 6. Both are normal. Only over many trades does the 40% show up.

Judging the setup by your last three trades is like judging a casino by one hand.

## What you can and can't know

- You **can** know your rules, your risk, your costs and your history.
- You **can't** know whether *this* trade will win.

That's fine. You don't need to know the next result to do well over a series, as long as your risk is small enough to survive the bad stretches.

## An edge is not a prediction

An edge says "over many trades, this tilts my way". It doesn't say "this one will work". Treating it as a promise is how people get hurt.

Try the risk simulator below to see how the same edge produces very different short runs.

<div class="calc" data-calc="risk-sim">
  <p class="calc-row"><label>Win rate <input data-in="win" type="number" min="1" max="99" step="1" value="40" inputmode="decimal">%</label></p>
  <p class="calc-row"><label>Average win is <input data-in="rr" type="number" min="0.1" max="20" step="0.1" value="2" inputmode="decimal"> times my average loss</label></p>
  <p class="calc-row"><label>I risk <input data-in="risk" type="number" min="0.1" max="20" step="0.1" value="1" inputmode="decimal">% per trade</label></p>
  <p class="calc-row"><label>over <input data-in="n" type="number" min="1" max="1000" step="1" value="100" inputmode="numeric"> trades</label></p>
  <p class="calc-out">Expectancy: <strong data-out="exp">+0.2R</strong> per trade. Average account change: <strong data-out="avg">+20%</strong>. A typical longest losing streak: about <b data-out="streak">8</b> trades in a row.</p>
</div>

## Common mistakes

- Judging a setup by its last three trades.
- Thinking an edge means this trade will win.
- Taking only some of the setups your rules call for.

## Go deeper

<details><summary>Why 'every trade' matters</summary><p>If you skip trades after losses and take them after wins, you change the very sample your edge depends on. Taking every qualifying setup keeps the numbers honest.</p></details>

## Check yourself

<details><summary>1. What is an edge, in plain words?</summary><p>A small, repeatable tilt in your favour that shows up over many trades.</p></details>

<details><summary>2. A setup wins 40% and pays 2 to 1. Can 10 trades produce only 2 wins?</summary><p>Yes. Short runs vary a lot around the long-run average.</p></details>

<details><summary>3. Is an edge a prediction for one trade?</summary><p>No. It describes a series, not the next trade.</p></details>

<details><summary>4. Why can a casino stay calm after losing a hand?</summary><p>One hand is a tiny part of a long series where the odds favour it.</p></details>

<details><summary>5. What do you need so a bad stretch doesn't end you?</summary><p>Small risk per trade, so you can survive losing streaks long enough for the edge to show.</p></details>

## Try it (no real money)

Run the simulator with your own numbers. Which setting gives the longest losing streak, and could you follow your plan through it?

**Key idea:** You don't need to know what happens next. You need an edge, small risk and enough trades.


*This lesson is inspired by the ideas in Mark Douglas's *Trading in the Zone*. It's written in our own words, and the book is well worth reading in full.*

**Educational, not financial advice.**
