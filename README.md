# Rate Repository App

A React Native mobile application for browsing and rating GitHub repositories. Built with Expo and powered by a GraphQL API, it supports user authentication, repository listing with sorting and filtering, and submitting ratings and reviews.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React Native, Expo ~50 |
| Language | JavaScript |
| API | GraphQL (Apollo Client) |
| Navigation | React Router Native |
| Forms & Validation | Formik, Yup |
| UI Components | React Native Paper |
| Storage | AsyncStorage |
| Performance | use-debounce |
| Testing | Jest, jest-expo |
| Build & Deploy | Expo EAS (development, preview, production) |

---

## Project Structure

```
rate-repository-app/
├── src/               # Application source code (components, hooks, utils)
├── assets/            # Images and static assets
├── App.js             # Root application component
├── app.config.js      # Expo app configuration
├── babel.config.js    # Babel configuration
├── metro.config.js    # Metro bundler configuration
├── eas.json           # EAS Build configuration
├── setupTests.js      # Jest test setup
├── package.json
└── .gitignore
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally
- [Expo Go](https://expo.dev/client) app on your iOS or Android device, or an emulator
- A `.env` file with the GraphQL API URL (see below)

---

## Environment Variables

Create a `.env` file in the root of the project:

```env
EXPO_PUBLIC_GRAPHQL_URI=http://localhost:4000/graphql
```

Adjust the URL to point to whichever GraphQL backend you are running.

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

Then scan the QR code with Expo Go, or press `a` for Android emulator / `i` for iOS simulator / `w` for web.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm start` | Start the Expo development server |
| `npm run android` | Run on Android emulator or device |
| `npm run ios` | Run on iOS simulator or device |
| `npm run web` | Run in the browser |
| `npm test` | Run Jest tests |
| `npm run lint` | Run ESLint across source files |

---

## Building with EAS

This project is configured with [Expo Application Services (EAS)](https://expo.dev/eas) for cloud builds.

```bash
# Development build (internal distribution)
eas build --profile development

# Preview build (internal distribution)
eas build --profile preview

# Production build (auto-increments version)
eas build --profile production
```

---

## Testing

Tests are run with Jest using the `jest-expo` preset:

```bash
npm test
```

---
