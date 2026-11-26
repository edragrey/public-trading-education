---
title: How to read a candlestick
module: how-markets-work
order: 60
summary: The most common chart shape, explained piece by piece. What the body and the wicks show, and what they don't.
date: 2026-11-21
needs: what-a-price-is
---

Open almost any trading chart and you'll see rows of little coloured bars with lines sticking out. These are **candlesticks**, or candles. Each one packs four prices into one shape. Once you can read one, you can read any chart.

## One candle, one period

Each candle shows what happened during **one block of time**: one minute, one hour, one day, whatever the chart is set to. (Timeframes are the next lesson.)

It shows four prices:

- **Open**: the first price in that period.
- **High**: the highest price reached.
- **Low**: the lowest price reached.
- **Close**: the last price in that period.

Traders call this **OHLC**.

## The body and the wicks

The thick part is the **body**. It runs from the open to the close.

The thin lines above and below are the **wicks** (or shadows). They reach up to the high and down to the low.

<figure class="fig"><svg viewBox="0 0 320 200" role="img" aria-label="A green candle: low at the bottom of the lower wick, open at the bottom of the body, close at the top of the body, high at the top of the upper wick."><line class="up wick" x1="110" y1="20" x2="110" y2="180"/><rect class="up" x="90" y="55" width="40" height="85" rx="3"/><line class="guide" x1="130" y1="20" x2="200" y2="20"/><line class="guide" x1="130" y1="55" x2="200" y2="55"/><line class="guide" x1="130" y1="140" x2="200" y2="140"/><line class="guide" x1="130" y1="180" x2="200" y2="180"/><text class="lbl" x="206" y="24">High $110</text><text class="lbl" x="206" y="59">Close $106</text><text class="lbl" x="206" y="144">Open $100</text><text class="lbl" x="206" y="184">Low $97</text></svg><figcaption>A green (up) candle. Hypothetical prices.</figcaption></figure>

## Green and red

- **Green** (or white, on some charts): the close was **higher** than the open. Price went up during the period.
- **Red** (or black): the close was **lower** than the open. Price went down.

On a red candle, the open is at the **top** of the body and the close at the bottom.

<figure class="fig"><svg viewBox="0 0 320 200" role="img" aria-label="A red candle: open at the top of the body, close at the bottom of the body, with wicks to the high and low."><line class="down wick" x1="110" y1="20" x2="110" y2="180"/><rect class="down" x="90" y="45" width="40" height="95" rx="3"/><line class="guide" x1="130" y1="20" x2="200" y2="20"/><line class="guide" x1="130" y1="45" x2="200" y2="45"/><line class="guide" x1="130" y1="140" x2="200" y2="140"/><line class="guide" x1="130" y1="180" x2="200" y2="180"/><text class="lbl" x="206" y="24">High $108</text><text class="lbl" x="206" y="49">Open $106</text><text class="lbl" x="206" y="144">Close $99</text><text class="lbl" x="206" y="184">Low $96</text></svg><figcaption>A red (down) candle. The open is now at the top. Hypothetical prices.</figcaption></figure>

Colours can be changed in chart settings, so always check which is which on a new chart.

## What a candle tells you

A candle is a summary of a fight between buyers and sellers during that period:

- **A big body, small wicks:** one side was in control most of the time.
- **A small body:** the price ended close to where it started. Neither side won much.
- **A long wick:** the price went far in one direction, then came back. That direction was tried, and pushed back.

<figure class="fig"><svg viewBox="0 0 320 200" role="img" aria-label="A candle with a small body near the top and a long lower wick."><line class="up wick" x1="160" y1="30" x2="160" y2="185"/><rect class="up" x="140" y="40" width="40" height="22" rx="3"/><text class="lbl" x="192" y="56">Small body</text><text class="lbl" x="192" y="150">Long lower wick</text></svg><figcaption>Price fell a long way during the period, then most of the fall was bought back before the close.</figcaption></figure>

## What a candle doesn't tell you

Being honest: a single candle **describes the past**. It doesn't predict the next one. You'll see books and posts full of named candle "patterns" (hammers, dojis, engulfing). They're useful words for describing what happened, but none of them reliably tells you what happens next. Treat them as vocabulary, not signals.

A candle also hides the order of events. A green candle with long wicks on both sides could have gone up first, or down first. You can't tell from the shape.

## Three words you will meet soon

- **Swing low:** the bottom of a dip, with higher prices on both sides of it.
- **Swing high:** the top of a rise, with lower prices on both sides.
- **Support:** a price area where falls have stopped before.

You will use them when placing stops in Survive first. Read the market explains them properly.

## Common mistakes

- Reading a single candle as a forecast.
- Ignoring the timeframe the candle belongs to.
- Treating colour alone as meaning more than the body and wicks show.

## Go deeper

<details><summary>Candle colours are a convention</summary><p>Green for up and red for down is common, but some platforms use other colours or reverse them (for example in some Asian markets). Always check what your chart uses.</p></details>

## Check yourself

<details><summary>1. A candle opens at $50 and closes at $47. What colour is it, usually?</summary><p>Red, because it closed lower than it opened.</p></details>

<details><summary>2. On a green candle, which end of the body is the close?</summary><p>The top. The close is higher than the open on a green candle.</p></details>

<details><summary>3. A candle has a long upper wick. What happened during that period?</summary><p>The price went much higher at some point, then fell back before the close. Higher prices were tried and pushed back.</p></details>

<details><summary>4. A candle has a long upper wick and a small body near the low. What happened in that period?</summary><p>Price rose a lot, then sellers pushed it back down. It describes what happened, not what comes next.</p></details>

<details><summary>5. What four prices does a candle summarise?</summary><p>Open, high, low and close for its period.</p></details>

## Try it (no real money)

Open a daily chart of anything. Pick one candle and, without looking at the numbers, say out loud: was it up or down? Where did it open and close? Did it go much higher or lower at any point? Then hover over it and check the OHLC values.

**Key idea:** Each candle shows four prices: open, high, low and close. It describes what happened, not what comes next.
