---
title: Qué pasa realmente cuando te liquidan
module: survive-first
order: 120
section: Leverage
summary: El margen, el apalancamiento y la liquidación en palabras sencillas, y por qué tu tamaño de posición y tu stop fijan tu riesgo, no el número de apalancamiento.
date: 2026-11-23
needs: leverage-in-plain-words
---

Cada gran venta masiva trae una oleada de publicaciones de «me han liquidado, lección aprendida». El consejo habitual en las respuestas es «nunca uses apalancamiento». Ese consejo es seguro, pero se salta la parte que realmente te protege. Esta lección explica qué es la liquidación y el único número que debes comprobar antes de cualquier operación apalancada.

> **Repaso rápido.** El **margen** es el dinero que pones. El **apalancamiento** permite que tu operación sea mayor que eso. La **liquidación** es cuando el exchange cierra tu operación porque tus pérdidas han consumido casi todo tu margen. ¿Nuevo con estas palabras? Empieza por [El apalancamiento en palabras sencillas](/course/survive-first/leverage-in-plain-words/).

## Un ejemplo sencillo

> **Ejemplo hipotético.** La moneda y los números son inventados, pero la aritmética es exacta. Los exchanges reales también cobran comisiones, que aquí dejamos fuera.

1. Tienes **1.000 $**. Pones **100 $** como margen y usas un apalancamiento de **10x**.
2. Eso abre una **posición de 1.000 $**: 10 monedas a **100 $** cada una.
3. El precio cae un **10 %**, a **90 $**. Tus 10 monedas valen ahora 900 $.
4. Has perdido **100 $**, que es todo tu margen.
5. El exchange cierra la operación. Estás **liquidado**. Los 100 $ se han ido, aunque el precio rebote un minuto después.

En la vida real el exchange interviene un poco *antes* del 10 % completo. Mantiene un pequeño colchón de seguridad (llamado margen de mantenimiento) y cobra una comisión de liquidación, así que pierdes tu margen algo antes de lo que dice la cuenta simple.

## ¿Qué cerca está tu precio de liquidación?

Una regla aproximada: **al precio solo le hace falta moverse en tu contra aproximadamente 100 % ÷ tu apalancamiento** para borrar tu margen.

| Apalancamiento | Aproximadamente cuánto debe moverse el precio en tu contra |
| --- | --- |
| 2x | aproximadamente el 50 % |
| 5x | aproximadamente el 20 % |
| 10x | aproximadamente el 10 % |
| 20x | aproximadamente el 5 % |
| 50x | aproximadamente el 2 % |
| 100x | aproximadamente el 1 % |

La liquidación real queda algo más cerca que esta tabla, por las razones de arriba. Con 50x o 100x, un vaivén normal en una hora de mucha actividad puede bastar.

## El mismo apalancamiento, daños muy distintos

Aquí es donde «nunca uses apalancamiento» deja de ser toda la historia. Toma la misma cuenta de 1.000 $:

| Operación (hipotética) | Posición | El precio cae | Pierdes |
| --- | --- | --- | --- |
| A: 10x, 100 $ de margen | 1.000 $ | 10 %, liquidado | 100 $ (10 % de la cuenta) |
| B: 10x, los 1.000 $ como margen | 10.000 $ | 10 %, liquidado | 1.000 $ (todo) |
| C: sin apalancamiento, sin stop | 1.000 $ | 30 %, por fin vendes | 300 $ (30 % de la cuenta) |

A y B usan el **mismo apalancamiento**. La diferencia es cuánto dinero ponen, y por tanto lo grande que es la posición. Y C, sin ningún apalancamiento, pierde más que A porque no tenía un plan para salir.

Así que el apalancamiento por sí solo no decide cuánto pierdes. **Lo deciden tu tamaño de posición y tu salida.** Y si nunca fijas una salida, tu precio de liquidación se convierte en tu salida, lo hayas comprobado o no.

## Qué fija realmente tu riesgo

La pérdida de una operación, si salta tu stop, es:

**pérdida en el stop = tamaño de la posición × distancia a tu stop**

Digamos que decides arriesgar un **1 %** de una cuenta de 1.000 $ en una operación. Son **10 $**. Tu stop está un **5 %** por debajo de donde compras. Entonces tu posición debería ser 10 $ ÷ 5 % = **200 $**.

- **Sin apalancamiento**, pones 200 $ en la operación.
- Con **apalancamiento de 5x**, pones 40 $ de margen para la misma posición de 200 $.

Si salta el stop, pierdes unos **10 $ en ambos casos** (más comisiones). El apalancamiento cambió cuánto efectivo queda inmovilizado. No cambió tu riesgo.

## La única comprobación: tu stop debe ir primero

El apalancamiento sigue importando de una forma importante: mueve tu precio de liquidación. Tu **stop loss tiene que estar más cerca de tu entrada que tu precio de liquidación**. Si no, el exchange te cierra antes de que tu plan tenga ocasión.

