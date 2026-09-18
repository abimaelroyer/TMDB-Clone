# Querycast 🎬

A movie discovery app powered by the TMDB API. Search and explore films, view details, ratings, and more.

---

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — type safety
- **Vite** — build tool and dev server
- **Axios** — API requests
- **TMDB API** — movie database

---

## Prerequisites

- Node.js 18+
- A TMDB API key — get one free at [themoviedb.org](https://www.themoviedb.org/settings/api)

---

## Installation

```bash
git clone [repository-url]
cd querycast
npm install
```

## Configuration

Create a `.env` file in the project root:

```env
VITE_TMDB_KEY=your_api_key_here
```

> Use your TMDB **API Key (v3 auth)**, not the Read Access Token — this project authenticates via the `api_key` query parameter, not a Bearer header.

## Usage

```bash
npm run dev
```

## Features

- Browse trending movies on load
- Search movies by title
- Click a poster to view details in a modal — overview, rating, release year
- Click the QueryCast title to return to trending

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the dev server                |
| `npm run build`   | Type-check and build for production |
| `npm run lint`    | Run ESLint                          |
| `npm run preview` | Preview the production build        |
