// Datos generales del sitio: editá este archivo para personalizar el blog.

export const SITE_TITLE = 'Mi Blog';
export const SITE_DESCRIPTION =
  'Notas sobre desarrollo web, diseño y todo lo que voy aprendiendo en el camino.';
export const AUTHOR = 'Matias Cuervo';
export const AUTHOR_ROLE = 'Desarrollador web & diseñador';

export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/blog', label: 'Blog' },
  { href: '/tags', label: 'Etiquetas' },
  { href: '/sobre-mi', label: 'Sobre mí' },
] as const;

export const SOCIAL_LINKS = [
  { href: 'https://github.com/', label: 'GitHub', short: 'gh' },
  { href: 'https://linkedin.com/', label: 'LinkedIn', short: 'in' },
  { href: '/rss.xml', label: 'RSS', short: 'rss' },
] as const;
