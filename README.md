# COAC

## 🚀 Features

- **React 18** and **TypeScript** setup
- Fast and modern bundler: **Vite**
- Pre-configured with **ESLint**, **Prettier**, and **Husky**
- Testing setup with **Jest** and **Testing Library**
- State management with **Zustand**
- Server state management with **TanStack Query** (React Query)
- **Tailwind CSS** for styling
- Animations with **Framer Motion**
- Modern icons with **Lucide React**
- Loading animations with **ldrs**
- Optimized scripts for development, building, and code quality checks

## 📦 Main Dependencies

### Core

- `react` ^18.3.1
- `react-dom` ^18.3.1
- `vite` ^6.0.5
- `typescript` ~5.6.2

### State Management & Data Fetching

- `zustand` ^5.0.3
- `@tanstack/react-query` ^5.65.1

### UI & Interactions

- `tailwindcss` ^4.0.0
- `framer-motion` ^12.0.6
- `lucide-react` ^0.475.0
- `ldrs` ^1.0.2

### Utilities

- `dayjs` ^1.11.13
- `@justinribeiro/lite-youtube` ^1.7.1

## 🔧 Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/juanmiguelruiz/coac.git
   cd coac
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## 🛠️ Available Scripts

- `npm start` - Starts the development server on port 3000
- `npm run build` - Builds the app for production
- `npm run lint` - Runs the linter across the project

## 📝 Code Conventions

The project uses:

- ESLint for linting
- Prettier for code formatting
- Husky for git hooks
- Commitlint for commit conventions
