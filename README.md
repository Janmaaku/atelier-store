# Atelier Store

Initial application scaffold for a Next.js commerce project.

## Stack

- Next.js App Router with TypeScript
- Tailwind CSS
- Better Auth
- Drizzle ORM
- Neon Postgres

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and replace the placeholders.
3. Apply the catalog schema and initial product data with `npm run db:migrate`.
4. Start the app with `npm run dev`.

The storefront reads products, categories, and stock from PostgreSQL through
Drizzle ORM. `DATABASE_URL` must point to a reachable, migrated database during
development and production builds. Better Auth tables are not part of the
catalog migrations and still need to be generated before authentication is
enabled.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run lint` — run ESLint
- `npm run typecheck` — run the TypeScript compiler
- `npm run db:generate` — generate Drizzle migrations after schemas exist
- `npm run db:migrate` — apply generated Drizzle migrations
- `npm run db:studio` — open Drizzle Studio
