---
title: "Simulador de riesgo: qué implican tus números a lo largo de muchas operaciones"
module: survive-first
order: 80
summary: Introduce una tasa de acierto, una relación beneficio-riesgo y un riesgo por operación para ver el resultado medio y una racha perdedora típica. La idea es ver cuánto importan los números.
date: 2026-11-22
needs: losing-streaks-and-drawdowns, size-your-trade-from-your-stop
section: The basics
---

Has conocido la tasa de acierto, la relación beneficio-riesgo, la expectativa y las rachas perdedoras una a una. Esta calculadora las junta, para que puedas jugar con tus propios números y ver qué implican.

## Cómo leerlo

- **La expectativa (en R)** es el resultado medio por operación, medido en unidades de lo que arriesgas.
- **El cambio medio de la cuenta** supone que cada operación arriesga la misma proporción de la cuenta y que los resultados salen exactamente en la media. Los resultados reales se dispersan en torno a esa media, a veces mucho.
- **La racha perdedora más larga típica** es una estimación aproximada de la serie de pérdidas más larga que verías en ese número de operaciones. Es un valor **típico**, no un límite. Se dan rachas más largas.

<div class="calc" data-calc="risk-sim">
  <p class="calc-row"><label>Tasa de acierto <input data-in="win" type="number" min="1" max="99" step="1" value="45" inputmode="decimal">%</label></p>
  <p class="calc-row"><label>Mi ganancia media es <input data-in="rr" type="number" min="0.1" max="20" step="0.1" value="2" inputmode="decimal"> veces mi pérdida media</label></p>
  <p class="calc-row"><label>Arriesgo un <input data-in="risk" type="number" min="0.1" max="20" step="0.1" value="1" inputmode="decimal">% por operación</label></p>
  <p class="calc-row"><label>en <input data-in="n" type="number" min="1" max="1000" step="1" value="100" inputmode="numeric"> operaciones</label></p>
  <p class="calc-out">Expectativa: <strong data-out="exp">+0.35R</strong> por operación. Cambio medio de la cuenta: <strong data-out="avg">+42%</strong>. Una racha perdedora más larga típica: unas <b data-out="streak">8</b> operaciones seguidas.</p>
</div>

## Cosas que probar

1. **Sube la tasa de acierto, baja la ganancia.** Pon una tasa de acierto del 70 % y una ganancia de 0,5. La expectativa puede volverse negativa aunque «ganes la mayoría de las veces».
2. **Gana pocas veces, gana mucho.** Pon una tasa de acierto del 30 % y una ganancia de 3. Aún puede funcionar, y la racha perdedora se alarga. ¿Podrías mantener la calma?
3. **Duplica el riesgo por operación.** Cambia el 1 % por el 2 %. El resultado medio crece, y también el daño de la mala racha. Compara con la calculadora de rachas perdedoras.
4. **Haz que la ventaja sea cero o negativa.** Pon una tasa de acierto del 40 % y una ganancia de 1. Los costes lo empeoran. Así es una «ausencia de ventaja».

## Lo que la calculadora no puede decirte

- Tu tasa de acierto y tu ganancia reales son **desconocidas** hasta que tengas muchas operaciones. Los primeros números son ruidosos.
- Ignora las comisiones y el deslizamiento. Réstalos.
- Supone que las operaciones son independientes y todas iguales. Los mercados reales no lo son.
- Las medias ocultan el camino. Tú vives el camino, con sus bajones.

> **Ejemplo hipotético.** Con una tasa de acierto del 45 % y una ganancia de 2 a 1, la expectativa es 0,45 × 2 − 0,55 = +0,35R. Con un riesgo del 1 %, eso son aproximadamente +0,35 % por operación de media. Pero en una serie de 100 operaciones probablemente verás una racha de siete u ocho pérdidas en algún momento.

## Errores comunes

- Tratar el resultado como un pronóstico.
- Introducir una tasa de acierto que esperas, no una que has medido.
- Olvidar los costes.
- Elegir el % de riesgo que da el número más grande, ignorando los drawdowns.

## Profundiza

<details><summary>Por qué la estimación de la racha es aproximada</summary><p>La estimación sale de una regla matemática simple: con n operaciones y una probabilidad <em>q</em> de perder cada una, la serie de pérdidas más larga suele rondar log(n) ÷ log(1/q). Es una buena aproximación, y las series reales varían en torno a ella.</p></details>

## Compruébalo tú

<details><summary>1. Tasa de acierto del 50 %, ganancia el doble de la pérdida. ¿Expectativa?</summary><p>0,5 × 2 − 0,5 = +0,5R.</p></details>

<details><summary>2. Tasa de acierto del 70 %, ganancia la mitad del tamaño de la pérdida (0,5). ¿Expectativa?</summary><p>0,7 × 0,5 − 0,3 = +0,05R. Una tasa de acierto alta con ganancias pequeñas da una ventaja fina, y los costes pueden borrarla.</p></details>

<details><summary>3. ¿Por qué la cifra de la racha es «típica» y no un máximo?</summary><p>Las rachas son aleatorias. Se dan otras más largas que la típica.</p></details>

<details><summary>4. ¿Por qué no fiarse de una tasa de acierto de diez operaciones?</summary><p>Son muy pocas operaciones. El número es ruidoso y puede estar lejos del verdadero.</p></details>

<details><summary>5. ¿Qué hace duplicar el riesgo por operación a las malas rachas?</summary><p>Hace mucho más profundo el drawdown de la misma racha.</p></details>

## Pruébalo (sin dinero real)

Usa tu propio diario de operaciones en simulado. Calcula tu tasa de acierto real y tu relación beneficio-riesgo media a partir de al menos 20 operaciones. Introdúcelas arriba y compara la racha típica con la más larga que tuviste de verdad.

**Idea clave:** La tasa de acierto, la ganancia y el riesgo funcionan juntos. Los mismos números dan una media y un camino con baches, así que elige un riesgo con el que puedas vivir.
