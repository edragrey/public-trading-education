---
lesson: what-happens-when-you-get-liquidated
article: leverage-isnt-what-wipes-you-out
title: Liquidación, paso a paso
summary: La lección de la liquidación en pequeños pasos, con algunas preguntas rápidas y una calculadora. Unos 4 minutos.
---

# Liquidación, paso a paso

Una idea pequeña por pantalla, algunas preguntas rápidas y una calculadora al final. Unos **4 minutos**.

> **Ejemplos hipotéticos.** Todas las cifras son inventadas, pero la aritmética es exacta. Las comisiones se omiten salvo que digamos lo contrario.

<!-- step -->

## Tres palabras primero

**Margen** es el dinero que pones para abrir una operación. Piensa en él como un depósito.

**Apalancamiento** permite que tu operación sea mayor que ese depósito. El exchange te presta el resto.

**Liquidación** es cuando el exchange cierra tu operación por ti, porque tus pérdidas casi han agotado tu depósito.

<!-- step -->

## Comprobación rápida

Pones **100 $** con apalancamiento **10x**. ¿Qué tamaño tiene tu operación?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">100 $</button>
<button type="button" data-opt="b">1.000 $</button>
<button type="button" data-opt="c">10 $</button>
<p class="quiz-why" hidden>100 $ × 10 = <strong>1.000 $</strong>. Tu depósito es de 100 $, pero cada movimiento del precio golpea los 1.000 $ completos.</p>
</div>

<!-- step -->

## Cómo es una liquidación

Pones **100 $** a **10x**, así que tienes **1.000 $** de una moneda.

El precio cae un **10 %**. Tus 1.000 $ valen ahora **900 $**.

Has perdido **100 $**. Es todo tu depósito, así que el exchange cierra la operación. Te han **liquidado**, aunque el precio rebote un minuto después.

<!-- step -->

## ¿A qué distancia está?

Una regla aproximada: el precio solo tiene que moverse en tu contra cerca de **100 % ÷ tu apalancamiento**.

| Apalancamiento | Movimiento que borra tu margen |
| --- | --- |
| 5x | cerca del 20 % |
| 10x | cerca del 10 % |
| 100x | cerca del 1 % |

En la vida real está un poco más cerca, porque los exchanges mantienen un pequeño colchón de seguridad y cobran comisiones.

<!-- step -->

## Comprobación rápida

Usas **20x**. ¿Cuánto, aproximadamente, tiene que moverse el precio en tu contra?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">Cerca del 20 %</button>
<button type="button" data-opt="b">Cerca del 5 %</button>
<button type="button" data-opt="c">Cerca del 1 %</button>
<p class="quiz-why" hidden>100 ÷ 20 = <strong>cerca del 5 %</strong>, y en la práctica algo menos.</p>
</div>

<!-- step -->

## Mismo apalancamiento, daño muy distinto

Dos traders, ambos con **1.000 $**, ambos a **10x**. El precio cae un 10 % y ambos son liquidados.

- **El trader A** puso **100 $**. Posición: 1.000 $. Pierde **100 $**.
- **El trader B** puso **los 1.000 $**. Posición: 10.000 $. Lo pierde **todo**.

<!-- step -->

## Comprobación rápida

Mismo apalancamiento, misma caída de precio. ¿Qué marcó la diferencia?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">El apalancamiento</button>
<button type="button" data-opt="b">Cuánto dinero pusieron</button>
<button type="button" data-opt="c">La suerte</button>
<p class="quiz-why" hidden>El <strong>tamaño de la posición</strong>. El apalancamiento era el mismo. La operación del trader B era diez veces mayor.</p>
</div>

<!-- step -->

## Lo que realmente fija tu pérdida

Si salta tu stop-loss, tu pérdida es:

**tamaño de la posición × distancia a tu stop**

Pruébalo:

<div class="calc" data-calc="stop-loss">
  <p class="calc-row"><label>Mi posición es de $<input data-in="size" type="number" min="0" value="200" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Mi stop está a un <input data-in="stop" type="number" min="0" max="100" step="0.1" value="5" inputmode="decimal">% de distancia</label></p>
  <p class="calc-out">Si salta el stop, pierdo unos <strong data-out="loss">$10</strong>.</p>
</div>

Fíjate en que no hay casilla de apalancamiento. No cambia este número.

<!-- step -->

## Entonces, ¿qué cambia el apalancamiento?

Toma esa posición de **200 $** con un stop del **5 %**.

- **Sin apalancamiento**, pones 200 $.
- Con **5x**, pones 40 $ de margen.

Si salta el stop, pierdes unos **10 $** en ambos casos. El apalancamiento cambió cuánto efectivo queda inmovilizado, no tu riesgo.

<!-- step -->

## La única comprobación

Hay una cosa que el apalancamiento sí cambia: **dónde queda tu precio de liquidación.**

Tu stop tiene que saltar **antes** que tu precio de liquidación. Si no, el exchange te cierra antes de que tu plan tenga ocasión.

<!-- step -->

## Comprobación rápida

Tu stop está al **5 %**. Usas **25x**. ¿Qué llega primero si el precio cae?

<div class="quiz" data-answer="b">
<button type="button" data-opt="a">Mi stop</button>
<button type="button" data-opt="b">La liquidación</button>
<p class="quiz-why" hidden>A 25x, la liquidación está a solo <strong>cerca del 4 %</strong> (100 ÷ 25). Eso es antes que tu stop del 5 %. Baja el apalancamiento hasta que la liquidación quede bien más allá del stop.</p>
</div>

<!-- step -->

## Júntalo todo

Cambia las cifras y mira si llega primero tu stop o tu precio de liquidación.

<div class="calc" data-calc="liq-size">
  <p class="calc-row"><label>Mi cuenta es de $<input data-in="account" type="number" min="1" value="1000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Arriesgaré un <input data-in="risk" type="number" min="0.1" max="100" step="0.1" value="1" inputmode="decimal">% en esta operación</label></p>
  <p class="calc-row"><label>Mi stop está a un <input data-in="stop" type="number" min="0.1" max="99" step="0.1" value="5" inputmode="decimal">% de mi entrada</label></p>
  <p class="calc-row"><label>Apalancamiento <input data-in="lev" type="number" min="1" max="200" step="1" value="5" inputmode="numeric">x</label></p>
  <p class="calc-out">Si salta el stop, pierdo unos <strong data-out="loss">$10</strong>. Tamaño de la posición: <b data-out="size">$200</b>. Margen necesario: <b data-out="margin">$40</b>. La liquidación está aproximadamente a un <b data-out="liq">20%</b>.</p>
  <p class="calc-verdict" data-out="verdict">Tu stop va primero.</p>
</div>

<!-- step -->

## Lo que aún puede salir mal

- **Los stops pueden deslizarse** en movimientos muy rápidos. Deja un margen amplio entre tu stop y tu precio de liquidación.
- **El margen cruzado** deja que una mala operación use todo tu saldo. El margen aislado solo arriesga lo que pusiste.
- **Las comisiones** se cobran sobre la posición completa, y muchos futuros cobran financiación mientras mantienes.
- **Sin stop, tu precio de liquidación es tu stop.**

<!-- step -->

## Ya lo tienes

**El apalancamiento no decide cuánto pierdes. Lo deciden el tamaño de tu posición y tu stop, siempre que tu stop salte antes que tu precio de liquidación.**

Antes de cualquier operación, anota cinco cosas: **entrada, stop, tamaño de posición, pérdida en el stop y precio de liquidación.** Si no puedes rellenar las cinco, la operación no está lista.
