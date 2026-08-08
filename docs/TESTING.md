# Testing ViewMe

Currently, ViewMe relies primarily on manual testing and linting. Automated test suites (like Jest or Vitest) are planned for the future.

## Frontend Checks

You can run static analysis (linting) and verify the production build of the frontend locally.

```bash
cd client

# Run ESLint to catch syntax and style errors
npm run lint

# Run the Vite build to ensure the application compiles successfully
npm run build
```

If `npm run build` succeeds, it guarantees that there are no critical syntax errors or missing local module imports in the React application.

## Backend Verification

Since automated backend tests do not currently exist, you must manually verify the server can start and connect to the database.

```bash
cd server
npm run dev
```

If the server logs `Server is running on port 3001` without crashing, the database connection (`MONGODB_URL`) and environment variables are successfully validated on startup. 

*(Note: The server will immediately crash with a `FATAL ERROR` if required variables like `JWT_SECRET` or `GEMINI_API_KEY` are missing).*

## Manual API Testing

You can test the API endpoints using tools like Postman, Insomnia, or cURL.

1. **Test Registration**: Send a `POST` to `http://localhost:3001/api/users/register` with `{ name, email, password }`.
2. **Extract Token**: Copy the `token` from the response.
3. **Test Protected Routes**: Use the token in the `Authorization: Bearer <token>` header for requests to `/api/resumes/create`, etc.
