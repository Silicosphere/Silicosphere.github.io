import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { team } from '../constants/team'
import { researchAreas } from '../data/research.js'
import { quotes } from '../data/quotes.js'
import { getLatestUpdates, formatDate } from '../services/updatesService'
import { SectionTitle } from '../components/common/SectionTitle'
import { WorldModelVisual } from '../components/common/WorldModelVisual'

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
}

export function HomePage() {
  const updates = getLatestUpdates(4)
  const mainQuote = quotes.find((quote) => quote.id === 'piaget')
  const secondaryQuotes = quotes.filter((quote) => quote.id !== 'piaget')

  return (
    <main>
      <Helmet>
        <title>{`${team.name} | ${team.tagline}`}</title>
        <meta name="description" content={team.description} />
        <meta name="keywords" content="world models, graduation project, BSc thesis" />
      </Helmet>

      <section className="hero">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="hero-eyebrow">
            BSc thesis &bull; world models &bull; {team.university}
          </p>
          <h1 className="hero-title">
            Learning to
            <br />
            <em>understand</em>
            <br />
            the world
          </h1>
          <p className="hero-tagline">
            We are a team of <b>{team.faculty}</b> students at <b>{team.university}</b> building our
            graduation project on{' '}
            <b style={{ color: 'var(--accent)' }}>world models</b> — representations that let agents
            predict, reason, and act in the world they observe.
          </p>
          <div className="hero-actions">
            <Link to="/updates">Updates</Link>
            <Link to="/timeline">Timeline</Link>
            <Link to="/team">People</Link>
            <a href="https://github.com/Silicosphere" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <WorldModelVisual />
        </motion.div>
      </section>

      <section className="quote-section">
        <motion.blockquote {...fadeUp} className="main-quote">
          <p className="main-quote-text">&ldquo;{mainQuote.text}&rdquo;</p>
          <p className="main-quote-author">&mdash; {mainQuote.author}</p>
        </motion.blockquote>

        <div className="quote-grid">
          {secondaryQuotes.map((quote, index) => (
            <motion.blockquote
              key={quote.id}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="quote-item"
            >
              <p className="quote-text">&ldquo;{quote.text}&rdquo;</p>
              <footer>
                <span className="quote-author">{quote.author}</span>
                <span className="quote-context">{quote.context}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <section className="page-section">
        <motion.div {...fadeUp}>
          <SectionTitle
            eyebrow="Research"
            title="Focus areas"
            description="The directions that shape how we build, evaluate, and reason about world models."
          />
        </motion.div>
        <div className="research-list">
          {researchAreas.map((area, index) => (
            <motion.article key={area.id} {...fadeUp} className="research-row">
              <p className="research-index">{String(index + 1).padStart(2, '0')}</p>
              <div>
                <h3>{area.title}</h3>
                <p className="research-description">{area.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <motion.div {...fadeUp} className="section-head-row">
          <SectionTitle
            eyebrow="Updates"
            title="Latest news"
            description="Recent progress and announcements from the team."
          />
          <Link to="/updates" className="section-more">
            All updates &rarr;
          </Link>
        </motion.div>
        <div className="updates-list">
          {updates.map((update) => (
            <motion.article key={update.id} {...fadeUp} className="update-row">
              <span className="update-date">{formatDate(update.date)}</span>
              <div>
                <h3>{update.title}</h3>
                <p>{update.summary}</p>
              </div>
              <span className="update-category">{update.category}</span>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
