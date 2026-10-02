# FORME Demo

A static storefront with a local demo auth flow.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Keep the project root as the repository root.
4. Deploy.

This project includes Vercel-compatible serverless auth endpoints under `api/auth`.

> Note: for production auth, use a real database or managed auth service such as Supabase, Neon, or Clerk.
