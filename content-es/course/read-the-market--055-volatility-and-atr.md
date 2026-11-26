---
title: "Volatilidad y ATR: ¿cuánto se mueve normalmente?"
module: read-the-market
order: 55
section: The chart
summary: Una forma sencilla de medir cuánto se mueve normalmente un precio en un día, y cómo usar ese número para poner un stop ni demasiado ajustado ni demasiado lejos.
date: 2026-11-26
needs: stop-losses, how-to-read-a-candlestick
---

Algunas monedas se mueven un 1 % en un día tranquilo. Otras, un 10 %. Si pones el mismo stop en las dos, una te sacará por ruido y la otra quizá nunca se pruebe. Necesitas una medida de **cuánto se mueve normalmente un precio**.

## Primero, dos palabras

La **volatilidad** es cuánto y con qué rapidez se mueve un precio. Un mercado volátil tiene vaivenes grandes; uno tranquilo, pequeños.

El **ATR** (Average True Range, rango medio verdadero) es una medida habitual: el **tamaño medio de una vela** en un periodo reciente, normalmente 14. Las herramientas de gráficos lo muestran como una línea que puedes añadir. No necesitas calcularlo a mano.

## Qué te dice el ATR

> **Ejemplo hipotético.** Una moneda cotiza a 100 $ y su ATR de 14 días es 4 $. En un día medio se mueve unos 4 $, o un 4 %.

- Un stop a solo **2 $** está dentro del movimiento normal de un día. Te sacaría el ruido.
- Un stop a **8 $** (2 × ATR) deja respirar al precio.

<figure class="fig"><svg viewBox="0 0 320 150" role="img" aria-label="Dos stops desde una entrada de 100 $. Un stop de 2 $ queda dentro del movimiento diario normal y lo saca el ruido. Un stop de 8 $ a 2 veces el ATR queda fuera."><rect fill="var(--gold-soft)" x="30" y="48" width="260" height="44"/><line class="axis" x1="30" y1="70" x2="300" y2="70"/><line class="guide" x1="30" y1="80" x2="300" y2="80" style="stroke:var(--loss)"/><line class="guide" x1="30" y1="124" x2="300" y2="124" style="stroke:var(--accent)"/><text class="t" x="296" y="64" text-anchor="end">Entrada 100 $</text><text class="lbl" x="36" y="44">Rango diario normal (ATR 4 $)</text><text class="t-loss" x="296" y="76" text-anchor="end">98 $: dentro del ruido</text><text class="t-gain" x="296" y="118" text-anchor="end">92 $: 2 × ATR, con margen</text></svg><figcaption>La banda sombreada es el movimiento de un día normal. Hipotético.</figcaption></figure>

## Usar el ATR para poner un stop

Un enfoque habitual es colocar el stop a un múltiplo del ATR de tu entrada, como 1,5 o 2 veces, en vez de un número al azar.

> **Ejemplo hipotético.** Entrada 100 $, ATR 4 $. Eliges un stop a 2 × ATR = 8 $ por debajo: **92 $**. Tu plan arriesga 40 $ en esta operación. Tamaño de posición = 40 $ ÷ 8 $ por unidad = **5 unidades**.

Fíjate en lo que pasa con el **tamaño**. Un ATR mayor significa un stop más amplio, así que para el mismo riesgo en dólares debes tener **menos unidades**. Los mercados volátiles piden posiciones menores.

| | ATR | Distancia del stop (2 × ATR) | Unidades para 40 $ de riesgo |
| --- | --- | --- | --- |
| Moneda tranquila | 1 $ | 2 $ | 20 |
| Moneda salvaje | 4 $ | 8 $ | 5 |

## El ATR también ayuda con

- **Stops de seguimiento:** síguelos unos ATR por debajo del máximo.
- **Objetivos:** ¿un objetivo está a 1 ATR (probable hoy) o a 10 ATR (poco probable)?
- **Comparar mercados:** el ATR como porcentaje del precio muestra cuál es más salvaje.

## Los límites honestos

- El ATR mide el **pasado**. Una noticia grande puede romperlo.
- No dice nada de la dirección, solo del tamaño del movimiento.
- La volatilidad viene en olas: los periodos tranquilos suelen acabar en un estallido.

## Errores comunes

- Usar el mismo stop fijo en dólares en todos los mercados.
- Ampliar el stop por la volatilidad pero no reducir la posición.
- Tratar el ATR como un pronóstico.

## Para profundizar

<details><summary>Rango verdadero</summary><p>El «verdadero» del rango verdadero significa que incluye los huecos: toma el mayor entre el rango máximo-mínimo de la vela o la distancia desde el cierre anterior hasta el máximo o el mínimo. Así cuentan también los huecos nocturnos.</p></details>

## Compruébalo tú mismo

<details><summary>1. ¿Qué mide el ATR?</summary><p>El tamaño medio de una vela en un periodo reciente: cuánto se mueve normalmente un precio.</p></details>

<details><summary>2. El ATR es 5 $. ¿Dónde está un stop de 2 × ATR para una compra a 100 $?</summary><p>10 $ por debajo: 90 $.</p></details>

<details><summary>3. Un ATR mayor: ¿stop más amplio o más ajustado?</summary><p>Más amplio, así que necesitas una posición menor para el mismo riesgo en dólares.</p></details>

<details><summary>4. ¿Muestra el ATR la dirección?</summary><p>No. Solo cuánto tiende a moverse un precio.</p></details>

<details><summary>5. Riesgo 60 $, distancia del stop 12 $. ¿Unidades?</summary><p>60 ÷ 12 = 5 unidades.</p></details>

## Pruébalo (sin dinero real)

Añade el ATR (14) a un gráfico de dos monedas distintas. Compara el ATR como porcentaje del precio y anota cuál es más salvaje.

**Idea clave:** el ATR mide cuánto se mueve normalmente un precio, así que los stops se ajustan al mercado y no se adivinan.
