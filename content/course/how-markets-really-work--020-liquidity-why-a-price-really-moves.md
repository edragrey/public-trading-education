---
title: "Liquidity: why a price really moves"
module: how-markets-really-work
order: 20
summary: Price does not move because of opinions alone; it moves when orders eat through the order book. Depth, slippage and why the same order moves one market a lot and another a little.
date: 2026-11-26
needs: what-a-price-is, volume-and-liquidity
---

When people say "liquidity", they mean two things: how easy it is to trade without moving the price, and how much money is available in the market. This lesson looks at the first, the mechanics.

## Two words first

**Liquidity** is how easily you can buy or sell without changing the price much.

**Depth** is how many orders are waiting in the order book near the current price.

## Price moves when orders eat the book

Recall the order book: sellers waiting at higher prices, buyers waiting at lower ones. A **market buy** takes the cheapest sellers first, then the next, and so on. The price you pay climbs as it works through them.

> **Hypothetical example.** The order book has 10 coins for sale at $100, 10 at $101, and 10 at $103. You want to buy 25. You get 10 at $100, 10 at $101 and 5 at $103. Your average price is $101.20, and the last trade is at $103. The price moved **3%** because of your order.

In a deep market, there are many orders at each level, so the same order barely moves the price. In a thin market, a small order can move it a lot.

<figure class="fig"><svg viewBox="0 0 320 150" role="img" aria-label="A market buy of 25 coins eats 10 coins at $100, 10 at $101 and 5 at $103, so the price moves up 3%."><text class="lbl" x="10" y="37">$103</text><rect class="bar-ask" x="60" y="20" width="90" height="26" rx="4"/><text class="t-sm" x="158" y="37">5</text><text class="lbl" x="10" y="71">$101</text><rect class="bar-ask" x="60" y="54" width="180" height="26" rx="4"/><text class="t-sm" x="248" y="71">10</text><text class="lbl" x="10" y="105">$100</text><rect class="bar-ask" x="60" y="88" width="180" height="26" rx="4"/><text class="t-sm" x="248" y="105">10</text><text class="t-loss" x="160" y="136" text-anchor="middle">Buy 25: average $101.20, last trade $103 (+3%)</text></svg><figcaption>The sellers waiting in the book, cheapest first. Hypothetical.</figcaption></figure>

## Slippage

**Slippage** is the difference between the price you expected and the price you got. It is larger when the market is thin, when the market is moving fast, and when your order is large compared with the book.

## Why this explains big moves

- Prices jump when **a lot of orders arrive on one side** and the other side is thin.
- After bad news, buyers step back, so there is less depth below. Sellers then push the price down through empty space.
- Moves often look sudden because there is **nothing in the book** between two prices.

## Liquidity comes and goes

Liquidity is not constant. It is usually lower at quiet hours, over weekends, around big news and in small coins. Many professional traders pull their orders when things get chaotic, which makes the book thinner exactly when volatility rises.

## What to do with this

- Use **limit orders** in thin markets so you set the worst price you will accept.
- Keep your size small relative to the market's depth.
- Expect worse fills in a stop order during fast moves (see the stop-loss lesson).

## Common mistakes

- Using a market order in a thin coin.
- Assuming your stop fills at the stop price in a fast move.
- Treating a quiet chart as a safe one: thin markets can jump without warning.

## Go deeper

<details><summary>Liquidity as money</summary><p>"Liquidity" is also used for the amount of money flowing into markets, such as from central banks or stablecoins. That is the subject of later lessons. Both meanings matter, but they are different: one is about the mechanics of a single trade, the other about the money available overall.</p></details>

## Check yourself

<details><summary>1. What is depth?</summary><p>How many orders are waiting in the book close to the current price.</p></details>

<details><summary>2. Why does a large market buy move the price?</summary><p>It eats through sellers at rising prices.</p></details>

<details><summary>3. What is slippage?</summary><p>The gap between the price you expected and the price you got.</p></details>

<details><summary>4. When is liquidity usually lower?</summary><p>At quiet hours, weekends, around big news, and in small coins.</p></details>

<details><summary>5. What order type helps in a thin market?</summary><p>A limit order, because you set the worst price you will accept.</p></details>

## Try it (no real money)

Open the order book of a small coin and a large one. Compare how many orders sit within 0.5% of the price.

**Key idea:** prices move when orders eat through the book, and thin books let small orders move a lot.
