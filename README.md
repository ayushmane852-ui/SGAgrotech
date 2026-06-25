# S.G. Enterprises Website

Modern, responsive business website for **S.G. Enterprises** — a hardware and agricultural utility material supplier in India.

## Tech Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion
- React Router
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Pages

- **Home** — Hero, categories, featured products, gallery preview, FAQ, contact preview
- **About** — Business overview, mission/values, who we serve
- **Products** — Detailed product categories with enquire CTAs
- **Why Choose Us** — Benefits and trust points
- **Gallery** — Filterable gallery with lightbox
- **Contact** — Contact details, form, WhatsApp CTA, map placeholder

## Customization

Edit business details in:

```
src/data/siteConfig.js
```

Product content:

```
src/data/products.js
src/data/gallery.js
src/data/whyChooseUs.js
src/data/faq.js
```

Replace placeholder phone, email, address, and WhatsApp number in `siteConfig.js` before going live.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── components/home/  # Homepage sections
├── data/           # Editable content & config
├── layout/         # Navbar, Footer, Layout
└── pages/          # Route pages
```
