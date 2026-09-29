# Mi Blog

Blog personal hecho con [Astro](https://astro.build), con el mismo estilo visual que Raven Design Studio.

## Comandos

| Comando           | Qué hace                                       |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Servidor local en http://localhost:4321        |
| `npm run build`   | Genera el sitio estático en `dist/`            |
| `npm run preview` | Previsualiza el build                          |
| `npx astro check` | Revisa errores de TypeScript                   |

## Escribir un post

Creá un archivo `.md` en `src/content/blog/`. El nombre del archivo es la URL
(`mi-post.md` → `/blog/mi-post`).

```md
---
title: 'Título del post'
description: 'Resumen corto (se usa en el listado y en Google).'
pubDate: 2026-10-01
tags: ['tutorial', 'css']
draft: true   # opcional: los borradores solo se ven con npm run dev
---

Tu contenido en Markdown...
```

## Personalizar

- `src/consts.ts`: nombre del blog, autor, descripción, menú y redes.
- `src/styles/global.css`: colores y tipografías (variables al principio del archivo).
- `astro.config.mjs`: cambiá `site` por tu dominio antes de publicar.
