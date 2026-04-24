# fishtank-kick

Fishtank × Kick pitch deck — single-page proposal, built from the Claude Design handoff and deployed on Recursiv.

## Stack

- Next.js 14 (App Router), Nixpacks build, port 3000
- No CSS framework; styles inline from the design handoff

## Local

```bash
pnpm install
pnpm dev
```

## Source

- `public/pitch.html` — original design handoff, kept intact for reference
- `src/app/pitch-styles.ts` + `src/app/pitch-body.ts` — CSS and body HTML split out of the handoff so React can render it with fonts preloaded
- `src/app/layout.tsx` — preconnects Google Fonts (Old Standard TT, JetBrains Mono, DM Sans)
- `next.config.mjs` — CSP opens up `fonts.googleapis.com`, `fonts.gstatic.com`, and `youtube.com` iframes
