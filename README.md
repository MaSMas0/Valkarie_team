# Valkyrie Racing — Team Website

Official website for Valkyrie Racing: a student-led motorsport engineering/STEM racing team focused on aerodynamic optimisation and precision design.

- Stack: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion
- Output: static export (`next.config.ts` sets `output: "export"`)
- Hosting: Firebase Hosting (`firebase.json` serves `out/`)
- Live site: https://www.valkyrieracing.com

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build (static export)

```bash
npm run build
```

The static site is generated into `out/`.

## Deploy (Firebase Hosting)

```bash
firebase deploy --only hosting
```

## Repo description (GitHub “About”)

Official Valkyrie Racing website — Next.js static export hosted on Firebase.

## Suggested topics

`nextjs`, `react`, `typescript`, `tailwindcss`, `firebase-hosting`, `static-site`, `framer-motion`, `team-website`, `motorsport`, `stem-racing`
