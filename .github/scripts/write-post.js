const fs = require('fs');
const path = require('path');

function sanitizeSlug(raw) {
  return String(raw || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeYaml(value) {
  const str = String(value ?? '');
  if (str.includes('"') || str.includes('\\n') || str.includes(':') || str.includes('#')) {
    return JSON.stringify(str);
  }
  return `"${str}"`;
}

function estimateReadTime(wordCount) {
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}

const payload = JSON.parse(process.env.PAYLOAD || '{}');

const {
  title,
  slug,
  excerpt,
  category,
  date,
  readTime,
  illustration,
  content,
  author,
} = payload;

if (!title || !slug || !content) {
  console.error('Missing required fields: title, slug, content');
  process.exit(1);
}

const safeSlug = sanitizeSlug(slug);
if (!safeSlug) {
  console.error('Invalid slug');
  process.exit(1);
}

const filePath = path.join('src', 'content', 'blog', `${safeSlug}.md`);

const today = new Date().toISOString().split('T')[0];
const postDate = date && String(date).trim() ? String(date) : today;
const wordCount = String(content).split(/\s+/).length;
const postReadTime = readTime && String(readTime).trim() ? String(readTime) : estimateReadTime(wordCount);

const frontmatter = [
  '---',
  `title: ${escapeYaml(title)}`,
  `slug: ${escapeYaml(safeSlug)}`,
  `excerpt: ${escapeYaml(excerpt || title)}`,
  `category: ${escapeYaml(category || 'General')}`,
  `date: ${escapeYaml(postDate)}`,
  `readTime: ${escapeYaml(postReadTime)}`,
  `illustration: ${escapeYaml(illustration || 'blog')}`,
  `author: ${escapeYaml(author || 'Dr. OphthaMCQ Editorial Team')}`,
  '---',
  '',
  String(content).trim(),
  '',
].join('\n');

fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, frontmatter, 'utf8');

console.log(`Wrote ${filePath}`);
console.log(`Words: ${wordCount} | Read time: ${postReadTime}`);
