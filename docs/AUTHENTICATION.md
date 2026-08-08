# Authentication

ViewMe uses JSON Web Tokens (JWT) for stateless authentication.

## Implementation Details

### User Registration
When a user registers (`POST /api/users/register`), the backend securely hashes their password using `bcrypt` (with a salt factor of 10) before saving it to the database.

### Login
When a user logs in (`POST /api/users/login`), the backend retrieves the user hash, compares it using `bcrypt.compareSync()`, and generates a JWT signed with `process.env.JWT_SECRET`. 

By default, the `password` field is excluded (`select: false`) in the Mongoose schema to prevent accidental leakage in API responses.

### Token Expiration
Tokens are generated with a `7d` (7 days) expiration limit. 

### Protected Routes
Protected API routes use the `protect` middleware (`server/middlewares/authMiddlewares.js`). 
This middleware:
1. Looks for the `Authorization` header.
2. Extracts the `Bearer` token.
3. Verifies the token using `jwt.verify`.
4. Attaches the decoded `userId` to the Express `req` object for use by controllers.

### Rate Limiting
To prevent brute-force attacks, the login and registration endpoints are protected by `express-rate-limit`, limiting each IP address to 10 requests every 15 minutes.

### Frontend Integration
On the client side, the JWT token is stored in `localStorage`. 
The `Axios` instance (`client/src/config/api.js`) automatically intercepts outgoing requests and injects the `Authorization` header. If a `401 Unauthorized` response is received, the interceptor automatically clears the Redux state, triggering a redirect to the login page.
