# Deployment Guide

Deploying ViewMe requires hosting both the Vite frontend and the Node.js Express backend. 

## Frontend Deployment (Vercel, Netlify, etc.)

The React frontend can be hosted statically on any modern edge provider.

1. Create a new project in Vercel/Netlify.
2. Point it to the ViewMe GitHub repository.
3. Set the **Root Directory** to `client/`.
4. The build command should be `npm run build` and the output directory should be `dist/`.
5. Add the environment variable:
   - `VITE_BASE_URL`: The production URL of your hosted backend (e.g., `https://api.viewme.com`)

## Backend Deployment (Render, Heroku, DigitalOcean, etc.)

The Node.js backend requires a server environment capable of running Express.

1. Create a new Web Service on Render/Heroku.
2. Point it to the ViewMe GitHub repository.
3. Set the **Root Directory** to `server/`.
4. The build command should be `npm install`.
5. The start command should be `npm start` (which runs `node server.js`).
6. Add all required environment variables to the host configuration:
   - `MONGODB_URL`
   - `JWT_SECRET`
   - `GEMINI_API_KEY`
   - `GEMINI_MODEL`
   - `IMAGEKIT_PUBLIC_KEY`
   - `IMAGEKIT_PRIVATE_KEY`
   - `CLIENT_URL` (Set this to the production URL of your frontend, e.g., `https://viewme.com` to prevent CORS errors).

## Database
Ensure your MongoDB cluster (e.g., MongoDB Atlas) has its Network Access IP whitelist configured to allow connections from your backend host provider.

## Security Considerations
- Ensure HTTPS is enforced on both frontend and backend.
- Ensure your `JWT_SECRET` in production is completely unique, long, and unguessable.
- Ensure `CLIENT_URL` is set strictly to your frontend domain to prevent CORS abuse.
