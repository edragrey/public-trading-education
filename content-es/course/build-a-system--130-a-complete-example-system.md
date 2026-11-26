---
title: "Un sistema completo de ejemplo, todo en un sitio"
module: build-a-system
order: 130
summary: Un sistema hipotético resuelto: mercado, estilo, entrada, stop, salidas, riesgo y revisión. Úsalo como modelo, no como consejo.
date: 2026-11-21
needs: your-one-page-trade-plan, a-backtest-walkthrough
---

Este es todo el módulo en una página. Es un **ejemplo inventado** para mostrar cómo es un sistema terminado. No es una recomendación ni una promesa de resultados. El tuyo debería encajar con tu tiempo, tus costes y tus nervios.

## El sistema en una página

> **Nombre:** Swing lento (hipotético)

**1. Mercado y estilo**
- Un mercado grande y líquido.
- Swing trading en el gráfico diario. Miro una vez al día, tras el cierre de la vela diaria.

**2. Contexto (cuándo ni siquiera miro)**
- Precio por encima de su media de 50 días, y la estructura reciente son máximos más altos y mínimos más altos.

**3. Entrada**
- Disparador: un retroceso se mantiene por encima del último mínimo de oscilación y luego una vela diaria cierra al alza.
- Orden: compra limitada justo por encima del máximo de esa vela. Si no se ejecuta en 3 días, la cancelo.

**4. Stop**
- Justo por debajo del último mínimo de oscilación. Colocado inmediatamente tras la ejecución. Nunca alejado.

**5. Tamaño de posición**
- Arriesgo el 1 % de la cuenta por operación. Tamaño = cantidad en riesgo ÷ distancia al stop.
- No más de 3 operaciones abiertas a la vez, y ninguna en la misma narrativa.

**6. Salidas**
- Retiro la mitad a 2R. Muevo el stop al punto de equilibrio.
- Sigo el resto con un stop dinámico por debajo de cada nuevo mínimo de oscilación.
- Salida por tiempo: si no ha pasado nada tras 15 días, salgo.

**7. Reglas para los días malos**
- Límite de pérdida diaria: paro por hoy tras perder un 2 %.
- Límite de pérdida semanal: paro por la semana tras perder un 4 %.
- Sin operar en las pocas horas alrededor de noticias programadas importantes (banco central, inflación).
- Tras 3 pérdidas seguidas, reduzco el tamaño a la mitad hasta que haya una ganancia.

**8. Lista previa a la operación**
- ¿Encaja la operación exactamente con el contexto, la entrada y el stop?
- ¿Está puesto el stop? ¿Es correcto el tamaño?
- ¿He mirado el calendario?
- ¿Estoy tranquilo, descansado y sin perseguir nada?

**9. Diario y revisión**
- Apunto cada operación: setup, plan seguido (sí/no), resultado en R, sensación.
- Revisión semanal: cuento las infracciones y luego miro los resultados.

**10. Cuándo puedo cambiar una regla**
- Solo tras al menos 30 operaciones, nunca a mitad de semana, y solo un cambio cada vez.

## Por qué funciona como modelo

- Está **escrito**, así que las decisiones se toman con calma de antemano.
- **Limita primero el riesgo** (1 %, límites de pérdida, stops).
- Tiene las **salidas planificadas antes de entrar**.
- Tiene un **bucle de revisión** para que el sistema pueda mejorar por las razones correctas.
- **No promete nada.** Solo te da una prueba justa.

## Cómo hacer el tuyo

1. Copia los encabezados.
2. Sustituye cada línea por algo que realmente puedas seguir.
3. Pruébalo con datos pasados (mira la lección del backtest) y luego opéralo en papel.
4. Empieza pequeño con dinero real y revisa con honestidad.

## Errores comunes

- Copiar el sistema de otra persona sin cambios.
- Hacer la página tan larga que no puedas seguirla.
- Saltarte los límites de pérdida porque «no los voy a necesitar».
- No revisarlo nunca.

## Profundiza

<details><summary>Por qué un sistema sencillo vence a uno ingenioso</summary><p>Bajo estrés sigues lo que puedes recordar. Menos reglas significan menos sitios donde resbalar. Siempre puedes añadir detalle más tarde, una vez que hayas demostrado que puedes seguir lo básico.</p></details>

## Compruébalo tú

<details><summary>1. ¿Qué dos cosas define primero el sistema?</summary><p>El mercado y el estilo de trading.</p></details>

<details><summary>2. ¿Qué pasa con el stop tras 2R?</summary><p>En este ejemplo, se vende la mitad y el stop pasa al punto de equilibrio.</p></details>

<details><summary>3. ¿Por qué tener límites de pérdida diarios y semanales?</summary><p>Para evitar que una mala racha se convierta en un desastre.</p></details>

<details><summary>4. ¿Cuándo se puede cambiar una regla en este ejemplo?</summary><p>Tras al menos 30 operaciones, un cambio cada vez, nunca a mitad de semana.</p></details>

<details><summary>5. ¿Garantiza un sistema así beneficios?</summary><p>No. Solo hace tus decisiones coherentes y tu riesgo limitado.</p></details>

## Pruébalo (sin dinero real)

Escribe tu propia versión del sistema de una página con los diez encabezados. Mantenlo en una página. Léelo de nuevo y tacha todo lo que no seguirías en un mal día.

**Idea clave:** Un sistema completo es corto, está escrito y limita primero el riesgo. Construye el tuyo, pruébalo y luego opéralo en pequeño.
