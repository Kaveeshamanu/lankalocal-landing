# LankaLocal — Landing Page

Landing page for **LankaLocal**, a platform connecting travelers with verified local guides across Sri Lanka. Built with React and Tailwind CSS from a Figma design, with full responsive support.

## Sections

- **Navbar** — sticky, blurred header with a mobile menu
- **Hero** — headline, search bar, social proof, and a floating image collage
- **Features** — bento-style grid highlighting why to travel with LankaLocal
- **Experiences** — curated destination cards (Tea Country Trails, Wildlife Safari, Ancient City Tour)
- **Guides** — profile cards for local guides with ratings and specialties
- **Footer** — site links, social icons, and a guide sign-up CTA

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

### Other scripts

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # run oxlint
```

## Project Structure

```
src/
├── assets/
│   ├── images/       # photography used across sections
│   └── icons/         # SVG icons exported from the Figma design
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Experiences.jsx
│   ├── Guides.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Design

Implemented from a Figma design ("3D Geometric Landing Page") to match layout, typography (Space Grotesk / Outfit), and color palette, adapted into responsive, reusable React components.
