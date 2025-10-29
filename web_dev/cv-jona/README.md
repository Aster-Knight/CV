# Frontend del Portfolio con Angular

Esta aplicación, desarrollada con Angular, constituye la interfaz de usuario del proyecto de portfolio. Se encarga de presentar la información personal, profesional y de contacto del desarrollador, consumiendo datos desde la API de backend.

## Arquitectura de la Aplicación

El proyecto sigue una estructura modular estándar de Angular para separar responsabilidades y facilitar el mantenimiento.

### Directorios Principales (`src/app`)

-   **`components/`**: Contiene todos los componentes reutilizables de la aplicación. Cada componente tiene su propia carpeta con sus archivos HTML, CSS y TypeScript.
    -   `header/`: El encabezado principal de la página.
    -   `navbar/`: La barra de navegación.
    -   `about/`: Sección "Sobre mí".
    -   `experience/`: Componente para mostrar la experiencia laboral.
    -   `skills/`: Muestra las habilidades obtenidas desde la API.
    -   `projects/`: Sección para listar proyectos destacados.
    -   `studies-list/`: Componente para mostrar la formación académica.

-   **`services/`**: Contiene los servicios de Angular. Estos se encargan de la lógica de negocio, como la comunicación con APIs externas.
    -   `data.ts`: Servicio principal para comunicarse con la API local (`/api`) y obtener los datos de habilidades, experiencia, etc.
    -   `github.ts`: Servicio para interactuar con la API de GitHub y mostrar información de repositorios.
    -   `nasa.ts`: Servicio de ejemplo para consumir datos de la API de la NASA.

-   **`pipes/`**: Contiene pipes personalizados para transformar datos en las plantillas HTML.
    -   `truncate-pipe.ts`: Un pipe para acortar texto a una longitud determinada.

-   **`app.routes.ts`**: Define las rutas de la aplicación, mapeando URLs a componentes específicos.

### Flujo de Datos

1.  Un componente (ej. `skills`) necesita mostrar una lista de habilidades.
2.  El componente inyecta y llama a un método del servicio `DataService` (definido en `data.ts`).
3.  `DataService` realiza una petición HTTP `GET` a la API de backend (`http://localhost:3001/skills`).
4.  La API devuelve los datos en formato JSON.
5.  El servicio procesa la respuesta y la devuelve al componente.
6.  El componente renderiza los datos en su plantilla HTML, mostrándolos al usuario.

## Instalación y Ejecución

**Requisitos:**
*   Node.js (v18 o superior)
*   npm
*   Angular CLI

**Pasos:**

1.  **Instalar dependencias:**
    Desde el directorio `cv-jona/`, ejecuta:
    ```bash
    npm install
    ```

2.  **Iniciar la aplicación:**
    ```bash
    ng serve -o
    ```
    La aplicación estará disponible en `http://localhost:4200` y se recargará automáticamente si se realizan cambios en el código fuente.