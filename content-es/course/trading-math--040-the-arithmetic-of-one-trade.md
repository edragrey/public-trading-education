---
title: "La aritmética de una operación"
module: trading-math
order: 40
summary: Calcula ganancia, pérdida, comisiones, punto de equilibrio y tamaño de posición de una operación, paso a paso y sin nada oculto.
date: 2026-11-26
needs: averages-ratios-and-r-multiples
---

Antes de cualquier operación deberías poder hacer cinco cuentas en papel: de qué tamaño, cuánto ganas, cuánto pierdes, cuánto cuesta y dónde empatas. Ninguna necesita más que multiplicar y dividir.

## Primero, dos palabras

El **tamaño de posición** es cuánto dinero (o cuántas unidades) metes en una operación.

El **precio de equilibrio** es el precio al que te vas con exactamente lo que pusiste, **después de comisiones**.

## Paso a paso

> **Ejemplo hipotético.** Tienes una cuenta de 2000 $ y decides arriesgar el 1 %. Una moneda cotiza a **2,00 $**. Tu plan dice que la idea es errónea si el precio cae a **1,90 $**.

**1. Dinero en riesgo.** El 1 % de 2000 $ = **20 $**.

**2. Distancia al stop.** (2,00 − 1,90) ÷ 2,00 = 5 %.

**3. Tamaño de posición.** 20 $ ÷ 5 % = **400 $** (200 unidades). Si salta el stop, pierdes unos 20 $.

**4. Objetivo.** Aspirar a 2R es ganar 40 $. Es un 10 % sobre 400 $, así que un objetivo de **2,20 $**.

**5. Comisiones.** Si la plataforma cobra un 0,1 % por lado, abrir 400 $ cuesta 0,40 $ y cerrar unos 0,44 $. Total unos **0,84 $**, más del 4 % de tus 20 $ de riesgo. Poco por operación, mucho en un año.

<figure class="fig"><svg viewBox="0 0 320 160" role="img" aria-label="Una escalera de operación: objetivo 2,20 $, entrada 2,00 $, stop 1,90 $. Riesgo 20 $ en una posición de 400 $, beneficio 40 $."><rect fill="var(--accent-soft)" x="100" y="22" width="90" height="72"/><rect fill="var(--loss-soft)" x="100" y="94" width="90" height="36"/><line class="guide" x1="40" y1="22" x2="300" y2="22"/><line class="guide" x1="40" y1="94" x2="300" y2="94"/><line class="guide" x1="40" y1="130" x2="300" y2="130"/><text class="t-gain" x="198" y="18">Objetivo 2,20 $ (+40 $)</text><text class="t" x="198" y="89">Entrada 2,00 $</text><text class="t-loss" x="198" y="146">Stop 1,90 $ (−20 $)</text><text class="t-gain" x="10" y="62">2R</text><text class="t-loss" x="10" y="116">1R</text><circle class="dot pulse" cx="145" cy="94" r="5"/></svg><figcaption>Posición de 400 $: riesgo 20 $, objetivo 40 $. Hipotético.</figcaption></figure>

## Ganancia y pérdida en una línea

**Ganancia = (precio de venta − precio de compra) × unidades − comisiones**

Aquí: vender 200 unidades a 2,20 $ da (0,20 × 200) = 40 $, menos 0,84 $ = **39,16 $**.

<div class="calc" data-calc="breakeven">
  <p class="calc-row"><label>Precio de entrada $<input data-in="entry" type="number" min="0" step="any" value="2" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Tamaño de posición $<input data-in="size" type="number" min="0" step="any" value="400" inputmode="decimal"></label></p>
  <p class="calc-row"><label>Comisión por lado <input data-in="fee" type="number" min="0" step="any" value="0.1" inputmode="decimal">%</label></p>
  <p class="calc-out">Comisiones de ida y vuelta: unos <strong data-out="cost">$0.8</strong>. Precio de equilibrio: unos <b data-out="be">$2.004</b> (el precio debe subir <span data-out="bepct">0.2%</span> solo para cubrir comisiones).</p>
  <p class="calc-verdict" data-out="verdict"></p>
</div>

## El apalancamiento cambia el tamaño, no las cuentas

Con apalancamiento, tu posición es mayor que tu propio dinero, pero las cuentas de arriba son las mismas. El riesgo es el tamaño de la posición por la distancia a tu stop. Mira primero ese número, no el margen que aportas.

## Errores comunes

- Decidir el tamaño de posición por cuántas «ganas» tienes de operar.
- Contar una ganancia antes de comisiones.
- Poner el stop donde te resulta cómodo y no donde la idea falla, y no ajustar el tamaño.

## Para profundizar

<details><summary>Deslizamiento (slippage)</summary><p>Tu ejecución real puede ser algo peor que el precio que viste, sobre todo en mercados rápidos o con poca liquidez. Trátalo como un coste extra y tenlo en cuenta al poner el stop.</p></details>

## Compruébalo tú mismo

<details><summary>1. Cuenta de 5000 $, arriesgas el 2 %. ¿Cuánto está en riesgo?</summary><p>El 2 % de 5000 $ = 100 $.</p></details>

<details><summary>2. Entrada 50 $, stop 45 $, riesgo 100 $. ¿Tamaño de posición?</summary><p>Distancia = 5 ÷ 50 = 10 %. 100 $ ÷ 10 % = 1000 $.</p></details>

<details><summary>3. Compras 100 unidades a 3 $, vendes a 3,30 $, comisiones 1 $ en total. ¿Ganancia?</summary><p>(0,30 × 100) − 1 $ = 29 $.</p></details>

<details><summary>4. ¿Por qué debe subir el precio solo para empatar?</summary><p>Las comisiones se pagan al entrar y al salir, así que el precio tiene que moverse lo bastante para cubrir ambas.</p></details>

<details><summary>5. ¿El apalancamiento cambia cuánto puedes perder hasta tu stop?</summary><p>Cambia el tamaño de la posición. Mira tamaño de posición × distancia al stop.</p></details>

## Pruébalo (sin dinero real)

Toma un gráfico real y elige una entrada y un stop. Haz los cinco pasos en papel y anota el tamaño de posición y el precio de equilibrio.

**Idea clave:** cinco cuentas sencillas (riesgo, distancia, tamaño, objetivo, comisiones) te dicen lo que puede costar una operación antes de abrirla.
