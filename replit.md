# Project Overview

El Massa Tour & Travel — landing page itinerary Umrah 2026. A React + Vite + TypeScript frontend application showcasing Umrah travel schedules for Juli and Oktober 2026, with destinations including Makkah, Madinah, and Thaif.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM v6
- **State/Data**: TanStack React Query
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod

## Project Structure

- `src/pages/` - Page components (HomePage, JuliPage, OktoberPage, NotFound)
- `src/components/` - Feature and UI components (HeroSection, ItinerarySection, FloatingWhatsApp, etc.)
- `src/components/ui/` - shadcn/ui primitives
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `public/` - Static assets (fonts, favicon)
- `src/assets/` - Images and logos

## Running the App

```bash
npm run dev
```

Runs on port 5000.

## Building for Production

```bash
npm run build
```

Output goes to `dist/`.
