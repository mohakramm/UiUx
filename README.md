# Ebaad Akram — UI/UX Portfolio

A UI/UX and product design portfolio for Ebaad Akram: software engineering student at
Western University, designing at the intersection of systems, stories, and people.

**Positioning:** cinematic product storyteller with engineering depth. Case studies are
framed as episodes — setup, conflict, constraints, decisions, resolution — and every
project is honestly labelled as shipped, user-tested, or concept.

## Case studies

| Episode | Project | Status |
| --- | --- | --- |
| EP. 01 | Venn — proximity social discovery | Self-initiated concept (in progress) |
| EP. 02 | Western Exam Schedule Tool | Real project + user acceptance testing |
| EP. 03 | Version History at Resume Inc. | Shipped internship work (support tickets −40%) |
| EP. 04 | Marquee — a better movie night | Concept case study |

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- No animation libraries — scroll reveals are a ~40-line IntersectionObserver component
  with `prefers-reduced-motion` and no-JS fallbacks
- All case-study mockups and thumbnails are built in code (JSX/SVG), no image exports
- Fully static output; deployable to Vercel as-is

## Develop

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build & checks

```bash
npm run lint
npm run build
```

## Editing content

- Case study card metadata: `data/caseStudies.ts`
- Site-wide identity/links: `data/site.ts` (set `NEXT_PUBLIC_SITE_URL` or edit `url` after deploying)
- Case study pages: `app/work/<slug>/page.tsx`
- Resume PDF: `public/resume.pdf`
- Design tokens (colors, type, grain, motion): `app/globals.css`
