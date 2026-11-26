---
lesson: volume-and-liquidity
title: Volumen y liquidez, paso a paso
summary: ¿Alguien opera realmente esto? Dos palabras, una imagen, dos comprobaciones. Unos 3 minutos.
---

# Volumen y liquidez, paso a paso

Una idea pequeña por pantalla. Unos **3 minutos**.

<!-- step -->

## Dos palabras

**Volumen:** cuánto se operó en un período.

**Liquidez:** con qué facilidad puedes comprar o vender sin mover mucho el precio.

<figure class="fig"><svg viewBox="0 0 320 170" role="img" aria-label="Dos libros de órdenes. El líquido tiene muchas órdenes juntas; el fino tiene pocas y un hueco amplio."><text class="t" x="78" y="16" text-anchor="middle">Líquido</text><rect class="bar-ask" x="48" y="26" width="60" height="14" rx="3"/><rect class="bar-ask" x="33" y="44" width="90" height="14" rx="3"/><rect class="bar-ask" x="18" y="62" width="120" height="14" rx="3"/><rect class="bar-bid" x="18" y="86" width="120" height="14" rx="3"/><rect class="bar-bid" x="33" y="104" width="90" height="14" rx="3"/><rect class="bar-bid" x="48" y="122" width="60" height="14" rx="3"/><text class="t" x="242" y="16" text-anchor="middle">Fino</text><rect class="bar-ask" x="228" y="26" width="28" height="14" rx="3"/><rect class="bar-bid" x="230" y="88" width="24" height="14" rx="3"/><text class="lbl" x="78" y="156" text-anchor="middle">Orden grande, poco movimiento</text><text class="lbl" x="242" y="156" text-anchor="middle">Orden pequeña, gran movimiento</text></svg><figcaption>La liquidez es cuánto espera cerca del precio.</figcaption></figure>

<!-- step -->

## Mismo precio, mundos distintos

Dos monedas, ambas a 1 $.

| | Moneda A | Moneda B |
| --- | --- | --- |
| Operado en 24 horas | 500 millones $ | 40.000 $ |
| Diferencial | 0,01 % | 3 % |

En la moneda B, solo entrar y salir podría costarte varios puntos porcentuales antes de que el precio se haya movido.

<!-- step -->

## Comprobación rápida

¿De qué moneda es más seguro **salir** con prisa?

<div class="quiz" data-answer="a">
<button type="button" data-opt="a">De la A: mucho volumen y un diferencial minúsculo</button>
<button type="button" data-opt="b">De la B: su diferencial es mayor</button>
<button type="button" data-opt="c">Es igual, las dos cuestan 1 $</button>
<p class="quiz-why" hidden>Ambos gráficos dicen 1 $, pero solo la moneda A tiene suficientes operaciones detrás del precio.</p>
</div>

<!-- step -->

## Qué te hacen los mercados finos

- **Diferencial más amplio:** cada operación empieza con una pérdida mayor.
- **Mayor deslizamiento:** los stops se ejecutan a peores precios.
- **Movimientos repentinos:** una orden grande puede empujar el precio muy lejos.

Un riesgo del 1 % sobre el papel puede ser un 2 % o un 3 % en la realidad.

<!-- step -->

## Dos comprobaciones antes de cualquier operación

1. **¿Cuál es el diferencial?** Si es más que una fracción de un porcentaje, piénsalo dos veces.
2. **¿Podría salir?** Mira cuánto espera cerca del precio. Si tu posición es una parte grande de eso, te costará vender sin mover el precio.

**Idea clave:** Un precio es tan fiable como las operaciones que hay detrás.
