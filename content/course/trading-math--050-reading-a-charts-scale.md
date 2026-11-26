---
title: "Reading a chart's scale"
module: trading-math
order: 50
summary: Linear versus log charts, price versus percent, and how a chart's scale can make the same move look calm or wild.
date: 2026-11-26
needs: percentages-and-percent-change
---

Two charts of the same coin can look very different, and neither is lying. The difference is the **scale**. Knowing how to read it stops a chart from fooling you.

## Two words first

The **scale** is how the numbers up the side of a chart are spaced.

A **linear** scale spaces equal **dollar** steps equally: the gap from $10 to $20 looks the same as $20 to $30.

A **log** (logarithmic) scale spaces equal **percent** steps equally: the gap from $10 to $20 (+100%) looks the same as $20 to $40 (+100%).

## Why it matters

> **Hypothetical example.** A price climbs from $1 to $2, then $2 to $4, then $4 to $8. Each step is a doubling (+100%).
> On a **linear** chart, the last climb looks eight times bigger than the first (it is $4 versus $1).
> On a **log** chart, all three steps look the same size, which matches what happened in percent.

For short windows, the two look almost identical. For long histories or big moves, a linear chart makes the newest moves look huge and the old ones tiny.

<figure class="fig"><svg viewBox="0 0 320 150" role="img" aria-label="Three doublings drawn two ways. On a linear chart the bars grow 1, 2, 4. On a log chart all three bars are the same height."><text class="t" x="85" y="18" text-anchor="middle">Linear: dollars</text><text class="t" x="245" y="18" text-anchor="middle">Log: percent</text><line class="axis" x1="10" y1="104" x2="150" y2="104"/><line class="axis" x1="170" y1="104" x2="310" y2="104"/><rect class="bar-bid" x="20" y="94" width="30" height="10" rx="3"/><text class="lbl" x="35" y="120" text-anchor="middle">$1→$2</text><rect class="bar-bid" x="66" y="84" width="30" height="20" rx="3"/><text class="lbl" x="81" y="120" text-anchor="middle">$2→$4</text><rect class="bar-bid" x="112" y="64" width="30" height="40" rx="3"/><text class="lbl" x="127" y="120" text-anchor="middle">$4→$8</text><rect class="bar-bid" x="180" y="80" width="30" height="24" rx="3"/><text class="lbl" x="195" y="120" text-anchor="middle">$1→$2</text><rect class="bar-bid" x="226" y="80" width="30" height="24" rx="3"/><text class="lbl" x="241" y="120" text-anchor="middle">$2→$4</text><rect class="bar-bid" x="272" y="80" width="30" height="24" rx="3"/><text class="lbl" x="287" y="120" text-anchor="middle">$4→$8</text><text class="t-sm" x="160" y="142" text-anchor="middle">Each step is +100%</text></svg><figcaption>Same three doublings. The scale decides how big they look.</figcaption></figure>

## Which to use

- **Linear** for the short term and for placing a stop in dollar terms.
- **Log** for long histories and big swings, where percent is what matters.
- Most charting tools have a small "log" switch. Try both on any long chart.

## Price versus percent

A chart can also show **percent change from a starting point** instead of price. This is how you compare two assets fairly. A $0.10 coin and a $60,000 coin cannot be compared by price, but they can be compared by percent from the same date.

## Other ways a chart can mislead

- **Zoom:** a short window makes a small move look huge. Check the numbers on the side.
- **Cut axis:** a chart that starts at $98 instead of $0 makes a 2% move look dramatic.
- **Different timeframes:** a gentle drift on the daily chart can be a crash on the 1-minute chart. Always check which one you are looking at.

## Common mistakes

- Reading a straight line on a linear chart as "steady", when the percent growth is slowing.
- Comparing two assets by price instead of by percent.
- Trusting a dramatic-looking move without looking at the numbers.

## Go deeper

<details><summary>Why a straight line on a log chart means steady percent growth</summary><p>On a log scale, equal percent steps look equal, so a constant percent growth plots as a straight line. A curve bending up means the percent growth is speeding up; bending down, slowing.</p></details>

## Check yourself

<details><summary>1. On a linear chart, which move looks bigger: $10 to $20, or $100 to $110?</summary><p>$10 to $20 is $10 and $100 to $110 is also $10. They look the same size, even though one is +100% and the other +10%.</p></details>

<details><summary>2. On a log chart, which looks bigger?</summary><p>$10 to $20 (+100%) looks much bigger than $100 to $110 (+10%).</p></details>

<details><summary>3. How do you fairly compare a $0.10 coin and a $60,000 coin?</summary><p>By percent change from the same starting date, not by price.</p></details>

<details><summary>4. A chart's axis starts at $98 and ends at $102. Is that a big move?</summary><p>No. It is about 4% at most. The tight axis makes it look dramatic.</p></details>

<details><summary>5. When is a log scale most useful?</summary><p>For long histories or very large moves, where percent changes matter more than dollar changes.</p></details>

## Try it (no real money)

Open a chart of any coin over the last 3 years. Switch between linear and log. Notice which old moves appear or disappear.

**Key idea:** a linear chart shows dollars and a log chart shows percent, so choose the one that matches the question you are asking.
