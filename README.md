# Gases y Soldaduras CG — Preview

Landing page "coming soon" para Gases y Soldaduras CG, distribuidor especializado en gases industriales, soldadura y equipo de seguridad.

## Stack

- **HTML5** — semántico, BEM
- **Sass** — arquitectura 7-1, Dart Sass
- **JavaScript** — vanilla, sin dependencias
- **Gulp 5** — ESM, compilación y watch
- **PostCSS** — autoprefixer + cssnano (producción)

## Estructura

```
src/
├── js/
│   └── app.js
└── scss/
    ├── app.scss          # entry point
    ├── base/             # variables, mixins, tipografía, globales
    ├── nav/              # header y navegación
    ├── main/             # hero, catalog, card, contact, contact-item
    └── footer/           # footer
```

## Comandos

```bash
npm install       # instalar dependencias

gulp              # compilar + watch (desarrollo)
gulp css          # compilar scss una vez
gulp build        # compilar para producción (minificado, sin sourcemaps)
```

## Funcionalidades

- Dark mode toggle con persistencia en `localStorage`
- Header sticky
- Grid responsivo mobile → tablet → desktop
- Catálogo de productos con íconos por categoría
- Sección de contacto con lista de info + Google Maps embed
- CTAs de WhatsApp y teléfono
- Íconos via [Tabler Icons](https://tablericons.com/) CDN

## Tipografía

| Rol       | Familia           | Pesos       |
| --------- | ----------------- | ----------- |
| Headings  | Plus Jakarta Sans | 700 / 800   |
| Body / UI | DM Sans           | 400/500/600 |

## Breakpoints

| Nombre  | Valor    |
| ------- | -------- |
| Mobile  | < 640px  |
| Tablet  | ≥ 640px  |
| Desktop | ≥ 1025px |

## Autor

Desarrollado por [Glenn Galicia](https://glenn-galicia-miller.netlify.app/)
