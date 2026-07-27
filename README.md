# Stock Portfolio MERN

A full-stack stock portfolio app for browsing stocks and managing a personal watchlist.

## Tech Stack

- **Frontend:** React, React Router, Axios, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Deployment:** Docker

## Features

- View all stocks with symbol, company name, price, and percent change
- Add or remove stocks from a watchlist
- Dedicated watchlist page
- REST API with health check
- Production build served by Express (SPA fallback)

## Project Structure

```
stock-portfolio-mern/
├── backend/
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── server.js        # Express app entry
│   └── .env             # Backend environment variables
├── frontend/
│   └── src/
│       ├── components/  # UI components (Navbar, StockCard)
│       ├── pages/       # Home, Watchlist
│       └── services/    # API client
└── Dockerfile
```

## Prerequisites

- Node.js 22+
- MongoDB (local or Atlas)
- Docker (optional, for containerized run)

## Environment Variables

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/stock-portfolio
```

Use your MongoDB Atlas connection string for `MONGO_URI` if you are not running MongoDB locally.

## Getting Started

### 1. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 2. Start the backend

```bash
cd backend
npm run dev
```

API runs at `http://localhost:5000` (or the port set in `.env`).

### 3. Build and serve the frontend

The backend serves the Vite production build from `frontend/dist`:

```bash
cd frontend
npm run build
```

Then open `http://localhost:5000`.

For frontend-only Vite development:

```bash
cd frontend
npm run dev
```

> Note: API calls use `/api/stocks`. With Vite alone, point requests at the Express server (for example via a Vite proxy) or use the production build served by the backend.

## Docker

Build and run the full app in one container:

```bash
docker build -t stock-portfolio-mern .
docker run -p 5000:5000 --env-file backend/.env stock-portfolio-mern
```

App available at `http://localhost:5000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check |
| `GET` | `/api/stocks` | List all stocks |
| `GET` | `/api/stocks/watchlist` | List watchlisted stocks |
| `POST` | `/api/stocks` | Create a stock |
| `PATCH` | `/api/stocks/:id/watchlist` | Toggle watchlist status |
| `DELETE` | `/api/stocks/:id` | Delete a stock |

### Create stock body

```json
{
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "price": 190.5,
  "change": 1.25
}
```

## Scripts

### Backend

| Command | Description |
|---------|-------------|
| `npm start` | Start Express server |
| `npm run dev` | Start with Nodemon |

### Frontend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

ISC
