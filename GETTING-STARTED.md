# Getting Started with Your New Portfolio

## Quick Start (5 Minutes)

1. **Create Sanity Account & Project**
   - Visit: https://www.sanity.io/manage
   - Sign up (free)
   - Create new project
   - Copy your Project ID

2. **Update Environment Variables**
   ```bash
   cd portfolio
   ```
   Edit `.env.local` file - replace `your-project-id` with your actual Sanity Project ID

3. **Install & Run**
   ```bash
   npm install
   npm run dev
   ```

4. **Add Content**
   - Open: http://localhost:3000/studio
   - Create projects and site settings
   - Visit homepage to see your content

## What's Built

✅ **Modern Next.js 15 portfolio** - Fast, SEO-friendly, production-ready
✅ **Sanity CMS** - Easy content management at `/studio`
✅ **Responsive design** - Works on all devices
✅ **Image optimization** - Automatic image compression
✅ **TypeScript** - Type-safe code
✅ **Tailwind CSS** - Modern styling

## Deployment

**Option 1: Vercel (Easiest)**
1. Push to GitHub
2. Import to Vercel (https://vercel.com)
3. Add environment variables
4. Deploy!

**Option 2: Netlify**
1. Push to GitHub
2. Import to Netlify
3. Add environment variables
4. Deploy!

## File Structure

```
portfolio/
├── src/app/          # Your pages (homepage, works, projects)
├── src/components/   # Reusable components (navigation, cards)
├── sanity/          # CMS configuration
└── .env.local       # YOUR PROJECT ID GOES HERE
```

## Key Commands

```bash
npm run dev      # Start development (http://localhost:3000)
npm run build    # Build for production
npm run start    # Run production build locally
npm run lint     # Check code quality
```

## Need Help?

- Read `portfolio/SETUP.md` for detailed instructions
- Read `portfolio/README.md` for technical details
- Read `CLAUDE.md` for architecture overview

## What's Different from Framer?

**Framer Version** (`frame/` folder):
- Static HTML files
- Can't edit without Framer
- Limited hosting options
- No CMS

**New Version** (`portfolio/` folder):
- Full CMS control
- Edit content without code
- Host anywhere (Vercel, Netlify, etc.)
- Add features easily
- Modern tech stack

---

**You're all set!** Start by creating your Sanity project and adding your first portfolio piece.
