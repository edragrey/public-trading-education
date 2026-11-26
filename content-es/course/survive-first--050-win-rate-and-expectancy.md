---
title: "La tasa de acierto no lo es todo: la expectativa"
module: survive-first
order: 60
summary: Por qué una estrategia que gana la mayoría de las veces aún puede perder dinero, y el único número que te dice si de verdad funciona.
date: 2026-11-21
needs: think-in-probabilities, risk-and-reward
---

«¡Esta estrategia gana el 80 % de las veces!» es una de las frases más habituales en las redes sociales de trading. Suena genial. Por sí sola, no te dice casi nada. Esta lección muestra por qué y qué mirar en su lugar.

## Primero, dos palabras

La **tasa de acierto** (win rate) es la proporción de tus operaciones que ganan dinero. 6 ganadoras de 10 operaciones es una tasa de acierto del 60 %.

La **expectativa** (expectancy) es lo que ganas o pierdes **de media por operación**, a lo largo de muchas operaciones. Combina con qué frecuencia ganas y cuánto ganas y pierdes.

## La cuenta

**Expectativa = (tasa de acierto × ganancia media) − (tasa de fallo × pérdida media)**

La tasa de fallo es simplemente el 100 % menos la tasa de acierto.

## Dos traders hipotéticos

> **Ejemplo hipotético.** Ambos traders son inventados, pero la aritmética es exacta. Se dejan fuera las comisiones.

El **trader A** gana el **80 %** de las operaciones. Ganancia media: **10 $**. Pérdida media: **50 $**.

- 0,8 × 10 $ = 8 $ que entran
- 0,2 × 50 $ = 10 $ que salen
- Expectativa: **−2 $ por operación**. En 100 operaciones, aproximadamente **−200 $**.

El **trader B** gana solo el **40 %** de las operaciones. Ganancia media: **30 $**. Pérdida media: **10 $**.

- 0,4 × 30 $ = 12 $ que entran
- 0,6 × 10 $ = 6 $ que salen
- Expectativa: **+6 $ por operación**. En 100 operaciones, aproximadamente **+600 $**.

| | Tasa de acierto | Ganancia media | Pérdida media | Por operación, de media |
| --- | --- | --- | --- | --- |
| Trader A | 80 % | 10 $ | 50 $ | **−2 $** |
| Trader B | 40 % | 30 $ | 10 $ | **+6 $** |

El trader A siente que acierta casi todos los días y pierde dinero poco a poco. El trader B se equivoca casi todos los días y lo gana poco a poco.

<div class="calc" data-calc="expectancy">
  <p class="calc-row"><label>Gano el <input data-in="win" type="number" min="0" max="100" step="1" value="40" inputmode="decimal">% de las operaciones</label></p>
  <p class="calc-row"><label>Mi ganancia media es de $<input data-in="avgwin" type="number" min="0" step="any" value="30" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Mi pérdida media es de $<input data-in="avgloss" type="number" min="0" step="any" value="10" inputmode="decimal"></label></p>
  <p class="calc-out">De media gano <strong data-out="exp">$6</strong> por operación. En 100 operaciones son unos <b data-out="hundred">$600</b>.</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

## Por qué las tasas de acierto altas son tan tentadoras

Ganar sienta bien y perder sienta mal. Así que es natural tomar beneficios rápido (muchas ganancias pequeñas) y mantener las perdedoras esperando que vuelvan (unas pocas pérdidas grandes). Ese es exactamente el patrón del trader A. Un stop (la lección de stops) y un objetivo planificado (la lección de riesgo y beneficio) son lo que evita que se cuele.

## La letra pequeña honesta

- **Necesitas muchas operaciones.** Diez operaciones te dicen muy poco. La expectativa solo empieza a significar algo tras 30, 50 o más, todas anotadas con honestidad.
- **El pasado no es una promesa.** Incluso una buena expectativa en 100 operaciones puede cambiar cuando cambia el mercado.
- **Las comisiones cuentan.** Réstalas de tu ganancia media y súmalas a tu pérdida media (la lección de costes ocultos). Una pequeña expectativa positiva puede volverse negativa al incluirlas.

## Errores comunes

- Perseguir una tasa de acierto alta ignorando lo grandes que son las pérdidas.
- Juzgar la expectativa a partir de un puñado de operaciones.
- Olvidar incluir los costes en el cálculo.

## Profundiza

<details><summary>La expectativa en R</summary><p>Mide los resultados en R (unidades de lo que arriesgaste). Expectativa = (tasa de acierto × ganancia media en R) − (tasa de fallo × pérdida media en R). Te permite comparar estrategias con tamaños distintos.</p></details>

## Compruébalo tú

<details><summary>1. Una estrategia gana el 90 % de las veces. ¿Es rentable?</summary><p>No puedes saberlo. También necesitas la ganancia media y la pérdida media. Una sola pérdida grande puede borrar muchas ganancias pequeñas.</p></details>

<details><summary>2. Tasa de acierto del 50 %, ganancia media de 20 $, pérdida media de 10 $. ¿Cuál es la expectativa?</summary><p>(0,5 × 20 $) − (0,5 × 10 $) = 10 $ − 5 $ = +5 $ por operación.</p></details>

<details><summary>3. ¿Por qué 10 operaciones no bastan para conocer tu expectativa?</summary><p>Porque en pocas operaciones domina la suerte. Hacen falta muchas operaciones para que la media se asiente y signifique algo.</p></details>

<details><summary>4. Tasa de acierto del 35 %, ganancia media de 3R, pérdida media de 1R. ¿Expectativa?</summary><p>0,35 × 3 − 0,65 × 1 = +0,40R.</p></details>

<details><summary>5. Tasa de acierto del 80 %, ganancia media de 0,2R, pérdida media de 1R. ¿Expectativa?</summary><p>0,8 × 0,2 − 0,2 × 1 = −0,04R, ligeramente negativa pese a ganar la mayoría de las operaciones.</p></details>

## Pruébalo (sin dinero real)

Si has operado antes, revisa tus últimas 10 a 20 operaciones, incluso las simuladas. Cuenta las ganadoras y las perdedoras y calcula la media de cada una. Ponlas en la calculadora. Si no has operado, ten esta lección presente para la lección del diario más adelante.

**Idea clave:** Con qué frecuencia ganas importa menos que cuánto ganas y pierdes. La expectativa junta las dos cosas.
