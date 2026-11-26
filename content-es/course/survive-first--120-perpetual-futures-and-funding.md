---
title: "Futuros perpetuos: financiación, margen y por qué muerden"
module: survive-first
order: 130
summary: Los futuros perpetuos son el producto apalancado más común en cripto. Una guía en palabras sencillas de cómo funcionan, qué es la financiación y los costes y riesgos.
date: 2026-11-22
needs: what-happens-when-you-get-liquidated
section: Leverage
---

Verás los «perps» por todas partes en cripto. Esta lección los explica sin jerga, para que puedas reconocer los riesgos.

## Qué es un futuro perpetuo

Un **futuro perpetuo** (un «perp») es un contrato que sigue el precio de un activo y **no tiene fecha de vencimiento**. Puedes ir largo o corto (mira la lección de ir largo e ir corto) sin poseer la moneda.

Como suelen operarse con apalancamiento, los pequeños movimientos de precio se convierten en grandes ganancias o pérdidas sobre tu depósito.

## Margen

El **margen** es el dinero que pones para abrir la posición.

- **Margen inicial:** lo que necesitas para abrirla.
- **Margen de mantenimiento:** el mínimo que debes conservar. Si tus pérdidas consumen el margen hasta ese nivel, el exchange cierra la posición. Eso es la **liquidación**, tratada en la lección de liquidación.

> **Ejemplo hipotético.** Pones 100 $ y usas un apalancamiento de 10x, así que tu posición es de 1.000 $. Un movimiento del 10 % en tu contra supone una pérdida de 100 $, que borra el margen. En la práctica el exchange te cierra *antes* de eso, algo antes, porque necesita un colchón.

## Margen aislado frente a cruzado

- **Margen aislado:** solo está en riesgo el margen que asignaste a esa posición. Lo máximo que pierdes es esa cantidad.
- **Margen cruzado:** **todo el saldo de tu cuenta** respalda la posición. Es más difícil de liquidar, pero una mala operación puede vaciarlo todo.

Los principiantes suelen estar más seguros con el aislado, porque la pérdida queda limitada a lo que eligieron.

## Financiación

Un perp puede alejarse del precio real. Para mantenerlo cerca, los largos y los cortos se pagan entre sí un pequeño pago periódico llamado **tasa de financiación** (funding rate), a menudo cada pocas horas.

- **Financiación positiva:** los largos pagan a los cortos. Es habitual cuando muchos traders apuestan al alza.
- **Financiación negativa:** los cortos pagan a los largos.

Parece pequeña. Pero en una posición apalancada mantenida durante días, se acumula. Comprueba la tasa antes de mantener.

> **Ejemplo hipotético.** Una posición de 1.000 $ con una financiación del 0,01 % cada 8 horas cuesta unos 0,10 $ cada 8 horas, o unos 0,30 $ al día. Con esa tasa es minúscula, y mucho mayor si la tasa es alta o la posición es grande.

## Otros costes y riesgos

- **Comisiones de trading** en cada apertura y cierre.
- **Diferencial y deslizamiento**, sobre todo en mercados rápidos.
- **Comisiones de liquidación.**
- **Riesgo del exchange:** la plataforma puede quebrar o congelarse.
- **Desapalancamiento automático (auto-deleveraging):** en movimientos extremos, algunos exchanges pueden cerrar posiciones ganadoras para cubrir pérdidas.

## Un enfoque apto para principiantes

- Aprende primero el mercado al contado.
- Si pruebas perps, empieza con poco apalancamiento, margen aislado y un stop.
- Trata el precio de liquidación como una línea a la que nunca quieres acercarte.
- Comprueba la financiación y las comisiones antes de abrir.

## Errores comunes

- Usar un apalancamiento alto porque el tamaño de la posición parece pequeño.
- Usar margen cruzado sin entenderlo.
- Ignorar la financiación en posiciones largas.
- No tener stop y confiar en que la liquidación haga de stop.

## Profundiza

<details><summary>Por qué los números de apalancamiento engañan</summary><p>«10x» suena modesto. Significa que un movimiento de aproximadamente una décima parte en tu contra puede borrar el margen. Elegir el apalancamiento es en realidad elegir lo cerca que está tu precio de liquidación de tu entrada.</p></details>

## Compruébalo tú

<details><summary>1. ¿Qué hace «perpetuo» a un perp?</summary><p>No tiene fecha de vencimiento.</p></details>

<details><summary>2. Margen aislado: ¿lo máximo que puedes perder en esa posición?</summary><p>El margen asignado a ella.</p></details>

<details><summary>3. ¿Qué significa financiación positiva?</summary><p>Los largos pagan a los cortos.</p></details>

<details><summary>4. ¿Qué pasa si las pérdidas consumen tu margen de mantenimiento?</summary><p>La posición se liquida (la cierra el exchange).</p></details>

<details><summary>5. ¿Por qué es mala idea confiar en la liquidación como tu stop?</summary><p>Pierdes todo el margen, más comisiones, en lugar de una pequeña pérdida planificada.</p></details>

## Pruébalo (sin dinero real)

Abre la página de contrato de un perp en cualquier exchange sin operar. Encuentra la tasa de financiación, el margen de mantenimiento y el precio de liquidación con 3x, 10x y 20x para la misma posición. Anota la distancia de la entrada a la liquidación en cada caso.

**Idea clave:** Los perps siguen un precio sin vencimiento y suelen usar apalancamiento. La financiación, las comisiones y la liquidación son los costes, así que ve despacio y mantén bajo el apalancamiento.
