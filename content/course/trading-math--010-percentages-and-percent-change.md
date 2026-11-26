---
title: "Percentages and percent change"
module: trading-math
order: 10
summary: The one piece of maths you will use in every trade, explained from zero, including why +10% then −10% does not get you back to even.
date: 2026-11-26
needs: what-a-price-is
---

Almost everything in trading is measured in percent: how much a price moved, how much you risked, how much you made. If percentages feel shaky, this lesson fixes that. No formulas to memorise, only one idea.

## Two words first

**Percent** means "out of 100". 10% of something is 10 out of every 100 of it.

**Percent change** is how much something moved, as a share of **where it started**. That last part matters more than it looks.

## The one idea

**Percent change = (new price − old price) ÷ old price × 100**

You always divide by the **old** price, the one you started from.

> **Hypothetical example.** A coin goes from $50 to $60. The move is $10. $10 ÷ $50 = 0.20, so the change is **+20%**.
> It then goes from $60 back to $50. The move is −$10. But now you divide by $60: $10 ÷ $60 = 0.167, so the change is **−16.7%**.

Same $10 each way, two different percentages. The starting point changed, so the percentage changed.

## Why +10% then −10% is not flat

Start with $100. Gain 10% and you have $110. Lose 10% of **$110** and you lose $11, so you end at **$99**. You are down 1%, even though the two numbers cancel on paper.

The same trap is much bigger with large drops:

| If you lose | You need to gain to get back to even |
| --- | --- |
| 10% | 11% |
| 20% | 25% |
| 25% | 33% |
| 50% | 100% |
| 75% | 300% |
| 90% | 900% |

Losing is easy to do and hard to undo. This is why the safety lessons talk so much about small losses.

<div class="calc" data-calc="pct-change">
  <p class="calc-row"><label>Price went from $<input data-in="from" type="number" min="0" step="any" value="100" inputmode="decimal"></label></p>
  <p class="calc-row"><label>to $<input data-in="to" type="number" min="0" step="any" value="80" inputmode="decimal"></label></p>
  <p class="calc-out">That is a change of <strong data-out="chg">−20%</strong>. To get back to the starting price it must move <b data-out="back">+25%</b>.</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

<figure class="fig"><svg viewBox="0 0 320 160" role="img" aria-label="Bars comparing a loss with the gain needed to recover it: 10% needs 11%, 25% needs 33%, 50% needs 100%."><line class="axis" x1="10" y1="130" x2="310" y2="130"/><rect class="bar-ask" x="22" y="120" width="30" height="10" rx="3"/><rect class="bar-bid" x="58" y="119" width="30" height="11" rx="3"/><text class="t-loss" x="37" y="115" text-anchor="middle">−10%</text><text class="t-gain" x="73" y="114" text-anchor="middle">+11%</text><text class="lbl" x="55" y="148" text-anchor="middle">Lose 10%</text><rect class="bar-ask" x="122" y="105" width="30" height="25" rx="3"/><rect class="bar-bid" x="158" y="97" width="30" height="33" rx="3"/><text class="t-loss" x="137" y="100" text-anchor="middle">−25%</text><text class="t-gain" x="173" y="92" text-anchor="middle">+33%</text><text class="lbl" x="155" y="148" text-anchor="middle">Lose 25%</text><rect class="bar-ask" x="222" y="80" width="30" height="50" rx="3"/><rect class="bar-bid" x="258" y="30" width="30" height="100" rx="3"/><text class="t-loss" x="237" y="75" text-anchor="middle">−50%</text><text class="t-gain" x="273" y="25" text-anchor="middle">+100%</text><text class="lbl" x="255" y="148" text-anchor="middle">Lose 50%</text></svg><figcaption>Red is the loss, green is the gain needed to get back to even.</figcaption></figure>

## Percent of what you own

The same sum tells you how much a position changed. If you put $200 into a coin and it rises 15%, you made 15% of $200 = **$30**. If it falls 15%, you lost $30. You can do this in your head: 10% is easy (move the decimal point), and 5% is half of that.

## Common mistakes

- Adding and subtracting percentages as if they were plain numbers (+10% and −10% make 0%). They don't.
- Forgetting that a big loss needs an even bigger gain to recover.
- Mixing up **percentage points** and **percent**. Going from 2% to 3% is +1 percentage point, but it is a 50% increase.

## Go deeper

<details><summary>Percent and percentage points</summary><p>If an interest rate goes from 4% to 5%, it rose by 1 percentage point. In percent terms it rose 25%, because 1 ÷ 4 = 0.25. News headlines mix these up all the time, so check which one is meant.</p></details>

<details><summary>Quick mental maths</summary><p>10%: divide by 10. 1%: divide by 100. 5%: half of 10%. 20%: double 10%. 15%: 10% plus 5%. Good enough for checking any calculator.</p></details>

## Check yourself

<details><summary>1. A price goes from $40 to $50. What is the percent change?</summary><p>The move is $10. $10 ÷ $40 = 0.25, so +25%.</p></details>

<details><summary>2. You lose 50% of your money. What gain gets you back to even?</summary><p>+100%. Half of $100 is $50, and you need to double $50 to return to $100.</p></details>

<details><summary>3. +20% then −20%. Where do you end up from $100?</summary><p>$100 → $120 → $96. You are down 4%.</p></details>

<details><summary>4. Your rate goes from 2% to 3%. Is that +1% or +50%?</summary><p>Both, in different senses: +1 percentage point, and +50% in relative terms.</p></details>

<details><summary>5. A coin you hold with $300 rises 8%. How much did you make?</summary><p>8% of $300 = $24.</p></details>

## Try it (no real money)

Pick any coin or share. Write down its price today, and look up its price a month ago. Work out the percent change by hand, then check it with the calculator.

**Key idea:** percent change always divides by where you started, so losses are harder to undo than they look.
