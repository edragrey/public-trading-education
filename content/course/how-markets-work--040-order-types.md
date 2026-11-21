---
title: "Order types: market, limit and stop orders"
module: how-markets-work
order: 40
summary: The three order types you'll use most, what each one does with your money, and which to pick when.
date: 2026-11-21
---

An **order** is your instruction to the market. The type of order decides how and when it fills. You've already seen two; here are all the ones a beginner needs.

## Market order

Buy or sell **now** at the best price available.

- Fills immediately.
- You pay the spread and may get a worse price on a big order (slippage).
- Use it when getting in or out matters more than a few cents.

## Limit order

Buy or sell **only at your price or better**.

- A buy limit sits below the current price. A sell limit sits above.
- You control the price, but it **may never fill** if the market doesn't reach it.
- Often cheaper in fees, because you add to the order book instead of taking from it.

> **Hypothetical example.** A coin trades at $100. You place a buy limit at $98. If it drops to $98, you buy. If it never does, you don't, and nothing is lost.

## Stop order

A **stop order** waits until the price reaches a trigger, then becomes an order.

- A **stop-loss** is placed to sell if the price falls to your exit level. It limits a loss. The stops lesson in Survive first covers where to place it.
- A **stop-market** turns into a market order when triggered, so it fills fast but may slip in a quick drop.
- A **stop-limit** turns into a limit order when triggered, so you control the price but it may not fill if the price falls through it.

## Which one when?

| Situation | Common choice |
| --- | --- |
| You want in now and don't mind small slippage | Market |
| You have a price in mind and can wait | Limit |
| You need a safety exit if the idea is wrong | Stop-loss |
| Very thin or fast market | Limit, to avoid a bad fill |

## Extra order options you'll see

- **Time in force:** how long the order lasts. "Good till cancelled" stays until you remove it. "Immediate or cancel" fills what it can now and cancels the rest.
- **Reduce-only:** the order can only shrink an existing position, never grow it. Handy for exits.
- **Take-profit:** a limit order to sell at a gain, to lock it in.

## Common mistakes

- Using a market order in a thin market and being surprised by the fill.
- Placing a stop where normal noise will hit it.
- Forgetting an old limit order is still open.
- Not checking which type of stop the platform uses.

## Go deeper

<details><summary>Maker and taker fees</summary><p>Many exchanges charge <strong>takers</strong> (orders that fill immediately) more than <strong>makers</strong> (orders that wait in the book). A limit order that waits is usually the maker.</p></details>

## Check yourself

<details><summary>1. A coin is at $50. You want to buy only if it falls to $48. Which order?</summary><p>A buy limit at $48.</p></details>

<details><summary>2. What's the risk of a limit order?</summary><p>It may never fill, and you miss the move.</p></details>

<details><summary>3. What does a stop-loss do?</summary><p>It turns into an order when the price reaches your exit level, to limit your loss.</p></details>

<details><summary>4. Why might a stop-market fill worse than your stop price?</summary><p>Once triggered it's a market order. In a fast move there may be no buyers at your price, so you get the next best.</p></details>

<details><summary>5. What does "good till cancelled" mean?</summary><p>The order stays open until it fills or you cancel it.</p></details>

## Try it (no real money)

Open a paper trading account or an exchange's order screen without submitting anything. Find the market, limit and stop options. Write down what each field means (price, amount, trigger).

**Key idea:** The order type decides how you trade. Market buys now at the cost of price control, limit controls price at the cost of certainty, and a stop protects you when you're wrong.
