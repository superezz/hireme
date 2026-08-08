# Database Architecture

ViewMe uses MongoDB as its primary database, interfaced through Mongoose.

> **Note on Database Naming**: By default, the database URI may contain the name `inqora` (e.g. `mongodb+srv://.../inqora`). This is a legacy identifier from early development but does not affect the functionality of ViewMe. Do not change it in production environments if data already exists under that name.

## Schemas

### User Schema (`server/models/User.js`)
Stores user authentication data.

- `name` (String, Required)
- `email` (String, Required, Unique, Lowercase)
- `password` (String, Required, `select: false` to hide by default)
- *Timestamps enabled (`createdAt`, `updatedAt`)*

Includes a helper method `comparePassword(password)` for validation.

### Resume Schema (`server/models/Resume.js`)
Stores all resume data for users.

- `userId`: ObjectId (Reference to `User`)
- `title`: String (Default: 'Untitled Resume')
- `public`: Boolean (Default: false) - Used for public sharing links
- `template`: String (Default: 'classic')
- `accent_color`: String (Default: '#3B82F6')
- `professional_summary`: String
- `skills`: Array of Strings
- `personal_info`: Object containing nested fields (`image`, `full_name`, `profession`, `email`, `phone`, `location`, `linkedin`, `website`)
- `experience`: Array of Objects (companies, roles, dates)
- `project`: Array of Objects
- `education`: Array of Objects

*Note on minimization*: `minimize: false` is set on this schema so that empty objects/arrays are preserved in the database to align with frontend state expectations.
