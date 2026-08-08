# Frequently Asked Questions (FAQ)

### What is ViewMe?
ViewMe is an AI-powered resume builder. It allows users to quickly generate, customize, and export professional resumes, utilizing Google Gemini AI to enhance their professional summaries and job descriptions.

### Is ViewMe open source?
Please refer to the `LICENSE` file in the root directory. *(If no license is present, all rights are reserved by the original maintainers and it is not legally open source).*

### How do I run it locally?
You need Node.js, a MongoDB database, and a Google Gemini API Key. Refer to the [Development Setup](DEVELOPMENT.md) guide for step-by-step instructions.

### Which database is used?
ViewMe uses **MongoDB**. In the codebase, it is accessed using **Mongoose**.

### Which AI provider is used?
We use the **Google Gemini API** (`@google/genai` or the OpenAI-compatible SDK wrapper) for all AI text generation and data extraction features.

### Do I need API keys?
Yes. To run the project fully locally, you need:
- A Google Gemini API Key.
- ImageKit public/private keys (if you want to test profile picture uploads).

### How do I contribute?
Check out our [Contributing Guide](../CONTRIBUTING.md) to learn how to open pull requests, name your branches, and format your commits.

### How do I report a security issue?
Please read our [Security Policy](../SECURITY.md). Do **not** open a public GitHub issue for security vulnerabilities.

### How do I deploy it?
You can host the React frontend on platforms like Vercel or Netlify, and the Node.js backend on platforms like Render, Heroku, or DigitalOcean. See the [Deployment Guide](DEPLOYMENT.md) for specifics.
