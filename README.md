# Test Monorepo

A minimal monorepo containing a Nest.js backend and a Next.js frontend.

### Structure
- `backend`: Nest.js API server
- `frontend`: Next.js 14 app (App Router + Tailwind)
- `docs/CHANGELOG.md`: Running changelog of notable changes

### Quickstart
1) Install dependencies
```bash
cd backend && npm i && cd ../frontend && npm i
```
2) Configure environment
```bash
# Root, used for convenience defaults
PORT=3001
NEXT_PUBLIC_API_URL=http://localhost:3001

# backend/.env
PORT=3001

# frontend/.env
NEXT_PUBLIC_API_URL=http://localhost:3001
```
3) Run
```bash
# Terminal A
cd backend && npm run start:dev

# Terminal B
cd frontend && npm run dev
```

### Documentation
- See [backend/README.md](backend/README.md) for API server details.
- See [frontend/README.md](frontend/README.md) for web app details.
- See [docs/CHANGELOG.md](docs/CHANGELOG.md) for change history.

### Contributing
- Create feature branches from `main`.
- Keep READMEs and CHANGELOG updated with each change.

### Documentation policy
- Every code change that adds/updates/removes behavior must update:
  - `docs/CHANGELOG.md` (high-level summary)
  - `backend/README.md` or `frontend/README.md` (usage, env, scripts, APIs, or UI notes)
- PRs without doc updates should explain why none are needed.