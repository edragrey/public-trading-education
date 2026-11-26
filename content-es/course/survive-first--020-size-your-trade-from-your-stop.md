---
title: Calcula el tamaño de tu operación a partir de tu stop, no de tu intuición
module: survive-first
order: 30
summary: Cómo calcular lo grande que debe ser una operación, con solo tres números, para que una operación equivocada cueste exactamente lo que planeaste.
date: 2026-11-21
needs: how-much-to-risk-on-one-trade
---

La mayoría de los principiantes elige el tamaño de la operación por intuición: «Meteré 500 $, me parece más o menos bien.» Esta lección sustituye esa sensación por una pequeña cuenta que puedes hacer de cabeza.

## Primero, dos palabras

El **tamaño de la posición** es cuánto dinero hay en la operación: el valor total de lo que compras.

La **distancia al stop** es cuánto puede moverse el precio en tu contra, desde donde compras hasta tu stop, antes de que salgas. Normalmente se escribe como porcentaje.

## La regla

**Tamaño de la posición = la cantidad que arriesgarás ÷ distancia al stop**

Eso es todo. Ya elegiste la cantidad que arriesgarás en la lección del 1 %. Tu distancia al stop sale del gráfico (la lección de stops). El tamaño de la posición es lo que resulte de la cuenta.

> **Ejemplo hipotético.** La moneda y los números son inventados, pero la aritmética es exacta. Se dejan fuera las comisiones.

1. Tu cuenta es de **2.000 $**. Arriesgarás un **1 %**, o sea **20 $**.
2. Quieres comprar una moneda a **50 $**. Tu stop está en **47,50 $**.
3. Eso es una caída de **2,50 $**, que es el **5 %** de 50 $.
4. Tamaño de la posición = 20 $ ÷ 5 % = **400 $**. Son 8 monedas a 50 $.
5. Si salta el stop, 8 monedas × 2,50 $ = **20 $** perdidos. Exactamente lo que planeaste.

## Stop más amplio, operación más pequeña

La clave es que **la pérdida se mantiene igual** sea cual sea la distancia al stop. Solo cambia el tamaño.

| Distancia al stop (hipotético) | Tamaño de la posición para un riesgo de 20 $ | Pérdida si salta el stop |
| --- | --- | --- |
| 2 % | 1.000 $ | 20 $ |
| 5 % | 400 $ | 20 $ |
| 10 % | 200 $ | 20 $ |
| 20 % | 100 $ | 20 $ |

Un stop cercano permite una operación mayor. Un stop amplio obliga a una menor. En cualquier caso, una operación equivocada cuesta 20 $.

<div class="calc" data-calc="position-size">
  <p class="calc-row"><label>Mi cuenta es de $<input data-in="account" type="number" min="1" value="2000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Arriesgaré un <input data-in="risk" type="number" min="0.1" max="100" step="0.1" value="1" inputmode="decimal">%</label></p>
  <p class="calc-row"><label>Compro a $<input data-in="entry" type="number" min="0" step="any" value="50" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Mi stop está en $<input data-in="stop" type="number" min="0" step="any" value="47.5" inputmode="decimal"></label></p>
  <p class="calc-out">Arriesgo <strong data-out="loss">$20</strong>. Mi stop está a un <b data-out="dist">5%</b> de distancia, así que mi posición es de <b data-out="size">$400</b> (unas <b data-out="units">8</b> unidades).</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

## Cuando la respuesta es «demasiado grande»

A veces la cuenta da una posición mayor que toda tu cuenta. Con una cuenta de 2.000 $, un riesgo de 20 $ y un stop del 0,5 %, la cuenta dice 4.000 $.

Tienes dos opciones honestas: **tomar una posición menor** (y arriesgar menos de lo planeado) o **saltarte la operación**. Pedir prestado para llegar al número es apalancamiento, y Sobrevive primero lo trata aparte, más adelante. Por ahora, si no cabe, no cabe.

## ¿Por qué no elegir primero el tamaño?

Porque entonces tu stop lo elige tu cartera en lugar del gráfico. Quien elige primero «500 $» suele colocar el stop donde la pérdida le parece soportable. Al mercado no le importa lo que te parezca soportable. Tu stop debería ir donde tu idea queda demostrada como errónea, y el tamaño debería seguirlo.

## Errores comunes

- Elegir primero el tamaño de la posición y poner el stop donde quepa.
- Ignorar las comisiones al calcular la pérdida real en tu stop.
- No reducir la operación cuando el stop está lejos.

## Profundiza

<details><summary>Redondear a la baja</summary><p>Si la cuenta da 47,8 unidades y solo puedes comprar 47, redondea a la baja. Redondear al alza arriesga algo más de lo planeado.</p></details>

## Compruébalo tú

<details><summary>1. Arriesgarás 30 $. Tu stop está un 3 % por debajo de tu entrada. ¿De qué tamaño debe ser la posición?</summary><p>30 $ ÷ 3 % = 1.000 $.</p></details>

<details><summary>2. Mueves tu stop de un 5 % de distancia a un 10 %. ¿Qué pasa con el tamaño de tu posición si tu riesgo se mantiene?</summary><p>Se reduce a la mitad. El doble de distancia al stop significa la mitad de tamaño, así que la pérdida se mantiene.</p></details>

<details><summary>3. La cuenta dice 3.000 $ pero tu cuenta es de 2.000 $. ¿Qué haces?</summary><p>Tomar una posición menor o saltarte la operación. No pidas prestado para que el número encaje.</p></details>

<details><summary>4. Cuenta de 4.000 $, riesgo del 1 %, entrada a 10 $, stop a 9,50 $. ¿Cuántas unidades?</summary><p>40 $ de riesgo ÷ 0,50 $ = 80 unidades.</p></details>

<details><summary>5. Tu stop está el doble de lejos. ¿Qué pasa con el tamaño correcto?</summary><p>Se reduce a la mitad, porque la pérdida por unidad se duplicó.</p></details>

## Pruébalo (sin dinero real)

Elige cualquier gráfico de precios. Escoge una entrada imaginaria y un stop. Calcula la distancia al stop como porcentaje y después el tamaño de la posición para el 1 % de tu cuenta. Compruébalo con la calculadora de arriba.

Si hiciste una operación en simulado en Cómo funcionan los mercados, calcula el tamaño de **esa** operación (Operación 1) a partir de su stop.

**Idea clave:** Elige tu riesgo, encuentra tu stop y deja que el tamaño de la posición salga de la cuenta. Nunca al revés.
