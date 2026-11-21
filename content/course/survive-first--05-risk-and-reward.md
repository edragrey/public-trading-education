---
title: Risk and reward in plain words
module: survive-first
order: 5
summary: How to compare what a trade could make with what it could lose, and why that comparison tells you how often you need to be right.
date: 2026-11-21
---

You now know how much you'll lose if a trade goes wrong. This lesson adds the other side: how much you might make if it goes right, and why the two belong together.

## Two words first

**Target** is the price where you plan to take your profit. Like a stop, you choose it before you trade.

**Reward to risk** is how much you could gain compared with how much you could lose. Written as a ratio, like 2:1 or "2R".

## The sum

**Reward to risk = (target − entry) ÷ (entry − stop)**

> **Hypothetical example.** The coin and prices are made up, but the arithmetic is exact.

- You buy at **$50**. Your stop is **$47.50**. Your target is **$55**.
- If you're wrong, you lose $2.50 per coin.
- If you're right, you make $5 per coin.
- $5 ÷ $2.50 = **2**. That's a **2:1** reward to risk.

If you're risking $20 (lesson 2), a 2:1 trade aims to make $40.

## Why it matters: how often you need to be right

Here's the useful part. The ratio tells you the **win rate you need just to break even**.

**Break-even win rate = 1 ÷ (1 + reward to risk)**

| Reward to risk | You need to win at least |
| --- | --- |
| 0.5:1 | 67% of trades |
| 1:1 | 50% |
| 2:1 | 33% |
| 3:1 | 25% |

At 2:1, you can be wrong two times out of three and still break even (before fees). At 0.5:1, you need to be right two times out of three just to stand still.

<div class="calc" data-calc="rr">
  <p class="calc-row"><label>I buy at $<input data-in="entry" type="number" min="0" step="any" value="50" inputmode="decimal"></label></p>
  <p class="calc-row"><label>My stop is $<input data-in="stop" type="number" min="0" step="any" value="47.5" inputmode="decimal"></label></p>
  <p class="calc-row"><label>My target is $<input data-in="target" type="number" min="0" step="any" value="55" inputmode="decimal"></label></p>
  <p class="calc-out">Reward to risk: <strong data-out="rr">2:1</strong>. To break even I need to win at least <b data-out="be">33%</b> of trades like this.</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

## The trap: chasing big ratios

If 3:1 is good, isn't 10:1 better? Not automatically. A far-away target gets reached less often. Moving the target further out raises the ratio on paper and lowers your real win rate. The two always pull against each other.

The honest question isn't "how big is my ratio?" but "**is this target somewhere the price could realistically get to?**" For example, the last place it turned around, not a number you'd like it to reach.

## What this lesson doesn't tell you

The table shows what you *need*. It says nothing about what you'll *get*. Your actual win rate only shows up after many trades, written down honestly. That's lesson 6 (expectancy) and the journal lesson in Build a system.

## Check yourself

<details><summary>1. Entry $100, stop $95, target $110. What's the reward to risk?</summary><p>You risk $5 to make $10, so 2:1.</p></details>

<details><summary>2. At 1:1, what share of trades do you need to win to break even?</summary><p>50%, before fees.</p></details>

<details><summary>3. Why not just set every target really far away for a huge ratio?</summary><p>Because far targets get reached less often. A higher ratio on paper usually means a lower win rate in practice.</p></details>

## Try it (no real money)

On a chart, pick a pretend entry, a stop where your idea is wrong, and a target where the price last turned around. Work out the ratio and the break-even win rate. Would you honestly expect to win that often?

**Key idea:** Every trade has two sides. Compare what you could make with what you could lose, and you'll know how often you need to be right.
