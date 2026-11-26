---
title: "Porcentajes y variación porcentual"
module: trading-math
order: 10
summary: La única matemática que usarás en todas tus operaciones, explicada desde cero, incluido por qué +10 % y luego −10 % no te deja en tablas.
date: 2026-11-26
needs: what-a-price-is
---

Casi todo en el trading se mide en porcentaje: cuánto se movió un precio, cuánto arriesgaste, cuánto ganaste. Si los porcentajes te dan inseguridad, esta lección lo arregla. Sin fórmulas que memorizar, solo una idea.

## Primero, dos palabras

**Porcentaje** significa «de cada 100». El 10 % de algo son 10 de cada 100.

La **variación porcentual** es cuánto se movió algo, como parte de **dónde empezó**. Esto último importa más de lo que parece.

## La idea

**Variación porcentual = (precio nuevo − precio viejo) ÷ precio viejo × 100**

Siempre divides entre el precio **viejo**, el de partida.

> **Ejemplo hipotético.** Una moneda pasa de 50 $ a 60 $. El movimiento es de 10 $. 10 $ ÷ 50 $ = 0,20, así que el cambio es de **+20 %**.
> Luego pasa de 60 $ a 50 $. El movimiento es de −10 $. Pero ahora divides entre 60 $: 10 ÷ 60 = 0,167, así que el cambio es de **−16,7 %**.

Los mismos 10 $ en cada sentido, dos porcentajes distintos. Cambió el punto de partida, así que cambió el porcentaje.

## Por qué +10 % y luego −10 % no es quedar igual

Empieza con 100 $. Ganas un 10 % y tienes 110 $. Pierdes el 10 % de **110 $**, es decir 11 $, y terminas en **99 $**. Has perdido un 1 %, aunque los dos números se cancelen sobre el papel.

La trampa es mucho mayor con caídas grandes:

| Si pierdes | Necesitas ganar para volver a empatar |
| --- | --- |
| 10 % | 11 % |
| 20 % | 25 % |
| 25 % | 33 % |
| 50 % | 100 % |
| 75 % | 300 % |
| 90 % | 900 % |

Perder es fácil y deshacerlo es difícil. Por eso las lecciones de seguridad insisten tanto en las pérdidas pequeñas.

<div class="calc" data-calc="pct-change">
  <p class="calc-row"><label>El precio pasó de $<input data-in="from" type="number" min="0" step="any" value="100" inputmode="decimal"></label></p>
  <p class="calc-row"><label>a $<input data-in="to" type="number" min="0" step="any" value="80" inputmode="decimal"></label></p>
  <p class="calc-out">Eso es un cambio de <strong data-out="chg">−20%</strong>. Para volver al precio inicial tiene que moverse <b data-out="back">+25%</b>.</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

<figure class="fig"><svg viewBox="0 0 320 160" role="img" aria-label="Barras que comparan una pérdida con la ganancia necesaria para recuperarla: un 10 % necesita un 11 %, un 25 % un 33 % y un 50 % un 100 %."><line class="axis" x1="10" y1="130" x2="310" y2="130"/><rect class="bar-ask" x="22" y="120" width="30" height="10" rx="3"/><rect class="bar-bid" x="58" y="119" width="30" height="11" rx="3"/><text class="t-loss" x="37" y="115" text-anchor="middle">−10%</text><text class="t-gain" x="73" y="114" text-anchor="middle">+11%</text><text class="lbl" x="55" y="148" text-anchor="middle">Pierdes 10 %</text><rect class="bar-ask" x="122" y="105" width="30" height="25" rx="3"/><rect class="bar-bid" x="158" y="97" width="30" height="33" rx="3"/><text class="t-loss" x="137" y="100" text-anchor="middle">−25%</text><text class="t-gain" x="173" y="92" text-anchor="middle">+33%</text><text class="lbl" x="155" y="148" text-anchor="middle">Pierdes 25 %</text><rect class="bar-ask" x="222" y="80" width="30" height="50" rx="3"/><rect class="bar-bid" x="258" y="30" width="30" height="100" rx="3"/><text class="t-loss" x="237" y="75" text-anchor="middle">−50%</text><text class="t-gain" x="273" y="25" text-anchor="middle">+100%</text><text class="lbl" x="255" y="148" text-anchor="middle">Pierdes 50 %</text></svg><figcaption>El rojo es la pérdida, el verde la ganancia necesaria para volver al punto de partida.</figcaption></figure>

## Porcentaje de lo que tienes

La misma cuenta te dice cuánto cambió una posición. Si metes 200 $ en una moneda y sube un 15 %, ganaste el 15 % de 200 $ = **30 $**. Si baja un 15 %, perdiste 30 $. Puedes hacerlo de cabeza: el 10 % es fácil (corre la coma) y el 5 % es la mitad.

## Errores comunes

- Sumar y restar porcentajes como si fueran números normales (+10 % y −10 % dan 0 %). No es así.
- Olvidar que una pérdida grande necesita una ganancia aún mayor para recuperarse.
- Confundir **puntos porcentuales** con **porcentaje**. Pasar del 2 % al 3 % es +1 punto porcentual, pero es un aumento del 50 %.

## Para profundizar

<details><summary>Porcentaje y puntos porcentuales</summary><p>Si un tipo de interés pasa del 4 % al 5 %, sube 1 punto porcentual. En términos porcentuales sube un 25 %, porque 1 ÷ 4 = 0,25. Los titulares mezclan esto todo el rato, así que comprueba a cuál se refieren.</p></details>

<details><summary>Cálculo mental rápido</summary><p>10 %: divide entre 10. 1 %: divide entre 100. 5 %: la mitad del 10 %. 20 %: el doble del 10 %. 15 %: 10 % más 5 %. Suficiente para comprobar cualquier calculadora.</p></details>

## Compruébalo tú mismo

<details><summary>1. Un precio pasa de 40 $ a 50 $. ¿Cuál es la variación porcentual?</summary><p>El movimiento es de 10 $. 10 ÷ 40 = 0,25, así que +25 %.</p></details>

<details><summary>2. Pierdes el 50 % de tu dinero. ¿Qué ganancia te devuelve al punto de partida?</summary><p>+100 %. La mitad de 100 $ son 50 $, y necesitas duplicar 50 $ para volver a 100 $.</p></details>

<details><summary>3. +20 % y luego −20 %. ¿Dónde acabas partiendo de 100 $?</summary><p>100 $ → 120 $ → 96 $. Has perdido un 4 %.</p></details>

<details><summary>4. Tu tipo pasa del 2 % al 3 %. ¿Es +1 % o +50 %?</summary><p>Las dos cosas, en sentidos distintos: +1 punto porcentual y +50 % en términos relativos.</p></details>

<details><summary>5. Una moneda con 300 $ sube un 8 %. ¿Cuánto ganaste?</summary><p>El 8 % de 300 $ = 24 $.</p></details>

## Pruébalo (sin dinero real)

Elige una moneda o una acción. Apunta su precio de hoy y busca el de hace un mes. Calcula la variación porcentual a mano y compruébala con la calculadora.

**Idea clave:** la variación porcentual siempre divide entre el punto de partida, así que las pérdidas son más difíciles de deshacer de lo que parecen.
