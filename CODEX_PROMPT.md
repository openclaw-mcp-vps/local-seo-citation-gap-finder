# Build Task: local-seo-citation-gap-finder

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: local-seo-citation-gap-finder
HEADLINE: Find missing business citations hurting local search rankings
WHAT: Scans 200+ citation sources to identify where your business listing is missing and provides submission instructions
WHY: Local citations impact 25% of local search rankings. Manual citation building takes 40+ hours. Most businesses miss 60% of opportunities
WHO PAYS: Local business owners, SEO agencies, marketing consultants
NICHE: local-business
PRICE: $$12/mo

ARCHITECTURE SPEC:
A Next.js web app that takes business information (name, address, phone) and scans 200+ citation sources via web scraping APIs to identify missing listings. Users get a comprehensive gap analysis report with submission instructions and priority rankings.

PLANNED FILES:
- app/page.tsx
- app/scan/page.tsx
- app/report/[id]/page.tsx
- app/api/scan/route.ts
- app/api/citations/route.ts
- app/api/webhooks/lemonsqueezy/route.ts
- components/BusinessForm.tsx
- components/ScanProgress.tsx
- components/CitationReport.tsx
- components/PricingCard.tsx
- lib/citation-sources.ts
- lib/scraper.ts
- lib/database.ts
- lib/lemonsqueezy.ts
- types/citation.ts

DEPENDENCIES: next, tailwindcss, prisma, @prisma/client, puppeteer, cheerio, axios, @lemonsqueezy/lemonsqueezy.js, stripe, react-hook-form, zod, lucide-react, recharts

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/local-seo-citation-gap-finder
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019dec8b-0026-7c82-8d01-eac534d703f2
--------
user
# Build Task: local-seo-citation-gap-finder

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: local-seo-citation-gap-finder
H
Please fix the above errors and regenerate.