# GB Palette Converter

![Screenshot](https://img.shields.io/badge/Game%20Boy-Palette%20Converter-8bac0f?style=for-the-badge)

> **Demo en vivo:** [https://p4blogc.github.io/gb-palette/](https://p4blogc.github.io/gb-palette/)

Una herramienta web interactiva para diseñar y previsualizar paletas de colores para **pantallas OLED de Game Boy Color** (como las que se venden en AliExpress).

Permite ingresar 4 colores (HEX o RGB) y convertir sus valores al formato nativo de Game Boy Color (RGB555), con una previsualización en tiempo real sobre una imagen de prueba.

## Funcionalidades

- Conversión de colores HEX/RGB al formato de hardware **Game Boy Color** (5 bits Rojo, 6 bits Verde, 5 bits Azul)
- 4 slots de color para definir una paleta completa
- Barras de progreso con los valores convertidos por canal
- Vista previa en canvas con la paleta aplicada
- **Descarga** de la previsualización como PNG (ideal para compartir o documentar paletas)

## Cómo usar

1. Abre `index.html` en tu navegador
2. Ingresa los valores HEX o RGB para cada color (Color0 a Color3)
3. La imagen de previsualización se actualiza automáticamente con la paleta
4. Haz clic en **"Download"** para guardar la imagen como PNG

> Diseña paletas personalizadas para tu pantalla OLED de GBC directamente desde el navegador.

## Requisitos

- Navegador web moderno
- Conexión a internet para cargar dependencias desde CDN

## Dependencias (CDN)

- [Bootstrap 4.3.1](https://getbootstrap.com/)
- [NES.css](https://nostalgic-css.github.io/NES.css/)
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
- [html2canvas](https://html2canvas.hertzen.com/)

## Tecnologías

HTML5 + CSS3 + JavaScript vanilla + Canvas API

## Estructura del proyecto

```
gb-palette/
├── index.html       # Interfaz de usuario
├── functions.js     # Lógica de conversión y renderizado
├── gb.png           # Imagen base para previsualización
└── README.md
```

## Licencia

© 2020 Pablo Gonzalez
