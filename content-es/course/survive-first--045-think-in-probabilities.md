---
title: "Piensa en probabilidades"
module: survive-first
order: 45
summary: Una sola operación no te dice casi nada. Una pauta con ventaja solo se muestra tras muchas operaciones, como la ventaja de un casino.
date: 2026-11-22
needs: why-a-correct-forecast-can-still-lose-money
section: The basics
---

Una **probabilidad** es lo probable que es algo, como «esta configuración funciona unas 4 veces de cada 10». Una **ventaja** (edge) es una pequeña inclinación repetible a tu favor: tras muchas operaciones, tus ganancias aportan más de lo que cuestan tus pérdidas.

## La imagen del casino

Un casino no sabe quién ganará la próxima mano. No lo necesita. Las probabilidades están ligeramente a su favor, así que tras miles de manos sale ganando. Una mano perdedora no le hace entrar en pánico, porque una mano es una parte minúscula de una larga serie.

Operar puede funcionar igual **si tienes una ventaja** y tomas las operaciones que tu ventaja dice que tomes.

## Por qué una sola operación no significa casi nada

> **Ejemplo hipotético.** Una configuración que gana el 40 % de las veces y paga 2 por cada 1 arriesgado. En 10 operaciones podrías tener 2 ganancias, o 6. Ambas cosas son normales. Solo tras muchas operaciones se muestra el 40 %.

Juzgar la configuración por tus tres últimas operaciones es como juzgar un casino por una sola mano.

## Lo que puedes y no puedes saber

- **Puedes** conocer tus reglas, tu riesgo, tus costes y tu historial.
- **No puedes** saber si *esta* operación ganará.

No pasa nada. No necesitas conocer el próximo resultado para que te vaya bien a lo largo de una serie, siempre que tu riesgo sea lo bastante pequeño como para sobrevivir a las malas rachas.

## Una ventaja no es una predicción

Una ventaja dice «tras muchas operaciones, esto se inclina a mi favor». No dice «esta funcionará». Tratarla como una promesa es como se hace daño la gente.

Prueba el simulador de riesgo de abajo para ver cómo la misma ventaja produce series cortas muy distintas.

<div class="calc" data-calc="risk-sim">
  <p class="calc-row"><label>Tasa de acierto <input data-in="win" type="number" min="1" max="99" step="1" value="40" inputmode="decimal">%</label></p>
  <p class="calc-row"><label>Mi ganancia media es <input data-in="rr" type="number" min="0.1" max="20" step="0.1" value="2" inputmode="decimal"> veces mi pérdida media</label></p>
  <p class="calc-row"><label>Arriesgo un <input data-in="risk" type="number" min="0.1" max="20" step="0.1" value="1" inputmode="decimal">% por operación</label></p>
  <p class="calc-row"><label>en <input data-in="n" type="number" min="1" max="1000" step="1" value="100" inputmode="numeric"> operaciones</label></p>
  <p class="calc-out">Expectativa: <strong data-out="exp">+0.2R</strong> por operación. Cambio medio de la cuenta: <strong data-out="avg">+20%</strong>. Una racha perdedora más larga típica: unas <b data-out="streak">8</b> operaciones seguidas.</p>
</div>

## Errores comunes

- Juzgar una configuración por sus tres últimas operaciones.
- Pensar que una ventaja significa que esta operación ganará.
- Tomar solo algunas de las configuraciones que piden tus reglas.

## Profundiza

<details><summary>Por qué importa «cada operación»</summary><p>Si te saltas operaciones tras las pérdidas y las tomas tras las ganancias, cambias la propia muestra de la que depende tu ventaja. Tomar todas las configuraciones que cumplen las reglas mantiene honestos los números.</p></details>

## Compruébalo tú

<details><summary>1. ¿Qué es una ventaja, en palabras sencillas?</summary><p>Una pequeña inclinación repetible a tu favor que se muestra tras muchas operaciones.</p></details>

<details><summary>2. Una configuración gana el 40 % y paga 2 a 1. ¿Pueden 10 operaciones producir solo 2 ganancias?</summary><p>Sí. Las series cortas varían mucho en torno a la media a largo plazo.</p></details>

<details><summary>3. ¿Es una ventaja una predicción para una operación?</summary><p>No. Describe una serie, no la próxima operación.</p></details>

<details><summary>4. ¿Por qué un casino puede mantener la calma tras perder una mano?</summary><p>Una mano es una parte minúscula de una larga serie en la que las probabilidades le favorecen.</p></details>

<details><summary>5. ¿Qué necesitas para que una mala racha no acabe contigo?</summary><p>Un riesgo pequeño por operación, para sobrevivir a las rachas perdedoras el tiempo suficiente para que se muestre la ventaja.</p></details>

## Pruébalo (sin dinero real)

Ejecuta el simulador con tus propios números. ¿Qué ajuste da la racha perdedora más larga, y podrías seguir tu plan a lo largo de ella?

**Idea clave:** No necesitas saber lo que pasará después. Necesitas una ventaja, un riesgo pequeño y suficientes operaciones.

*Esta lección se inspira en las ideas de *Trading in the Zone* (Mark Douglas). Está escrita con nuestras propias palabras, y el libro merece mucho la pena leerlo entero.*

**Contenido educativo, no asesoramiento financiero.**