- Stop del 5 % con **5x**: la liquidación está a un 20 % aproximadamente. Tu stop va primero. Bien.
- Stop del 5 % con **25x**: la liquidación está a un 4 % aproximadamente. Te liquidan *antes* de tu stop. Mal.

Regla práctica: **mantén tu apalancamiento muy por debajo de 100 ÷ tu distancia al stop.** Con un stop del 5 %, eso significa muy por debajo de 20x.

<div class="calc" data-calc="liq-size">
  <p class="calc-row"><label>Mi cuenta es de $<input data-in="account" type="number" min="1" value="1000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Arriesgaré un <input data-in="risk" type="number" min="0.1" max="100" step="0.1" value="1" inputmode="decimal">% en esta operación</label></p>
  <p class="calc-row"><label>Mi stop está a un <input data-in="stop" type="number" min="0.1" max="99" step="0.1" value="5" inputmode="decimal">% de mi entrada</label></p>
  <p class="calc-row"><label>Apalancamiento <input data-in="lev" type="number" min="1" max="200" step="1" value="5" inputmode="numeric">x</label></p>
  <p class="calc-out">Si salta el stop, pierdo unos <strong data-out="loss">$10</strong>. Tamaño de la posición: <b data-out="size">$200</b>. Margen necesario: <b data-out="margin">$40</b>. La liquidación está aproximadamente a un <b data-out="liq">20%</b>.</p>
  <p class="calc-verdict" data-out="verdict">Tu stop va primero.</p>
</div>

## Qué aún puede salir mal

Siendo honestos sobre los límites:

- **Los stops pueden deslizarse.** En un movimiento muy rápido tu stop puede ejecutarse a un precio peor del que fijaste. Deja un margen amplio entre tu stop y tu precio de liquidación.
- **El margen cruzado pone toda tu cuenta detrás de la operación.** Muchos exchanges ofrecen margen «aislado» (solo puede perderse el margen que elegiste) y «cruzado» (todo tu saldo puede usarse para mantener abierta la operación, así que puede perderse todo). Sabe en cuál estás.
- **Las comisiones se acumulan.** Las operaciones apalancadas suelen pagar comisiones de trading sobre la posición completa, y algunas cobran una comisión periódica de «financiación» mientras la mantienes.
- **Sin stop, tu precio de liquidación es tu stop.** La mayoría de quienes dicen «me han liquidado» nunca eligieron esa salida. Ella los eligió a ellos.

## Entonces, ¿es un error «nunca uses apalancamiento»?

No. Para un principiante, no usar apalancamiento es la forma más simple de estar seguro, y es lo que recomienda este curso mientras aprendes. La cuestión es que el apalancamiento no es la causa de fondo. Operar demasiado grande, sin stop, sí lo es. Ese error duele con o sin apalancamiento.

## Errores comunes

- Usar un stop que queda más allá de tu precio de liquidación.
- Tratar la liquidación como un stop automático.
- Usar margen cruzado sin entender que toda la cuenta respalda la operación.

## Profundiza

<details><summary>Comisiones de liquidación</summary><p>Muchos exchanges cobran una comisión por liquidación y pueden cerrar tu posición a un precio peor en movimientos rápidos. La liquidación casi siempre sale más cara que un stop que tú elegiste.</p></details>

## Compruébalo tú

<details><summary>1. Usas un apalancamiento de 20x. ¿Más o menos cuánto necesita moverse el precio en tu contra antes de que te liquiden?</summary><p>Aproximadamente un 5 % (100 ÷ 20), y en la práctica algo menos.</p></details>

<details><summary>2. Dos traders usan 10x. Uno pierde el 10 % de su cuenta, el otro la pierde toda. ¿Qué es distinto?</summary><p>Su tamaño de posición. Uno puso como margen una pequeña parte de la cuenta, el otro lo puso todo.</p></details>

<details><summary>3. Tu stop está a un 3 % y usas 50x. ¿Qué pasa si el precio cae un 3 %?</summary><p>Ya te habían liquidado hacia el 2 %, antes de que tu stop pudiera actuar. Baja el apalancamiento hasta que el precio de liquidación esté bien más allá del stop.</p></details>

<details><summary>4. ¿Por qué debe ir tu stop antes que tu precio de liquidación?</summary><p>Para perder una pequeña cantidad planificada en lugar de todo el margen.</p></details>

<details><summary>5. ¿Qué modo de margen es más seguro para un principiante: aislado o cruzado?</summary><p>Aislado, porque la pérdida queda limitada al margen asignado a esa posición.</p></details>

## Pruébalo (sin dinero real)

La próxima vez que mires una operación, incluso una que no vayas a tomar, anota cinco cosas antes de hacer clic: **entrada, stop, tamaño de la posición, pérdida en el stop y precio de liquidación**. Si no puedes rellenar las cinco, la operación no está lista. Muchos exchanges muestran el precio de liquidación en la pantalla de la orden antes de confirmar, o puedes usar la calculadora de arriba.

**Idea clave:** El apalancamiento no decide cuánto pierdes. Lo deciden tu tamaño de posición y tu stop, siempre que tu stop vaya antes que tu precio de liquidación.
