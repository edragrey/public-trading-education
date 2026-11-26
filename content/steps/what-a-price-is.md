---
lesson: what-a-price-is
title: What a price is, step by step
summary: Bid, ask, spread and the order book, with a picture that moves. About 4 minutes.
---

# What a price is, step by step

One small idea per screen, with an order book you can watch. About **4 minutes**.

> **Hypothetical numbers.** The coin and the book are made up.

<!-- step -->

## A price is a deal

The price on your screen is simply **the last price at which someone bought and someone else sold**. It isn't a fair value or a forecast. It's the most recent deal.

<!-- step -->

## Bid and ask

**Bid:** the highest price any buyer is offering right now.

**Ask:** the lowest price any seller will accept.

The gap between them is the **spread**.

<figure class="fig"><svg viewBox="0 0 320 218" role="img" aria-label="An order book: sellers waiting at higher prices in red, buyers waiting at lower prices in green, with the spread between them."><text class="lbl" x="8" y="24">$100.20</text><rect class="bar-ask " x="80" y="8" width="150" height="22" rx="4"/><text class="t-loss" x="238" y="24">15</text><text class="lbl" x="8" y="50">$100.10</text><rect class="bar-ask " x="80" y="34" width="80" height="22" rx="4"/><text class="t-loss" x="168" y="50">8</text><text class="lbl" x="8" y="76">$100.05</text><rect class="bar-ask " x="80" y="60" width="50" height="22" rx="4"/><text class="t-loss" x="138" y="76">5</text><rect class="spread-row" x="0" y="86" width="320" height="20" rx="4"/><text class="t-sm" x="160" y="100" text-anchor="middle">Spread: $0.05</text><text class="lbl" x="8" y="126">$100.00</text><rect class="bar-bid" x="80" y="110" width="60" height="22" rx="4"/><text class="t-gain" x="148" y="126">6</text><text class="lbl" x="8" y="152">$99.90</text><rect class="bar-bid" x="80" y="136" width="100" height="22" rx="4"/><text class="t-gain" x="188" y="152">10</text><text class="lbl" x="8" y="178">$99.80</text><rect class="bar-bid" x="80" y="162" width="200" height="22" rx="4"/><text class="t-gain" x="288" y="178">20</text><rect class="bar-ask" x="8" y="198" width="12" height="12" rx="3"/><text class="lbl" x="26" y="209">Sellers (asks)</text><rect class="bar-bid" x="168" y="198" width="12" height="12" rx="3"/><text class="lbl" x="186" y="209">Buyers (bids)</text></svg><figcaption>A made-up order book. Bars show how many coins wait at each price.</figcaption></figure>

<!-- step -->

## Quick check

The best bid is **$100.00** and the best ask is **$100.05**. You want to buy **right now**. What do you pay?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">$100.00</button>
<button type="button" data-opt="b">$100.05</button>
<button type="button" data-opt="c">$100.025</button>
<p class="quiz-why" hidden>Buying right now means taking the <strong>ask</strong>. Selling right now gets you the bid.</p>
</div>

<!-- step -->

## Watch a price move

Someone sends a **market order** to buy 10 coins. Watch the red bars.

<figure class="fig"><svg viewBox="0 0 320 218" role="img" aria-label="An order book: sellers waiting at higher prices in red, buyers waiting at lower prices in green, with the spread between them."><text class="lbl" x="8" y="24">$100.20</text><rect class="bar-ask " x="80" y="8" width="150" height="22" rx="4"/><text class="t-loss" x="238" y="24">15</text><text class="lbl" x="8" y="50">$100.10</text><rect class="bar-ask eat2" x="80" y="34" width="80" height="22" rx="4"/><text class="t-loss" x="168" y="50">8</text><text class="lbl" x="8" y="76">$100.05</text><rect class="bar-ask eat" x="80" y="60" width="50" height="22" rx="4"/><text class="t-loss" x="138" y="76">5</text><rect class="spread-row" x="0" y="86" width="320" height="20" rx="4"/><text class="t-sm" x="160" y="100" text-anchor="middle">Spread: $0.05</text><text class="lbl" x="8" y="126">$100.00</text><rect class="bar-bid" x="80" y="110" width="60" height="22" rx="4"/><text class="t-gain" x="148" y="126">6</text><text class="lbl" x="8" y="152">$99.90</text><rect class="bar-bid" x="80" y="136" width="100" height="22" rx="4"/><text class="t-gain" x="188" y="152">10</text><text class="lbl" x="8" y="178">$99.80</text><rect class="bar-bid" x="80" y="162" width="200" height="22" rx="4"/><text class="t-gain" x="288" y="178">20</text><rect class="bar-ask" x="8" y="198" width="12" height="12" rx="3"/><text class="lbl" x="26" y="209">Sellers (asks)</text><rect class="bar-bid" x="168" y="198" width="12" height="12" rx="3"/><text class="lbl" x="186" y="209">Buyers (bids)</text></svg><figcaption>A market order to buy 10 coins eats the cheapest asks. Hypothetical numbers.</figcaption></figure>

They take the 5 coins at $100.05, then 5 of the 8 at $100.10. The last deal was at **$100.10**, so that is the new price.

<!-- step -->

## Nothing "happened"

There was no news. One buyer was simply more eager than the sellers waiting, and used up the cheapest coins. **That is how every price move works.**

<!-- step -->

## Two kinds of order

**Market order:** buy or sell now, at the best price available. It fills straight away.

**Limit order:** buy or sell only at your price or better. It waits in the book and may never fill.

<!-- step -->

## Quick check

What is **slippage**?

<div class="quiz" data-answer="a">
<button type="button" data-opt="a">The gap between the price you expected and the price you got</button>
<button type="button" data-opt="b">A fee the exchange charges</button>
<button type="button" data-opt="c">The gap between bid and ask</button>
<p class="quiz-why" hidden>Slippage is the gap between expected and actual price, and it grows when the book is thin.</p>
</div>

<!-- step -->

## Key idea

A price is the last deal. You buy at the ask and sell at the bid, and bigger orders move the price more when the book is thin.
