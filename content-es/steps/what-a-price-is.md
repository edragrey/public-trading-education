---
lesson: what-a-price-is
title: Qué es un precio, paso a paso
summary: Bid, ask, diferencial y libro de órdenes, con una imagen que se mueve. Unos 4 minutos.
---

# Qué es un precio, paso a paso

Una idea pequeña por pantalla, con un libro de órdenes que puedes ver moverse. Unos **4 minutos**.

> **Cifras hipotéticas.** La moneda y el libro están inventados.

<!-- step -->

## Un precio es un trato

El precio en tu pantalla es simplemente **el último precio al que alguien compró y otro vendió**. No es un valor justo ni un pronóstico. Es el trato más reciente.

<!-- step -->

## Bid y ask

**Bid:** el precio más alto que ofrece ahora cualquier comprador.

**Ask:** el precio más bajo que acepta cualquier vendedor.

La diferencia entre ambos es el **diferencial** (spread).

<figure class="fig"><svg viewBox="0 0 320 218" role="img" aria-label="Un libro de órdenes: vendedores esperando a precios más altos en rojo, compradores esperando a precios más bajos en verde, con el diferencial entre ambos."><text class="lbl" x="8" y="24">100,20 $</text><rect class="bar-ask " x="80" y="8" width="150" height="22" rx="4"/><text class="t-loss" x="238" y="24">15</text><text class="lbl" x="8" y="50">100,10 $</text><rect class="bar-ask " x="80" y="34" width="80" height="22" rx="4"/><text class="t-loss" x="168" y="50">8</text><text class="lbl" x="8" y="76">100,05 $</text><rect class="bar-ask " x="80" y="60" width="50" height="22" rx="4"/><text class="t-loss" x="138" y="76">5</text><rect class="spread-row" x="0" y="86" width="320" height="20" rx="4"/><text class="t-sm" x="160" y="100" text-anchor="middle">Diferencial: 0,05 $</text><text class="lbl" x="8" y="126">100,00 $</text><rect class="bar-bid" x="80" y="110" width="60" height="22" rx="4"/><text class="t-gain" x="148" y="126">6</text><text class="lbl" x="8" y="152">99,90 $</text><rect class="bar-bid" x="80" y="136" width="100" height="22" rx="4"/><text class="t-gain" x="188" y="152">10</text><text class="lbl" x="8" y="178">99,80 $</text><rect class="bar-bid" x="80" y="162" width="200" height="22" rx="4"/><text class="t-gain" x="288" y="178">20</text><rect class="bar-ask" x="8" y="198" width="12" height="12" rx="3"/><text class="lbl" x="26" y="209">Vendedores (ask)</text><rect class="bar-bid" x="168" y="198" width="12" height="12" rx="3"/><text class="lbl" x="186" y="209">Compradores (bid)</text></svg><figcaption>Un libro de órdenes inventado. Las barras muestran cuántas monedas esperan a cada precio.</figcaption></figure>

<!-- step -->

## Comprobación rápida

El mejor bid es **100,00 $** y el mejor ask es **100,05 $**. Quieres comprar **ahora mismo**. ¿Qué pagas?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">100,00 $</button>
<button type="button" data-opt="b">100,05 $</button>
<button type="button" data-opt="c">100,025 $</button>
<p class="quiz-why" hidden>Comprar ahora mismo significa tomar el <strong>ask</strong>. Vender ahora mismo te da el bid.</p>
</div>

<!-- step -->

## Mira cómo se mueve un precio

Alguien envía una **orden de mercado** para comprar 10 monedas. Mira las barras rojas.

<figure class="fig"><svg viewBox="0 0 320 218" role="img" aria-label="Un libro de órdenes: vendedores esperando a precios más altos en rojo, compradores esperando a precios más bajos en verde, con el diferencial entre ambos."><text class="lbl" x="8" y="24">100,20 $</text><rect class="bar-ask " x="80" y="8" width="150" height="22" rx="4"/><text class="t-loss" x="238" y="24">15</text><text class="lbl" x="8" y="50">100,10 $</text><rect class="bar-ask eat2" x="80" y="34" width="80" height="22" rx="4"/><text class="t-loss" x="168" y="50">8</text><text class="lbl" x="8" y="76">100,05 $</text><rect class="bar-ask eat" x="80" y="60" width="50" height="22" rx="4"/><text class="t-loss" x="138" y="76">5</text><rect class="spread-row" x="0" y="86" width="320" height="20" rx="4"/><text class="t-sm" x="160" y="100" text-anchor="middle">Diferencial: 0,05 $</text><text class="lbl" x="8" y="126">100,00 $</text><rect class="bar-bid" x="80" y="110" width="60" height="22" rx="4"/><text class="t-gain" x="148" y="126">6</text><text class="lbl" x="8" y="152">99,90 $</text><rect class="bar-bid" x="80" y="136" width="100" height="22" rx="4"/><text class="t-gain" x="188" y="152">10</text><text class="lbl" x="8" y="178">99,80 $</text><rect class="bar-bid" x="80" y="162" width="200" height="22" rx="4"/><text class="t-gain" x="288" y="178">20</text><rect class="bar-ask" x="8" y="198" width="12" height="12" rx="3"/><text class="lbl" x="26" y="209">Vendedores (ask)</text><rect class="bar-bid" x="168" y="198" width="12" height="12" rx="3"/><text class="lbl" x="186" y="209">Compradores (bid)</text></svg><figcaption>Una orden de mercado para comprar 10 monedas se come los ask más baratos. Cifras hipotéticas.</figcaption></figure>

Se lleva las 5 monedas a 100,05 $, luego 5 de las 8 a 100,10 $. El último trato fue a **100,10 $**, así que ese es el nuevo precio.

<!-- step -->

## No «pasó» nada

No hubo noticias. Un comprador estaba más impaciente que los vendedores que esperaban, y agotó las monedas más baratas. **Así funciona cada movimiento de precio.**

<!-- step -->

## Dos tipos de orden

**Orden de mercado:** compra o vende ahora, al mejor precio disponible. Se ejecuta enseguida.

**Orden limitada:** compra o vende solo a tu precio o mejor. Espera en el libro y puede que nunca se ejecute.

<!-- step -->

## Comprobación rápida

¿Qué es el **deslizamiento** (slippage)?

<div class="quiz" data-answer="a">
<button type="button" data-opt="a">La diferencia entre el precio que esperabas y el que obtuviste</button>
<button type="button" data-opt="b">Una comisión que cobra el exchange</button>
<button type="button" data-opt="c">La diferencia entre bid y ask</button>
<p class="quiz-why" hidden>El deslizamiento es la diferencia entre el precio esperado y el real, y crece cuando el libro es fino.</p>
</div>

<!-- step -->

## Idea clave

Un precio es el último trato. Compras al ask y vendes al bid, y las órdenes grandes mueven más el precio cuando el libro es fino.
