# AI Integration

ViewMe integrates the **Google Gemini API** (`@google/genai` or `openai` wrapper) to provide intelligent resume enhancements.

## Architecture

1. **Client Request**: The frontend sends raw text (e.g., a poorly written job description) to the Express backend.
2. **Backend Authentication**: The route ensures the user is authenticated and hasn't hit the AI rate limit (30 requests/15 mins).
3. **Prompt Construction**: The `aiController.js` constructs a rigid system prompt forcing the AI to behave as an expert resume writer and to return *only* plain text or structured JSON.
4. **API Call**: The backend securely calls the Gemini API (the `GEMINI_API_KEY` is never exposed to the frontend).
5. **Response**: The enhanced text or JSON data is returned to the client and updated in the Redux store.

## Features

### 1. Professional Summary Enhancement
*Endpoint: `POST /api/ai/enhance-pro-sum`*
Takes a user's rough summary and rewrites it into a professional, ATS-friendly 1-2 sentence summary.

### 2. Job Description Enhancement
*Endpoint: `POST /api/ai/enhance-job-desc`*
Takes a raw job description and rewrites it using action verbs and quantifiable metrics.

### 3. Resume Data Extraction
*Endpoint: `POST /api/ai/upload-resume`*
Takes a large blob of plain text (usually extracted from a PDF on the frontend using `react-pdftotext`) and instructs Gemini to parse it into ViewMe's exact Mongoose Resume schema. The AI is forced to respond in a `json_object` format. The backend parses this JSON and automatically inserts it into the database as a new Resume.

## Security & Limitations
- AI generated content should always be reviewed by the user for accuracy before saving/exporting.
- The AI routes are strictly rate-limited to prevent excessive API costs.
