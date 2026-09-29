---
title: 'Cómo diseñar una buena interfaz oscura'
description: 'Contraste, profundidad y color: los principios que uso para que un modo oscuro no canse la vista.'
pubDate: 2026-09-01
tags: ['diseño', 'css']
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Un modo oscuro no es "invertir los colores". Bien hecho, se siente elegante; mal hecho, cansa la vista en dos minutos.

## No uses negro puro

Integer nec odio. Praesent libero. El negro absoluto (`#000`) contra texto blanco genera demasiado contraste. Mejor un casi-negro con un leve tinte:

```css
:root {
  --bg: #07070b;      /* casi negro, con un toque azulado */
  --surface: rgba(255, 255, 255, 0.04);
  --text: #f4f4f7;    /* blanco suave */
  --muted: #9a9aad;
}
```

## La profundidad se hace con luz

Sed cursus ante dapibus diam. En modo claro usamos sombras; en modo oscuro, las superficies "elevadas" son **un poco más claras**, no más oscuras.

1. Fondo base: el color más oscuro.
2. Tarjetas: una capa apenas más clara.
3. Elementos flotantes: más claros todavía, con borde sutil.

## Color con moderación

Nulla quis sem at nibh elementum imperdiet. Los acentos saturados brillan mucho sobre fondo oscuro: usalos para guiar la mirada, no para decorar todo.

> Regla práctica: un color de acento principal, uno secundario, y el resto en escala de grises.

Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
