# ViewMe

ViewMe is an AI-powered resume builder that helps users create, customize, and export professional resumes with intelligent assistance. 

It provides an intuitive interface to manage multiple resumes, update templates, and enhance professional summaries and job descriptions using Gemini AI.

> **Note**: This repository does not currently include an open-source license. Please check with the maintainers regarding usage and distribution rights.

## Features

- **Authentication**: Secure JWT-based user registration and login.
- **Resume Management**: Create, update, preview, and delete resumes.
- **AI-Powered Enhancements**: Automatically improve professional summaries and job descriptions using Gemini AI.
- **Data Extraction**: Upload a plain text resume to extract its contents and map it to a structured resume template via AI.
- **Image Uploads**: Upload profile pictures for resumes, securely handled through ImageKit.
- **Live Preview**: Real-time rendering of your resume across different templates.

## Screenshots

*(Screenshots can be added to the `docs/images/` directory in the future. We recommend capturing your landing page, dashboard, resume builder, and preview screen.)*

## Tech Stack

### Frontend
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) / [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/) (JSON Web Tokens)
- [ImageKit](https://imagekit.io/) (Image hosting)
- [Gemini API](https://aistudio.google.com/) (AI integrations)

## Documentation

Comprehensive documentation for developers is available in the [`docs/`](docs/README.md) directory.

- [Getting Started & Development Setup](docs/DEVELOPMENT.md)
- [Project Architecture](docs/ARCHITECTURE.md)
- [Project Structure](docs/PROJECT_STRUCTURE.md)
- [API Documentation](docs/API.md)
- [Authentication](docs/AUTHENTICATION.md)
- [Database](docs/DATABASE.md)
- [AI Integration](docs/AI.md)
- [Testing Guidelines](docs/TESTING.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [FAQ](docs/FAQ.md)

## Quick Start

### Prerequisites
- Node.js v18+
- MongoDB instance (local or Atlas)
- ImageKit account (for image uploads)
- Google Gemini API key (for AI features)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd viewme
   ```

2. Setup Backend:
   ```bash
   cd server
   npm install
   ```

3. Setup Frontend:
   ```bash
   cd ../client
   npm install
   ```

4. Configure your `.env` variables using the `.env.example` templates in both `server/` and `client/` directories. See [Development Setup](docs/DEVELOPMENT.md) for more details.

5. Start the backend (from `server/`):
   ```bash
   npm run dev
   ```

6. Start the frontend (from `client/`):
   ```bash
   npm run dev
   ```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for detailed instructions on branch naming, pull requests, and project conventions.

## Security

Please report vulnerabilities following our [Security Policy](SECURITY.md). Do not commit secrets (like `.env` files, JWT secrets, or API keys) to version control.

## Roadmap

Check out our [Roadmap](ROADMAP.md) to see what we're planning for future releases!
