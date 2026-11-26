---
title: "Medias móviles: suavizar el ruido"
module: read-the-market
order: 40
summary: Una media móvil convierte precios saltarines en una línea suave. Qué muestra, qué no puede mostrar y por qué siempre va con retraso.
date: 2026-11-21
section: The chart
needs: market-structure
---

Las velas tienen ruido. Una **media móvil** (MA) es una línea que las suaviza para que la dirección sea más fácil de ver.

## Cómo se hace

Toma el precio de cierre de las últimas N velas, haz la media y dibuja el resultado. Avanza una vela y vuelve a hacerlo.

> **Ejemplo hipotético.** Una media móvil de 5 días con cierres de 10 $, 11 $, 12 $, 11 $, 13 $ es (10 + 11 + 12 + 11 + 13) ÷ 5 = **11,40 $**. Mañana el cierre más antiguo sale y entra el más reciente.

N es el **período**. Una MA de 20 períodos en un gráfico diario usa los últimos 20 días.

## Dos tipos habituales

- **SMA (simple):** cada vela cuenta igual.
- **EMA (exponencial):** las velas recientes cuentan más, así que reacciona más rápido.

## Qué te dice

- **Dirección:** una línea ascendente sugiere que los precios han tendido al alza; una descendente, a la baja.
- **Precio frente a la línea:** el precio por encima de una MA larga significa que ha estado fuerte últimamente; por debajo, débil.
- **Soporte/resistencia dinámicos:** el precio a veces rebota cerca de una MA. Es una zona a vigilar, no una regla.
- **Cruces:** cuando una MA rápida cruza una lenta, algunos traders lo leen como un cambio de impulso.

## La gran limitación: va con retraso

Una media móvil se construye **solo con precios pasados**, así que siempre llega tarde. En una tendencia fuerte no importa. En un mercado lateral, el precio la cruza una y otra vez, y cada cruce es una señal falsa. Los períodos más cortos son más nerviosos; los más largos, más lentos.

No existe un ajuste «mejor». Las herramientas que parecen perfectas con datos pasados suelen estar ajustadas a ellos.

## Errores comunes

- Pensar que un cruce predice el futuro.
- Apilar muchas medias hasta que algo encaje.
- Usar una en un rango con altibajos.
- Cambiar el período tras una pérdida para «arreglarla».

## Profundiza

<details><summary>Por qué se vigilan la de 50 y la de 200</summary><p>Las medias de 50 y de 200 días las sigue mucha gente, así que muchos reaccionan en torno a ellas. Esa atención es parte de por qué a veces importan. Es popularidad, no magia.</p></details>

## Compruébalo tú

<details><summary>1. ¿Cómo calculas una media de 3 períodos de los cierres 9 $, 12 $, 15 $?</summary><p>(9 + 12 + 15) ÷ 3 = 12 $.</p></details>

<details><summary>2. ¿En qué se diferencia una EMA de una SMA?</summary><p>Da más peso a las velas recientes, así que reacciona más rápido.</p></details>

<details><summary>3. ¿Por qué va con retraso una media móvil?</summary><p>Se construye solo con precios pasados.</p></details>

<details><summary>4. ¿Dónde funcionan peor las medias móviles?</summary><p>En mercados laterales con altibajos, donde el precio cruza la línea una y otra vez.</p></details>

<details><summary>5. ¿Predice un cruce el siguiente movimiento?</summary><p>No. Describe lo que ya ha ocurrido.</p></details>

## Pruébalo (sin dinero real)

Añade una media móvil de 20 y una de 50 a un gráfico diario. Marca cada cruce del último año. Para cada uno, anota si el mes siguiente fue de tendencia o con altibajos.

**Idea clave:** Una media móvil suaviza los precios pasados en una línea. Te ayuda a ver la dirección, y siempre va con retraso.
