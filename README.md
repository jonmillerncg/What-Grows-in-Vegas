# What Grows in Vegas

Marketing website for **What Grows in Vegas** — a fresh produce distributor for the American Southwest, headquartered in Las Vegas, NV.

Built with **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS** · **Resend** for email.

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your [Resend](https://resend.com) API key |

### Obtaining a Resend key

1. Create a free account at [resend.com](https://resend.com) (free tier: 3 000 emails/month).
2. Navigate to **API Keys → Create API Key**.
3. Paste the key into `.env.local` as `RESEND_API_KEY=re_...`.

### Sender address (sandbox vs. production)

Out of the box, the contact form route (`app/api/contact/route.ts`) uses Resend's sandbox sender:

```
from: 'onboarding@resend.dev'
```

In sandbox mode **emails are only delivered to the Resend account owner's email address** — which is intentional for development. To send to any recipient in production:

1. [Verify a domain](https://resend.com/docs/dashboard/domains/introduction) in your Resend dashboard.
2. Update the `from` field in `app/api/contact/route.ts`:
   ```ts
   from: 'noreply@yourdomain.com',
   ```

---

## Project structure

```
app/
  api/contact/route.ts   — POST handler; validates fields, sends via Resend
  globals.css            — Tailwind base + star/fade-in keyframe animations
  layout.tsx             — Root layout; loads Playfair Display, Archivo, Archivo Narrow
  page.tsx               — Composes all sections

components/
  Navbar.tsx             — Fixed, blur-backdrop navigation
  Hero.tsx               — Full-viewport hero with starfield + desert landscape
  About.tsx              — Two-column company story
  Produce.tsx            — 9-card produce grid
  Territory.tsx          — Six-state list + SVG map
  Values.tsx             — Three-card values section
  Team.tsx               — Team portraits + bios
  Contact.tsx            — Two-column contact info + working inquiry form
  BCorpBar.tsx           — Certified B Corporation bar
  Footer.tsx             — Logo, links, copyright
  FadeIn.tsx             — Scroll-triggered fade-in (IntersectionObserver)

  illustrations/
    DesertNight.tsx       — Hero desert night landscape SVG
    DesertSunset.tsx      — About section desert sunset SVG
    SouthwestMap.tsx      — Territory section delivery map SVG
    RosaPortrait.tsx      — CEO portrait SVG
    DesmondPortrait.tsx   — VP of Logistics portrait SVG
    TanyaPortrait.tsx     — Head of Grower Relations portrait SVG
```

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add `RESEND_API_KEY` under **Settings → Environment Variables**.
4. Deploy.

The site is a static single-page app with one server-side route handler (`/api/contact`). No database required.

---

## Design system

| Token | Value | Use |
|---|---|---|
| `forest` | `#1B3A2D` | Primary backgrounds |
| `sage` | `#4A7C59` | Accents, borders, values section |
| `gold` | `#C4892A` | CTAs, accent bars, stats |
| `gold-light` | `#E8B040` | Hover states, moon |
| `cream` | `#FAF6EE` | Body text on dark backgrounds |
| `sand` | `#F2EAD3` | Light section backgrounds |
| `rust` | `#A84B2F` | Hatband accent, error states |
| `near-black` | `#0F2018` | Dark overlays, footer |
| `muted` | `#6B7D72` | Eyebrow labels, secondary text |

Fonts: **Playfair Display** (headings) · **Archivo** (body) · **Archivo Narrow** (eyebrow labels, uppercase UI)
