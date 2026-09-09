<<<<<<< HEAD
# Nithish Subramaniyan — Portfolio

A premium, systems-first portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you ship it

1. **Add your resume.** Drop `resume.pdf` into `/public`. It's already linked from the nav, the "30 seconds?" panel, and the Recruiter View drawer.
2. **Update contact details.** Edit `email` and `linkedin` in `lib/data.ts` (`profile` object).
3. **Review the case studies.** The three case studies in `lib/data.ts` (`projects`) are written from the systems and technologies in your brief (event-driven routing, workflow modernization, AI-assisted intake with Lex/Bedrock). Replace the specifics with your real architecture decisions, and add real metrics wherever you have them — the copy is deliberately qualitative where no numbers were provided.
4. **Update the domain** in `app/layout.tsx` (`metadataBase`), `app/sitemap.ts`, and `app/robots.ts` once you know where this will be hosted.
5. **Engineering Notes** are placeholders ("Coming soon") by design — swap them for real posts (or links to them) once you've written them.

## Project structure

```
app/                Route, layout, metadata, global styles
components/         One file per section/UI piece
lib/data.ts         All content — copy lives here, not scattered in components
lib/utils.ts        Small className helper
```

## Design system

- Colors, spacing, and type scale are defined as CSS variables in `app/globals.css` and mapped into Tailwind in `tailwind.config.ts`. Both light and dark themes share the same single accent color (a controlled cobalt-blue), per the brief.
- Typography uses Geist Sans (headings + body) and Geist Mono (small technical labels, tags, numbers) — installed via the `geist` package, no external font requests needed.
- Motion respects `prefers-reduced-motion` throughout (see `useReducedMotion` usage and the global CSS media query).

## Deploying

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or any Node host:

```bash
npm run build
npm run start
```
=======

>>>>>>> 9fbaa46cbb439209774d79749003b3a33784ccd4
