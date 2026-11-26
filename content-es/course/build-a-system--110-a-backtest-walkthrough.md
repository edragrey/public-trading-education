---
title: "Un backtest paso a paso: probar una regla con datos pasados"
module: build-a-system
order: 110
summary: Paso a paso, prueba una regla sencilla con precios pasados y aprende por qué un backtest que parece bueno aún puede engañar.
date: 2026-11-21
needs: test-before-you-risk-money
---

Un **backtest** aplica tu regla escrita a precios pasados para ver cómo lo habría hecho. Es la segunda de las tres pruebas de la lección anterior. Aquí tienes un ejemplo resuelto, con sus trampas.

> **Todas las cifras de abajo están inventadas** para mostrar el método. No son resultados reales y no sugieren que ninguna estrategia funcione.

## Paso 1: escribe una regla exacta

> **Regla:** En el gráfico diario, compra cuando el precio cierre por encima de su media móvil de 50 días. Pon un stop un 5 % por debajo de la entrada. Vende cuando el precio cierre por debajo de la media de 50 días o salte el stop.

Todo tiene que ser lo bastante concreto como para que otra persona obtenga las mismas operaciones.

## Paso 2: elige los datos y el período

- Usa velas diarias de un mercado.
- Elige un período lo bastante largo para incluir fases **alcistas, bajistas y laterales**. Muchos traders también lo dividen: construyen la regla con la primera parte y la prueban en una parte que no han mirado.
- Puedes exportar el historial de precios desde la mayoría de las plataformas de gráficos como una hoja de cálculo.

## Paso 3: lista cada operación

Recorre el gráfico vela a vela (tapa el lado derecho). Anota cada operación: entrada, salida, resultado en R (donde 1R = la cantidad arriesgada).

> **Resultados hipotéticos, 12 operaciones:**
> +2,1R, −1R, −1R, +0,4R, −1R, +3,5R, −1R, −0,6R, +1,8R, −1R, −1R, +2,7R

## Paso 4: súmalo

- Ganancias: 5 de 12 (tasa de acierto de alrededor del 42 %).
- Total: 2,1 + 0,4 + 3,5 + 1,8 + 2,7 = +10,5R de ganancias, y −6,6R de pérdidas.
- Neto: **+3,9R**, una media de **+0,33R por operación** (expectativa).

Resta los costes. Si las comisiones y el deslizamiento promedian 0,1R por operación, la expectativa baja a unos **+0,23R**. Si los costes fueran 0,4R, sería negativa.

## Paso 5: mira la forma, no solo el total

- **Racha perdedora más larga:** aquí, 3 seguidas al principio y 2 después. ¿Podrías mantener la calma durante eso?
- **Mayor drawdown:** la mayor caída desde un máximo, en R.
- **¿Qué operaciones hicieron el beneficio?** Aquí, una operación de +3,5R es una parte grande. Si esa operación no hubiera ocurrido, el resultado se vería bastante distinto.

## Las trampas

- **Sobreajuste (overfitting):** retocar la regla hasta que encaje perfecto con el pasado (por ejemplo cambiar «50» por «47» porque se veía mejor). Luego falla con datos nuevos.
- **Muy pocas operaciones:** 12 operaciones demuestran muy poco. Muchas decenas es mejor.
- **Retrospectiva:** sabes cómo acaba la historia. Haz solo las operaciones que la regla habría hecho, incluso las feas.
- **Ignorar costes y deslizamiento.**
- **Un mercado, un período:** una regla que funcionó en un mercado alcista puede fallar en el siguiente.

## Qué hacer después

Un backtest que se ve decente es **una razón para operar la regla en papel y luego operar muy pequeño**, no una razón para ir a lo grande. La prueba hacia delante de la lección anterior es la que te dice si aguanta.

## Errores comunes

- Cambiar la regla tras ver los resultados.
- Contar solo las mejores operaciones.
- Creer un backtest como si fuera una prueba.

## Profundiza

<details><summary>Pruebas fuera de muestra</summary><p>Construye y ajusta tu regla con un bloque de datos y luego pruébala una sola vez, sin cambios, en un bloque aparte. Si solo funciona en el primer bloque, probablemente se ajustó a ese período.</p></details>

## Compruébalo tú

<details><summary>1. ¿Por qué debe escribirse la regla con exactitud?</summary><p>Para que las operaciones sean repetibles y no puedas elegir o ignorar operaciones con retrospectiva.</p></details>

<details><summary>2. Expectativa: +3,9R en 12 operaciones. ¿Cuál es la media por operación?</summary><p>3,9 ÷ 12 = +0,325R.</p></details>

<details><summary>3. ¿Por qué restar los costes?</summary><p>Las comisiones y el deslizamiento pueden convertir una pequeña ventaja en pérdida.</p></details>

<details><summary>4. ¿Qué es el sobreajuste?</summary><p>Retocar una regla hasta que encaje perfecto con datos pasados, de modo que falla con datos nuevos.</p></details>

<details><summary>5. ¿A qué debe llevar un backtest decente?</summary><p>A operar en papel y luego con operaciones reales muy pequeñas. No a un tamaño grande.</p></details>

## Pruébalo (sin dinero real)

Escribe una regla exacta y haz un backtest con un año de velas diarias, registrando cada operación en R. Calcula la tasa de acierto, la expectativa tras un coste estimado y la racha perdedora más larga.

**Idea clave:** Un backtest muestra cómo se habría comportado una regla, no cómo lo hará. Mantenlo honesto: reglas exactas, costes incluidos, suficientes operaciones y sin retocar hasta que se vea bien.
