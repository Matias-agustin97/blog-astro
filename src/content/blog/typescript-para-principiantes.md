---
title: 'TypeScript para principiantes: lo mínimo que tenés que saber'
description: 'Tipos básicos, interfaces y por qué vale la pena sumar TypeScript a tus proyectos de JavaScript.'
pubDate: 2026-08-18
tags: ['typescript', 'javascript', 'tutorial']
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. TypeScript es JavaScript con **tipos**: le decís al editor qué forma tienen tus datos y él te avisa cuando algo no encaja, antes de ejecutar el código.

## Tipos básicos

Sed cursus ante dapibus diam. Los tipos más comunes son `string`, `number` y `boolean`:

```ts
let nombre: string = 'Ada';
let edad: number = 36;
let activo: boolean = true;
```

## Interfaces

Nulla quis sem at nibh elementum imperdiet. Una interfaz describe la forma de un objeto:

```ts
interface Post {
  title: string;
  pubDate: Date;
  tags?: string[]; // el "?" lo hace opcional
}

function resumen(post: Post): string {
  return `${post.title} (${post.pubDate.getFullYear()})`;
}
```

Si intentás llamar a `resumen` con un objeto sin `title`, el editor lo marca en rojo al instante.

## ¿Vale la pena?

| Ventaja | Por qué importa |
| --- | --- |
| Autocompletado | El editor sabe qué propiedades existen |
| Menos bugs | Muchos errores aparecen antes de ejecutar |
| Refactors seguros | Renombrar algo actualiza todo el proyecto |

Duis sagittis ipsum. Praesent mauris. Mi recomendación: empezá de a poco, tipando solo las funciones principales.
