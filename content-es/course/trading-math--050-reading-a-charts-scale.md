---
title: "Cómo leer la escala de un gráfico"
module: trading-math
order: 50
summary: Escala lineal frente a logarítmica, precio frente a porcentaje, y cómo la escala puede hacer que el mismo movimiento parezca tranquilo o salvaje.
date: 2026-11-26
needs: percentages-and-percent-change
---

Dos gráficos de la misma moneda pueden verse muy distintos y ninguno miente. La diferencia es la **escala**. Saber leerla evita que un gráfico te engañe.

## Primero, dos palabras

La **escala** es cómo se espacian los números del lateral de un gráfico.

Una escala **lineal** espacia por igual los pasos iguales en **dólares**: el hueco de 10 $ a 20 $ se ve igual que el de 20 $ a 30 $.

Una escala **logarítmica** (log) espacia por igual los pasos iguales en **porcentaje**: el hueco de 10 $ a 20 $ (+100 %) se ve igual que el de 20 $ a 40 $ (+100 %).

## Por qué importa

> **Ejemplo hipotético.** Un precio sube de 1 $ a 2 $, de 2 $ a 4 $ y de 4 $ a 8 $. Cada paso es un doblaje (+100 %).
> En un gráfico **lineal**, la última subida parece ocho veces mayor que la primera (son 4 $ frente a 1 $).
> En un gráfico **log**, los tres pasos parecen del mismo tamaño, que es lo que pasó en porcentaje.

En ventanas cortas, los dos se ven casi igual. En historias largas o movimientos grandes, un gráfico lineal hace que los movimientos recientes parezcan enormes y los antiguos minúsculos.

<figure class="fig"><svg viewBox="0 0 320 150" role="img" aria-label="Tres doblajes dibujados de dos formas. En un gráfico lineal las barras crecen 1, 2, 4. En uno log las tres barras tienen la misma altura."><text class="t" x="85" y="18" text-anchor="middle">Lineal: dólares</text><text class="t" x="245" y="18" text-anchor="middle">Log: porcentaje</text><line class="axis" x1="10" y1="104" x2="150" y2="104"/><line class="axis" x1="170" y1="104" x2="310" y2="104"/><rect class="bar-bid" x="20" y="94" width="30" height="10" rx="3"/><text class="lbl" x="35" y="120" text-anchor="middle">$1→$2</text><rect class="bar-bid" x="66" y="84" width="30" height="20" rx="3"/><text class="lbl" x="81" y="120" text-anchor="middle">$2→$4</text><rect class="bar-bid" x="112" y="64" width="30" height="40" rx="3"/><text class="lbl" x="127" y="120" text-anchor="middle">$4→$8</text><rect class="bar-bid" x="180" y="80" width="30" height="24" rx="3"/><text class="lbl" x="195" y="120" text-anchor="middle">$1→$2</text><rect class="bar-bid" x="226" y="80" width="30" height="24" rx="3"/><text class="lbl" x="241" y="120" text-anchor="middle">$2→$4</text><rect class="bar-bid" x="272" y="80" width="30" height="24" rx="3"/><text class="lbl" x="287" y="120" text-anchor="middle">$4→$8</text><text class="t-sm" x="160" y="142" text-anchor="middle">Cada paso es +100 %</text></svg><figcaption>Los mismos tres doblajes. La escala decide lo grandes que parecen.</figcaption></figure>

## Cuál usar

- **Lineal** para el corto plazo y para colocar un stop en dólares.
- **Log** para historias largas y vaivenes grandes, donde importa el porcentaje.
- La mayoría de las herramientas tienen un pequeño interruptor «log». Prueba los dos en cualquier gráfico largo.

## Precio frente a porcentaje

Un gráfico también puede mostrar el **porcentaje de cambio desde un punto de partida** en vez del precio. Así se comparan dos activos con justicia. Una moneda de 0,10 $ y otra de 60 000 $ no se comparan por precio, pero sí por porcentaje desde la misma fecha.

## Otras formas en que un gráfico puede engañar

- **Zoom:** una ventana corta hace que un movimiento pequeño parezca enorme. Mira los números del lateral.
- **Eje recortado:** un gráfico que empieza en 98 $ en vez de 0 $ hace que un 2 % parezca dramático.
- **Distintas escalas de tiempo:** una deriva suave en el gráfico diario puede ser un desplome en el de 1 minuto. Comprueba siempre cuál estás viendo.

## Errores comunes

- Leer una línea recta en un gráfico lineal como «constante», cuando el crecimiento porcentual se está frenando.
- Comparar dos activos por precio en vez de por porcentaje.
- Fiarte de un movimiento de aspecto dramático sin mirar los números.

## Para profundizar

<details><summary>Por qué una línea recta en un gráfico log es crecimiento porcentual constante</summary><p>En una escala log, los pasos porcentuales iguales se ven iguales, así que un crecimiento porcentual constante se dibuja como una recta. Una curva que sube significa que el crecimiento porcentual se acelera; si baja, se frena.</p></details>

## Compruébalo tú mismo

<details><summary>1. En un gráfico lineal, ¿qué movimiento parece mayor: de 10 $ a 20 $, o de 100 $ a 110 $?</summary><p>De 10 $ a 20 $ son 10 $ y de 100 $ a 110 $ también. Se ven del mismo tamaño, aunque uno es +100 % y el otro +10 %.</p></details>

<details><summary>2. ¿Y en un gráfico log?</summary><p>De 10 $ a 20 $ (+100 %) se ve mucho mayor que de 100 $ a 110 $ (+10 %).</p></details>

<details><summary>3. ¿Cómo comparas con justicia una moneda de 0,10 $ y otra de 60 000 $?</summary><p>Por variación porcentual desde la misma fecha de partida, no por precio.</p></details>

<details><summary>4. El eje de un gráfico empieza en 98 $ y acaba en 102 $. ¿Es un movimiento grande?</summary><p>No. Es de un 4 % como mucho. El eje ajustado hace que parezca dramático.</p></details>

<details><summary>5. ¿Cuándo es más útil una escala log?</summary><p>En historias largas o movimientos muy grandes, donde los cambios porcentuales importan más que los cambios en dólares.</p></details>

## Pruébalo (sin dinero real)

Abre el gráfico de cualquier moneda de los últimos 3 años. Cambia entre lineal y log. Fíjate en qué movimientos antiguos aparecen o desaparecen.

**Idea clave:** un gráfico lineal muestra dólares y uno log muestra porcentaje, así que elige el que responda a tu pregunta.
