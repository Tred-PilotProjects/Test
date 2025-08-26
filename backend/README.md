## Backend (Nest.js)

### Overview
Nest.js API server with global environment config.

### Requirements
- Node.js 18+
- npm 9+

### Setup
```bash
cd backend
npm i
```

### Environment
Create `backend/.env`:
```bash
PORT=3001
```

### Scripts
```bash
npm run start        # start
npm run start:dev    # watch mode
npm run build        # compile TS
npm run test         # unit tests
npm run test:e2e     # e2e tests
npm run lint         # lint fix
```

### Run
```bash
npm run start:dev
```
Server listens on `PORT` (defaults to 3000).

### Entry points
- `src/main.ts` — bootstraps app, reads `PORT`
- `src/app.module.ts` — root module, `ConfigModule` global
- `src/app.controller.ts` — sample route

### Example endpoint
- GET `/` → Hello World!

### Documentation reminder
If you change endpoints, env, scripts, or behavior:
- Update this README and `docs/CHANGELOG.md`.
