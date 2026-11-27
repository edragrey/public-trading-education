---
title: "Las bandas de Bollinger, en palabras sencillas"
module: read-the-market
order: 57
summary: Las bandas de Bollinger dibujan una envoltura elástica alrededor del precio que se ensancha cuando el mercado se agita y se estrecha cuando está tranquilo. Muestran lo inusual que es un movimiento, no dónde girará.
date: 2026-11-26
section: The chart
needs: volatility-and-atr, moving-averages
---

Ya conoces la volatilidad: cuánto se mueve normalmente el precio. Las **bandas de Bollinger** dibujan esa idea sobre el propio gráfico, como una banda que se estira y se encoge alrededor del precio.

## Dos palabras primero

- **Desviación típica:** un número que dice cuán dispersos están los precios recientes alrededor de su media. Más dispersión, número más grande. No hace falta calcularla; lo hace el gráfico.
- **Banda:** una línea por encima y por debajo del precio.

## Qué ves

Tres líneas:

1. **La línea central:** una media móvil, normalmente de las últimas 20 velas.
2. **La banda superior:** la línea central más 2 desviaciones típicas.
3. **La banda inferior:** la línea central menos 2 desviaciones típicas.

Como las bandas salen de la dispersión reciente, se **ensanchan** cuando el precio oscila mucho y se **estrechan** cuando está tranquilo. Alrededor de nueve de cada diez velas cierran dentro de las bandas, así que tocar una es inusual, pero no raro.

<figure class="fig"><svg viewBox="0 0 320 150" role="img" aria-label="Bandas de Bollinger que se estrechan en un periodo tranquilo y luego se abren cuando el precio rompe al alza."><path d="M20 40 Q80 55 140 62 T200 66 Q250 60 300 28" fill="none" class="guide" style="stroke:var(--muted)"/><path d="M20 100 Q80 90 140 84 T200 80 Q250 90 300 124" fill="none" class="guide" style="stroke:var(--muted)"/><path d="M20 70 L90 74 L140 73 L200 73 L250 60 L300 38" fill="none" class="ln"/><text class="lbl" x="110" y="52">Compresión: calma, bandas juntas</text><text class="lbl" x="200" y="142">Expansión: bandas abiertas</text></svg><figcaption>Las bandas se cierran cuando el mercado está tranquilo y se abren cuando se mueve. Hipotético.</figcaption></figure>

## Cómo las usa la gente

- **La compresión:** bandas muy juntas indican una volatilidad inusualmente baja. La volatilidad llega en olas, así que a menudo sigue un estallido. Las bandas no dicen en qué dirección.
- **Cabalgar la banda:** en una tendencia fuerte, el precio puede pegarse a la banda superior mucho tiempo. Tocarla ahí significa fuerza, no «vende».
- **Vuelta a la media en un rango:** en un mercado lateral, el precio suele rebotar entre las bandas y volver hacia el centro. Funciona hasta que el rango se rompe.

> **Ejemplo hipotético.** Una moneda cotiza en un rango estrecho diez días y las bandas se comprimen. Luego el precio cierra por encima de la banda superior con mucho volumen y sigue subiendo. Un principiante la vende en corto porque está «fuera de la banda». La banda le decía que el movimiento era inusual y fuerte, no que hubiera terminado.

## Los límites, con honestidad

- Tocar una banda **no** es una señal de compra ni de venta. Solo dice que el precio está lejos de su media reciente.
- Las bandas llegan tarde, porque se construyen con precios pasados.
- En tendencia, ir contra la banda te arrolla. En rango, cabalgarla te destroza a pequeños golpes. Primero decide en qué mercado estás.

## Errores comunes

- Vender cada vez que el precio toca la banda superior.
- Suponer que una compresión indica la dirección de la ruptura.
- Usar las bandas sin ningún contexto de tendencia o estructura.

## Para ir más a fondo

<details><summary>Bandas frente a ATR</summary><p>Ambos miden la volatilidad. El ATR da una distancia en dólares fácil de convertir en un stop y en un tamaño de posición. Las bandas muestran lo mismo de forma visual en el gráfico. Muchos traders usan el ATR para las cuentas y las bandas para echar un vistazo rápido.</p></details>

## Compruébalo tú

<details><summary>1. ¿Qué hace que las bandas se ensanchen?</summary><p>Oscilaciones de precio recientes más grandes, es decir, mayor volatilidad.</p></details>

<details><summary>2. ¿Qué te dice una compresión?</summary><p>Que la volatilidad es inusualmente baja y a menudo sigue un movimiento mayor. No te dice la dirección.</p></details>

<details><summary>3. El precio toca la banda superior en una tendencia alcista fuerte. ¿Es una señal de venta?</summary><p>No por sí sola. En una tendencia fuerte el precio puede quedarse cerca de la banda superior mucho tiempo.</p></details>

<details><summary>4. ¿Dónde funcionan mejor las ideas de rebote en las bandas?</summary><p>En rangos laterales, hasta que el rango se rompe.</p></details>

<details><summary>5. ¿Qué debes decidir antes de usar las bandas?</summary><p>Si el mercado está en tendencia o en rango.</p></details>

## Pruébalo (sin dinero real)

Añade bandas de Bollinger a un gráfico. Encuentra dos compresiones. Para cada una, anota en qué dirección rompió el precio y hasta dónde llegó en las diez velas siguientes. ¿Era obvia la dirección de antemano?

**Idea clave:** Las bandas de Bollinger muestran cuán estirado está el precio respecto a su rango reciente. Las compresiones avisan de que puede venir un gran movimiento, pero nunca dicen hacia dónde.
