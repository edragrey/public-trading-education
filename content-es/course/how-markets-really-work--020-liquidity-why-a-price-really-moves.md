---
title: "Liquidez: por qué se mueve de verdad un precio"
module: how-markets-really-work
order: 20
summary: El precio no se mueve solo por opiniones; se mueve cuando las órdenes se comen el libro. Profundidad, deslizamiento y por qué la misma orden mueve mucho un mercado y poco otro.
date: 2026-11-26
needs: what-a-price-is, volume-and-liquidity
---

Cuando la gente dice «liquidez», significa dos cosas: lo fácil que es operar sin mover el precio, y cuánto dinero hay disponible en el mercado. Esta lección mira la primera, la mecánica.

## Primero, dos palabras

La **liquidez** es lo fácilmente que puedes comprar o vender sin cambiar mucho el precio.

La **profundidad** es cuántas órdenes esperan en el libro de órdenes cerca del precio actual.

## El precio se mueve cuando las órdenes se comen el libro

Recuerda el libro de órdenes: vendedores esperando a precios más altos, compradores a precios más bajos. Una **compra de mercado** toma primero a los vendedores más baratos, luego a los siguientes, y así. El precio que pagas sube a medida que los recorre.

> **Ejemplo hipotético.** El libro tiene 10 monedas a la venta a 100 $, 10 a 101 $ y 10 a 103 $. Quieres comprar 25. Obtienes 10 a 100 $, 10 a 101 $ y 5 a 103 $. Tu precio medio es 101,20 $ y la última operación es a 103 $. El precio se movió un **3 %** por tu orden.

En un mercado profundo hay muchas órdenes en cada nivel, así que la misma orden apenas mueve el precio. En un mercado fino, una orden pequeña puede moverlo mucho.

<figure class="fig"><svg viewBox="0 0 320 150" role="img" aria-label="Una compra de mercado de 25 monedas se come 10 a 100 $, 10 a 101 $ y 5 a 103 $, así que el precio sube un 3 %."><text class="lbl" x="10" y="37">$103</text><rect class="bar-ask" x="60" y="20" width="90" height="26" rx="4"/><text class="t-sm" x="158" y="37">5</text><text class="lbl" x="10" y="71">$101</text><rect class="bar-ask" x="60" y="54" width="180" height="26" rx="4"/><text class="t-sm" x="248" y="71">10</text><text class="lbl" x="10" y="105">$100</text><rect class="bar-ask" x="60" y="88" width="180" height="26" rx="4"/><text class="t-sm" x="248" y="105">10</text><text class="t-loss" x="160" y="136" text-anchor="middle">Comprar 25: media 101,20 $, última operación 103 $ (+3 %)</text></svg><figcaption>Los vendedores en el libro, de más barato a más caro. Hipotético.</figcaption></figure>

## Deslizamiento

El **deslizamiento** (slippage) es la diferencia entre el precio que esperabas y el que obtuviste. Es mayor cuando el mercado es fino, cuando se mueve rápido y cuando tu orden es grande frente al libro.

## Por qué esto explica los grandes movimientos

- Los precios saltan cuando **llegan muchas órdenes a un lado** y el otro es fino.
- Tras una mala noticia, los compradores se retiran, así que hay menos profundidad por debajo. Los vendedores empujan entonces el precio a través del vacío.
- Los movimientos parecen repentinos porque **no hay nada en el libro** entre dos precios.

## La liquidez va y viene

La liquidez no es constante. Suele ser menor en horas tranquilas, fines de semana, alrededor de grandes noticias y en monedas pequeñas. Muchos traders profesionales retiran sus órdenes cuando las cosas se vuelven caóticas, lo que adelgaza el libro justo cuando sube la volatilidad.

## Qué hacer con esto

- Usa **órdenes limitadas** en mercados finos para fijar el peor precio que aceptas.
- Mantén tu tamaño pequeño frente a la profundidad del mercado.
- Espera peores ejecuciones con una orden stop en movimientos rápidos (mira la lección del stop-loss).

## Errores comunes

- Usar una orden de mercado en una moneda fina.
- Suponer que tu stop se ejecuta al precio del stop en un movimiento rápido.
- Tratar un gráfico tranquilo como seguro: los mercados finos pueden saltar sin aviso.

## Para profundizar

<details><summary>Liquidez como dinero</summary><p>«Liquidez» también se usa para la cantidad de dinero que fluye hacia los mercados, por ejemplo desde los bancos centrales o las stablecoins. Es el tema de las lecciones siguientes. Los dos sentidos importan, pero son distintos: uno trata de la mecánica de una operación, el otro del dinero disponible en general.</p></details>

## Compruébalo tú mismo

<details><summary>1. ¿Qué es la profundidad?</summary><p>Cuántas órdenes esperan en el libro cerca del precio actual.</p></details>

<details><summary>2. ¿Por qué mueve el precio una compra de mercado grande?</summary><p>Se come a los vendedores a precios crecientes.</p></details>

<details><summary>3. ¿Qué es el deslizamiento?</summary><p>La diferencia entre el precio esperado y el obtenido.</p></details>

<details><summary>4. ¿Cuándo suele ser menor la liquidez?</summary><p>En horas tranquilas, fines de semana, alrededor de grandes noticias y en monedas pequeñas.</p></details>

<details><summary>5. ¿Qué tipo de orden ayuda en un mercado fino?</summary><p>Una orden limitada, porque fijas el peor precio que aceptas.</p></details>

## Pruébalo (sin dinero real)

Abre el libro de órdenes de una moneda pequeña y de una grande. Compara cuántas órdenes hay a menos del 0,5 % del precio.

**Idea clave:** los precios se mueven cuando las órdenes se comen el libro, y los libros finos dejan que órdenes pequeñas muevan mucho.
