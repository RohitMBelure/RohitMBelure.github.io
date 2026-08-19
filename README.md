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

## Production build

```bash
npm.cmd run build
npm.cmd start
```
