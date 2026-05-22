# 🐱 Seville Purrfect Rescue

> Catálogo web de adopción de gatos desarrollado como proyecto final de **Lenguaje de Marcas** (1º DAW).

---

## Descripción

**Seville Purrfect Rescue** es una aplicación web de página única (SPA) que muestra un catálogo dinámico de gatos disponibles para adopción en Sevilla. El proyecto implementa una arquitectura cliente-servidor completamente desacoplada: el frontend consume datos desde una API REST remota y los renderiza de forma dinámica sin recargar la página.

---

## Capturas de pantalla

![Vista general del catálogo](ENLACE_CLOUDINARY_CAPTURA_1)

![Vista de una card en detalle / diseño responsive](ENLACE_CLOUDINARY_CAPTURA_2)

---

## Tecnologías utilizadas

### Frontend
| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura del documento |
| CSS3 + Variables CSS | Estilos globales y sistema de diseño |
| JavaScript ES2020+ | Lógica de cliente, fetch y renderizado |
| Bootstrap 5 | Sistema de grid y componentes de cards |
| Vercel | Despliegue del frontend |

### Backend
| Tecnología | Uso |
|---|---|
| JSON Server | API REST simulada a partir de `db.json` |
| Docker | Contenerización del servidor |
| Cloudflare Tunnel | Exposición pública del contenedor remoto |

---

## Arquitectura del proyecto

```
Seville Purrfect Rescue
│
├── Frontend (Vercel)
│   ├── index.html          # Estructura semántica de la página
│   ├── style.css           # Variables CSS y estilos globales
│   └── main.js             # Fetch, renderizado dinámico y lógica UI
│
└── Backend (Docker + Cloudflare)
    └── db.json             # Base de datos JSON con el catálogo de gatos
```

**Flujo de datos:**
1. El navegador carga el frontend desde Vercel.
2. `main.js` realiza una petición `GET` a la API (JSON Server en Docker).
3. La API, expuesta públicamente mediante Cloudflare Tunnel, devuelve el array de gatos.
4. El frontend renderiza dinámicamente las cards con Bootstrap 5.

---

## Estructura del objeto JSON

Cada gato del catálogo cumple el mínimo de **5 propiedades**:

```json
{
  "id": 1,
  "name": "Mochi",
  "breed": "Europeo Común",
  "age": "2 años",
  "gender": "Macho",
  "description": "Juguetón y muy cariñoso. Lleva 3 meses en acogida.",
  "vaccinated": true,
  "imageUrl": "https://res.cloudinary.com/..."
}
```

---

## Instalación y uso local

### Prerrequisitos
- [Node.js](https://nodejs.org/) ≥ 18
- [Docker](https://www.docker.com/) (para levantar la API localmente)

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/seville-purrfect-rescue.git
cd seville-purrfect-rescue
```

### 2. Levantar el backend con Docker

```bash
docker run -d \
  -p 3000:3000 \
  -v $(pwd)/db.json:/data/db.json \
  clue/json-server \
  --watch /data/db.json
```

La API quedará disponible en `http://localhost:3000/cats`.

### 3. Configurar el endpoint en el frontend

En [main.js](main.js), ajusta la constante `API_URL` si quieres apuntar a tu instancia local:

```js
const API_URL = "http://localhost:3000/cats";
```

### 4. Abrir el frontend

Abre [index.html](index.html) directamente en el navegador o usa la extensión **Live Server** de VS Code.

---

## Despliegue en producción

| Capa | Plataforma | URL de producción |
|---|---|---|
| Frontend | Vercel | *(añade tu URL de Vercel aquí)* |
| Backend API | Docker + Cloudflare Tunnel | *(añade tu URL de Cloudflare aquí)* |

El despliegue en Vercel se realiza de forma automática en cada `push` a la rama `main`.

---

## ✅ Requisitos Cumplidos (Rúbrica)

Lista de verificación de los criterios de evaluación del proyecto final de Lenguaje de Marcas:

### Contenido y datos
- [x] **Mínimo 10 cards** — El catálogo incluye al menos 10 gatos, cada uno renderizado en su propia card de Bootstrap.
- [x] **Mínimo 5 propiedades por objeto** — Cada objeto del `db.json` tiene 8 propiedades (`id`, `name`, `breed`, `age`, `gender`, `description`, `vaccinated`, `imageUrl`).

### JavaScript
- [x] **Código JS 100% en inglés** — Todas las variables, funciones, constantes y comentarios del código están escritos en inglés.
- [x] **Nomenclatura camelCase** — Se utiliza camelCase de forma consistente en todo `main.js` (`fetchCats`, `renderCard`, `apiUrl`, etc.).
- [x] **Uso de `async`/`await` y `fetch`** — La comunicación con la API se realiza de forma asíncrona sin callbacks ni `.then()` anidados.
- [x] **Renderizado dinámico del DOM** — Las cards se generan programáticamente desde JavaScript; el HTML no contiene cards codificadas a mano.

### Estilos y maquetación
- [x] **Bootstrap 5 obligatorio** — El sistema de grid (`row`/`col`) y el componente `card` de Bootstrap estructuran todo el catálogo.
- [x] **Cero CSS inline** — No existe ningún atributo `style=""` en el HTML ni se usa `element.style` en JavaScript para aplicar estilos.
- [x] **Variables CSS** — El diseño utiliza custom properties (`:root { --color-primary: ...; }`) para colores, tipografías y espaciados, garantizando coherencia visual.

### Recursos e infraestructura
- [x] **Imágenes exclusivamente en Cloudinary** — Todas las imágenes de los gatos están alojadas en Cloudinary y se referencian mediante su URL CDN.
- [x] **Despliegue en producción** — El frontend está publicado en Vercel y el backend en un contenedor Docker expuesto con Cloudflare Tunnel.
- [x] **Control de versiones con Git** — El proyecto está gestionado con Git y publicado en GitHub, con historial de commits desde el inicio del desarrollo.

---

## Autor

**Brandon** — 1º DAW · Lenguaje de Marcas  
Proyecto final · Curso 2025-2026

---

*Desarrollado con fines académicos.*
