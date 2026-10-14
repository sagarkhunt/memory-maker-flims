# MEMORY MAKERS FILMS — Luxury Wedding Photography & Cinematic Films Website

> *"Capturing Moments. Creating Memories."*

A luxury, editorial-grade portfolio website and booking platform for **Memory Makers Films**, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Brand Identity & Unique Aesthetic Theme

The visual design is inspired by high-end luxury cinematography and haute couture editorial magazines:

- **Cinematic Black:** `#090909` (Primary background, deep film room atmosphere)
- **Dark Charcoal:** `#1C1A17` & `#141210` (Surface cards, rich tactile contrast)
- **Metallic Gold:** `#C9953C` & `#E5B869` (Gold leaf highlights, borders, primary CTAs)
- **Champagne Ivory:** `#F5E8CC` (Editorial serif display headings)
- **Warm Grey:** `#B8B1A5` (Comfortable, high-legibility body typography)
- **Pure White:** `#FFFFFF` (High-contrast focal points)

---

## 2. Implemented Routes & Features

| Route | Description |
|---|---|
| `/` | Complete cinematic homepage featuring Sections A through L (Hero, Story, Services, Selected Works, Films, Pillars, Process, Spotlight, Testimonials, Reels, FAQ, Final CTA) |
| `/about` | Studio philosophy, storytelling principles, artistic creed, and behind-the-scenes showcase |
| `/about/process` | Detailed 4-phase production blueprint from initial discovery to heirloom delivery |
| `/services` | Comprehensive overview of all 13 core photography & film services |
| `/services/[slug]` | Dedicated service pages (Weddings, Pre-Wedding, Engagement, Baby Shower, Chhathi, Birthdays, Reels, etc.) with equipment specs, deliverables, and booking integration |
| `/portfolio` | Filterable editorial gallery with category tabs (`Weddings`, `Pre-Wedding`, `Engagement`, `Baby & Family`, `Events`, `Reels & Films`) and full-screen lightbox |
| `/portfolio/[slug]` | Deep-dive story presentation with full gallery, camera notes, location, and prev/next navigation |
| `/films` | 4K Cinema showcase with interactive video playback modal and sound recording principles |
| `/testimonials` | Verified client reviews and feedback submission invitations |
| `/contact` | Full booking inquiry form with Zod validation, honeypot protection, studio details, and instant WhatsApp concierge |
| `/privacy-policy` | Legal privacy policies and client image rights |
| `/terms-and-conditions` | Studio reservation terms and delivery schedules |
| `/api/contact` | Secure server-side inquiry processing with spam protection and CRM hook |
| `/sitemap.xml` | Dynamic search engine sitemap |
| `/robots.txt` | Crawler directives |

---

## 3. Getting Started Locally

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm 9+

### Installation
```bash
# Clone or navigate to the project directory
cd portfolio

# Install dependencies (already performed)
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 4. Customizing Content & Assets

All content, contacts, and media paths are centralised in clean, typed configuration files:

### 1. Studio Information & Contact Details
Open [`src/config/site.ts`](src/config/site.ts) to update:
- Phone number: `contact.phone` (Configured: `+91 96011 34020`)
- WhatsApp international number: `contact.whatsappNumber` (Configured: `919601134020`)
- Official email: `contact.email`
- Studio physical address & city
- Social media URLs (Instagram, YouTube, Facebook)

### 2. Studio Logo
- The master logo file is located at [`public/logos/logo.png`](public/logos/logo.png).
- Replace this file or update `siteConfig.logoPath` in `src/config/site.ts` to point to a new asset.

### 3. Photography & Portfolio Projects
- To add or modify projects, edit [`src/data/portfolio.ts`](src/data/portfolio.ts).
- Add new photos into `public/images/portfolio/` or use high-resolution remote URLs.

### 4. Cinematic Films & Videos
- To update featured video reels, edit [`src/data/films.ts`](src/data/films.ts).
- Add YouTube embed links, Vimeo URLs, or self-hosted `.mp4` video files in `public/films/`.

### 5. Services & Deliverables
- To update descriptions, packages, or FAQs, edit [`src/data/services.ts`](src/data/services.ts).

---

## 5. Contact Form & Backend Integration

The contact form submits to `/api/contact`:
- In **development**, submissions validate all inputs with **Zod** and log the received inquiry safely to the server console.
- In **production**, configure your preferred email provider or CRM by adding `RESEND_API_KEY` to `.env.local` (see [`.env.example`](.env.example)).

---

## 6. Deployment Instructions

### Deploy on Vercel (Recommended)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Set any environment variables defined in `.env.example`.
4. Click **Deploy**. Vercel will automatically build the Next.js App Router application with full edge caching and image optimization.

### Deploy on Any Node.js Server or Docker
```bash
npm run build
NODE_ENV=production npm run start
```

---

© 2025 MEMORY MAKERS FILMS. All rights reserved.
