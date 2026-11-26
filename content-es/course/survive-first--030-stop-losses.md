---
title: "Stop loss: qué son y dónde se colocan"
module: survive-first
order: 40
summary: Qué hace un stop loss, los dos tipos principales, dónde colocarlo para que signifique algo y las formas honestas en que los stops pueden fallarte.
date: 2026-11-21
needs: size-your-trade-from-your-stop, order-types
---

Las dos últimas lecciones decían una y otra vez «tu stop». Esta explica qué es realmente un stop y lo más difícil: decidir dónde va.

## Primero, dos palabras

El **stop loss** (o simplemente «stop») es una instrucción que dejas al exchange o al bróker: «si el precio cae a este nivel, vende por mí.» Es tu salida, elegida mientras estás tranquilo.

El **deslizamiento** (slippage) es la diferencia entre el precio que pediste y el precio que realmente obtuviste. Ocurre cuando los precios se mueven rápido.

## ¿Para qué tener uno?

Porque en el momento, casi nadie vende con pérdidas con facilidad. El precio baja, te dices que rebotará, baja más, y la pequeña pérdida que podrías haber asumido se convierte en la grande de la primera lección. Un stop toma la decisión por ti, por adelantado.

## Los dos tipos principales

| Tipo | Qué pasa cuando se alcanza el precio | La pega |
| --- | --- | --- |
| Stop a mercado | Vende de inmediato al mejor precio disponible | En una caída rápida podrías obtener un peor precio (deslizamiento) |
| Stop limit | Coloca una orden de venta a tu precio elegido o mejor | Si el precio salta más allá, tu orden puede no ejecutarse nunca y sigues dentro de la operación |

Para los principiantes, un **stop a mercado** suele ser la opción más segura: puede que obtengas un precio algo peor, pero sales.

## ¿Dónde va el stop?

Ponlo **donde tu motivo para la operación deja de ser cierto**. No en un número redondo cualquiera. No donde la pérdida «te parece bien».

> **Ejemplo hipotético.** La moneda y los precios son inventados.

Compras una moneda a **50 $** porque ha rebotado en **48 $** tres veces en el último mes. (Una zona de precios donde las caídas se han detenido antes se llama **soporte**; Lee el mercado lo explica. Por ahora, léelo como «ahí aparecieron compradores».) Tu idea es «los compradores siguen entrando en torno a 48 $».

- Si el precio cae a 47,50 $, tu idea es errónea: los compradores no aparecieron. Así que un stop justo por debajo de 48 $, digamos **47,50 $**, tiene sentido.
- Un stop a **49,50 $** probablemente saltaría con vaivenes normales, aunque tu idea fuera correcta.
- Un stop a **40 $** significa que mantendrías la posición mucho después de que la idea hubiera fallado.

Después, como mostró la lección de tamaño de posición, tu tamaño de posición se deduce de esa distancia al stop.

## Pérdida en tu stop

Cuando conoces tu tamaño de posición y tu stop, conoces tu pérdida antes de operar:

**pérdida en el stop = tamaño de la posición × distancia al stop**

<div class="calc" data-calc="stop-loss">
  <p class="calc-row"><label>Mi posición es de $<input data-in="size" type="number" min="0" value="400" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Mi stop está a un <input data-in="stop" type="number" min="0" max="100" step="0.1" value="5" inputmode="decimal">% de distancia</label></p>
  <p class="calc-out">Si salta el stop, pierdo unos <strong data-out="loss">$20</strong>, más comisiones.</p>
</div>

## La regla sobre mover stops

Puedes mover un stop **más cerca** para asumir menos riesgo. **Nunca** deberías moverlo **más lejos** para evitar que te saque. Alejarlo significa cambiar tu plan porque la operación va mal, que es exactamente la emoción de la que un stop está ahí para protegerte.

## Límites honestos

- **Gaps.** Los mercados que cierran por la noche o en fin de semana (como las acciones) pueden abrir muy por debajo de tu stop. Tu stop se ejecuta entonces al precio de apertura, que puede ser mucho peor.
- **Mercados rápidos.** En cripto, una caída repentina puede causar un gran deslizamiento incluso en un stop a mercado.
- **Que te saquen y ver cómo se recupera.** Les pasa a todos. Un stop que a veces te saca demasiado pronto es el precio de no asumir nunca una pérdida enorme.

## Errores comunes

- Colocar el stop donde te resulta cómodo en lugar de donde la idea es errónea.
- Alejarlo para evitar asumir la pérdida.
- No tener stop y prometer que estarás atento.

## Profundiza

<details><summary>Stops mentales</summary><p>Un stop mental es uno que solo te prometes a ti mismo. Falla justo cuando lo necesitas, cuando la emoción discute con el plan. Una orden stop colocada en la plataforma funciona aunque no estés.</p></details>

## Compruébalo tú

<details><summary>1. ¿Cuál es el principal riesgo de una orden stop limit?</summary><p>Si el precio se mueve rápido más allá de tu límite, tu orden puede no ejecutarse y sigues dentro de una operación perdedora.</p></details>

<details><summary>2. ¿Dónde debería ir tu stop?</summary><p>En el precio donde tu motivo para la operación queda demostrado como erróneo, no en un número que simplemente te resulte cómodo.</p></details>

<details><summary>3. Tu operación pierde y se acerca a tu stop. ¿Deberías alejar el stop para darle margen?</summary><p>No. Alejar un stop es cambiar tu plan por miedo. Puedes acercarlo, nunca alejarlo.</p></details>

<details><summary>4. ¿Cuál es la diferencia entre un stop a mercado y un stop limit?</summary><p>Un stop a mercado se ejecuta al mejor precio una vez activado, rápido pero puede deslizarse. Un stop limit solo se ejecuta a tu límite o mejor, lo que puede dejarte sin ejecutar.</p></details>

<details><summary>5. ¿Está bien mover un stop al punto de equilibrio después de que el precio se mueva a tu favor?</summary><p>Sí. Moverlo para reducir el riesgo está bien. Nunca lo alejes.</p></details>

## Pruébalo (sin dinero real)

Mira cualquier gráfico y elige una entrada ficticia. Escribe una frase: «Compro porque ___.» Después busca el precio en el que esa frase dejaría de ser cierta. Ese es tu stop. Calcula la distancia como porcentaje.

Ahora vuelve a la Operación 1 y anota su stop en una frase: «Mi idea es errónea si ___.»

**Idea clave:** Un stop es tu salida, elegida mientras estás tranquilo. Colócalo donde tu idea es errónea y nunca lo alejes.
