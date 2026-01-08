# LAKZHMY Portfolio

Modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Sanity CMS.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Sanity CMS:**

   Create a Sanity project at https://www.sanity.io/manage

   Update `.env.local` with your project ID:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-08
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Access the CMS:**

   Navigate to `http://localhost:3000/studio` to manage your content

## Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── works/        # Works listing page
│   │   ├── exploration/  # Exploration page
│   │   ├── project/      # Individual project pages
│   │   └── studio/       # Sanity Studio
│   ├── components/       # React components
│   ├── lib/              # Utilities and Sanity client
│   └── types/            # TypeScript type definitions
├── sanity/               # Sanity CMS configuration
│   ├── schema.ts         # Content schemas
│   ├── client.ts         # Sanity client
│   └── env.ts            # Environment config
└── sanity.config.ts      # Sanity Studio config
```

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Sanity CMS for content management
- ✅ Image optimization with Next.js Image
- ✅ Responsive design
- ✅ SEO-friendly with metadata
- ✅ Dynamic project pages
- ✅ Featured projects showcase

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

This project works with any Next.js hosting platform:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## Content Management

Access the Sanity Studio at `/studio` to:
- Add/edit/delete projects
- Upload images
- Manage site settings
- Update project categories and tags

## Customization

- **Colors/Fonts:** Edit `src/app/globals.css` and `src/app/layout.tsx`
- **Navigation:** Edit `src/components/Navigation.tsx`
- **Content Schema:** Edit `sanity/schema.ts`
- **Page Layouts:** Edit files in `src/app/`

## License

MIT
