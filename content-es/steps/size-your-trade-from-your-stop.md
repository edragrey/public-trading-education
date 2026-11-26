---
lesson: size-your-trade-from-your-stop
title: Tamaño de posición, paso a paso
summary: ¿Qué tamaño debe tener una operación? Paso a paso, con preguntas rápidas y una calculadora. Unos 4 minutos.
---

# Tamaño de posición, paso a paso

Una idea pequeña por pantalla, algunas preguntas rápidas y una calculadora al final. Unos **4 minutos**.

> **Ejemplos hipotéticos.** Todas las cifras son inventadas, pero la aritmética es exacta. Se omiten las comisiones.

<!-- step -->

## La forma habitual (y por qué duele)

La mayoría de los principiantes elige el tamaño por intuición: «Voy a meter **500 $**».

Luego ponen el stop donde la pérdida les parece soportable. El problema: el mercado no sabe qué te parece soportable a ti.

<!-- step -->

## La forma cuidadosa

Dale la vuelta. Decide primero tres cosas:

1. **Cuánto perderás** si te equivocas (la lección del 1 %: cerca del 1 % de tu cuenta).
2. **Dónde va tu stop**: el precio donde tu idea queda desmentida.
3. Después deja que el **tamaño de posición** salga de una cuenta sencilla.

<!-- step -->

## La cuenta

**Tamaño de posición = cantidad que arriesgas ÷ distancia al stop**

La distancia al stop es lo lejos que está tu stop del precio de compra, en porcentaje.

<!-- step -->

## Un ejemplo

- Cuenta: **2.000 $**. Riesgo del 1 %: **20 $**.
- Compras a **50 $**. Stop en **47,50 $**. Es una caída del **5 %**.
- Tamaño de posición: 20 $ ÷ 5 % = **400 $**.

Si salta el stop, pierdes **20 $**. Justo lo que planeaste.

<!-- step -->

## Comprobación rápida

Vas a arriesgar **30 $**. Tu stop está al **3 %**. ¿Qué tamaño tiene la posición?

<div class="quiz" data-answer="c">
<button type="button" data-opt="a">30 $</button>
<button type="button" data-opt="b">90 $</button>
<button type="button" data-opt="c">1.000 $</button>
<p class="quiz-why" hidden>30 $ ÷ 3 % = <strong>1.000 $</strong>. Si el precio baja un 3 %, 1.000 $ pierden 30 $.</p>
</div>

<!-- step -->

## Stop más lejos, operación más pequeña

El mismo riesgo de 20 $, con stops distintos:

| Distancia al stop | Tamaño de posición | Pérdida si salta |
| --- | --- | --- |
| 2 % | 1.000 $ | 20 $ |
| 5 % | 400 $ | 20 $ |
| 10 % | 200 $ | 20 $ |

El tamaño cambia. **La pérdida no.**

<!-- step -->

## Comprobación rápida

Mueves tu stop del **5 %** al **10 %** de distancia y mantienes el mismo riesgo. ¿Qué pasa con tu posición?

<div class="quiz" data-answer="a">
<button type="button" data-opt="a">Se reduce a la mitad</button>
<button type="button" data-opt="b">Se duplica</button>
<button type="button" data-opt="c">Se queda igual</button>
<p class="quiz-why" hidden>El doble de distancia significa <strong>la mitad de tamaño</strong>, así que la pérdida en el stop se mantiene.</p>
</div>

<!-- step -->

## Cuando no encaja

A veces la cuenta da una posición mayor que tu cuenta. Un riesgo de 20 $ con un stop del 0,5 % da **4.000 $**, pero solo tienes 2.000 $.

Dos opciones honestas: **tomar una posición más pequeña** o **saltarte la operación**.

<!-- step -->

## Comprobación rápida

La cuenta da **3.000 $**. Tu cuenta es de **2.000 $**. ¿Qué haces?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">Pido prestado para que encaje</button>
<button type="button" data-opt="b">Reduzco el tamaño o me la salto</button>
<button type="button" data-opt="c">Acerco el stop para que encaje</button>
<p class="quiz-why" hidden><strong>Reducir el tamaño o saltártela.</strong> Mover el stop solo para que cuadren los números significa que tu cartera eligió el stop, no el gráfico.</p>
</div>

<!-- step -->

## Pruébalo tú mismo

Cambia cualquier número.

<div class="calc" data-calc="position-size">
  <p class="calc-row"><label>Mi cuenta es de $<input data-in="account" type="number" min="1" value="2000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Arriesgaré un <input data-in="risk" type="number" min="0.1" max="100" step="0.1" value="1" inputmode="decimal">%</label></p>
  <p class="calc-row"><label>Compro a $<input data-in="entry" type="number" min="0" step="any" value="50" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Mi stop está en $<input data-in="stop" type="number" min="0" step="any" value="47.5" inputmode="decimal"></label></p>
  <p class="calc-out">Arriesgo <strong data-out="loss">$20</strong>. Mi stop está a un <b data-out="dist">5%</b> de distancia, así que mi posición es de <b data-out="size">$400</b> (unas <b data-out="units">8</b> unidades).</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

<!-- step -->

## Ya lo tienes

**Elige tu riesgo, encuentra tu stop y deja que el tamaño de posición salga de la cuenta. Nunca al revés.**

La próxima vez que mires un gráfico, pruébalo con una operación imaginaria antes de pulsar comprar.
