# OphthaMCQ Blog — TheStacc Push Integration

This site receives blog posts from **TheStacc** via a GitHub Actions webhook.

## Flow

```
Publish in TheStacc
        │
        ▼
TheStacc sends POST to GitHub repository_dispatch
        │
        ▼
GitHub Actions writes src/content/blog/[slug].md
        │
        ▼
Git commit + push
        │
        ▼
Cloudflare Pages rebuilds from git
        │
        ▼
New post is live
```

## Required GitHub Secrets

Go to **Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Value |
|---|---|
| `GH_PAT` | GitHub Personal Access Token with `repo` scope. |
| `THESTACC_SECRET` | Any random string. Paste the same value into TheStacc dashboard. |

## TheStacc dashboard configuration

- **Webhook URL:** `https://api.github.com/repos/ritik-design/ophthamcq-website/dispatches`
- **Method:** `POST`
- **Headers:**
  - `Accept: application/vnd.github+json`
  - `Authorization: Bearer <GH_PAT>`
  - `X-GitHub-Api-Version: 2022-11-28`
- **Payload (JSON):**

```json
{
  "event_type": "thestacc-post",
  "client_payload": {
    "secret": "<THESTACC_SECRET>",
    "post": {
      "title": "{{title}}",
      "slug": "{{slug}}",
      "excerpt": "{{excerpt}}",
      "category": "{{category}}",
      "date": "{{published_date}}",
      "readTime": "{{read_time}}",
      "illustration": "blog",
      "content": "{{content_html}}",
      "author": "{{author}}"
    }
  }
}
```

Replace `{{...}}` with TheStacc's merge tags. Only `title`, `slug`, and `content` are required.

## Code structure

- `.github/workflows/publish-stacc-post.yml` — validates the webhook secret and runs the publish job.
- `.github/scripts/write-post.js` — converts the payload into `src/content/blog/[slug].md`.
- `src/content.config.ts` — Astro content collection schema.
- `src/content/blog/*.md` — blog posts.
- `src/pages/blog.astro` — listing page.
- `src/pages/blog/[slug].astro` — detail page.

## Local development

```bash
npm run dev
```

Posts live as Markdown files in `src/content/blog/`.

## Security

- Never commit `GH_PAT` or `THESTACC_SECRET` to this repo.
- Use a fine-grained PAT with minimal permissions if possible.
- Rotate secrets immediately if they are ever exposed.
