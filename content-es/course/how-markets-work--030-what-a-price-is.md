---
title: "Qué es realmente un precio: compradores, vendedores y el libro de órdenes"
module: how-markets-work
order: 30
summary: El número en tu pantalla es solo la última operación entre un comprador y un vendedor. Así se produce esa operación y por qué en realidad hay dos precios, no uno.
date: 2026-11-21
needs: what-a-market-is
---

Ahora, la pieza más pequeña de cualquier mercado: un solo precio.

## Un precio es una operación cerrada

El precio que ves de una acción o una moneda es simplemente **el último precio al que alguien compró y otra persona vendió**. Eso es todo. No es un valor justo, un pronóstico ni una opinión. Es la operación más reciente.

## Primero, dos palabras

**Bid** es el precio más alto que cualquier comprador ofrece ahora mismo.

**Ask** (u oferta de venta) es el precio más bajo que cualquier vendedor está dispuesto a aceptar ahora mismo.

La diferencia entre ambos es el **diferencial** (spread). Es un pequeño coste que pagas cada vez que operas, y la lección de costes ocultos de Sobrevive primero lo estudia en detalle.

## El libro de órdenes

Todo exchange mantiene una lista de todos los que esperan para comprar y vender, a qué precio y cuánto. Esa lista es el **libro de órdenes**.

> **Ejemplo hipotético.** Un libro de órdenes inventado para una moneda inventada.

| Esperando para comprar (bids) | Precio | Esperando para vender (asks) |
| --- | --- | --- |
| | 100,20 $ | 15 monedas |
| | 100,10 $ | 8 monedas |
| | 100,05 $ | 5 monedas |
| 6 monedas | 100,00 $ | |
| 10 monedas | 99,90 $ | |
| 20 monedas | 99,80 $ | |

- El mejor bid es **100,00 $**. El mejor ask es **100,05 $**. El diferencial es de **5 céntimos**.
- Si quieres comprar **ahora mismo**, pagas el ask: **100,05 $**.
- Si quieres vender **ahora mismo**, recibes el bid: **100,00 $**.

## Dos tipos de orden

La **orden a mercado** dice «compra (o vende) ahora, al mejor precio disponible». Se ejecuta de inmediato y toma del libro.

La **orden limitada** dice «compra (o vende) solo a este precio o mejor». Espera en el libro hasta que alguien la toma, y puede que nunca se ejecute.

## Cómo se mueve un precio, operación a operación

Con el libro de arriba: alguien envía una orden a mercado para comprar **10 monedas**.

1. Toma las **5 monedas** a 100,05 $.
2. Después **5** de las 8 monedas a 100,10 $.
3. La última operación se hizo a **100,10 $**, así que ese es el nuevo precio en tu pantalla.

No «pasó» nada en las noticias. Un comprador simplemente tenía más prisa que los vendedores que esperaban, y agotó las monedas más baratas que había en oferta. Así funciona cada movimiento de precio, grande o pequeño.

## Por qué te importa

- **Las órdenes mayores mueven más el precio** cuando el libro es fino. Eso se llama **deslizamiento** (slippage): la diferencia entre el precio que esperabas y el precio que realmente obtuviste.
- **El precio del gráfico no siempre es el precio que obtendrás.** Compras al ask y vendes al bid.
- En mercados tranquilos, o con monedas pequeñas, el diferencial puede ser amplio. Es un coste cada vez.

## Errores comunes

- Pensar que el precio en pantalla es el precio que obtendrás.
- Usar órdenes a mercado en libros finos y sorprenderte por el deslizamiento.
- Creer que detrás de cada movimiento de precio hay una noticia.

## Profundiza

<details><summary>Leer la profundidad</summary><p>Muchos exchanges muestran cuántas unidades esperan en cada nivel de precio. Un libro fino (pocas unidades cerca del precio) significa que una orden modesta puede mover el precio. Un libro grueso la absorbe.</p></details>

## Compruébalo tú

<details><summary>1. El mejor bid es 50,00 $ y el mejor ask es 50,10 $. Colocas una orden a mercado para comprar. ¿Más o menos cuánto pagas?</summary><p>Unos 50,10 $, el ask. Posiblemente algo más si tu orden es mayor que lo que espera a ese precio.</p></details>

<details><summary>2. ¿Cuál es la diferencia entre una orden a mercado y una orden limitada?</summary><p>Una orden a mercado se ejecuta ahora al mejor precio disponible. Una orden limitada solo se ejecuta a tu precio o mejor, y puede que no se ejecute en absoluto.</p></details>

<details><summary>3. ¿Un movimiento de precio siempre significa que hubo una noticia?</summary><p>No. Todo movimiento son solo compradores y vendedores cerrando operaciones. A veces un lado simplemente tiene más prisa.</p></details>

<details><summary>4. El libro muestra 5 monedas a 100,05 $ y 8 a 100,10 $. Una compra a mercado de 10 monedas se ejecuta a qué precios?</summary><p>5 a 100,05 $ y 5 de las 8 a 100,10 $, así que agota primero a los vendedores más baratos.</p></details>

<details><summary>5. ¿Por qué el diferencial es un coste aunque el precio no se mueva?</summary><p>Compras al ask y vendes al bid, así que ida y vuelta pierdes la diferencia de inmediato.</p></details>

## Pruébalo (sin dinero real)

Muchos exchanges y aplicaciones de brókeres te dejan ver el libro de órdenes sin iniciar sesión ni operar. Abre uno de cualquier moneda o acción. Encuentra el mejor bid, el mejor ask y calcula el diferencial.

**Idea clave:** Un precio es solo la última operación. Detrás siempre hay dos precios, el bid y el ask, y una cola de gente esperando.
