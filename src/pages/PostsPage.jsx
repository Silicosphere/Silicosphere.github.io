import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { team } from '../constants/team'
import { getPosts, formatDate } from '../services/postsService'
import { SectionTitle } from '../components/common/SectionTitle'

export function PostsPage() {
  const posts = getPosts()

  return (
    <main>
      <Helmet>
        <title>{`${team.name} | Posts`}</title>
        <meta
          name="description"
          content="Posts on JEPA, world models and the progress of our BSc thesis."
        />
      </Helmet>

      <section className="page-section">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle
            eyebrow="Posts"
            title="Notes from the thesis"
            description="Explainers and write-ups on JEPA, world models, and what we are learning along the way."
          />
        </motion.div>

        {posts.length === 0 ? (
          <p className="posts-empty">No posts yet. Check back soon.</p>
        ) : (
          <div className="posts-list">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="post-row"
              >
                <p className="post-meta">
                  {formatDate(post.date)} &bull; {post.readingMinutes} min read
                </p>
                <h3>
                  <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="post-summary">{post.summary}</p>
                {post.tags.length > 0 ? (
                  <ul className="post-tags">
                    {post.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                ) : null}
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
