import { Timeline, Tag } from 'antd'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { team } from '../constants/team'
import { getTimelineItems, getTimelineStatusTone } from '../services/timelineService'
import { SectionTitle } from '../components/common/SectionTitle'

export function TimelinePage() {
  const items = getTimelineItems()

  return (
    <main>
      <Helmet>
        <title>{`${team.name} | Timeline`}</title>
        <meta name="description" content="Weekly project milestones and progress timeline for the world models BSc thesis." />
      </Helmet>

      <section className="page-section">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle
            eyebrow="Roadmap"
            title="Progress timeline"
            description=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="timeline-card"
        >
          <Timeline mode="left" className="custom-timeline">
            {items.map((item) => (
              <Timeline.Item
                key={item.week}
                label={item.date || `Week ${item.week}`}
                className="timeline-item"
              >
                <div className="timeline-item-card">
                  <div className="timeline-item-content">
                    <h3>
                      Week {item.week}: {item.title}
                    </h3>
                    <p>{item.description}</p>
                    <Tag color={getTimelineStatusTone(item.status)}>{item.status}</Tag>
                  </div>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
        </motion.div>
      </section>
    </main>
  )
}
