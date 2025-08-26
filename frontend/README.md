## Frontend (Next.js)

### Overview
Next.js 14 App Router app with Tailwind CSS.

### Requirements
- Node.js 18+
- npm 9+

### Setup
```bash
cd frontend
npm i
```

### Environment
Create `frontend/.env`:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Scripts
```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # start built app
npm run lint    # lint
```

### Run
```bash
npm run dev
```
Open http://localhost:3000.

### Source layout
- `src/app/` — app routes; edit `page.tsx` to change the home page
- `src/styles/globals.css` — Tailwind styles
- `next.config.mjs` — Next.js config

### Conventions
- Use absolute imports with `@/*` alias
- Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser

### Documentation reminder
If you change routes, env, scripts, or conventions:
- Update this README and `docs/CHANGELOG.md`.
