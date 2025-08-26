## Changelog

All notable changes to this project will be documented in this file.

### 2025-08-26
- Initialized monorepo structure with `backend` (Nest.js) and `frontend` (Next.js + Tailwind).
- Added `.env` files:
  - Root: `PORT=3001`, `NEXT_PUBLIC_API_URL=http://localhost:3001`
  - `backend/.env`: `PORT=3001`
  - `frontend/.env`: `NEXT_PUBLIC_API_URL=http://localhost:3001`
- Backend: Installed `@nestjs/config`, set it as global via `ConfigModule.forRoot({ isGlobal: true })` in `backend/src/app.module.ts`.
- Backend: Reads `PORT` from env in `backend/src/main.ts`.
- Verified builds for both backend and frontend.


