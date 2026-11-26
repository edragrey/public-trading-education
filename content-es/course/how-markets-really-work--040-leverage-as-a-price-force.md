---
title: "El apalancamiento como fuerza de precio: liquidaciones, funding e interés abierto"
module: how-markets-really-work
order: 40
summary: Por qué el dinero prestado hace que los precios se muevan más rápido, cómo la venta forzada se retroalimenta y tres números que vigilan los traders.
date: 2026-11-26
needs: leverage-in-plain-words, what-happens-when-you-get-liquidated
---

Muchos movimientos bruscos de la cripto no tienen que ver con noticias. Tienen que ver con **posiciones apalancadas que se cierran a la fuerza**. Entender esto explica por qué los precios pueden caer (o subir) tan rápido.

## Primero, dos palabras

El **interés abierto** (open interest) es la cantidad total de contratos apalancados (derivados) abiertos que aún no se han cerrado.

La **tasa de financiación** (funding rate) es un pequeño pago que pasa entre traders en largo y en corto en los contratos perpetuos, para mantener el precio del contrato cerca del precio real.

## Cómo se retroalimenta el apalancamiento

> **Ejemplo hipotético.** El precio cae un 5 %. Algunos traders con mucho apalancamiento llegan a su precio de liquidación y el exchange **vende sus posiciones automáticamente**. Esa venta empuja el precio más abajo, lo que liquida al siguiente grupo, que vende, y así. Una caída modesta se convierte en una caída brusca. Esta cadena se llama **cascada de liquidaciones**.

Lo mismo ocurre hacia arriba: un **short squeeze** obliga a los vendedores en corto a recomprar, lo que empuja el precio más arriba, lo que obliga a más a comprar.

<figure class="fig"><svg viewBox="0 0 320 140" role="img" aria-label="Una cascada de liquidaciones: una bajada provoca liquidaciones, que causan venta forzada, que empuja el precio más abajo y vuelve a empezar."><rect class="box" x="8" y="44" width="70" height="52" rx="10"/><text class="t-sm" x="43" y="74" text-anchor="middle" style="font-size:10.5px">El precio baja un 5 %</text><line class="arrow" x1="79" y1="70" x2="85" y2="70"/><rect class="box" x="86" y="44" width="70" height="52" rx="10"/><text class="t-sm" x="121" y="74" text-anchor="middle" style="font-size:10.5px">Liquidaciones</text><line class="arrow" x1="157" y1="70" x2="163" y2="70"/><rect class="box" x="164" y="44" width="70" height="52" rx="10"/><text class="t-sm" x="199" y="74" text-anchor="middle" style="font-size:10.5px">Venta forzada</text><line class="arrow" x1="235" y1="70" x2="241" y2="70"/><rect class="box-acc" x="242" y="44" width="70" height="52" rx="10"/><text class="t-sm" x="277" y="74" text-anchor="middle" style="font-size:10.5px">El precio cae más</text><path class="ln" d="M285 98 Q285 125 160 125 Q45 125 43 100" style="stroke-dasharray:4 4"/><text class="lbl" x="160" y="118" text-anchor="middle">…y el ciclo se repite</text></svg><figcaption>Por qué los mercados apalancados pueden caer (o subir) de golpe.</figcaption></figure>

## Tres números que vigilan los traders

- **Interés abierto:** si sube rápido, hay muchas apuestas apalancadas nuevas. Más combustible para un gran movimiento en cualquier sentido.
- **Tasa de financiación:** si es muy positiva, los largos pagan a los cortos, lo que sugiere que mucha gente apuesta al alza. Una operación saturada puede deshacerse bruscamente.
- **Liquidaciones:** datos de cuánto se cerró a la fuerza. Un pico suele marcar el final de un movimiento violento.

Ninguno es una predicción. Muestran **cuán saturado y frágil** está el mercado.

## Por qué te importa

- El apalancamiento hace los mercados **más nerviosos** aunque tú no lo uses.
- Un nivel donde hay muchas liquidaciones puede actuar como un imán para el precio.
- Si el mercado está saturado en una dirección, un pequeño empujón en la contraria puede iniciar una cascada.

## Qué puedes hacer

- Evita el apalancamiento alto (las lecciones de apalancamiento explican por qué).
- Ten cuidado al abrir una operación tras un movimiento muy unilateral.
- Trata el funding y el interés abierto como contexto, no como señales.

## Errores comunes

- Leer el funding como una señal segura de giro.
- Ignorar lo saturada que está una operación.
- Usar apalancamiento porque «todos están en largo».

## Para profundizar

<details><summary>Por qué existe el funding</summary><p>Un contrato perpetuo no caduca, así que necesita un mecanismo para mantenerse cerca del precio real. El funding lo hace: cuando el contrato cotiza por encima del precio real, los largos pagan a los cortos, animando más venta; cuando está por debajo, los cortos pagan a los largos.</p></details>

## Compruébalo tú mismo

<details><summary>1. ¿Qué es una cascada de liquidaciones?</summary><p>Ventas forzadas bajan el precio, liquidando más posiciones, que venden y lo bajan otra vez.</p></details>

<details><summary>2. ¿Qué sugiere un interés abierto al alza?</summary><p>Que se hacen más apuestas apalancadas, así que hay más combustible para un gran movimiento.</p></details>

<details><summary>3. ¿Qué sugiere un funding muy positivo?</summary><p>Que muchos traders están en largo y pagan por seguir así. La operación puede estar saturada.</p></details>

<details><summary>4. ¿Qué es un short squeeze?</summary><p>Los cortos se ven obligados a recomprar, empujando el precio al alza y forzando a más a comprar.</p></details>

<details><summary>5. ¿Tienes que usar apalancamiento para verte afectado por él?</summary><p>No. El apalancamiento de otros hace todo el mercado más nervioso.</p></details>

## Pruébalo (sin dinero real)

Busca un gráfico gratuito de interés abierto y funding de una moneda grande. Anota si los grandes movimientos recientes vinieron con una subida en alguno de los dos.

**Idea clave:** el apalancamiento convierte movimientos pequeños en ventas o compras forzadas, así que los mercados saturados son frágiles.
