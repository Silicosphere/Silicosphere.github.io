import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import { team } from '../constants/team'
import { getPost, formatDate } from '../services/postsService'

export function PostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <main className="page-section">
        <Helmet>
          <title>{`${team.name} | Post not found`}</title>
        </Helmet>
        <h1 className="post-title">Post not found</h1>
        <p>
          <Link to="/posts">&larr; Back to all posts</Link>
        </p>
      </main>
    )
  }

  return (
    <main className="page-section">
      <Helmet>
        <title>{`${post.title} | ${team.name}`}</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
      </Helmet>

      <article className="post">
        <Link to="/posts" className="post-back">
          &larr; All posts
        </Link>
        <p className="post-meta">
          {formatDate(post.date)} &bull; {post.readingMinutes} min read
          {post.author ? <> &bull; {post.author}</> : null}
        </p>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-body">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}
