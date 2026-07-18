export interface TheStaccBlog {
  slug: string;
  title: string;
  excerpt?: string;
  meta_description?: string;
  category?: string;
  date?: string;
  readTime?: string;
  illustration?: string;
  author?: string;
  content?: string;
  featured_image?: string;
  featured_image_url?: string;
  published_at?: string;
  updated_at?: string;
}

export interface TheStaccListResponse {
  blogs?: TheStaccBlog[];
  data?: TheStaccBlog[];
  posts?: TheStaccBlog[];
  total?: number;
}

// SECURITY NOTE: This is a fallback because Cloudflare Pages does not allow
// environment variables on this static-only project. Once Cloudflare env vars
// are available, move these values to THESTACC_API_KEY / THESTACC_API_URL and
// rotate the key immediately.
const FALLBACK_API_KEY = 'pk_live_gHcZrdMCQYDfWpXT7nX_nEt4bUru1hOx2s7Db7GkUms';
const FALLBACK_API_URL = 'https://api.thestacc.com/blog/api/v1/public';

function getApiKey(): string {
  const key = import.meta.env.THESTACC_API_KEY || FALLBACK_API_KEY;
  if (!key) {
    throw new Error('[thestacc] THESTACC_API_KEY is not set.');
  }
  return key;
}

function getBaseUrl(): string {
  const url = import.meta.env.THESTACC_API_URL || FALLBACK_API_URL;
  if (!url) {
    throw new Error('[thestacc] THESTACC_API_URL is not set.');
  }
  return String(url).replace(/\/$/, '');
}

function buildUrl(path: string): string {
  const base = getBaseUrl();
  const key = getApiKey();
  const separator = path.includes('?') ? '&' : '?';
  return `${base}${path}${separator}api_key=${encodeURIComponent(key)}`;
}

function scrubUrl(url: string): string {
  return url.replace(/api_key=[^&]*/, 'api_key=***');
}

async function safeFetch<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error(
      `[thestacc] HTTP ${res.status} from ${scrubUrl(url)}`,
    );
  }

  return (await res.json()) as T;
}

export async function fetchBlogList(): Promise<TheStaccBlog[]> {
  // The blog is a non-critical, additive section. If the API is down or the
  // key is rejected, degrade gracefully to an empty list so the rest of the
  // (marketing-critical) site still builds instead of failing the whole build.
  try {
    const data = await safeFetch<TheStaccListResponse>(buildUrl('/blogs'));
    return data.blogs || data.data || data.posts || [];
  } catch (err) {
    console.warn(
      `[thestacc] Failed to fetch blog list; building with no posts. ${
        err instanceof Error ? err.message : String(err)
      }`,
    );
    return [];
  }
}

export async function fetchBlogBySlug(slug: string): Promise<TheStaccBlog> {
  return safeFetch<TheStaccBlog>(buildUrl(`/blogs/${encodeURIComponent(slug)}`));
}

export function normalizeBlog(post: TheStaccBlog): TheStaccBlog {
  const content = post.content || '';
  const words = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));

  return {
    ...post,
    excerpt: post.excerpt || post.meta_description || '',
    readTime: post.readTime || `${minutes} min read`,
    illustration: post.illustration || 'blog',
    featured_image: post.featured_image || post.featured_image_url || '',
    author: post.author || 'Dr. OphthaMCQ Editorial Team',
    date: post.date || post.published_at || new Date().toISOString().split('T')[0],
  };
}

export function truncateExcerpt(text: string, maxLength = 155): string {
  if (!text || text.length <= maxLength) return text || '';
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + '...';
}
