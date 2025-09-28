# POS Akuntansi Monorepo

## Struktur
- `web/` → Next.js frontend (deploy di Vercel)
- `functions/` → Firebase Functions backend

## Deploy Frontend (Vercel)
- Root Directory = `web`
- Framework = Next.js
- Tambahkan env di Vercel (NEXT_PUBLIC_FIREBASE_*)

## Deploy Backend (Firebase)
```bash
cd functions
npm install
npm run build
firebase deploy --only functions
```
