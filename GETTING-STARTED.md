# Getting Started with Your Portfolio

## ✨ No Setup Required!

Your portfolio uses **local JSON files** - no Sanity account, no database, no external services needed!

## Quick Start (2 Minutes)

1. **Navigate to portfolio folder:**
   ```bash
   cd portfolio
   ```

2. **Install and run:**
   ```bash
   npm install
   npm run dev
   ```

3. **View your site:**
   Open http://localhost:3000

That's it! Your site is running with 4 sample projects already loaded.

## Adding Your Content

### Option 1: Edit Existing Projects

1. Open `portfolio/content/projects/spectra.json`
2. Replace the content with your project info
3. Save and refresh the browser

### Option 2: Add New Projects

1. Copy an existing JSON file:
   ```bash
   cd portfolio/content/projects
   cp spectra.json my-project.json
   ```

2. Edit `my-project.json` with your content
3. Add images to `portfolio/public/images/projects/`
4. Refresh the browser

### Update Your Info

Edit `portfolio/content/settings.json`:
```json
{
  "authorName": "Your Name",
  "authorBio": "Your Title",
  "email": "your@email.com"
}
```

## File Structure

```
portfolio/
├── content/              ← YOUR CONTENT
│   ├── projects/        ← Your project JSON files
│   └── settings.json    ← Your info
│
└── public/images/       ← YOUR IMAGES
    └── projects/        ← Project images
```

## What's Built

✅ **Homepage** - Shows featured projects
✅ **Works page** - All projects grid
✅ **Exploration page** - Experimental work
✅ **Project pages** - Individual project details
✅ **Fully responsive** - Mobile, tablet, desktop

## Deployment

### Vercel (Free)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Deploy!

### Netlify (Free)
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repo
4. Deploy!

## Key Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Run production locally
```

## What's Different from Before?

**Old (Framer + Sanity):**
- ❌ Needed external Sanity account
- ❌ Required API keys
- ❌ External database
- ❌ Complex setup

**New (Local JSON):**
- ✅ Edit files directly
- ✅ No external services
- ✅ Works offline
- ✅ Simple and fast

---

**You're ready to go!** Just edit the JSON files in `content/projects/` to add your work.
