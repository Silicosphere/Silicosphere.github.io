import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { team } from '../constants/team'
import { getUpdates, formatDate } from '../services/updatesService'
import { SectionTitle } from '../components/common/SectionTitle'

export function UpdatesPage() {
  const updates = getUpdates()

  return (
    <main>
      <Helmet>
        <title>{`${team.name} | Updates`}</title>
        <meta name="description" content="Progress updates and announcements from the graduation research team." />
      </Helmet>

      <section className="page-section">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle
            eyebrow="Updates"
            title="What&rsquo;s new"
            description=""
          />
        </motion.div>

        <div className="updates-list">
          {updates.map((update, index) => (
            <motion.article
              key={update.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="update-row"
            >
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
