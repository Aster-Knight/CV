# Proyecto CV Jonatan

Este repositorio contiene el código fuente de un proyecto de portfolio personal, dividido en dos subproyectos principales: un backend (API) y un frontend (aplicación de Angular).

## Descripción General

El objetivo de este proyecto es mostrar las habilidades y experiencia del desarrollador a través de una aplicación web interactiva.

### Subproyectos

1.  **`api/`**: Un servidor de backend construido con Node.js y Express. Proporciona una API RESTful para gestionar los datos relacionados con las habilidades (`skills`).
2.  **`cv-jona/`**: Una aplicación de frontend desarrollada con Angular. Consume los datos de la API para mostrar la información en una interfaz de usuario moderna.

## Estructura del Repositorio

```
/
├── api/                # Proyecto de backend (Node.js/Express)
│   ├── server.js       # Archivo principal de la API
│   ├── package.json    # Dependencias de Node.js
│   └── README.md       # Documentación específica de la API
│
└── cv-jona/            # Proyecto de frontend (Angular)
    ├── src/            # Código fuente de la aplicación
    ├── angular.json    # Configuración del proyecto Angular
    └── README.md       # Documentación específica del frontend
```

## Instalación y Ejecución

A continuación, se detallan las instrucciones para poner en marcha ambos subproyectos.

### 1. Backend (`api/`)

**Requisitos:**
*   Node.js (v18 o superior)
*   npm

**Pasos:**

1.  **Navegar al directorio de la API:**
    ```bash
    cd api
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor en modo de desarrollo:**
    El servidor se ejecutará en `http://localhost:3001`.
    ```bash
    npm run dev
    ```

### 2. Frontend (`cv-jona/`)

**Requisitos:**
*   Node.js (v18 o superior)
*   npm
*   Angular CLI

**Pasos:**

1.  **Navegar al directorio del frontend:**
    ```bash
    cd cv-jona
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar la aplicación de Angular:**
    La aplicación se ejecutará en `http://localhost:4200`.
    ```bash
    ng serve
    ```
