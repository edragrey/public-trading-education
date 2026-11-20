---
title: Leverage isn't what wipes you out
summary: "Never use leverage" is safe advice, but it hides the real lesson. Here's what actually decides how much you lose, and the one number most people never check.
date: 2026-11-23
---

I want to write this for everyone who scrolled through their feed last weekend and saw the same post again and again: "got liquidated, lesson learnt."

After a sharp sell-off, that post shows up everywhere. And underneath it, the replies all say the same thing: *never use leverage.* Some of them are kind. Some are smug. Almost none of them explain what actually happened.

So let's do that.

## What liquidation actually is

Three words, one line each:

- **Margin** is the money you put down to open a trade. Think of it as a deposit.
- **Leverage** lets you open a trade bigger than that deposit. At 10x, $100 opens a $1,000 position.
- **Liquidation** is when the exchange closes your trade for you because your losses have nearly eaten the deposit.

Here's a made-up example with exact maths. You put $100 down at 10x and buy $1,000 of a coin. The price drops 10%. Your $1,000 position is now worth $900. You've lost $100, which is your whole deposit, so the exchange closes the trade. It doesn't matter if the price bounces a minute later. You're out.

The rough rule is simple: **the price only has to move about 100% ÷ your leverage against you.** At 10x that's about 10%. At 50x it's about 2%. At 100x it's about 1%, which in crypto can happen in a quiet afternoon. (Real exchanges close you a little earlier than this, because of fees and a small safety buffer.)

## "Never use leverage" is technically true

I'll admit it: if you never use leverage, you can't get liquidated. For a beginner, that's honestly the simplest way to stay safe while you learn. I'm not going to argue against it.

But it's a bit like telling a new driver "never go above 30". It will keep you safe, and it will teach you nothing about why cars crash.

Because here's the thing a beginner misses. Look at three trades on the same $1,000 account:

- **Trade A:** 10x leverage, $100 down. The price drops 10% and you're liquidated. You lose **$100**.
- **Trade B:** 10x leverage, all $1,000 down. That's a $10,000 position. The price drops 10% and you're liquidated. You lose **everything**.
- **Trade C:** no leverage at all, $1,000 position, no plan for getting out. The price drops 30% before you finally sell. You lose **$300**.

A and B use exactly the same leverage. One loses a tenth of the account, the other loses all of it. And C, the "safe" trade with no leverage, loses three times more than A.

So leverage didn't decide those losses. **Position size and the exit did.**

## The number most people never check

Every trade has an exit. Either you choose it in advance, with a stop loss, or the market chooses it for you. On a leveraged trade with no stop, your exit is your **liquidation price**. And most people who post "got liquidated" never looked at it before they clicked.

That's the better line of thinking. Before any trade, leveraged or not, you should know:

1. **How much you'll lose if you're wrong.** A common habit is a small, fixed slice of the account per trade, like 1%.
2. **Where your stop is.** That gives you the position size: loss you accept ÷ distance to the stop. Risk $10 with a 5% stop, and your position is $200.
3. **Where your liquidation price is,** and that it sits well beyond your stop.

That third point is the only place leverage really matters. With a 5% stop at 5x, liquidation is about 20% away, so your stop does its job. With the same 5% stop at 25x, liquidation is about 4% away. You get closed out before your own plan ever gets a vote.

Same position. Same stop. Same $10 of risk on paper. Very different outcome.

## What it honestly costs

I don't want to pretend this is free. Doing it properly has costs:

- **Your positions get smaller.** Sizing from your stop often means trades that feel boringly small. That's the point, but it's slower.
- **Stops aren't perfect.** In a very fast move, a stop can fill at a worse price than you set. That's why you want a wide gap between your stop and your liquidation price, not a thin one.
- **Leverage has its own fees.** Trading fees on the full position, and on many exchanges a regular "funding" fee for as long as you hold.
- **Check your margin setting.** "Cross" margin can use your whole balance to keep a losing trade open. "Isolated" margin only risks what you put in. Plenty of people find out which one they were on the hard way.

None of this is exciting. It won't make a great screenshot. But it's what keeps you in the game long enough to get good.

## Interrogate the advice

The reason I like this topic is that it's a perfect example of advice that's *true* and still not *useful*. "Never use leverage" stops one kind of disaster. "Know your size, your stop and your liquidation price before you click" stops that disaster and the quieter ones too, the slow 30% bleed with no plan.

So next time you see a rule repeated a hundred times in the replies, ask what it's protecting you from, and whether there's a deeper rule underneath it. There usually is.

If you want to try the numbers yourself, the new lesson [What actually happens when you get liquidated](/course/survive-first/what-happens-when-you-get-liquidated/) has a small calculator: put in your account, your risk, your stop and your leverage, and it tells you whether your stop or your liquidation price comes first.

Stay curious, keep your losses small, and enjoy the ride.

*Examples are hypothetical. Educational, not financial advice.*
