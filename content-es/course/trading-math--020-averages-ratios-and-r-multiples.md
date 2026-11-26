---
title: "Medias, ratios y múltiplos de R"
module: trading-math
order: 20
summary: Medias y ratios en palabras sencillas, y la R, la unidad simple que usan los traders para comparar operaciones de distinto tamaño.
date: 2026-11-26
needs: percentages-and-percent-change
---

Los traders hablan de «ganancia media», «ratio riesgo-beneficio 2:1» y «gané 3R». Suena técnico, pero solo son medias y ratios. Esta lección los hace normales.

## Primero, dos palabras

Una **media** es el total dividido entre cuántas cosas hay. Ganancias de 10 $, 30 $ y 20 $ suman 60 $; entre 3 operaciones, la ganancia media es de **20 $**.

Un **ratio** compara dos cantidades. 2:1 («dos a uno») significa que una es el doble de la otra. Un ratio beneficio-riesgo de 2:1 significa que aspiras a ganar el doble de lo que arriesgas.

## Por qué las medias esconden cosas

> **Ejemplo hipotético.** Cinco operaciones: +10 $, +10 $, +10 $, +10 $, −100 $. El resultado medio es (40 − 100) ÷ 5 = **−12 $ por operación**. Cuatro ganadoras de cinco (80 %) y aun así pierdes. Una pérdida grande pesó más que las ganancias pequeñas.

La media es útil, pero solo junto a lo grande que puede ser la mayor pérdida.

## R: tu riesgo como regla

Operaciones distintas tienen tamaños distintos en dólares. Para compararlas con justicia, los traders miden los resultados en **R**, donde **1R es lo que arriesgaste** en esa operación.

- Arriesgaste 20 $ y ganaste 40 $: ganaste **+2R**.
- Arriesgaste 20 $ y perdiste 20 $: perdiste **−1R**.
- Arriesgaste 50 $ y ganaste 25 $: ganaste **+0,5R**.

La R convierte cada operación en la misma unidad, así que una operación de 20 $ y otra de 500 $ caben en la misma lista.

> **Ejemplo hipotético.** Diez operaciones en R: +2, −1, −1, +3, −1, +1, −1, −1, +2, −1. Las ganancias suman +8, las pérdidas −6, total **+2R** en 10 operaciones, una media de **+0,2R por operación**.

Ese +0,2R es tu expectativa, en R. Es la misma idea de la lección de la expectativa, en una unidad más limpia.

<figure class="fig"><svg viewBox="0 0 320 150" role="img" aria-label="Diez operaciones en R: ganancias de +2, +3, +1 y +2 y seis pérdidas de −1. El total es +2R, una media de +0,2R por operación."><line class="axis" x1="10" y1="82" x2="312" y2="82"/><rect class="bar-bid" x="14" y="46" width="22" height="36" rx="3"/><text class="lbl" x="25" y="40" text-anchor="middle">+2</text><rect class="bar-ask" x="44" y="82" width="22" height="18" rx="3"/><text class="lbl" x="55" y="114" text-anchor="middle">−1</text><rect class="bar-ask" x="74" y="82" width="22" height="18" rx="3"/><text class="lbl" x="85" y="114" text-anchor="middle">−1</text><rect class="bar-bid" x="104" y="28" width="22" height="54" rx="3"/><text class="lbl" x="115" y="22" text-anchor="middle">+3</text><rect class="bar-ask" x="134" y="82" width="22" height="18" rx="3"/><text class="lbl" x="145" y="114" text-anchor="middle">−1</text><rect class="bar-bid" x="164" y="64" width="22" height="18" rx="3"/><text class="lbl" x="175" y="58" text-anchor="middle">+1</text><rect class="bar-ask" x="194" y="82" width="22" height="18" rx="3"/><text class="lbl" x="205" y="114" text-anchor="middle">−1</text><rect class="bar-ask" x="224" y="82" width="22" height="18" rx="3"/><text class="lbl" x="235" y="114" text-anchor="middle">−1</text><rect class="bar-bid" x="254" y="46" width="22" height="36" rx="3"/><text class="lbl" x="265" y="40" text-anchor="middle">+2</text><rect class="bar-ask" x="284" y="82" width="22" height="18" rx="3"/><text class="lbl" x="295" y="114" text-anchor="middle">−1</text><text class="t-gain" x="160" y="142" text-anchor="middle">Total +2R · media +0,2R por operación</text></svg><figcaption>Diez operaciones hipotéticas, cada una medida en R.</figcaption></figure>

## Ratios que te encontrarás

- **Beneficio-riesgo** (R:R): cuánto aspiras a ganar por cada unidad arriesgada. 3:1 = aspirar a 3R por cada 1R.
- **Tasa de acierto**: ganadoras ÷ operaciones. 6 de 10 = 60 %.
- **Factor de beneficio**: total ganado ÷ total perdido. 800 $ ganados y 400 $ perdidos = 2,0. Por encima de 1 vas por delante.

## Errores comunes

- Dar la tasa de acierto sin la ganancia y la pérdida medias.
- Comparar operaciones en dólares en vez de en R.
- Fiarte de una media de solo unas pocas operaciones.

## Para profundizar

<details><summary>Media y mediana</summary><p>La mediana es el valor del medio cuando ordenas los datos. Si la mayoría de operaciones son pequeñas y una es enorme, la media sube por la enorme, pero la mediana muestra lo típico. Mirar las dos es más honesto.</p></details>

## Compruébalo tú mismo

<details><summary>1. Resultados +30 $, −10 $, +20 $. ¿Cuál es la media?</summary><p>Total 40 $ ÷ 3 operaciones = unos +13,33 $ por operación.</p></details>

<details><summary>2. Arriesgas 40 $ y ganas 100 $. ¿Cuántas R son?</summary><p>100 ÷ 40 = +2,5R.</p></details>

<details><summary>3. Arriesgas 25 $ y pierdes 50 $ porque moviste tu stop. ¿Qué fue eso, en R?</summary><p>−2R. Perdiste el doble de lo que planeabas arriesgar, por eso mover un stop es peligroso.</p></details>

<details><summary>4. Ganaste 600 $ en total y perdiste 300 $ en total. ¿Factor de beneficio?</summary><p>600 ÷ 300 = 2,0.</p></details>

<details><summary>5. ¿Una tasa de acierto del 70 % garantiza ganar?</summary><p>No. Si tu pérdida media es mucho mayor que tu ganancia media, aun así puedes perder dinero.</p></details>

## Pruébalo (sin dinero real)

Apunta tus últimas cinco operaciones en papel. Para cada una, anota lo que arriesgaste y lo que ganaste, y pásalas a R.

**Idea clave:** la R mide cada operación frente a lo que arriesgaste, así que operaciones distintas se pueden comparar con justicia.
