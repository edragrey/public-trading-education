---
title: "Leverage as a price force: liquidations, funding and open interest"
module: how-markets-really-work
order: 40
summary: Why borrowed money makes prices move faster, how forced selling feeds itself, and three numbers traders watch.
date: 2026-11-26
needs: leverage-in-plain-words, what-happens-when-you-get-liquidated
---

Many sudden crypto moves are not about news. They are about **leveraged positions being forced to close**. Understanding this explains why prices can fall (or rise) so fast.

## Two words first

**Open interest** is the total amount of open leveraged contracts (derivatives) that have not yet been closed.

**Funding rate** is a small payment that passes between long and short traders on perpetual contracts, to keep the contract price close to the real price.

## How leverage feeds itself

> **Hypothetical example.** The price falls 5%. Some traders using high leverage reach their liquidation price, and the exchange **sells their positions automatically**. That selling pushes the price lower, which liquidates the next group, which sells, and so on. A modest dip becomes a sharp drop. This chain is called a **liquidation cascade**.

The same happens upward: a **short squeeze** forces short sellers to buy back, which pushes the price higher, which forces more of them to buy.

<figure class="fig"><svg viewBox="0 0 320 140" role="img" aria-label="A liquidation cascade: a dip triggers liquidations, which cause forced selling, which pushes price lower and loops back."><rect class="box" x="8" y="44" width="70" height="52" rx="10"/><text class="t-sm" x="43" y="74" text-anchor="middle" style="font-size:10.5px">Price dips 5%</text><line class="arrow" x1="79" y1="70" x2="85" y2="70"/><rect class="box" x="86" y="44" width="70" height="52" rx="10"/><text class="t-sm" x="121" y="74" text-anchor="middle" style="font-size:10.5px">Liquidations</text><line class="arrow" x1="157" y1="70" x2="163" y2="70"/><rect class="box" x="164" y="44" width="70" height="52" rx="10"/><text class="t-sm" x="199" y="74" text-anchor="middle" style="font-size:10.5px">Forced selling</text><line class="arrow" x1="235" y1="70" x2="241" y2="70"/><rect class="box-acc" x="242" y="44" width="70" height="52" rx="10"/><text class="t-sm" x="277" y="74" text-anchor="middle" style="font-size:10.5px">Price falls more</text><path class="ln" d="M285 98 Q285 125 160 125 Q45 125 43 100" style="stroke-dasharray:4 4"/><text class="lbl" x="160" y="118" text-anchor="middle">…and the loop repeats</text></svg><figcaption>Why leveraged markets can fall (or rise) in a rush.</figcaption></figure>

## Three numbers traders watch

- **Open interest:** rising fast means lots of new leveraged bets. More fuel for a big move either way.
- **Funding rate:** if it is strongly positive, longs are paying shorts, which suggests many people are leaning long. A crowded trade can unwind sharply.
- **Liquidations:** data on how much was force-closed. A spike often marks the end of a violent move.

None of these is a prediction. They show **how crowded and fragile** the market is.

## Why this matters to you

- Leverage makes markets **jumpier** even if you do not use it.
- A level where many liquidations sit can act like a magnet for price.
- If the market is crowded in one direction, a small push the other way can start a cascade.

## What you can do

- Avoid high leverage (the leverage lessons explain why).
- Be careful opening a trade after a very one-sided move.
- Treat funding and open interest as context, not signals.

## Common mistakes

- Reading funding as a certain reversal signal.
- Ignoring how crowded a trade is.
- Using leverage because "everyone is long".

## Go deeper

<details><summary>Why funding exists</summary><p>A perpetual contract has no expiry, so it needs a mechanism to stay near the real price. Funding does that: when the contract trades above the real price, longs pay shorts, encouraging more selling; when below, shorts pay longs.</p></details>

## Check yourself

<details><summary>1. What is a liquidation cascade?</summary><p>Forced sells push the price down, liquidating more positions, which sell and push it down again.</p></details>

<details><summary>2. What does rising open interest suggest?</summary><p>More leveraged bets are being placed, so more fuel for a big move.</p></details>

<details><summary>3. A strongly positive funding rate suggests what?</summary><p>That many traders are long and paying to stay that way. The trade may be crowded.</p></details>

<details><summary>4. What is a short squeeze?</summary><p>Shorts are forced to buy back, pushing the price up and forcing more to buy.</p></details>

<details><summary>5. Do you have to use leverage to be affected by it?</summary><p>No. Other people's leverage makes the whole market jumpier.</p></details>

## Try it (no real money)

Find a free chart of open interest and funding for a major coin. Note whether recent big moves came with a rise in either.

**Key idea:** leverage turns small moves into forced selling or buying, so crowded markets are fragile.
