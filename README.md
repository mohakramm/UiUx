# Ebaad Akram — Product & Interface Design Portfolio

A personal portfolio for Ebaad Akram: software engineering student at Western University
working at the overlap of analysis, engineering, and interface design.

**Positioning (honest by design):** not a lifelong-designer origin story — an
engineer-analyst who arrived at design deliberately, with evidence. Instead of padded
case studies, the site shows sensibility: **Field Notes** (short observations about
design in the wild), **interface studies** designed in code, stated principles, and the
site itself as a work sample.

**Visual language:** warm editorial — cream paper, deep plum ink, one vermilion accent,
serif-led type (Fraunces + Work Sans) with handwritten margin notes. Travel-journal
undertones: the personal history is an itinerary, changes of plan are delivered calmly.

## Pages

- `/` — hero, the route so far, interface studies, field-note teasers, principles, experience
- `/notes` — five full field notes
- `/about` — the honest origin story + three skill sets
- `/resume`, `/contact`

## Stack

- Next.js (App Router) + TypeScript, Tailwind CSS v4
- Static export (`output: "export"`), no animation libraries, no image exports —
  all visuals are JSX/SVG in code
- Reduced-motion and no-JS fallbacks; accessible navigation

## Develop

```bash
npm install
npm run dev
```

## Deploy — GitHub Pages

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static export
with `NEXT_PUBLIC_BASE_PATH=/UiUx` and publishes it to GitHub Pages at
**https://mohakramm.github.io/UiUx/**.

One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

## Editing content

- Field notes: `data/notes.ts`
- Interface studies: `components/Explorations.tsx`
- Identity/links: `data/site.ts` · Resume PDF: `public/resume.pdf`
- Design tokens: `app/globals.css`
