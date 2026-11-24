---
title: "Stop losses: what they are and where they go"
module: survive-first
order: 40
summary: What a stop loss does, the two main kinds, where to place one so it means something, and the honest ways stops can let you down.
date: 2026-11-21
---

The last two lessons kept saying "your stop". This one explains what a stop actually is, and the hardest part: deciding where it goes.

## Two words first

**Stop loss** (or just "stop") is an instruction you leave with the exchange or broker: "if the price falls to this level, sell for me." It's your exit, chosen while you're calm.

**Slippage** is the gap between the price you asked for and the price you actually got. It happens when prices move fast.

## Why have one at all?

Because in the moment, almost nobody sells at a loss easily. The price drops, you tell yourself it'll bounce, it drops more, and the small loss you could have taken becomes the big one from the first lesson. A stop makes the decision for you, in advance.

## The two main kinds

| Kind | What happens when the price is hit | The catch |
| --- | --- | --- |
| Stop market | Sells straight away at the best price available | In a fast fall you might get a worse price (slippage) |
| Stop limit | Places a sell order at your chosen price or better | If the price jumps past it, your order may never fill, and you're still in the trade |

For beginners, a **stop market** is usually the safer choice: you might get a slightly worse price, but you do get out.

## Where does the stop go?

Put it **where your reason for the trade stops being true**. Not at a random round number. Not where the loss "feels okay".

> **Hypothetical example.** The coin and prices are made up.

You buy a coin at **$50** because it has bounced off **$48** three times in the past month. Your idea is "buyers keep stepping in around $48".

- If the price falls to $47.50, your idea is wrong: the buyers didn't show up. So a stop just below $48, say **$47.50**, makes sense.
- A stop at **$49.50** would probably get hit by normal wobbles, even if your idea was right.
- A stop at **$40** means you'd hold long after the idea had failed.

Then, as the position size lesson showed, your position size follows from that stop distance.

## Loss at your stop

Once you know your position size and stop, you know your loss before you trade:

**loss at stop = position size × stop distance**

<div class="calc" data-calc="stop-loss">
  <p class="calc-row"><label>My position is $<input data-in="size" type="number" min="0" value="400" inputmode="decimal"></label></p>
  <p class="calc-row"><label>My stop is <input data-in="stop" type="number" min="0" max="100" step="0.1" value="5" inputmode="decimal">% away</label></p>
  <p class="calc-out">If the stop is hit, I lose about <strong data-out="loss">$20</strong>, plus fees.</p>
</div>

## The one rule about moving stops

You can move a stop **closer** to lock in less risk. You should **never move it further away** to avoid being stopped out. Moving it away means changing your plan because the trade is going badly, which is exactly the emotion a stop is there to protect you from.

## Honest limits

- **Gaps.** Markets that close overnight or at weekends (like stocks) can open far below your stop. Your stop then fills at the opening price, which can be much worse.
- **Fast markets.** In crypto, a sudden crash can cause big slippage even on a stop market.
- **Getting "stopped out" then watching it recover.** It happens to everyone. A stop that sometimes takes you out too early is the price of never taking a huge loss.

## Common mistakes

- Placing the stop where it feels comfortable instead of where the idea is wrong.
- Moving it further away to avoid taking the loss.
- Having no stop and promising to watch.

## Go deeper

<details><summary>Mental stops</summary><p>A mental stop is one you only promise yourself. It fails at the moment you need it, when emotion argues with the plan. A stop order placed with the platform works even if you're away.</p></details>

## Check yourself

<details><summary>1. What's the main risk of a stop limit order?</summary><p>If the price moves past your limit quickly, your order may not fill and you stay in a losing trade.</p></details>

<details><summary>2. Where should your stop go?</summary><p>At the price where your reason for the trade is proven wrong, not at a number that just feels comfortable.</p></details>

<details><summary>3. Your trade is losing and getting close to your stop. Should you move the stop further away to give it room?</summary><p>No. Moving a stop further away is changing your plan because of fear. You can move it closer, never further.</p></details>

<details><summary>4. What is the difference between a stop-market and a stop-limit?</summary><p>A stop-market fills at the best price once triggered, fast but may slip. A stop-limit only fills at your limit or better, which may leave you unfilled.</p></details>

<details><summary>5. Is it okay to move a stop to break-even after price moves your way?</summary><p>Yes. Moving it to reduce risk is fine. Never move it further away.</p></details>

## Try it (no real money)

Look at any chart and pick a pretend entry. Write one sentence: "I'm buying because ___." Then find the price where that sentence would stop being true. That's your stop. Work out the distance as a percentage.

**Key idea:** A stop is your exit, chosen while you're calm. Place it where your idea is wrong, and never move it further away.
