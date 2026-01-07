# IMAS Website

**AI-powered Intelligent Mobility & Driver Assistance System**

A production-ready, high-performance marketing website for IMAS/IDAS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** Web3Forms (no backend needed)
- **Deployment:** Vercel-ready

## Features

- 🚀 Server-Side Rendering (SSR) + Static Site Generation (SSG)
- ⚡ Lighthouse Performance ≥ 90
- ♿ Accessibility-first (WCAG compliant)
- 📱 Mobile-first responsive design
- 🎨 Premium deep-tech aesthetic
- 🔒 Privacy-aware design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     # Marketing pages route group
│   │   ├── page.tsx     # Main landing page
│   │   ├── privacy/     # Privacy policy
│   │   └── terms/       # Terms of service
│   ├── layout.tsx       # Root layout + SEO
│   └── globals.css      # Design system
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # 13 page sections
│   ├── forms/           # Contact form
│   └── ui/              # Reusable components
└── lib/
    └── animations.ts    # Framer Motion variants
```

## Configuration

### Web3Forms Setup

1. Get your access key from [Web3Forms](https://web3forms.com/)
2. Replace `YOUR_ACCESS_KEY_HERE` in `src/components/forms/ContactForm.tsx`

### Environment Variables

No environment variables required for basic setup.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy

The site is optimized for Vercel's Edge Network with:
- Automatic HTTPS
- Global CDN
- Image optimization
- ISR support

## Performance Targets

| Metric | Target |
|--------|--------|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 90 |
| SEO | ≥ 95 |
| FCP | < 1s |

## License

Proprietary - All rights reserved.
