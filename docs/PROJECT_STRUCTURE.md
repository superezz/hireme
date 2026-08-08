# Project Structure

## Client Directory (`client/`)

The frontend is a Vite + React application.

```text
client/
├── public/                 # Static assets
├── src/
│   ├── app/                # Redux store configuration and slices
│   │   └── store.js        # Global Redux store
│   ├── assets/             # Images and styles used by components
│   ├── components/         # Reusable React components (e.g., Navbar, Hero, Forms)
│   ├── config/
│   │   └── api.js          # Pre-configured Axios instance for backend communication
│   ├── Pages/              # Page-level components matching routes (Home, Dashboard, etc.)
│   ├── App.jsx             # Root component and Router configuration
│   └── main.jsx            # React mounting point
├── .env.example            # Environment variables template
├── package.json            # Client dependencies and scripts
└── vite.config.js          # Vite build configuration
```

## Server Directory (`server/`)

The backend is a Node.js + Express application.

```text
server/
├── config/                 # External service configurations (ImageKit, Gemini, MongoDB)
│   ├── ai.js               # Initializes Gemini API client
│   ├── db.js               # Connects to MongoDB via Mongoose
│   ├── imageKit.js         # Initializes ImageKit client
│   └── multer.js           # Configures multipart form-data handling for file uploads
├── controllers/            # Core business logic for routes
│   ├── aiController.js     # AI features (resume data extraction, summary enhancement)
│   ├── resumeController.js # CRUD operations for resumes
│   └── userController.js   # User registration, login, and data fetching
├── middlewares/            # Express middlewares
│   └── authMiddlewares.js  # JWT validation (`protect`)
├── models/                 # Mongoose schema definitions
│   ├── Resume.js           # Resume structure
│   └── User.js             # User data structure
├── routes/                 # Express router definitions mapping URLs to controllers
│   ├── aiRoutes.js
│   ├── resumeRoutes.js
│   └── userRoutes.js
├── .env.example            # Environment variables template
├── package.json            # Server dependencies and scripts
└── server.js               # Express server initialization and entry point
```
