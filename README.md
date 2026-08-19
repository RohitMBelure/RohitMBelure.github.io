# Rohit Belure Portfolio

A modern React portfolio with an Express API and optional MongoDB connection.

## Run locally

Requires Node.js 18 or newer.

```bash
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:5173`. The Vite client proxies `/api` requests to the Express server at `http://localhost:5000`.

MongoDB is optional for the portfolio shell. To enable a database connection, copy `.env.example` to `.env` and set `MONGODB_URI`.

## GitHub Pages deployment

GitHub Pages should use **GitHub Actions** as its source. The workflow in `.github/workflows/deploy-pages.yml` runs `npm ci`, builds the Vite app, and deploys the generated `dist` folder. `app.html` is the Vite source template; the root `index.html` is also kept as a compiled fallback for the legacy branch-root Pages publisher.

In the repository settings, open **Pages**, set **Build and deployment > Source** to **GitHub Actions**, and push to `main`.

## Production build

```bash
npm.cmd run build
npm.cmd start
```
