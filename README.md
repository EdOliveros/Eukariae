[Español](#español) | [English](#english)

<div id="español"></div>

# Eukariae - Modern E-Commerce Platform

Bienvenido al repositorio de **Eukariae**, una tienda en línea moderna y exclusiva para productos de la marca Eukariae. Este proyecto ha sido renovado para ofrecer una experiencia de usuario de primer nivel, con un diseño fresco, responsivo y una arquitectura de código optimizada.

## 🚀 Características

- **Diseño Moderno & Responsivo**: Interfaz de usuario limpia y minimalista, optimizada para todos los dispositivos (móvil, tablet, escritorio).
- **Arquitectura Escalable**: Estructura de código organizada con componentes reutilizables y convenciones claras.
- **Rendimiento Optimizado**: Uso de las últimas características de Next.js y optimización de imágenes.
- **Estilos Globales**: Sistema de diseño basado en Tailwind con tokens de color para una fácil personalización.

## 🛠️ Tecnologías

Este proyecto está construido sobre un stack robusto y moderno:

*   **[Next.js](https://nextjs.org/)**: Framework de React para producción, renderizado híbrido y enrutamiento.
*   **[React](https://reactjs.org/)**: Biblioteca UI para componentes interactivos.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitario para un diseño moderno y rápido.
*   **CSS Modules & Global Styles**: Gestión de estilos flexible y potente.
*   **[Context API / Hooks]**: Manejo de estado y consumo de datos.

## 🔌 Integración de API

El proyecto consume datos de una API externa desplegada en Render. La configuración se encuentra en `config/api.js`.

- **API_BASE_URL**: `https://eukariae-api.onrender.com/api/v1` - Punto de entrada para productos y entradas del blog.
- **UPLOADS_BASE_URL**: `https://eukariae-api.onrender.com/uploads` - URL base para recursos multimedia (imágenes).

### Consumo de datos (ISR)

Las páginas principales usan **Incremental Static Regeneration** (`getStaticProps`) para servir HTML rápido y revalidar contenido cada 5 minutos.

## 📋 Requisitos Previos

Asegúrate de tener instalado:

*   [Node.js](https://nodejs.org/) (LTS recomendado)
*   [npm](https://www.npmjs.com/)

## 💻 Instalación y Desarrollo

1.  **Clonar el repositorio**:
    ```bash
    git clone <url-del-repo>
    cd Eukariae
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 📁 Estructura del Proyecto

```
Eukariae/
├── components/       # Reusable components (layout, sections, UI, etc.)
├── hooks/            # Custom hooks
├── config/           # API configuration
├── lib/              # Shared utilities and constants
├── pages/            # Rutas y páginas de la aplicación
├── public/           # Activos estáticos (imágenes, iconos)
├── styles/           # Estilos globales y variables CSS
└── ...config files
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para mejoras.

---
Desarrollado con ❤️ para Eukariae.

---

<div id="english"></div>

# Eukariae - Modern E-Commerce Platform

Welcome to the **Eukariae** repository, a modern and exclusive online store for Eukariae brand products. This project has been revamped to offer a top-tier user experience, with a fresh, responsive design and an optimized code architecture.

## 🚀 Features

- **Modern & Responsive Design**: Clean and minimalist user interface, optimized for all devices (mobile, tablet, desktop).
- **Scalable Architecture**: Organized code structure with reusable components and clear conventions.
- **Optimized Performance**: Use of the latest Next.js features and image optimization.
- **Global Styles**: Design system based on Tailwind tokens for easy customization and maintenance.

## 🛠️ Tech Stack

This project is built on a robust and modern stack:

*   **[Next.js](https://nextjs.org/)**: React framework for production, hybrid rendering, and routing.
*   **[React](https://reactjs.org/)**: UI library for interactive components.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for modern and fast design.
*   **CSS Modules & Global Styles**: Flexible and powerful style management.
*   **[Context API / Hooks]**: State management and data fetching.

## 🔌 API Integration

The project consumes data from an external API deployed on Render. Configuration can be found in `config/api.js`.

- **API_BASE_URL**: `https://eukariae-api.onrender.com/api/v1` - Entry point for products and blog posts.
- **UPLOADS_BASE_URL**: `https://eukariae-api.onrender.com/uploads` - Base URL for multimedia resources (images).

### Data Fetching (ISR)

Core pages use **Incremental Static Regeneration** (`getStaticProps`) to serve fast HTML and revalidate content every 5 minutes.

## 📋 Prerequisites

Ensure you have installed:

*   [Node.js](https://nodejs.org/) (LTS recommended)
*   [npm](https://www.npmjs.com/)

## 💻 Installation and Development

1.  **Clone the repository**:
    ```bash
    git clone <repo-url>
    cd Eukariae
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start development server**:
    ```bash
    npm run dev
    ```
    Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 📁 Project Structure

```
Eukariae/
├── components/       # Reusable components (layout, sections, UI, etc.)
├── hooks/            # Custom hooks
├── config/           # API configuration
├── lib/              # Shared utilities and constants
├── pages/            # App routes and pages
├── public/           # Static assets (images, icons)
├── styles/           # Global styles and CSS variables
└── ...config files
```

## 🤝 Contributing

Contributions are welcome. Please open an issue or submit a pull request for improvements.

---
Developed with ❤️ for Eukariae.
