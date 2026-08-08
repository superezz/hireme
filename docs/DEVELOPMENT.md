# Development Setup

This guide explains how to run ViewMe locally.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (A local instance or a free cluster on MongoDB Atlas)
- Google Gemini API Key
- ImageKit account (for handling profile picture uploads)

## 1. Clone the repository

```bash
git clone <repository-url>
cd viewme
```

## 2. Start the Backend

Open a terminal and navigate to the `server` directory:

```bash
cd server
npm install
```

Copy the environment template:
```bash
cp .env.example .env
```

Edit `server/.env` and provide your actual credentials. **Never commit this file.**

Start the development server:
```bash
npm run dev
```
*The backend should start on port 3001.*

## 3. Start the Frontend

Open a second terminal and navigate to the `client` directory:

```bash
cd client
npm install
```

Copy the environment template:
```bash
cp .env.example .env
```

Make sure `VITE_BASE_URL` points to your backend URL (usually `http://localhost:3001`).

Start the Vite development server:
```bash
npm run dev
```
*The frontend should start on port 5173.*

Visit `http://localhost:5173` in your browser to view the application.

## Common Issues
If the frontend cannot communicate with the backend, ensure your backend's `CLIENT_URL` matches your frontend's running port (e.g., `http://localhost:5173`), otherwise you will receive CORS errors.
