import { Timeline, Tag } from 'antd'
import { Helmet } from 'react-helmet-async'
import { getTimelineItems, getTimelineStatusTone } from '../services/timelineService'
import { SectionTitle } from '../components/common/SectionTitle'

export function TimelinePage() {
  const items = getTimelineItems()

  return (
    <main>
      <Helmet>
        <title>Graduation Documentation | Timeline</title>
        <meta name="description" content="Weekly project milestones and progress timeline for the graduation documentation website." />
      </Helmet>

      <section className="timeline-wrapper timeline-card">
        <SectionTitle eyebrow="Roadmap" title="Weekly timeline" description="The project timeline is maintained in JSON and rendered through a dedicated service to preserve separation of concerns." />

        <div className="timeline-list">
          <Timeline mode="left" className="custom-timeline">
            {items.map((item) => (
              <Timeline.Item
                key={item.week}
                label={item.date || `Week ${item.week}`}
                className="timeline-item"
              >
                <div className="timeline-item-card">
                  <div className="timeline-item-content">
                    <div>
                      <h3>Week {item.week}: {item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <Tag color={getTimelineStatusTone(item.status)}>{item.status}</Tag>
                  </div>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </section>
    </main>
  )
}
