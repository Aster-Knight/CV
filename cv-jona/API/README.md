# API para el Portfolio

Esta API, construida con Node.js y Express, gestiona los datos de las "habilidades" (skills) que se muestran en el frontend del portfolio.

## Características

- **Framework**: Express.js
- **Base de Datos**: En memoria (un array simple para demostración).
- **Dependencias**: `express`, `cors`.
- **Desarrollo**: `nodemon` para recarga automática.

## Instalación y Ejecución

1.  **Instalar dependencias:**
    Desde el directorio `api/`, ejecuta:
    ```bash
    npm install
    ```

2.  **Iniciar el servidor:**
    ```bash
    npm run dev
    ```
    El servidor se iniciará en `http://localhost:3001`.

## Endpoints de la API

La API proporciona los siguientes endpoints para operaciones CRUD sobre las habilidades:

### 1. Obtener todas las habilidades

- **Endpoint**: `GET /skills`
- **Descripción**: Devuelve un array con todas las habilidades.
- **Respuesta Exitosa (200 OK)**:
  ```json
  [
    { "id": 1, "name": "Angular", "level": 90, "category": "frontend" },
    { "id": 2, "name": "Node.js / Express", "level": 75, "category": "backend" }
  ]
  ```

### 2. Obtener una habilidad por ID

- **Endpoint**: `GET /skills/:id`
- **Descripción**: Devuelve una habilidad específica según su `id`.
- **Respuesta Exitosa (200 OK)**:
  ```json
  { "id": 1, "name": "Angular", "level": 90, "category": "frontend" }
  ```
- **Respuesta de Error (404 Not Found)**: Si la habilidad no existe.

### 3. Crear una nueva habilidad

- **Endpoint**: `POST /skills`
- **Descripción**: Añade una nueva habilidad a la base de datos.
- **Cuerpo de la Petición (Body)**:
  ```json
  { "name": "Python", "level": 85, "category": "backend" }
  ```
- **Respuesta Exitosa (201 Created)**: Devuelve la habilidad recién creada.
- **Respuesta de Error (422 Unprocessable Entity)**: Si faltan los campos `name` o `level`.

### 4. Actualizar una habilidad

- **Endpoint**: `PATCH /skills/:id`
- **Descripción**: Actualiza parcialmente una habilidad existente.
- **Cuerpo de la Petición (Body)**: Campos a actualizar.
  ```json
  { "level": 95 }
  ```
- **Respuesta Exitosa (200 OK)**: Devuelve la habilidad actualizada.
- **Respuesta de Error (404 Not Found)**: Si la habilidad no existe.

### 5. Eliminar una habilidad

- **Endpoint**: `DELETE /skills/:id`
- **Descripción**: Elimina una habilidad por su `id`.
- **Respuesta Exitosa (204 No Content)**: No devuelve contenido.
- **Respuesta de Error (404 Not Found)**: Si la habilidad no existe.

## Ejemplos de Uso con `curl`

A continuación se muestran ejemplos de cómo interactuar con la API usando `curl`.

**Obtener todas las habilidades:**
```bash
curl http://localhost:3001/skills
```
*Ejemplo de respuesta:*
![Ejemplo de curl GET all](documentacion/image.png)

**Crear una nueva habilidad:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Python", "level": 85, "category": "backend"}' http://localhost:3001/skills
```
*Ejemplo de respuesta:*
![Ejemplo de curl POST](documentacion/image-1.png)

**Actualizar una habilidad:**
```bash
curl -X PATCH -H "Content-Type: application/json" -d '{"level": 95}' http://localhost:3001/skills/1
```

**Eliminar una habilidad:**
```bash
curl -X DELETE http://localhost:3001/skills/2
```
