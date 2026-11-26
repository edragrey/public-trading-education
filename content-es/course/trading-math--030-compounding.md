---
title: "Interés compuesto: crecer sobre lo crecido"
module: trading-math
order: 30
summary: Por qué las ganancias pequeñas y constantes se acumulan, por qué los vaivenes grandes te hunden y cómo verlo en tus propios números.
date: 2026-11-26
needs: percentages-and-percent-change
---

El interés compuesto es la idea de que las ganancias (o pérdidas) se aplican a un número que **ya ha cambiado**. Es la idea más poderosa del dinero, y funciona en las dos direcciones.

## Primero, dos palabras

El **crecimiento simple** suma la misma cantidad cada vez. 100 $ que crecen 10 $ al mes: 110 $, 120 $, 130 $.

El **interés compuesto** suma un porcentaje de la cantidad **actual** cada vez. 100 $ que crecen un 10 % al mes: 110 $, 121 $, 133,10 $. Cada paso se apoya en el anterior.

## La pauta

**Cantidad final = inicio × (1 + tasa) ^ número de periodos**

El «^» significa «multiplicado por sí mismo tantas veces». No tienes que hacerlo a mano; la calculadora de abajo lo hace.

> **Ejemplo hipotético.** 1000 $ al +2 % mensual durante 12 meses: se convierten en unos **1268 $**. Sin capitalizar serían 1240 $. La diferencia es pequeña al principio y se ensancha con el tiempo. Es una tasa constante inventada, no una promesa: los mercados reales nunca se mueven en línea recta.

<div class="calc" data-calc="compound">
  <p class="calc-row"><label>Empiezo con $<input data-in="start" type="number" min="0" step="any" value="1000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Ganancia por periodo <input data-in="rate" type="number" step="any" value="2" inputmode="decimal">%</label></p>
  <p class="calc-row"><label>Número de periodos <input data-in="n" type="number" min="1" max="600" step="1" value="12" inputmode="decimal"></label></p>
  <p class="calc-out">Con interés compuesto acabas con <strong data-out="end">$1268</strong>. Sin él: <b data-out="simple">$1240</b>.</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

Prueba una tasa negativa, como −2. Las pérdidas también se componen.

## El otro lado: los vaivenes cuestan

Dos caminos, ambos con una media de +5 % por periodo en dos periodos:

- Constante: +5 %, +5 %. 100 $ → 110,25 $.
- Brusco: +50 %, −40 %. 100 $ → 150 $ → **90 $**.

La media parece igual sobre el papel y los resultados son muy distintos. **La volatilidad arrastra el interés compuesto hacia abajo.** Es otra razón por la que el curso insiste en el riesgo pequeño y constante.

<figure class="fig"><svg viewBox="0 0 320 170" role="img" aria-label="Dos caminos desde 100 $ en dos periodos. Constante, +5 % y +5 %, termina en 110 $. Un vaivén de +50 % y −40 % termina en 90 $, aunque ambos promedian +5 %."><line class="axis" x1="20" y1="130" x2="300" y2="130"/><line class="guide" x1="20" y1="100" x2="300" y2="100"/><text class="lbl" x="22" y="94">$100</text><path class="ln draw" d="M30 100 L160 90 L290 79"/><path class="ln ln-loss draw" d="M30 100 L160 30 L290 112"/><circle class="dot-acc" cx="290" cy="79" r="5"/><circle class="dot-loss" cx="290" cy="112" r="5"/><text class="t-gain" x="288" y="70" text-anchor="end">Constante: 110 $</text><text class="t-loss" x="288" y="132" text-anchor="end">Vaivén: 90 $</text><text class="lbl" x="160" y="22" text-anchor="middle">+50 %</text><text class="lbl" x="30" y="152">inicio</text><text class="lbl" x="160" y="152" text-anchor="middle">tras 1</text><text class="lbl" x="290" y="152" text-anchor="end">tras 2</text></svg><figcaption>Misma media del 5 %, finales muy distintos. Hipotético.</figcaption></figure>

## La advertencia honesta

Las tablas de interés compuesto son populares en redes: «100 $ en un millón en un año». Suponen la misma ganancia enorme cada periodo, sin un solo mal mes. Los resultados reales nunca se ven así. Usa el interés compuesto para entender por qué lo constante gana a lo llamativo, no para pronosticar.

## Errores comunes

- Planificar con una tasa de crecimiento suave que los mercados no dan.
- Olvidar que las pérdidas también se componen.
- Asumir más riesgo para ir más rápido, que suele hacer lo contrario.

## Para profundizar

<details><summary>La regla del 72</summary><p>Divide 72 entre el porcentaje de crecimiento por periodo para estimar cuánto tarda en duplicarse. Al 2 % mensual, 72 ÷ 2 = unos 36 meses. Una regla aproximada, útil para comprobaciones rápidas.</p></details>

## Compruébalo tú mismo

<details><summary>1. 100 $ crecen un 10 % anual durante 2 años con interés compuesto. ¿Cuánto es?</summary><p>100 $ → 110 $ → 121 $.</p></details>

<details><summary>2. ¿Una ganancia del 50 % seguida de una pérdida del 50 % queda en tablas?</summary><p>No. 100 $ → 150 $ → 75 $. Has perdido un 25 %.</p></details>

<details><summary>3. ¿Por qué hacen daño los vaivenes grandes aunque la ganancia media parezca buena?</summary><p>Porque cada pérdida se aplica a un número mayor y cada ganancia parte de uno menor. La volatilidad arrastra el resultado hacia abajo.</p></details>

<details><summary>4. Una web muestra 100 $ convertidos en 1 M$ en un año. ¿Qué falla?</summary><p>Supone la misma ganancia enorme cada periodo sin periodos malos, algo que los mercados reales nunca dan.</p></details>

<details><summary>5. Al 3 % mensual, ¿cuánto tarda más o menos en duplicarse?</summary><p>72 ÷ 3 = unos 24 meses.</p></details>

## Pruébalo (sin dinero real)

Usa la calculadora con una tasa modesta, como el 1 %, y un horizonte largo. Luego prueba −1 %. Mira cómo se acumulan los dos sentidos.

**Idea clave:** el interés compuesto premia las ganancias constantes y castiga los vaivenes grandes, así que protege primero lo que tienes.
