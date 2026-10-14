import { formatDate } from './updatesService'

const files = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

// Minimal frontmatter parser: `key: value` lines between two `---` fences.
const parse = (path, raw) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  const meta = {}
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const index = line.indexOf(':')
      if (index > 0) meta[line.slice(0, index).trim()] = line.slice(index + 1).trim()
    }
  }
  const slug = path.split('/').pop().replace(/\.md$/, '')
  const body = match ? match[2] : raw
  return {
    slug,
    title: meta.title ?? slug,
    date: meta.date,
    summary: meta.summary ?? '',
    tags: meta.tags ? meta.tags.split(',').map((tag) => tag.trim()) : [],
    author: meta.author,
    draft: meta.draft === 'true',
    readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
    body,
  }
}

const posts = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .filter((post) => !post.draft)
  .sort((left, right) => new Date(right.date) - new Date(left.date))

export const getPosts = () => posts
export const getPost = (slug) => posts.find((post) => post.slug === slug)
export const getLatestPosts = (count = 3) => posts.slice(0, count)
export { formatDate }
