# PolicyLiason - Astro Website

## Overview
PolicyLiason is an insurance policy management website built with Astro, React, TailwindCSS, and TypeScript. This is a modern static site generator project that provides a fast, SEO-friendly website for insurance policy services.

**Project Type:** Frontend-only static site
**Framework:** Astro v5.15.9
**Package Manager:** Yarn v1.22.22
**Node Version:** 20+

## Current State
- ✅ Fully configured for Replit environment
- ✅ Development server running on port 5000
- ✅ Deployment configuration set up (static site)
- ✅ All dependencies installed
- ✅ Website functional and tested

## Recent Changes (November 26, 2025)
- Configured Astro to bind to 0.0.0.0:5000 for Replit compatibility
- Added Vite server configuration to allow all hosts
- Set up workflow for automatic dev server startup
- Configured static deployment with dist folder as output
- Installed all project dependencies

## Project Architecture

### Tech Stack
- **Framework:** Astro 5.15.9 (Static Site Generator)
- **UI Library:** React 19.2.0
- **Styling:** TailwindCSS 4.1.17
- **Language:** TypeScript 5.9.3
- **Content:** MDX for blog posts and pages
- **Icons:** React Icons
- **Additional Features:**
  - Google Tag Manager integration
  - Disqus comments
  - Search functionality
  - Dark mode support
  - Multi-author support

### Project Structure
- `/src/pages/` - Page routes and templates
- `/src/layouts/` - Layout components and partials
- `/src/components/` - Reusable React components
- `/src/content/` - Markdown/MDX content (blog posts, pages)
- `/src/config/` - Configuration files (site settings, menu, theme)
- `/src/styles/` - CSS stylesheets
- `/public/` - Static assets (images, favicon, etc.)
- `/scripts/` - Build scripts (JSON generator, dark mode remover)

### Key Features
- 15+ pre-designed pages (homepage, blog, about, contact, authors, etc.)
- Multi-author blog system
- Categories and tags taxonomy
- Search functionality
- Dark/light theme switcher
- Responsive design
- SEO optimized with sitemap
- Disqus comments integration

## Development

### Running Locally
The development server starts automatically via the workflow:
- **URL:** Available through Replit's webview
- **Port:** 5000
- **Host:** 0.0.0.0 (configured for Replit proxy)

### Manual Commands
```bash
# Install dependencies
yarn install

# Start dev server
yarn run dev

# Build for production
yarn run build

# Preview production build
yarn run preview

# Type checking
yarn run check

# Format code
yarn run format
```

### Important Scripts
- `generate-json` - Generates JSON data from content files (runs before dev/build)
- `remove-darkmode` - Removes dark mode from the project

## Configuration

### Site Settings (`src/config/config.json`)
- Site title, URL, and branding
- Search, sticky header, theme switcher toggles
- Pagination settings
- Google Tag Manager and Disqus integration
- Contact form configuration

### Menu (`src/config/menu.json`)
Navigation menu structure

### Theme (`src/config/theme.json`)
Color scheme and theme variables

## Deployment
Configured for static deployment:
- **Build command:** `yarn run build`
- **Output directory:** `dist/`
- **Deployment type:** Static site hosting

The build process:
1. Runs `generate-json` script to create content data
2. Builds Astro site with all optimizations
3. Outputs static HTML, CSS, and JS to `dist/` folder

## Environment Variables
None required for basic functionality. Optional:
- Google Tag Manager ID (configured in config.json)
- Disqus shortname (configured in config.json)

## User Preferences
No specific user preferences recorded yet.

## Notes
- The project uses Astro's server-side rendering during development
- Production build generates fully static HTML files
- React is only used for interactive components (search, theme switcher, etc.)
- Images are optimized using Sharp
- TailwindCSS v4 is used with Vite plugin integration
