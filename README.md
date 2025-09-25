# Portfolio React + Tailwind (static)

Este proyecto es un portfolio personal desarrollado con React renderizado en el navegador y estilos construidos con Tailwind CSS (vía CDN). Está optimizado para editar contenido rápidamente sin necesidad de un proceso de build.

## Estructura del proyecto

```
public/
├── assets/
│   └── profile.svg        # Imagen de avatar de ejemplo
└── index.html             # Punto de entrada con carga de React, Tailwind y Babel
src/
├── App.jsx                # Layout principal
├── main.jsx               # Renderizado de ReactDOM
├── data/
│   └── portfolio.js       # Datos editables (perfil, proyectos, redes)
├── components/            # Componentes reutilizables (Badge, NavBar, etc.)
└── sections/              # Secciones principales del sitio
```

## Cómo usar

1. Abre `public/index.html` en tu navegador para visualizar el portfolio.
2. Actualiza tu información personal, proyectos y enlaces en `src/data/portfolio.js`.
3. Sustituye `public/assets/profile.svg` por tu fotografía (`.jpg`, `.png` o `.webp`) y ajusta la ruta `profileImage` en los datos si es necesario.

> Nota: Al usar Babel standalone y Tailwind CDN, no es necesario instalar dependencias. Si deseas integrarlo en un build system (Vite, Next, etc.), puedes migrar los componentes fácilmente.

## Personalización sugerida

- Ajusta colores y tipografías modificando la configuración de Tailwind dentro de `public/index.html`.
- Añade más proyectos replicando la estructura de objetos en `portfolio.js`.
- Integra métricas o analíticas agregando scripts adicionales en `index.html`.

## Licencia

Uso personal. Si reutilizas el diseño en otro proyecto, por favor mantén una referencia al autor original.
