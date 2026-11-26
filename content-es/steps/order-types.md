---
lesson: order-types
title: Tipos de orden, paso a paso
summary: Órdenes de mercado, limitadas y stop, una a una, con preguntas rápidas. Unos 4 minutos.
---

# Tipos de orden, paso a paso

Una idea pequeña por pantalla, con algunas preguntas rápidas. Unos **4 minutos**.

<!-- step -->

## Qué es una orden

Una **orden** es tu instrucción al mercado.

El **tipo** de orden decide cómo y cuándo se ejecuta.

<!-- step -->

## Orden de mercado: ya

«Compra (o vende) **ahora mismo** al mejor precio disponible.»

- Se ejecuta enseguida.
- Pagas el diferencial, y una orden grande puede conseguir un peor precio (deslizamiento).

<!-- step -->

## Comprobación rápida

El mejor ask es 50,10 $. Pones una compra de mercado. ¿Cuánto pagas aproximadamente?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">50,00 $</button>
<button type="button" data-opt="b">Cerca de 50,10 $</button>
<p class="quiz-why" hidden><strong>Cerca de 50,10 $.</strong> Una compra de mercado toma al mejor vendedor, el ask.</p>
</div>

<!-- step -->

## Orden limitada: mi precio

«Compra (o vende) **solo a este precio o mejor**.»

- Una compra limitada queda **por debajo** del precio. Una venta limitada, **por encima**.
- Controlas el precio.
- Puede que **nunca se ejecute**.

<!-- step -->

## Comprobación rápida

Una moneda está a 100 $. Quieres comprar solo si baja a 98 $. ¿Qué orden usas?

<div class="quiz" data-answer="a">
<button type="button" data-opt="a">Una compra limitada a 98 $</button>
<button type="button" data-opt="b">Una compra de mercado</button>
<p class="quiz-why" hidden><strong>Una compra limitada a 98 $.</strong> Espera tu precio. Una compra de mercado se ejecutaría ahora a 100 $.</p>
</div>

<!-- step -->

## Orden stop: un disparador

Un **stop** espera hasta que el precio llega a un disparador y entonces se convierte en una orden.

Un **stop-loss** es tu salida de seguridad. Limita una pérdida si te equivocas.

Un stop de mercado se ejecuta rápido pero puede deslizarse. Un stop limitado controla el precio pero puede no ejecutarse.

<!-- step -->

## Comprobación rápida

¿Por qué un stop de mercado puede ejecutarse peor que tu precio de stop?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">Los exchanges añaden una comisión</button>
<button type="button" data-opt="b">En un movimiento rápido puede no haber compradores a tu precio</button>
<p class="quiz-why" hidden><strong>Movimientos rápidos.</strong> Una vez disparado es una orden de mercado, así que toma el siguiente mejor precio.</p>
</div>

<!-- step -->

## ¿Cuál y cuándo?

- Entrar ya, un pequeño deslizamiento es aceptable: **de mercado**.
- Tengo un precio en mente y puedo esperar: **limitada**.
- Salida de seguridad si me equivoco: **stop-loss**.

**Idea clave:** El tipo de orden decide cómo operas. Elígelo a propósito.

<figure class="fig"><svg viewBox="0 0 320 170" role="img" aria-label="Tipos de orden alrededor del precio actual: una venta limitada por encima, una orden de mercado en el precio, una compra limitada por debajo y un stop-loss más abajo."><line class="guide" x1="20" y1="28" x2="300" y2="28"/><line class="axis" x1="20" y1="76" x2="300" y2="76"/><line class="guide" x1="20" y1="118" x2="300" y2="118"/><line class="guide" x1="20" y1="150" x2="300" y2="150" style="stroke:var(--loss)"/><text class="t-gain" x="24" y="22">Venta limitada (por encima)</text><text class="t" x="24" y="70">Precio ahora: la orden de mercado se ejecuta aquí</text><text class="t-gain" x="24" y="112">Compra limitada (por debajo)</text><text class="t-loss" x="24" y="144">Stop-loss (más abajo)</text><circle class="dot pulse" cx="296" cy="76" r="5"/></svg><figcaption>Dónde se sitúa cada tipo de orden respecto al precio actual.</figcaption></figure>

