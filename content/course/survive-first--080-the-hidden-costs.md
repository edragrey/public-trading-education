---
title: "The hidden costs: fees, spreads, slippage and funding"
module: survive-first
order: 80
summary: The small charges on every trade that beginners rarely count, and how quickly they add up if you trade often.
date: 2026-11-21
---

Every trade costs something, even the ones that break even. These costs are small one at a time, which is why they're easy to ignore. Over a month of active trading they can be the difference between making and losing money.

## Four costs in plain words

**Trading fee** is what the exchange or broker charges you to buy or sell. Usually a small percentage of the trade, like 0.1%.

**Spread** is the gap between the highest price a buyer will pay and the lowest price a seller will accept. If you buy and immediately sell, you lose the spread.

**Slippage** is the gap between the price you expected and the price you got, usually in fast markets or thin ones.

**Funding** is a regular fee on many crypto "perpetual" futures trades, paid between traders every few hours while you hold a leveraged position. It can be paid or received, and it changes all the time.

## A round trip costs twice

You pay a fee when you buy **and** when you sell. That's a "round trip".

> **Hypothetical example.** The fee rate is made up but typical. Real exchanges vary, and many charge less for larger traders or for certain order types.

- A **$1,000** trade with a **0.1%** fee costs **$1** to open and about **$1** to close.
- That's **$2** for one round trip.
- If you're risking **$20** per trade (the 1% lesson), fees are already **10%** of your risk.

## Small, then not small

Now trade often.

| Round trips per month (hypothetical) | Fees on $1,000 trades at 0.1% |
| --- | --- |
| 10 | about $20 |
| 50 | about $100 |
| 200 | about $400 |

On a $2,000 account, $400 a month is **20%** of your money, gone before a single trade is right or wrong. Spread, slippage and funding come on top.

<div class="calc" data-calc="fees">
  <p class="calc-row"><label>My trades are about $<input data-in="size" type="number" min="0" step="any" value="1000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>The fee is <input data-in="fee" type="number" min="0" max="5" step="0.01" value="0.1" inputmode="decimal">% each way</label></p>
  <p class="calc-row"><label>I make <input data-in="n" type="number" min="0" step="1" value="50" inputmode="numeric"> round trips a month</label></p>
  <p class="calc-row"><label>My account is $<input data-in="account" type="number" min="1" step="any" value="2000" inputmode="decimal"></label></p>
  <p class="calc-out">Fees cost me about <strong data-out="month">$100</strong> a month. That's <b data-out="pct">5%</b> of my account.</p>
</div>

## Leverage makes fees bigger

With leverage, fees are charged on the **whole position**, not just your margin. A $100 margin at 10x is a $1,000 position, so you pay fees on $1,000. The fee feels like 1% of your own money instead of 0.1%.

## Ways to keep costs down

- **Trade less.** Fewer, better trades is the simplest fee cut there is.
- **Check the fee page** of your exchange or broker before you start. Look for "maker" and "taker" rates. Maker (an order that waits in the book) is often cheaper than taker (an order that fills straight away).
- **Avoid thin markets.** Coins or stocks with little trading have wider spreads and more slippage.
- **Count costs in your plan.** Add a little to your expected loss and take a little off your expected win.

## Check yourself

<details><summary>1. A $500 trade with a 0.2% fee each way. What does the round trip cost?</summary><p>About $1 to open and $1 to close, so about $2.</p></details>

<details><summary>2. Why do fees matter more when you use leverage?</summary><p>Because they're charged on the full position, which is bigger than the money you put in.</p></details>

<details><summary>3. What's the simplest way to pay less in fees?</summary><p>Make fewer trades.</p></details>

## Try it (no real money)

Find the fee page of an exchange or broker you're curious about. Write down the maker and taker fees. Then put your own numbers in the calculator above and see what a busy month would cost.

**Key idea:** Every trade has a cost, even the ones that go nowhere. Count fees, spread and slippage before you count profits.
