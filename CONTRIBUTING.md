# Contributing to ViewMe

Thank you for your interest in contributing to ViewMe! We welcome bug reports, feature requests, and code contributions.

## Getting Started

1. **Fork the repository** (if you don't have write access) or clone it directly:
   ```bash
   git clone <repository-url>
   cd viewme
   ```
2. **Install dependencies** for both client and server:
   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```
3. **Configure Environment Variables**: Duplicate the `.env.example` files in both `client` and `server` folders and fill them out. Never commit your real credentials.

For more details on running the project locally, check out the [Development Setup](docs/DEVELOPMENT.md).

## Branch Naming

Please use a descriptive and standardized naming convention for your branches:
- `feature/short-description` for new features (e.g., `feature/ai-summary-improvements`)
- `fix/short-description` for bug fixes (e.g., `fix/authentication-validation`)
- `docs/short-description` for documentation changes
- `refactor/short-description` for refactoring code
- `chore/short-description` for maintenance tasks (e.g., dependency updates)
- `security/short-description` for security patches

## Commit Messages

We prefer clear, actionable commit messages. We follow a standard conventional format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation updates
- `refactor:` for code changes that neither fix a bug nor add a feature
- `test:` for adding or modifying tests
- `chore:` for updating build tasks, package manager configs, etc.
- `security:` for security fixes

Example:
```text
feat: add AI resume summary suggestions
fix: reject invalid login credentials
```

## Pull Request Process

1. Create a branch following the conventions above.
2. Make your changes and test them thoroughly.
3. If changing the frontend, run `npm run lint` and `npm run build` inside the `client/` directory to ensure there are no errors.
4. Ensure your code follows the existing style and architecture.
5. Commit and push your branch.
6. Open a Pull Request on GitHub using our PR template.
7. Address any feedback from reviewers.

## Contributor Code Standards

- **JavaScript Style**: Keep code consistent with the existing repository.
- **React Components**: Use functional components and hooks. Place components in `client/src/components`.
- **State Management**: Use Redux Toolkit for complex global state (`client/src/app/store.js`). Local component state is fine for UI toggles.
- **Error Handling**: Use `try/catch` in async functions. In the backend, always return standardized JSON error messages (e.g., `{ message: "Error description" }`).
- **Security**: Never expose or hardcode `.env` variables or secrets. Follow the guidelines in our [Security Policy](SECURITY.md).
