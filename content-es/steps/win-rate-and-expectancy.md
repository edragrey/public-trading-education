---
lesson: win-rate-and-expectancy
title: Expectativa, paso a paso
summary: Por qué ganar a menudo no es lo mismo que ganar dinero. Paso a paso, con preguntas rápidas y una calculadora. Unos 4 minutos.
---

# Expectativa, paso a paso

Una idea pequeña por pantalla, algunas preguntas rápidas y una calculadora al final. Unos **4 minutos**.

> **Ejemplos hipotéticos.** Todas las cifras son inventadas, pero la aritmética es exacta. Se omiten las comisiones.

<!-- step -->

## «¡Gana el 80 % de las veces!»

Verás esta frase por todas partes. Suena a una gran estrategia.

Pero solo te dice **con qué frecuencia** gana. No **cuánto**.

<!-- step -->

## Dos palabras

**Porcentaje de acierto:** la parte de operaciones que ganan dinero.

**Expectativa:** lo que ganas o pierdes **de media por operación**, a lo largo de muchas operaciones.

<!-- step -->

## Conoce al trader A

Gana el **80 %** de las veces. Genial.

- Ganancia media: **10 $**
- Pérdida media: **50 $**

De 10 operaciones: 8 ganadas × 10 $ = **80 $**. 2 perdidas × 50 $ = **100 $**.

<!-- step -->

## Comprobación rápida

Tras esas 10 operaciones, ¿dónde está el trader A?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">80 $ arriba</button>
<button type="button" data-opt="b">20 $ abajo</button>
<button type="button" data-opt="c">Exactamente en tablas</button>
<p class="quiz-why" hidden>80 $ de entrada, 100 $ de salida: <strong>20 $ abajo</strong>. Son −2 $ por operación, incluso con un 80 % de acierto.</p>
</div>

<!-- step -->

## Conoce al trader B

Gana solo el **40 %** de las veces.

- Ganancia media: **30 $**
- Pérdida media: **10 $**

De 10 operaciones: 4 ganadas × 30 $ = **120 $**. 6 perdidas × 10 $ = **60 $**.

<!-- step -->

## Comprobación rápida

Tras esas 10 operaciones, ¿dónde está el trader B?

<div class="quiz" data-answer="a">
<button type="button" data-opt="a">60 $ arriba</button>
<button type="button" data-opt="b">60 $ abajo</button>
<button type="button" data-opt="c">120 $ arriba</button>
<p class="quiz-why" hidden>120 $ de entrada, 60 $ de salida: <strong>60 $ arriba</strong>. Son +6 $ por operación, equivocándose la mayoría de las veces.</p>
</div>

<!-- step -->

## La cuenta

**Expectativa = (porcentaje de acierto × ganancia media) − (porcentaje de fallo × pérdida media)**

Trader A: (0,8 × 10 $) − (0,2 × 50 $) = **−2 $**

Trader B: (0,4 × 30 $) − (0,6 × 10 $) = **+6 $**

<figure class="fig"><svg viewBox="0 0 320 156" role="img" aria-label="El trader A gana a menudo pero pierde 20 $ en diez operaciones; el trader B gana menos veces pero obtiene 60 $."><text class="t" x="10" y="18">Trader A: acierta el 80 %</text><rect class="bar-bid" x="10" y="26" width="104" height="18" rx="3"/><text class="lbl" x="122" y="40">ganancias 80 $</text><rect class="bar-ask" x="10" y="50" width="130" height="18" rx="3"/><text class="lbl" x="148" y="64">pérdidas 100 $</text><text class="t-loss" x="310" y="18" text-anchor="end">−20 $</text><text class="t" x="10" y="92">Trader B: acierta el 40 %</text><rect class="bar-bid" x="10" y="100" width="156" height="18" rx="3"/><text class="lbl" x="174" y="114">ganancias 120 $</text><rect class="bar-ask" x="10" y="124" width="78" height="18" rx="3"/><text class="lbl" x="96" y="138">pérdidas 60 $</text><text class="t-gain" x="310" y="92" text-anchor="end">+60 $</text></svg><figcaption>Tras 10 operaciones cada uno. Importa cuánto ganas, no solo cuántas veces.</figcaption></figure>

<!-- step -->

## Por qué ocurre lo del trader A

Ganar se siente bien, así que es tentador coger pequeños beneficios rápido. Perder se siente mal, así que es tentador aguantar las perdedoras y esperar.

Eso produce muchas ganancias pequeñas y unas pocas pérdidas grandes. Un **stop** y un **objetivo** elegidos de antemano lo mantienen a raya.

<!-- step -->

## Comprobación rápida

Una estrategia gana el **90 %** de las veces. ¿Es rentable?

<div class="quiz" data-answer="c">
<button type="button" data-opt="a">Sí, claramente</button>
<button type="button" data-opt="b">No, claramente</button>
<button type="button" data-opt="c">Aún no se puede saber</button>
<p class="quiz-why" hidden><strong>No se puede saber.</strong> También necesitas la ganancia media y la pérdida media. Una sola pérdida grande puede borrar nueve ganancias pequeñas.</p>
</div>

<!-- step -->

## Pruébalo tú mismo

<div class="calc" data-calc="expectancy">
  <p class="calc-row"><label>Gano el <input data-in="win" type="number" min="0" max="100" step="1" value="80" inputmode="decimal">% de las operaciones</label></p>
  <p class="calc-row"><label>Mi ganancia media es de $<input data-in="avgwin" type="number" min="0" step="any" value="10" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Mi pérdida media es de $<input data-in="avgloss" type="number" min="0" step="any" value="50" inputmode="decimal"></label></p>
  <p class="calc-out">De media obtengo <strong data-out="exp">−$2</strong> por operación. En 100 operaciones son unos <b data-out="hundred">−$200</b>.</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

<!-- step -->

## Ya lo tienes

**Con qué frecuencia ganas importa menos que cuánto ganas y pierdes. La expectativa junta las dos cosas.**

Una cosa más: necesitas muchas operaciones, anotadas con honestidad, antes de que tu propia expectativa signifique algo. Diez no bastan.
