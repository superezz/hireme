# Troubleshooting Guide

Here are solutions to common issues you might encounter while running ViewMe locally.

### 1. MongoDB Connection Failure
**Error Output:** The server crashes on startup or API requests return 500 errors.
- **Cause:** Invalid `MONGODB_URL` or network access restriction.
- **Solution:** 
  1. Ensure your `.env` contains a valid MongoDB URI.
  2. If using MongoDB Atlas, go to "Network Access" and ensure your current IP address is whitelisted (or use `0.0.0.0/0` for development).

### 2. Frontend Cannot Reach Backend (CORS Errors)
**Error Output:** Browser console shows a CORS policy violation.
- **Cause:** The backend's `CLIENT_URL` does not match the frontend's address.
- **Solution:** Ensure `CLIENT_URL=http://localhost:5173` is set in `server/.env`. Ensure you restart the server after changing `.env` files.

### 3. Missing Environment Variables
**Error Output:** `FATAL ERROR: Missing required environment variable: ...`
- **Cause:** The backend enforces the presence of critical secrets on startup.
- **Solution:** Check your `server/.env` file. You must have `JWT_SECRET`, `GEMINI_API_KEY`, and `CLIENT_URL` defined.

### 4. AI Enhancements / PDF Extraction Failing
**Error Output:** AI requests take too long or return 400/500 errors.
- **Cause:** Invalid Gemini API key, or you hit the rate limit.
- **Solution:** 
  1. Verify `GEMINI_API_KEY` is correct.
  2. The AI routes are strictly rate-limited (30 requests per 15 minutes). Wait 15 minutes if you are testing heavily.

### 5. Profile Picture Upload Fails
**Error Output:** Image upload fails silently or returns an error.
- **Cause:** Missing ImageKit configuration.
- **Solution:** Ensure `IMAGEKIT_PUBLIC_KEY` and `IMAGEKIT_PRIVATE_KEY` are correct in `server/.env`. 

### 6. Authentication / Session Expiry
**Error Output:** You are suddenly logged out when navigating.
- **Cause:** JWT token expired (7 days) or was cleared.
- **Solution:** Simply log back in. The frontend Axios interceptor automatically detects expired tokens and clears your session to protect your data.
