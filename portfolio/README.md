# LAKZHMY Portfolio

Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. **All content managed through local JSON files** - no external CMS required!

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **View your site:**
   Open [http://localhost:3000](http://localhost:3000)

## Adding Content

### Add a New Project

1. Create a new JSON file in `content/projects/`:
   ```bash
   content/projects/my-project.json
   ```

2. Add project data:
   ```json
   {
     "_id": "my-project",
     "title": "My Amazing Project",
     "slug": "my-project",
     "description": "A brief description of the project",
     "coverImage": "/images/projects/my-project-cover.jpg",
     "images": [
       {
         "url": "/images/projects/my-project-1.jpg",
         "alt": "Project screenshot",
         "caption": "Main view"
       }
     ],
     "category": "UX/UI Design",
     "year": 2024,
     "client": "Client Name",
     "role": "Designer",
     "content": "Full project description goes here...",
     "tags": ["Design", "UI/UX"],
     "featured": true,
     "order": 1
   }
   ```

3. Add your images to `public/images/projects/`

4. Refresh the page - your project appears automatically!

### Update Site Settings

Edit `content/settings.json`:
```json
{
  "title": "Your Name - Designer",
  "description": "Your bio",
  "authorName": "Your Name",
  "authorBio": "Your Title",
  "email": "your@email.com",
  "socialLinks": {
    "linkedin": "https://linkedin.com/in/yourname",
    "behance": "https://behance.net/yourname",
    "instagram": "https://instagram.com/yourname"
  }
}
```

## Project Structure

```
portfolio/
├── content/                  # YOUR CONTENT HERE
│   ├── projects/            # Project JSON files
│   │   ├── spectra.json
│   │   ├── beans.json
│   │   └── aesth.json
│   └── settings.json        # Site settings
│
├── public/images/           # YOUR IMAGES HERE
│   └── projects/            # Project images
│
├── src/
│   ├── app/                 # Pages
│   ├── components/          # React components
│   ├── lib/                 # Content loader
│   └── types/               # TypeScript types
```

## Features

- ✅ No external CMS needed - edit JSON files
- ✅ Local image storage
- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Image optimization with Next.js Image
- ✅ Fully responsive design
- ✅ SEO-friendly with metadata
- ✅ Static site generation

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms

Works with any static hosting:
- Netlify
- GitHub Pages
- Railway
- DigitalOcean

## Content Management

### Project Fields

- **_id**: Unique identifier (use slug value)
- **title**: Project name
- **slug**: URL-friendly name (used in URLs)
- **description**: Short summary (1-2 sentences)
- **coverImage**: Path to cover image (e.g., "/images/projects/cover.jpg")
- **images**: Array of gallery images
- **category**: Project type (e.g., "UX/UI Design", "Product Design")
- **year**: Project year
- **client**: Client name (optional)
- **role**: Your role (optional)
- **content**: Full project description
- **tags**: Array of tags
- **featured**: true/false (shows on homepage)
- **order**: Display order (lower numbers first)

### Image Guidelines

- Place images in `public/images/projects/`
- Recommended sizes:
  - Cover images: 1600x1200px
  - Gallery images: 1600x900px
- Formats: JPG or PNG
- Optimize for web (< 500KB per image)

## Customization

### Colors
Edit `src/app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #111827;
}
```

### Navigation
Edit `src/components/Navigation.tsx`

### Content Schema
Edit `src/lib/content.ts` to modify data loading

## License

MIT
