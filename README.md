# 🐱 Seville Purrfect Rescue

> Cat adoption web catalogue built as the final project for **Markup Language** (1st year DAW).

---

## Description

**Seville Purrfect Rescue** is a single-page web application (SPA) that displays a dynamic catalogue of cats available for adoption in Seville. The project uses a fully decoupled client-server architecture: the frontend fetches data from a remote REST API and renders it dynamically without reloading the page.

---

## Screenshots

![General catalogue view](https://res.cloudinary.com/do4k9fww6/image/upload/v1779481577/Captura_de_pantalla_20260522_222534_yv8w6v.png)

![Responsive mobile view](https://res.cloudinary.com/do4k9fww6/image/upload/v1779481525/IMG_8714_u0ggmb.png)

---

## Technologies used

### Frontend
| Technology | Purpose |
|---|---|
| Semantic HTML5 | Document structure |
| CSS3 | Global styles and design |
| JavaScript ES2020+ | Client logic, fetch and rendering |
| Bootstrap 5 | Grid system and card components |
| Vercel | Frontend deployment |

### Backend
| Technology | Purpose |
|---|---|
| JSON Server | Simulated REST API from `db.json` |
| Docker | Server containerisation |
| Cloudflare Tunnel | Public exposure of the remote container |

---

## Project architecture

```
Seville Purrfect Rescue
│
├── Frontend (Vercel)
│   ├── index.html          # Page semantic structure
│   ├── style.css           # Global styles
│   └── main.js             # Fetch, dynamic rendering and UI logic
│
└── Backend (Docker + Cloudflare)
    └── db.json             # JSON database with the cat catalogue
```

**Data flow:**
1. The browser loads the frontend from Vercel.
2. `main.js` makes a `GET` request to the API (JSON Server in Docker).
3. The API, publicly exposed via Cloudflare Tunnel, returns the cats array.
4. The frontend dynamically renders the cards with Bootstrap 5.

---

## JSON object structure

Each cat in the catalogue has at least **5 properties**:

```json
{
  "id": 1,
  "name": "Mochi",
  "breed": "European Shorthair",
  "age": "2 years",
  "gender": "Male",
  "description": "Playful and very affectionate. Has been in foster care for 3 months.",
  "vaccinated": true,
  "imageUrl": "https://res.cloudinary.com/..."
}
```

---

## Installation and local usage

### Prerequisites
- [Node.js](https://nodejs.org/) ≥ 18
- [Docker](https://www.docker.com/) (to run the API locally)

### 1. Clone the repository

```bash
git clone https://github.com/TU_USUARIO/seville-purrfect-rescue.git
cd seville-purrfect-rescue
```

### 2. Start the backend with Docker

```bash
docker run -d \
  -p 3000:3000 \
  -v $(pwd)/db.json:/data/db.json \
  clue/json-server \
  --watch /data/db.json
```

The API will be available at `http://localhost:3000/cats`.

### 3. Configure the endpoint in the frontend

In [main.js](main.js), update the `apiUrl` constant to point to your local instance:

```js
const apiUrl = "http://localhost:3000/cats";
```

### 4. Open the frontend

Open [index.html](index.html) directly in the browser or use the **Live Server** extension in VS Code.

---

## Production deployment

| Layer | Platform | Production URL |
|---|---|---|
| Frontend | Vercel | https://proyecto-lm-beta.vercel.app/ |
| Backend API | Docker + Cloudflare Tunnel | https://mines-joyce-diamond-bless.trycloudflare.com/cats |

Vercel automatically deploys on every `push` to the `main` branch.

---

## ✅ Requirements met (Rubric)

Checklist of the assessment criteria for the Markup Language final project:

### Content and data
- [x] **Minimum 10 cards** — The catalogue includes at least 10 cats, each rendered in its own Bootstrap card.
- [x] **Minimum 5 properties per object** — Each object in `db.json` has 8 properties (`id`, `name`, `breed`, `age`, `gender`, `description`, `vaccinated`, `imageUrl`).

### JavaScript
- [x] **JS code 100% in English** — All variables, functions, constants and comments are written in English.
- [x] **camelCase naming** — camelCase is used consistently throughout `main.js` (`fetchCats`, `renderCats`, `adoptCat`, `apiUrl`, etc.).
- [x] **Use of `async`/`await` and `fetch`** — API communication is done asynchronously without callbacks or nested `.then()`.
- [x] **Dynamic DOM rendering** — Cards are generated programmatically from JavaScript; the HTML contains no hardcoded cards.

### Styles and layout
- [x] **Bootstrap 5 required** — The grid system (`row`/`col`) and Bootstrap's `card` component structure the whole catalogue.
- [x] **Zero inline CSS** — No `style=""` attributes in HTML and no `element.style` used in JavaScript to apply styles.
- [x] **CSS classes for state changes** — Dynamic states (adopted button, visible message, scroll button) are handled via CSS classes, not inline styles.

### Resources and infrastructure
- [x] **Images hosted on Cloudinary** — All cat images are hosted on Cloudinary and referenced via their CDN URL.
- [x] **Production deployment** — The frontend is published on Vercel and the backend runs in a Docker container exposed with Cloudflare Tunnel.
- [x] **Version control with Git** — The project is managed with Git and published on GitHub, with a commit history from the start of development.

---

## Author

**Brandon** — 1st year DAW · Markup Language  
Final project · 2025-2026

---

*Developed for academic purposes.*
