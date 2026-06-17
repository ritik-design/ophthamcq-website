# OphthaMCQ Blog — TheStacc Pull Integration

This site pulls blog posts from **TheStacc Public Blog API** at build time.

## Flow

```
Publish in TheStacc
        │
        ▼
Cloudflare deploy hook fires
        │
        ▼
Cloudflare Pages rebuilds the Astro site
        │
        ▼
Build fetches posts from TheStacc API
        │
        ▼
Static HTML generated and deployed
```

## Environment variables

These must be set in the **Cloudflare Pages build environment**:

```bash
THESTACC_API_KEY=pk_live_...
THESTACC_API_URL=https://api.thestacc.com/blog/api/v1/public
```

Locally, they are read from `.env` (which is gitignored).

## Code structure

- `src/lib/thestacc.ts` — API helper that fetches the blog list, a single post, and the sitemap.
- `src/pages/blog.astro` — Listing page. Pulls from the API; falls back to local `src/content/blog/` if the API is empty or unavailable.
- `src/pages/blog/[slug].astro` — Detail page. Generates static paths from the API sitemap/list; falls back to local content.
- `src/content/blog/*.md` — Local fallback posts.
- `src/content.config.ts` — Local content collection schema.

## API endpoints used

| Purpose | Endpoint |
|---|---|
| Sitemap | `GET ${THESTACC_API_URL}/blogs/sitemap?api_key=${KEY}` |
| List | `GET ${THESTACC_API_URL}/blogs?api_key=${KEY}` |
| Single post | `GET ${THESTACC_API_URL}/blogs/{slug}?api_key=${KEY}` |

## Local development

```bash
npm run dev
```

The dev server reads `.env` and calls the TheStacc API. If you want to work offline, temporarily remove/empty the env vars to use the local fallback posts.

## Deploy

No manual action is needed. TheStacc triggers the Cloudflare deploy hook on every publish.

If you need to redeploy manually, use the Cloudflare Pages dashboard or `git push`.
