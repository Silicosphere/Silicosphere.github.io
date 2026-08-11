import { Button, Card, Typography } from 'antd'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const { Title, Paragraph, Text } = Typography

export function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Graduation Documentation | Home</title>
        <meta
          name="description"
          content="A modern documentation website for our graduation project, built with React, Vite, and Ant Design."
        />
        <meta name="keywords" content="graduation project, documentation, React, Vite, Ant Design" />
      </Helmet>

      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="hero-card"
        >
          <Text type="secondary" className="hero-eyebrow">
            Graduation Documentation
          </Text>
          <Title className="hero-heading">A clean, modern project documentation website.</Title>
          <Paragraph className="hero-copy">
            This static site captures project milestones, team ownership, and architecture without backend complexity.
          </Paragraph>
          <div className="hero-actions">
            <Button type="primary" size="large" href="/timeline">
              Explore Timeline
            </Button>
            <Button type="default" size="large" href="/team">
              Meet the Team
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="hero-panel"
        >
          <Card bordered={false} className="hero-panel-card">
            <Text type="secondary" className="panel-label">
              Project overview
            </Text>
            <Title level={4}>Simple, scalable, and static</Title>
            <Paragraph>
              The documentation is the source of truth, the timeline is driven by JSON data, and the interface is purposefully minimal.
            </Paragraph>
            <Paragraph>
              Designed for reviewers, maintainers, and future contributors who value clarity over visual clutter.
            </Paragraph>
            <Text strong>Built with Ant Design for consistent, accessible UI.</Text>
          </Card>
        </motion.div>
      </section>
    </main>
  )
}
