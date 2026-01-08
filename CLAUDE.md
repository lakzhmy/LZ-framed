# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains two portfolio implementations for LAKZHMY (Industrial Designer):
1. **frame/** - Original Framer-exported static site (reference design)
2. **portfolio/** - Modern Next.js 15 rebuild with CMS capabilities

## Repository Structure

```
LZ-framed/
├── portfolio/               # Next.js 15 + Sanity CMS portfolio (ACTIVE)
│   ├── src/
│   │   ├── app/            # Next.js app router pages
│   │   ├── components/     # React components
│   │   ├── lib/            # Sanity client and utilities
│   │   └── types/          # TypeScript definitions
│   ├── sanity/             # Sanity CMS configuration
│   ├── .env.local          # Environment variables (needs setup)
│   └── README.md           # Portfolio documentation
│
└── frame/                   # Framer-exported static site (REFERENCE)
    ├── CLAUDE.md           # Framer site guidance
    └── page.html           # Static HTML pages
```

## Technology Stack (Portfolio)

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Deployment**: Vercel-ready (also works with Netlify, Railway, etc.)

## Common Commands

### Development
```bash
cd portfolio
npm run dev          # Start dev server on localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### First-time Setup
1. Create Sanity project at https://www.sanity.io/manage
2. Update `portfolio/.env.local` with Sanity project ID
3. Run `npm install` and `npm run dev`
4. Access CMS at `http://localhost:3000/studio`

## Key Architecture Points

### Content Management
- Sanity Studio integrated at `/studio` route
- Content types: Projects, Site Settings
- Images hosted on Sanity CDN
- Schema defined in `sanity/schema.ts`

### Routing Structure
- `/` - Homepage with featured projects
- `/works` - All projects listing
- `/exploration` - Exploration/experimental projects
- `/project/[slug]` - Individual project detail pages
- `/studio` - Sanity CMS interface

### Data Fetching
- Server Components with ISR (revalidate: 60s)
- Sanity queries in `src/lib/sanity.ts`
- Type-safe with TypeScript interfaces in `src/types/`

### Image Handling
- Next.js Image component for optimization
- Sanity Image URLs via `@sanity/image-url`
- Remote patterns configured for `cdn.sanity.io`

## Important Files

- `sanity/schema.ts` - Content type definitions (modify to add fields)
- `src/lib/sanity.ts` - Data fetching queries
- `src/components/Navigation.tsx` - Site navigation
- `next.config.ts` - Next.js configuration
- `.env.local` - Environment variables (NOT committed to git)

## Deployment Notes

- Environment variables must be set on hosting platform
- Static export possible but removes server-side features
- Sanity Studio accessible at `/studio` in production
- Configure Sanity CORS for production domain
