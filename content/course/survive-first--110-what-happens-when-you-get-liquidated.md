---
title: What actually happens when you get liquidated
module: survive-first
order: 110
section: Leverage
summary: Margin, leverage and liquidation in plain words, and why your position size and your stop set your risk, not the leverage number.
date: 2026-11-23
---

Every big sell-off brings a wave of "got liquidated, lesson learnt" posts. The usual advice in the replies is "never use leverage". That advice is safe, but it skips the part that actually protects you. This lesson explains what liquidation is, and the one number to check before any leveraged trade.

> **Quick recap.** **Margin** is the money you put down. **Leverage** lets your trade be bigger than that. **Liquidation** is when the exchange closes your trade because your losses have nearly used up your margin. New to these words? Start with [Leverage in plain words](/course/survive-first/leverage-in-plain-words/).

## A simple example

> **Hypothetical example.** The coin and the numbers are made up, but the arithmetic is exact. Real exchanges also charge fees, which we leave out here.

1. You have **$1,000**. You put **$100** down as margin and use **10x** leverage.
2. That opens a **$1,000 position**: 10 coins at **$100** each.
3. The price falls **10%**, to **$90**. Your 10 coins are now worth $900.
4. You've lost **$100**, which is all of your margin.
5. The exchange closes the trade. You're **liquidated**. The $100 is gone, even if the price bounces back a minute later.

In real life the exchange steps in a little *before* the full 10%. It keeps a small safety buffer (called maintenance margin) and charges a liquidation fee, so you lose your margin slightly sooner than the simple maths says.

## How close is your liquidation price?

A rough rule: **the price only has to move about 100% ÷ your leverage against you** to wipe out your margin.

| Leverage | Roughly how far the price must move against you |
| --- | --- |
| 2x | about 50% |
| 5x | about 20% |
| 10x | about 10% |
| 20x | about 5% |
| 50x | about 2% |
| 100x | about 1% |

Real liquidation sits a little closer than this table, for the reasons above. At 50x or 100x, a normal wobble in a busy hour can be enough.

## Same leverage, very different damage

Here's where "never use leverage" stops being the whole story. Take the same $1,000 account:

| Trade (hypothetical) | Position | Price falls | You lose |
| --- | --- | --- | --- |
| A: 10x, $100 margin | $1,000 | 10%, liquidated | $100 (10% of account) |
| B: 10x, all $1,000 as margin | $10,000 | 10%, liquidated | $1,000 (everything) |
| C: no leverage, no stop | $1,000 | 30%, you finally sell | $300 (30% of account) |

A and B use the **same leverage**. The difference is how much money they put in, so how big the position is. And C, with no leverage at all, loses more than A because it had no plan for getting out.

So leverage on its own doesn't decide how much you lose. **Your position size and your exit do.** And if you never set an exit, your liquidation price becomes your exit, whether you checked it or not.

## What actually sets your risk

The loss on a trade, if your stop gets hit, is:

**loss at stop = position size × distance to your stop**

Say you decide you'll risk **1%** of a $1,000 account on one trade. That's **$10**. Your stop is **5%** below where you buy. Then your position should be $10 ÷ 5% = **$200**.

- With **no leverage**, you put $200 into the trade.
- With **5x leverage**, you put $40 down as margin for the same $200 position.

If the stop is hit, you lose about **$10 either way** (plus fees). The leverage changed how much cash is tied up. It didn't change your risk.

## The one check: your stop must come first

Leverage still matters in one important way: it moves your liquidation price. Your **stop loss has to sit closer to your entry than your liquidation price**. If it doesn't, the exchange closes you out before your plan ever gets a chance.

- 5% stop at **5x**: liquidation is about 20% away. Your stop comes first. Good.
- 5% stop at **25x**: liquidation is about 4% away. You get liquidated *before* your stop. Bad.

Rule of thumb: **keep your leverage well below 100 ÷ your stop distance.** With a 5% stop, that means well below 20x.

<div class="calc" data-calc="liq-size">
  <p class="calc-row"><label>My account is $<input data-in="account" type="number" min="1" value="1000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>I'll risk <input data-in="risk" type="number" min="0.1" max="100" step="0.1" value="1" inputmode="decimal">% on this trade</label></p>
  <p class="calc-row"><label>My stop is <input data-in="stop" type="number" min="0.1" max="99" step="0.1" value="5" inputmode="decimal">% from my entry</label></p>
  <p class="calc-row"><label>Leverage <input data-in="lev" type="number" min="1" max="200" step="1" value="5" inputmode="numeric">x</label></p>
  <p class="calc-out">If the stop is hit, I lose about <strong data-out="loss">$10</strong>. Position size: <b data-out="size">$200</b>. Margin needed: <b data-out="margin">$40</b>. Liquidation is roughly <b data-out="liq">20%</b> away.</p>
  <p class="calc-verdict" data-out="verdict">Your stop comes first.</p>
</div>

## What can still go wrong

Being honest about the limits:

- **Stops can slip.** In a very fast move your stop can fill at a worse price than you set. Leave a wide gap between your stop and your liquidation price.
- **Cross margin puts your whole account behind the trade.** Many exchanges offer "isolated" margin (only the margin you chose can be lost) and "cross" margin (your whole balance can be used to keep the trade open, so it can all be lost). Know which one you're on.
- **Fees add up.** Leveraged trades usually pay trading fees on the full position, and some charge a regular "funding" fee for as long as you hold.
- **No stop means your liquidation price is your stop.** Most people who say "got liquidated" never chose that exit. It chose them.

## Is "never use leverage" wrong, then?

No. For a beginner, not using leverage is the simplest way to stay safe, and it's what this course recommends while you learn. The point is that leverage isn't the root cause. Trading too big, without a stop, is. That mistake hurts with or without leverage.

## Common mistakes

- Using a stop that sits beyond your liquidation price.
- Treating liquidation as an automatic stop.
- Using cross margin without understanding that the whole account backs the trade.

## Go deeper

<details><summary>Liquidation fees</summary><p>Many exchanges charge a fee on liquidation and may close your position at a worse price in fast moves. Liquidation is almost always costlier than a stop you chose.</p></details>

## Check yourself

<details><summary>1. You use 20x leverage. Roughly how far does the price need to move against you before you're liquidated?</summary><p>About 5% (100 ÷ 20), and in practice a little less.</p></details>

<details><summary>2. Two traders both use 10x. One loses 10% of their account, the other loses all of it. What's different?</summary><p>Their position size. One put a small part of the account in as margin, the other put in everything.</p></details>

<details><summary>3. Your stop is 3% away and you're using 50x. What happens if the price drops 3%?</summary><p>You were already liquidated at about 2%, before your stop could act. Lower the leverage until the liquidation price is well beyond the stop.</p></details>

<details><summary>4. Why must your stop come before your liquidation price?</summary><p>So you lose a small planned amount instead of the whole margin.</p></details>

<details><summary>5. Which is the safer margin mode for a beginner: isolated or cross?</summary><p>Isolated, because the loss is capped at the margin assigned to that position.</p></details>

## Try it (no real money)

Next time you look at a trade, even one you won't take, write down five things before you'd click: **entry, stop, position size, loss at stop, and liquidation price**. If you can't fill in all five, the trade isn't ready. Many exchanges show the liquidation price on the order screen before you confirm, or you can use the calculator above.

**Key idea:** Leverage doesn't decide how much you lose. Your position size and your stop do, as long as your stop comes before your liquidation price.
