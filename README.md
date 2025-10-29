# Proyecto CV Personal

Este repositorio contiene el código fuente de un proyecto de CV personal, dividido en dos componentes principales: una API de backend y una aplicación de frontend.

## Estructura del Proyecto

- **/API**: Una API RESTful construida con Node.js y Express. Proporciona los datos necesarios para el frontend.
- **/cv-jona**: Una aplicación de una sola página (SPA) construida con Angular que consume la API y presenta la información del CV.

---

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 20.x o superior)
- [Angular CLI](https://angular.io/cli) (versión 18.x o superior)

---

## Guía de Instalación y Despliegue

Para facilitar la configuración del entorno de desarrollo, puedes utilizar el script de despliegue automatizado.

### 1. Instalación Automatizada (Recomendado)

Ejecuta el siguiente comando en la raíz del proyecto. Este script instalará todas las dependencias necesarias tanto para la API como para el frontend.

```bash
bash deploy.sh
```

### 2. Instalación Manual

Si prefieres instalar las dependencias manualmente, sigue estos pasos:

**Backend (API):**
```bash
cd API
npm install
```

**Frontend (cv-jona):**
```bash
cd cv-jona
npm install
```

---

## Cómo Ejecutar el Proyecto

Después de instalar las dependencias, necesitarás dos terminales para ejecutar el backend y el frontend de forma simultánea.

### 1. Iniciar el Backend

En la primera terminal, navega a la carpeta de la API y ejecuta el servidor:

```bash
cd API
npm start
```
El servidor se iniciará en `http://localhost:3000`.

### 2. Iniciar el Frontend

En la segunda terminal, navega a la carpeta del frontend y ejecuta la aplicación de Angular:

```bash
cd cv-jona
npm start
```
La aplicación estará disponible en `http://localhost:4200`.