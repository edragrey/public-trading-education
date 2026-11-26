---
title: Riesgo y beneficio en palabras sencillas
module: survive-first
order: 50
summary: Cómo comparar lo que una operación podría ganar con lo que podría perder, y por qué esa comparación te dice con qué frecuencia necesitas acertar.
date: 2026-11-21
needs: stop-losses
---

Ya sabes cuánto perderás si una operación sale mal. Esta lección añade el otro lado: cuánto podrías ganar si sale bien, y por qué los dos van juntos.

## Primero, dos palabras

El **objetivo** (target) es el precio en el que planeas tomar tu beneficio. Como un stop, lo eliges antes de operar.

La **relación beneficio-riesgo** es cuánto podrías ganar comparado con cuánto podrías perder. Se escribe como una proporción, como 2:1 o «2R».

## La cuenta

**Relación beneficio-riesgo = (objetivo − entrada) ÷ (entrada − stop)**

> **Ejemplo hipotético.** La moneda y los precios son inventados, pero la aritmética es exacta.

- Compras a **50 $**. Tu stop está en **47,50 $**. Tu objetivo es **55 $**.
- Si te equivocas, pierdes 2,50 $ por moneda.
- Si aciertas, ganas 5 $ por moneda.
- 5 $ ÷ 2,50 $ = **2**. Es una relación beneficio-riesgo de **2:1**.

Si arriesgas 20 $ (la lección del 1 %), una operación 2:1 aspira a ganar 40 $.

## Por qué importa: con qué frecuencia necesitas acertar

Aquí viene lo útil. La relación te dice la **tasa de acierto que necesitas solo para quedar en tablas**.

**Tasa de acierto de equilibrio = 1 ÷ (1 + relación beneficio-riesgo)**

| Relación beneficio-riesgo | Necesitas ganar al menos |
| --- | --- |
| 0,5:1 | El 67 % de las operaciones |
| 1:1 | El 50 % |
| 2:1 | El 33 % |
| 3:1 | El 25 % |

Con 2:1, puedes equivocarte dos veces de cada tres y aun así quedar en tablas (antes de comisiones). Con 0,5:1, necesitas acertar dos veces de cada tres solo para no moverte del sitio.

<div class="calc" data-calc="rr">
  <p class="calc-row"><label>Compro a $<input data-in="entry" type="number" min="0" step="any" value="50" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Mi stop está en $<input data-in="stop" type="number" min="0" step="any" value="47.5" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Mi objetivo es $<input data-in="target" type="number" min="0" step="any" value="55" inputmode="decimal"></label></p>
  <p class="calc-out">Relación beneficio-riesgo: <strong data-out="rr">2:1</strong>. Para quedar en tablas necesito ganar al menos el <b data-out="be">33%</b> de las operaciones como esta.</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

## La trampa: perseguir ratios grandes

Si 3:1 es bueno, ¿no será mejor 10:1? No automáticamente. Un objetivo lejano se alcanza con menos frecuencia. Alejar el objetivo sube la relación sobre el papel y baja tu tasa de acierto real. Las dos siempre tiran en sentidos opuestos.

La pregunta honesta no es «¿qué tan grande es mi relación?» sino «**¿es este objetivo un lugar al que el precio podría llegar de forma realista?**» Por ejemplo, el último punto donde dio la vuelta, no un número al que te gustaría que llegara.

## Lo que esta lección no te dice

La tabla muestra lo que *necesitas*. No dice nada de lo que *obtendrás*. Tu tasa de acierto real solo aparece tras muchas operaciones anotadas con honestidad. Esa es la lección de expectativa, y la lección del diario más adelante en Construye un sistema.

## Errores comunes

- Elegir un objetivo solo para que la relación quede bien.
- Ignorar la tasa de acierto al elegir una relación.
- Contar el beneficio sin restar los costes.

## Profundiza

<details><summary>Tasa de acierto de equilibrio</summary><p>Tasa de acierto de equilibrio = 1 ÷ (1 + relación beneficio-riesgo), antes de costes. Con 1 a 1 es el 50 %. Con 2 a 1 es aproximadamente el 33 %. Con 3 a 1 es el 25 %.</p></details>

## Compruébalo tú

<details><summary>1. Entrada 100 $, stop 95 $, objetivo 110 $. ¿Cuál es la relación beneficio-riesgo?</summary><p>Arriesgas 5 $ para ganar 10 $, así que 2:1.</p></details>

<details><summary>2. Con 1:1, ¿qué proporción de operaciones necesitas ganar para quedar en tablas?</summary><p>El 50 %, antes de comisiones.</p></details>

<details><summary>3. ¿Por qué no poner todos los objetivos muy lejos para tener una relación enorme?</summary><p>Porque los objetivos lejanos se alcanzan con menos frecuencia. Una relación mayor sobre el papel suele significar una tasa de acierto menor en la práctica.</p></details>

<details><summary>4. Con 3 a 1, ¿más o menos qué tasa de acierto equilibra antes de costes?</summary><p>Aproximadamente el 25 %.</p></details>

<details><summary>5. ¿Por qué una relación objetivo muy alta puede ser una trampa?</summary><p>Los objetivos tan lejanos se alcanzan pocas veces, así que la tasa de acierto cae y el plan puede perder.</p></details>

## Pruébalo (sin dinero real)

En un gráfico, elige una entrada ficticia, un stop donde tu idea sea errónea y un objetivo en el punto donde el precio dio la vuelta por última vez. Calcula la relación y la tasa de acierto de equilibrio. ¿Esperarías honestamente ganar con esa frecuencia?

**Idea clave:** Toda operación tiene dos caras. Compara lo que podrías ganar con lo que podrías perder y sabrás con qué frecuencia necesitas acertar.
