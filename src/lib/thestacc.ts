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
  published_at?: string;
  updated_at?: string;
}

export interface TheStaccListResponse {
  blogs?: TheStaccBlog[];
  data?: TheStaccBlog[];
  posts?: TheStaccBlog[];
  total?: number;
}

function getApiKey(): string | undefined {
  return import.meta.env.THESTACC_API_KEY;
}

function getBaseUrl(): string {
  return (import.meta.env.THESTACC_API_URL || '').replace(/\/$/, '');
}

function buildUrl(path: string): string {
  const base = getBaseUrl();
  const key = getApiKey();
  const separator = path.includes('?') ? '&' : '?';
  const keyParam = key ? `${separator}api_key=${encodeURIComponent(key)}` : '';
  return `${base}${path}${keyParam}`;
}

function scrubUrl(url: string): string {
  return url.replace(/api_key=[^&]*/, 'api_key=***');
}

async function safeFetch<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      console.error(`[thestacc] HTTP ${res.status} from ${scrubUrl(url)}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.error('[thestacc] fetch error:', err instanceof Error ? err.message : err);
    return null;
  }
}

export async function fetchBlogList(): Promise<TheStaccBlog[]> {
  const data = await safeFetch<TheStaccListResponse>(buildUrl('/blogs'));
  if (!data) return [];
  return data.blogs || data.data || data.posts || [];
}

export async function fetchBlogBySlug(slug: string): Promise<TheStaccBlog | null> {
  return safeFetch<TheStaccBlog>(buildUrl(`/blogs/${encodeURIComponent(slug)}`));
}

export async function fetchBlogSitemap(): Promise<{ slug: string }[] | null> {
  return safeFetch<{ slug: string }[]>(buildUrl('/blogs/sitemap'));
}

export function normalizeBlog(post: TheStaccBlog): TheStaccBlog {
  return {
    ...post,
    excerpt: post.excerpt || post.meta_description || '',
    readTime: post.readTime || estimateReadTime(post.content || ''),
    illustration: post.illustration || 'blog',
    author: post.author || 'Dr. OphthaMCQ Editorial Team',
    date: post.date || post.published_at || new Date().toISOString().split('T')[0],
  };
}

function estimateReadTime(content: string): string {
  const words = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
