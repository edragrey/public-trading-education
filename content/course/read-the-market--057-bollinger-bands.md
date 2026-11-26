---
title: "Bollinger bands, in plain words"
module: read-the-market
order: 57
summary: Bollinger bands draw a stretchy envelope around price that widens when the market is wild and narrows when it's quiet. They show how unusual a move is, not where it will turn.
date: 2026-11-26
section: The chart
needs: volatility-and-atr, moving-averages
---

You've met volatility: how far price normally moves. **Bollinger bands** draw that idea right on the chart, as a band that stretches and squeezes around price.

## Two words first

- **Standard deviation:** a number for how spread out recent prices are around their average. Bigger spread, bigger number. You don't need to calculate it; the chart does.
- **Band:** a line above and below price.

## What you see

Three lines:

1. **The middle line:** a moving average, usually of the last 20 candles.
2. **The upper band:** the middle line plus 2 standard deviations.
3. **The lower band:** the middle line minus 2 standard deviations.

Because the bands come from recent spread, they **widen** when price is swinging a lot and **narrow** when it's quiet. About nine in ten candles close inside the bands, so touching one is unusual, but not rare.

<figure class="fig"><svg viewBox="0 0 320 150" role="img" aria-label="Bollinger bands narrowing in a quiet period, then widening as price breaks out upward."><path d="M20 40 Q80 55 140 62 T200 66 Q250 60 300 28" fill="none" class="guide" style="stroke:var(--muted)"/><path d="M20 100 Q80 90 140 84 T200 80 Q250 90 300 124" fill="none" class="guide" style="stroke:var(--muted)"/><path d="M20 70 L90 74 L140 73 L200 73 L250 60 L300 38" fill="none" class="ln"/><text class="lbl" x="110" y="52">Squeeze: quiet, bands close</text><text class="lbl" x="220" y="142">Expansion: bands open</text></svg><figcaption>The bands tighten when the market is quiet and open when it moves. Hypothetical.</figcaption></figure>

## How people use them

- **The squeeze:** bands very close together mean unusually low volatility. Volatility comes in waves, so a burst often follows. The bands don't tell you which direction.
- **Riding the band:** in a strong trend, price can hug the upper band for a long time. Touching the upper band there means strength, not "sell".
- **Mean reversion in a range:** in a sideways market, price often bounces between the bands and back toward the middle. That works until the range breaks.

> **Hypothetical example.** A coin trades in a tight range for ten days and the bands squeeze. Then price closes above the upper band on strong volume and keeps climbing. A beginner shorts it because it's "above the band". The band was telling them the move was unusual and strong, not that it was over.

## The honest limits

- A touch of a band is **not** a buy or sell signal. It only says price is far from its recent average.
- Bands lag, because they're built from past prices.
- In trends, "fading the band" gets you run over. In ranges, "riding the band" gets you chopped up. First decide which market you're in.

## Common mistakes

- Selling every time price touches the upper band.
- Assuming a squeeze tells you the direction of the breakout.
- Using the bands without any trend or structure context.

## Go deeper

<details><summary>Bands versus ATR</summary><p>Both measure volatility. ATR gives you a dollar distance that's easy to turn into a stop and a position size. The bands show the same thing visually on the chart. Many traders use ATR for the maths and the bands for a quick look.</p></details>

## Check yourself

<details><summary>1. What makes the bands wider?</summary><p>Bigger recent price swings, meaning higher volatility.</p></details>

<details><summary>2. What does a squeeze tell you?</summary><p>Volatility is unusually low and a bigger move often follows. It does not tell you the direction.</p></details>

<details><summary>3. Price touches the upper band in a strong uptrend. Is that a sell signal?</summary><p>Not by itself. In a strong trend price can stay near the upper band for a long time.</p></details>

<details><summary>4. Where do band-bounce ideas work best?</summary><p>In sideways ranges, until the range breaks.</p></details>

<details><summary>5. What should you decide before using the bands?</summary><p>Whether the market is trending or ranging.</p></details>

## Try it (no real money)

Add Bollinger bands to a chart. Find two squeezes. For each, note which direction price broke out and how far it went in the next ten candles. Was the direction obvious beforehand?

**Key idea:** Bollinger bands show how stretched price is compared with its recent range. Squeezes warn that a big move may come, but they never say which way.
