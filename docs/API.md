# API Reference

All backend requests should be made to `http://localhost:3001` (or your configured `VITE_BASE_URL`).

Endpoints requiring authentication must include the JWT token in the `Authorization` header:
`Authorization: Bearer <token>`

---

## User Routes (`/api/users`)

### `POST /register`
Creates a new user.
- **Auth required**: No
- **Rate Limit**: 10 requests per 15 mins.
- **Body**: `{ name, email, password }`
- **Response**: `{ message, token, user }` (201 Created)

### `POST /login`
Logs an existing user in.
- **Auth required**: No
- **Rate Limit**: 10 requests per 15 mins.
- **Body**: `{ email, password }`
- **Response**: `{ message, token, user }` (200 OK)

### `GET /data`
Fetches the currently authenticated user's profile.
- **Auth required**: Yes
- **Response**: `{ user }` (200 OK)

### `GET /resumes`
Fetches all resumes belonging to the authenticated user.
- **Auth required**: Yes
- **Response**: `{ resumes }` (200 OK)

---

## Resume Routes (`/api/resumes`)

### `POST /create`
Creates a new empty resume.
- **Auth required**: Yes
- **Body**: `{ title }`
- **Response**: `{ message, resume }` (201 Created)

### `PUT /update`
Updates an existing resume. Also handles profile image uploads if an image file is attached.
- **Auth required**: Yes
- **Body (multipart/form-data)**: 
  - `resumeId`: ID of the resume
  - `resumeData`: JSON string of the resume object
  - `removeBackground`: Boolean flag for ImageKit background removal
  - `image`: (Optional) File payload
- **Response**: `{ message, resume }` (200 OK)

*(Note: `POST /upload` currently maps to the exact same update function as `PUT /update`)*

### `DELETE /delete/:resumeId`
Deletes a specific resume.
- **Auth required**: Yes
- **Response**: `{ message }` (200 OK)

### `GET /get/:resumeId`
Fetches a specific resume belonging to the user.
- **Auth required**: Yes
- **Response**: `{ resume }` (200 OK)

### `GET /public/:resumeId`
Fetches a specific resume without authentication, but only if the resume is marked `public: true`.
- **Auth required**: No
- **Response**: `{ resume }` (200 OK)

---

## AI Routes (`/api/ai`)

All AI routes are heavily rate-limited (30 requests per 15 mins per IP).

### `POST /enhance-pro-sum`
Enhances a professional summary.
- **Auth required**: Yes
- **Body**: `{ userContent }`
- **Response**: `{ enhancedContent }` (200 OK)

### `POST /enhance-job-desc`
Enhances a single job description block.
- **Auth required**: Yes
- **Body**: `{ userContent }`
- **Response**: `{ enhancedContent }` (200 OK)

### `POST /upload-resume`
Extracts structured JSON data from a raw text resume.
- **Auth required**: Yes
- **Body**: `{ resumeText, title }`
- **Response**: `{ resumeId }` (200 OK - Note: this endpoint also creates the resume in the database automatically).
