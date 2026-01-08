# Portfolio Setup Guide

## What You Have

A fully functional Next.js 15 portfolio website with Sanity CMS integration, rebuilt from your Framer design.

## First-Time Setup

### 1. Create Sanity Project

1. Go to https://www.sanity.io/manage
2. Click "Create Project"
3. Choose a project name (e.g., "LAKZHMY Portfolio")
4. Select "Free" plan
5. Copy your Project ID

### 2. Configure Environment Variables

Edit `portfolio/.env.local` and replace `your-project-id` with your actual Sanity Project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz  # Your actual project ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-08
```

### 3. Start Development Server

```bash
cd portfolio
npm run dev
```

Visit `http://localhost:3000`

### 4. Access the CMS

Navigate to `http://localhost:3000/studio`

This is where you'll manage all your content!

## Adding Your First Project

1. Open `http://localhost:3000/studio`
2. Click "+ Create" → "Project"
3. Fill in:
   - **Title**: e.g., "Spectra"
   - **Slug**: Click "Generate" to auto-create
   - **Description**: Project summary
   - **Cover Image**: Upload an image
   - **Category**: Select or add custom
   - **Featured**: Toggle ON to show on homepage
   - **Order**: Set display order (lower numbers first)
4. Click "Publish"

## Adding Site Settings

1. Go to Studio → "Site Settings" → Create
2. Fill in:
   - **Site Title**: LAKZHMY - Industrial Designer
   - **Author Name**: LAKZHMY
   - **Author Bio**: Industrial Designer
   - **Email**: your email
   - **Social Links**: Add your profiles
3. Click "Publish"

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── works/page.tsx        # All projects
│   │   ├── exploration/page.tsx  # Exploration projects
│   │   ├── project/[slug]/       # Individual project pages
│   │   └── studio/               # CMS interface
│   │
│   ├── components/
│   │   ├── Navigation.tsx        # Site navigation
│   │   └── ProjectCard.tsx       # Project preview card
│   │
│   ├── lib/
│   │   └── sanity.ts            # Data fetching functions
│   │
│   └── types/
│       └── index.ts             # TypeScript types
│
├── sanity/
│   ├── schema.ts                # CMS content structure
│   ├── client.ts                # Sanity client config
│   └── env.ts                   # Environment config
│
├── sanity.config.ts             # Sanity Studio config
├── next.config.ts               # Next.js config
└── .env.local                   # Environment variables (YOU NEED TO EDIT THIS)
```

## Key Features

### Content Management
- Full CMS at `/studio`
- Add/edit/delete projects
- Upload and manage images
- Control featured projects
- Manage site settings

### Pages
- **/** - Homepage with featured projects
- **/works** - All projects grid
- **/exploration** - Experimental/exploration work
- **/project/[slug]** - Individual project detail pages
- **/studio** - Sanity CMS interface

### Design Features
- Minimal, clean design inspired by Framer version
- Fully responsive (mobile, tablet, desktop)
- Image optimization via Next.js
- Smooth transitions and hover effects
- Inter font (matches original)

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Add portfolio"
   git push
   ```

2. Go to https://vercel.com/new
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
5. Click Deploy

### Configure Sanity CORS

After deployment:
1. Go to https://www.sanity.io/manage
2. Select your project → API → CORS Origins
3. Add your Vercel domain (e.g., `https://your-site.vercel.app`)
4. Check "Allow credentials"

## Customization

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
  --background: #ffffff;  /* Change background */
  --foreground: #111827;  /* Change text color */
}
```

### Modify Navigation
Edit `src/components/Navigation.tsx` to add/remove menu items

### Add New Content Fields
Edit `sanity/schema.ts` to add fields to projects

### Change Fonts
Edit `src/app/layout.tsx` to use different Google Fonts

## Troubleshooting

### "Dataset not found" error
- Make sure you've created a Sanity project
- Update `.env.local` with correct project ID
- Restart dev server after changing `.env.local`

### Images not showing
- Verify images are uploaded in Sanity Studio
- Check `next.config.ts` has correct image domains
- Ensure Sanity project ID is correct

### Studio not loading
- Check browser console for errors
- Verify Sanity packages are installed
- Try clearing `.next` folder and rebuilding

## Need Help?

- **Sanity Docs**: https://www.sanity.io/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
