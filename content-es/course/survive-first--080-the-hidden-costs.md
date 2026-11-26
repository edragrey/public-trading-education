---
title: "Los costes ocultos: comisiones, diferenciales, deslizamiento y financiación"
module: survive-first
order: 90
summary: Los pequeños cargos de cada operación que los principiantes rara vez cuentan, y la rapidez con que se acumulan si operas a menudo.
date: 2026-11-21
needs: order-types, what-a-price-is
---

Cada operación cuesta algo, incluso las que quedan en tablas. Estos costes son pequeños uno a uno, y por eso es fácil ignorarlos. En un mes de trading activo pueden ser la diferencia entre ganar y perder dinero.

## Cuatro costes en palabras sencillas

La **comisión de trading** es lo que te cobra el exchange o el bróker por comprar o vender. Normalmente un pequeño porcentaje de la operación, como un 0,1 %.

El **diferencial** (spread) es la diferencia entre el precio más alto que pagará un comprador y el más bajo que aceptará un vendedor. Si compras y vendes de inmediato, pierdes el diferencial.

El **deslizamiento** (slippage) es la diferencia entre el precio que esperabas y el que obtuviste, normalmente en mercados rápidos o finos.

La **financiación** es una comisión periódica en muchas operaciones de futuros «perpetuos» de criptomonedas, que se pagan entre sí los traders cada pocas horas mientras mantienes una posición apalancada. Se puede pagar o recibir, y cambia todo el tiempo.

## Una ida y vuelta cuesta el doble

Pagas una comisión cuando compras **y** cuando vendes. Eso es una «ida y vuelta».

> **Ejemplo hipotético.** La tasa de comisión es inventada pero típica. Los exchanges reales varían, y muchos cobran menos a los traders grandes o por ciertos tipos de orden.

- Una operación de **1.000 $** con una comisión del **0,1 %** cuesta **1 $** abrirla y aproximadamente **1 $** cerrarla.
- Son **2 $** por una ida y vuelta.
- Si arriesgas **20 $** por operación (la lección del 1 %), las comisiones ya son el **10 %** de tu riesgo.

## Pequeño, y luego no tan pequeño

Ahora opera a menudo.

| Idas y vueltas al mes (hipotético) | Comisiones en operaciones de 1.000 $ al 0,1 % |
| --- | --- |
| 10 | unos 20 $ |
| 50 | unos 100 $ |
| 200 | unos 400 $ |

En una cuenta de 2.000 $, 400 $ al mes son el **20 %** de tu dinero, perdido antes de que una sola operación acierte o falle. El diferencial, el deslizamiento y la financiación se suman a eso.

<div class="calc" data-calc="fees">
  <p class="calc-row"><label>Mis operaciones son de unos $<input data-in="size" type="number" min="0" step="any" value="1000" inputmode="decimal"></label></p>
  <p class="calc-row"><label>La comisión es del <input data-in="fee" type="number" min="0" max="5" step="0.01" value="0.1" inputmode="decimal">% por cada sentido</label></p>
  <p class="calc-row"><label>Hago <input data-in="n" type="number" min="0" step="1" value="50" inputmode="numeric"> idas y vueltas al mes</label></p>
  <p class="calc-row"><label>Mi cuenta es de $<input data-in="account" type="number" min="1" step="any" value="2000" inputmode="decimal"></label></p>
  <p class="calc-out">Las comisiones me cuestan unos <strong data-out="month">$100</strong> al mes. Eso es el <b data-out="pct">5%</b> de mi cuenta.</p>
</div>

## El apalancamiento hace mayores las comisiones

Con apalancamiento, las comisiones se cobran sobre la **posición completa**, no solo sobre tu margen. Un margen de 100 $ a 10x es una posición de 1.000 $, así que pagas comisiones sobre 1.000 $. La comisión se siente como el 1 % de tu propio dinero en lugar del 0,1 %.

## Formas de mantener bajos los costes

- **Opera menos.** Menos operaciones, y mejores, es el recorte de comisiones más simple que existe.
- **Mira la página de comisiones** de tu exchange o bróker antes de empezar. Busca las tarifas «maker» y «taker». Maker (una orden que espera en el libro) suele ser más barata que taker (una orden que se ejecuta de inmediato).
- **Evita los mercados finos.** Las monedas o acciones con poca negociación tienen diferenciales más amplios y más deslizamiento.
- **Cuenta los costes en tu plan.** Suma un poco a tu pérdida esperada y réstale un poco a tu ganancia esperada.

## Errores comunes

- Ignorar las comisiones en operaciones pequeñas y frecuentes.
- Usar órdenes a mercado en mercados finos.
- Olvidar que una ida y vuelta paga costes dos veces.

## Profundiza

<details><summary>Las comisiones como proporción del riesgo</summary><p>Si arriesgas 20 $ y los costes por ida y vuelta son 2 $, los costes son el 10 % de tu riesgo antes de que el precio se mueva siquiera. Los costes importan más cuando el riesgo por operación es pequeño.</p></details>

## Compruébalo tú

<details><summary>1. Una operación de 500 $ con una comisión del 0,2 % por cada sentido. ¿Cuánto cuesta la ida y vuelta?</summary><p>Unos 1 $ para abrir y 1 $ para cerrar, así que unos 2 $.</p></details>

<details><summary>2. ¿Por qué importan más las comisiones cuando usas apalancamiento?</summary><p>Porque se cobran sobre la posición completa, que es mayor que el dinero que pusiste.</p></details>

<details><summary>3. ¿Cuál es la forma más simple de pagar menos comisiones?</summary><p>Hacer menos operaciones.</p></details>

<details><summary>4. Las comisiones son de 3 $ por cada sentido. ¿Cuánto es una ida y vuelta?</summary><p>6 $.</p></details>

<details><summary>5. Nombra dos formas de recortar costes.</summary><p>Por ejemplo, usar órdenes limitadas cuando tenga sentido, operar menos veces y elegir mercados líquidos.</p></details>

## Pruébalo (sin dinero real)

Busca la página de comisiones de un exchange o bróker que te interese. Anota las comisiones maker y taker. Después pon tus propios números en la calculadora de arriba y mira lo que costaría un mes con mucha actividad.

**Idea clave:** Toda operación tiene un coste, incluso las que no van a ninguna parte. Cuenta las comisiones, el diferencial y el deslizamiento antes de contar los beneficios.
