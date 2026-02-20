## EcomHammad – E‑commerce Portfolio Website

This is the codebase for **EcomHammad**, a portfolio and lead‑generation website showcasing real Shopify, paid‑ads, and design work for a three‑person e‑commerce team.

The site is built with **React**, **Vite**, and **Tailwind CSS**, and is optimized for conversions with clear case studies, testimonials, and a WhatsApp‑first contact flow.

---

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion (animations)
- Netlify (forms & hosting)

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or another Node package manager

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Optimize Images (WebP)

Before committing new images in `public/Results`, `public/Hammad`, `public/Sales`, or `public/Testimonals`, convert them to WebP and size them down for faster loads:

```bash
npm run optimize-images
```

This runs `scripts/optimize-images.js` (Sharp) to generate `.webp` copies at sensible widths. Update any new image references to point to the `.webp` files.

---

## Project Structure

Key files and folders:

- `index.html` – HTML entry point and SEO/meta tags
- `src/main.jsx` – React entry file
- `src/App.jsx` – Main app routing/layout
- `src/components/` – Shared UI components (Navbar, Footer, Layout, etc.)
- `src/sections/` – Page sections (Hero, About, Services, Results, Sales, Team, Testimonials, Tools, Contact)
- `src/pages/` – Portfolio pages for Abdullah, Hammad, and Saad
- `tailwind.config.cjs` – Tailwind configuration
- `postcss.config.cjs` – PostCSS configuration
- `vite.config.mts` – Vite configuration

---

## Contact & Leads

- Primary CTA is a **WhatsApp inquiry** button that opens a chat with the EcomHammad WhatsApp number, pre‑filled with the details from the contact form.
- Netlify forms are wired to capture submissions from the Contact form.

You can update email, WhatsApp number, and links in:

- `src/sections/Contact.jsx` – email, WhatsApp, and contact copy
- `src/components/Footer.jsx` – footer text and Instagram link

---

## Deployment

This project is configured for deployment on **Netlify** via `netlify.toml`.

Typical flow:

1. Push changes to GitHub.
2. Connect the repo to Netlify.
3. Use the default build command `npm run build` and publish directory `dist`.

### Performance and caching

- Static media under `/Results`, `/Hammad`, `/Sales`, and `/Testimonals` are served as WebP and ship with long-lived cache headers via `netlify.toml`.
- Keep PNG/JPEG originals only if needed; prefer the generated `.webp` versions in code references.

---

## License

This repository is intended as a personal/portfolio project for EcomHammad. If you want to reuse the design or structure, please ask for permission first.
