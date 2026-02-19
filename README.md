<<<<<<< HEAD
# Task Manager Web Application

A simple, modern Task Manager application built with **React** (Vite) and **Node.js** (Vercel Serverless Functions).

## Features
- Add, View, Complete, and Delete tasks.
- Responsive UI.
- API-based architecture.
- Ready for deployment on Vercel.

## Tech Stack
- **Frontend**: React, Vite
- **Backend**: Node.js (Vercel Serverless Functions)
- **Styling**: Inline CSS (Simple & Clean)

## Project Structure
```
/
├── api/             # Backend API (Serverless Functions)
│   └── index.js     # Main API handler
├── src/             # Frontend Source
│   ├── App.jsx      # Main Application Component
│   └── main.jsx     # Entry Point
├── public/          # Static Assets
├── index.html       # HTML Entry Point
├── vite.config.js   # Vite Configuration
└── package.json     # Project Dependencies & Scripts
```

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- Git (optional, for version control).

### Installation
1. Clone the repository (or download files).
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To run the frontend and have it proxy API requests to the backend:

1. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the frontend at `http://localhost:5173` (or similar).
   
   **Note**: Since the backend is designed for serverless, local development of the API requires a compatible runner like `vercel dev` or a custom express wrapper. However, for simplicity, the `api/index.js` is structured to run as a standalone handler. To run the full stack locally with Vercel CLI is recommended.
   
   **Using Vercel CLI (Recommended):**
   ```bash
   npm i -g vercel
   vercel dev
   ```

## Deployment on Vercel

1. **Push to GitHub**: Ensure your code is in a GitHub repository.
2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard).
   - "Add New" -> "Project" -> Import your repository.
3. **Configure**:
   - Framework Preset: **Vite**
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
4. **Deploy**: Click "Deploy". Vercel will automatically detect the `api/` directory and deploy it as serverless functions.

## API Endpoints
- `GET /api/tasks` - List all tasks
- `POST /api/tasks` - Add a new task
- `PUT /api/tasks?id=:id` - Toggle task completion
- `DELETE /api/tasks?id=:id` - Delete a task
=======
# Task_manager_Web_application
Uses React.js (frontend), Uses Node.js (backend logic), Uses REST APIs, Includes UI updates, bug fixing, small modules, Shows real-world product thinking, No advanced backend required
>>>>>>> 30651c8bbc4d79a2e75b9c068bf92e715bd67270
