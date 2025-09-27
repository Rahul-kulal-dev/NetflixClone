# Netflix Clone - Full-Stack MERN Movie Streaming & Discovery Platform

A full-stack movie streaming, discovery, and trailer preview web application built with MongoDB, Express.js, React 19, Node.js, Redux Toolkit, Tailwind CSS v4, and The Movie Database (TMDB) API. Features JWT authentication with HTTP-only cookies, dynamic trailer previews, category-based browsing, full-text movie search, and responsive modal playback.

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8.2-purple.svg)](https://redux-toolkit.js.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express_5-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_8-47A248.svg)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Secure_Auth-black.svg)](https://jwt.io/)

---

## Overview

**Netflix Clone** is a decoupled full-stack entertainment application replicating core Netflix user journeys. The platform pairs a lightweight Express.js REST API backend with a high-performance React single-page application powered by Vite, Tailwind CSS v4, Material UI, and Redux Toolkit.

It offers complete user onboarding, stateless token security stored in HTTP-only cookies, live TMDB movie catalog ingestion, backdrop trailer playback, and real-time movie search.

---

## Key Features

### 🎬 Customer Discovery & Cinema Experience
- **Hero Video Billboard (Now Playing)**: Dynamic background playback streaming YouTube video trailers seamlessly with mute, unmute, play, and watch controls.
- **Curated Catalog Carousels**: Category-partitioned movie strips spanning:
  - *Now Playing*
  - *Popular Movies*
  - *Top Rated Films*
  - *Upcoming Releases*
- **Interactive Trailer Modal**: Click-to-play trailer preview dialog powered by Material UI Dialog and responsive embedded players.
- **Dedicated Movie Search Hub**: Query TMDB catalog with instant results, responsive cards, and dynamic result headers.

### 🔐 Security & User Session Management
- **Stateless Authentication**: JWT tokens signed server-side and stored in secure `httpOnly` cookies to protect against XSS token harvesting.
- **Password Encryption**: Robust password salting and hashing utilizing `bcrypt`.
- **Protected Routing**: Navigation guards verifying active session state before granting access to `/browse`.
- **Global State Hydration**: Redux Toolkit slices (`userSlice`, `movieSlice`, `SearchSlice`) managing user profiles, movie feeds, and search caches.

### 🎨 Modern Responsive UI / UX
- **Netflix Signature Design**: Dark aesthetic, hover cards with scale animations, custom gradients, and brand-accurate typography.
- **Responsive Navigation**: Adaptive header with avatar controls, logout handling, and instantaneous view toggles between discovery feeds and movie search.
- **Live Notifications**: Toast notifications via `react-hot-toast` delivering instant visual feedback for login, registration, and logout events.

---

## Platform Walkthrough

### 1. Landing & Authentication Portal
Dedicated sign-in and registration interface with real-time state toggling, form validation, and branded Netflix background artwork.

### 2. Main Browse Billboard & Hero Showcase
Dynamic billboard showcasing featured movie metadata, overview snippets, action buttons ("Play", "Watch More"), and seamless high-definition YouTube video backgrounds.

### 3. Categorized Movie Feeds
Multi-row horizontal carousels enabling smooth scrolling across Now Playing, Popular, Top Rated, and Upcoming movies fetched from TMDB.

### 4. Interactive Trailer Preview Dialog
Full-width backdrop dialog launched upon card interaction, displaying live video playback with overlay close controls.

### 5. Real-Time Movie Search Engine
Search interface enabling users to discover movies by keyword with loading indicators and categorized search result listings.

---

## Technical Architecture

### Backend Stack
| Layer | Technology | Specification |
| :--- | :--- | :--- |
| **Runtime** | Node.js | ES Modules (`"type": "module"`) |
| **Framework** | Express.js | Version 5.1.0 |
| **Database** | MongoDB / MongoDB Atlas | Cloud NoSQL Database |
| **ODM / Modeling** | Mongoose | Version 8.16.1 |
| **Security & Auth** | JSON Web Tokens (`jsonwebtoken`) + `bcrypt` | Stateless HTTP-Only Cookie Authentication |
| **Environment** | `dotenv` | Version 17.0.0 |
| **CORS / Parser** | `cors` & `cookie-parser` | Cross-Origin Resource Sharing with credentials |

### Frontend Stack
| Layer | Technology | Specification |
| :--- | :--- | :--- |
| **Framework** | React | Version 19.1.0 |
| **Build Tool** | Vite | Version 7.0.0 (Fast HMR & Optimized Bundles) |
| **Styling** | Tailwind CSS v4 + DaisyUI | Modern utility-first CSS engine (`@tailwindcss/vite`) |
| **Components & UI** | Material UI (`@mui/material`) + Emotion | High-performance modal dialogs and transitions |
| **Routing** | React Router DOM | Version 7.6.3 |
| **State Management** | Redux Toolkit & React-Redux | Version 2.8.2 (`userSlice`, `movieSlice`, `SearchSlice`) |
| **Icons & Feedback** | `react-icons` & `react-hot-toast` | Modern iconography and toast alerts |
| **HTTP Client** | Axios | Version 1.10.0 |
| **Data Provider** | The Movie Database (TMDB) API | RESTful movie endpoints & trailer keys |

---

## Project Structure

```text
netflix_Clone/
├── backend/                  # Express.js & MongoDB REST API (Node.js)
│   ├── controllers/          # Business logic (User registration, login, logout)
│   ├── models/               # Mongoose schema definitions (User model)
│   ├── routes/               # API route definitions (/api/v1/user)
│   ├── utils/                # Database connection configuration (MongoDB)
│   ├── .env                  # Backend environment secrets (ignored by Git)
│   ├── .env.example          # Backend environment variable template
│   ├── index.js              # Server entry point & Express configuration
│   └── package.json          # Backend dependencies and scripts
│
├── frontend/                 # React 19 + Vite + Tailwind CSS v4 SPA
│   ├── public/               # Static assets & favicon
│   ├── src/
│   │   ├── assets/           # Local media assets
│   │   ├── components/       # UI Components (Header, Browse, Login, MovieList, etc.)
│   │   ├── custom_hooks/     # Reusable TMDB API fetching hooks
│   │   ├── redux/            # Redux store and slice definitions
│   │   ├── utils/            # Constants, API endpoints, TMDB options
│   │   ├── App.jsx           # Root layout and global dialog mounts
│   │   └── main.jsx          # React DOM render and Redux Provider setup
│   ├── .env                  # Frontend environment variables (ignored by Git)
│   ├── .env.example          # Frontend environment variable template
│   ├── vite.config.js        # Vite configuration with Tailwind CSS plugin
│   └── package.json          # Frontend dependencies and npm scripts
│
└── README.md                 # Project documentation
```

---

## Getting Started

### Prerequisites
- **Node.js**: Version 18.x or 20.x or higher
- **npm**: Version 9.x or higher
- **MongoDB**: Local MongoDB instance or MongoDB Atlas cluster connection URI
- **TMDB API Account**: Free TMDB Read Access Token ([themoviedb.org](https://www.themoviedb.org/settings/api))

---

### 1. Backend Configuration & Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Establish your environment file:
   ```bash
   # Unix/macOS:
   cp .env.example .env

   # Windows (PowerShell):
   Copy-Item .env.example .env
   ```

3. Configure connection details in `backend/.env`:
   ```env
   PORT=8080
   MONGO_DB=mongodb+srv://<username>:<password>@cluster0.mongodb.net/netflix
   JWT_SECRET=your_secure_256_bit_jwt_secret_key
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Launch the backend server:
   ```bash
   # Production / Standard run:
   node index.js

   # Development with automatic restart:
   npm run dev
   ```

   The backend service binds to `http://localhost:8080`.

---

### 2. Frontend Configuration & Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Establish your environment file:
   ```bash
   # Unix/macOS:
   cp .env.example .env

   # Windows (PowerShell):
   Copy-Item .env.example .env
   ```

4. Configure your TMDB API credentials in `frontend/.env`:
   ```env
   VITE_TMDB_API_TOKEN=your_tmdb_api_read_access_token
   ```

5. Launch the Vite development server:
   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:5173`.

---
