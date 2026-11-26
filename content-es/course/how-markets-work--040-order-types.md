---
title: "Tipos de orden: a mercado, limitada y stop"
module: how-markets-work
order: 40
summary: Los tres tipos de orden que más usarás, qué hace cada uno con tu dinero y cuál elegir en cada caso.
date: 2026-11-21
needs: what-a-price-is
---

Una **orden** es tu instrucción al mercado. El tipo de orden decide cómo y cuándo se ejecuta. Ya has visto dos; aquí están todas las que necesita un principiante.

## Orden a mercado

Comprar o vender **ahora** al mejor precio disponible.

- Se ejecuta de inmediato.
- Pagas el diferencial y puedes obtener un peor precio en una orden grande (deslizamiento).
- Úsala cuando entrar o salir importa más que unos céntimos.

## Orden limitada

Comprar o vender **solo a tu precio o mejor**.

- Una limitada de compra está por debajo del precio actual. Una de venta, por encima.
- Controlas el precio, pero **puede que nunca se ejecute** si el mercado no llega a él.
- A menudo es más barata en comisiones, porque añades al libro de órdenes en lugar de tomar de él.

> **Ejemplo hipotético.** Una moneda cotiza a 100 $. Colocas una limitada de compra a 98 $. Si baja a 98 $, compras. Si nunca baja, no compras, y no se pierde nada.

## Orden stop

Una **orden stop** espera hasta que el precio alcanza un disparador y entonces se convierte en una orden.

- Un **stop loss** se coloca para vender si el precio cae a tu nivel de salida. Limita una pérdida. La lección de stops de Sobrevive primero explica dónde colocarlo.
- Un **stop a mercado** se convierte en una orden a mercado al activarse, así que se ejecuta rápido pero puede deslizarse en una caída rápida.
- Un **stop limit** se convierte en una orden limitada al activarse, así que controlas el precio pero puede que no se ejecute si el precio cae atravesándolo.

## ¿Cuál y cuándo?

| Situación | Elección habitual |
| --- | --- |
| Quieres entrar ya y no te importa un pequeño deslizamiento | A mercado |
| Tienes un precio en mente y puedes esperar | Limitada |
| Necesitas una salida de seguridad si la idea es errónea | Stop loss |
| Mercado muy fino o muy rápido | Limitada, para evitar una mala ejecución |

## Opciones extra de orden que verás

- **Vigencia (time in force):** cuánto dura la orden. «Good till cancelled» se mantiene hasta que la retiras. «Immediate or cancel» ejecuta lo que puede ahora y cancela el resto.
- **Solo reducir (reduce-only):** la orden solo puede reducir una posición existente, nunca aumentarla. Útil para las salidas.
- **Take profit:** una orden limitada de venta con ganancia, para asegurarla.

## Errores comunes

- Usar una orden a mercado en un mercado fino y sorprenderte por la ejecución.
- Colocar un stop donde el ruido normal lo alcanzará.
- Olvidar que una orden limitada antigua sigue abierta.
- No comprobar qué tipo de stop usa la plataforma.

## Profundiza

<details><summary>Comisiones maker y taker</summary><p>Muchos exchanges cobran más a los <strong>takers</strong> (órdenes que se ejecutan de inmediato) que a los <strong>makers</strong> (órdenes que esperan en el libro). Una orden limitada que espera suele ser maker.</p></details>

## Compruébalo tú

<details><summary>1. Una moneda está a 50 $. Quieres comprar solo si cae a 48 $. ¿Qué orden?</summary><p>Una limitada de compra a 48 $.</p></details>

<details><summary>2. ¿Cuál es el riesgo de una orden limitada?</summary><p>Que puede que nunca se ejecute y te pierdas el movimiento.</p></details>

<details><summary>3. ¿Qué hace un stop loss?</summary><p>Se convierte en una orden cuando el precio alcanza tu nivel de salida, para limitar tu pérdida.</p></details>

<details><summary>4. ¿Por qué un stop a mercado puede ejecutarse peor que tu precio de stop?</summary><p>Una vez activado es una orden a mercado. En un movimiento rápido puede no haber compradores a tu precio, así que obtienes el siguiente mejor.</p></details>

<details><summary>5. ¿Qué significa «good till cancelled»?</summary><p>La orden se mantiene abierta hasta que se ejecuta o la cancelas.</p></details>

## Pruébalo (sin dinero real)

Abre una cuenta de trading en simulado o la pantalla de órdenes de un exchange sin enviar nada. Encuentra las opciones a mercado, limitada y stop. Anota qué significa cada campo (precio, cantidad, disparador).

**Idea clave:** El tipo de orden decide cómo operas. A mercado compra ya a costa de perder control del precio, la limitada controla el precio a costa de la certeza, y un stop te protege cuando te equivocas.
