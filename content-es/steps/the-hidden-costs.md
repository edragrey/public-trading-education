---
lesson: the-hidden-costs
title: Los costes ocultos, paso a paso
summary: Comisiones, diferencial, deslizamiento y financiación, con una imagen y una calculadora. Unos 4 minutos.
---

# Los costes ocultos, paso a paso

Una idea pequeña por pantalla, con una calculadora al final. Unos **4 minutos**.

> **Cifras hipotéticas.** La tasa de comisión está inventada pero es típica.

<!-- step -->

## Cuatro costes

**Comisión de trading:** lo que te cobra el exchange por comprar o vender, a menudo cerca del 0,1 %.

**Diferencial:** la diferencia entre bid y ask. Si compras y vendes enseguida, la pierdes.

**Deslizamiento:** la diferencia entre el precio que esperabas y el que obtuviste.

**Financiación:** una comisión periódica en muchos futuros perpetuos de cripto mientras mantienes una posición apalancada.

<figure class="fig"><svg viewBox="0 0 320 130" role="img" aria-label="Una ida y vuelta paga cuatro costes: comisión de entrada, diferencial, deslizamiento y comisión de salida."><text class="t" x="8" y="20">Una ida y vuelta, antes de que el precio se mueva</text><rect class="bar-neutral" x="8" y="34" width="50" height="30" rx="4"/><text class="lbl" x="33" y="82" text-anchor="middle">Comisión entrada</text><rect class="bar-gold" x="58" y="34" width="76" height="30" rx="4"/><text class="lbl" x="96" y="82" text-anchor="middle">Diferencial</text><rect class="bar-ask" x="134" y="34" width="96" height="30" rx="4"/><text class="lbl" x="182" y="82" text-anchor="middle">Deslizamiento</text><rect class="bar-neutral" x="230" y="34" width="82" height="30" rx="4"/><text class="lbl" x="271" y="82" text-anchor="middle">Comisión salida</text><text class="t-loss" x="160" y="116" text-anchor="middle">Empiezas la operación ya por detrás</text></svg><figcaption>Sin escala. Cuatro costes pequeños suman.</figcaption></figure>

<!-- step -->

## Una ida y vuelta cuesta dos veces

Pagas comisión cuando compras **y** cuando vendes.

Una operación de **1.000 $** al **0,1 %** cuesta unos **1 $** para abrir y **1 $** para cerrar: **2 $** por una ida y vuelta.

Si arriesgas **20 $** por operación, las comisiones ya son el **10 %** de tu riesgo.

<!-- step -->

## Comprobación rápida

Una operación de 1.000 $, comisión del 0,1 % en cada sentido. ¿Cuánto cuesta aproximadamente una ida y vuelta?

<div class="quiz" data-answer="c">
<button type="button" data-opt="a">1 $</button>
<button type="button" data-opt="b">0,20 $</button>
<button type="button" data-opt="c">2 $</button>
<p class="quiz-why" hidden>1 $ para abrir más 1 $ para cerrar son <strong>2 $</strong>.</p>
</div>

<!-- step -->

## Prueba tus propias cifras

<div class="calc" data-calc="fees">
  <p class="calc-row"><label>Mis operaciones son de unos $<input data-in="size" type="number" min="0" step="any" value="1000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>La comisión es del <input data-in="fee" type="number" min="0" max="5" step="0.01" value="0.1" inputmode="decimal">% por cada sentido</label></p>
  <p class="calc-row"><label>Hago <input data-in="n" type="number" min="0" step="1" value="50" inputmode="numeric"> idas y vueltas al mes</label></p>
  <p class="calc-row"><label>Mi cuenta es de $<input data-in="account" type="number" min="1" step="any" value="2000" inputmode="decimal"></label></p>
  <p class="calc-out">Las comisiones me cuestan unos <strong data-out="month">$100</strong> al mes. Eso es el <b data-out="pct">5%</b> de mi cuenta.</p>
</div>

<!-- step -->

## El apalancamiento agranda las comisiones

Con apalancamiento, las comisiones se cobran sobre **toda la posición**. Un margen de 100 $ a 10x es una posición de 1.000 $, así que la comisión se siente como un 1 % de tu propio dinero en lugar de un 0,1 %.

<!-- step -->

## Mantén bajos los costes

- **Opera menos.** Menos operaciones y mejores es el recorte más sencillo.
- **Mira la página de comisiones,** sobre todo las tasas maker y taker.
- **Evita los mercados finos,** donde muerden el diferencial y el deslizamiento.

**Idea clave:** Toda operación tiene un coste, incluso las que no van a ninguna parte. Cuenta los costes antes de contar los beneficios.
