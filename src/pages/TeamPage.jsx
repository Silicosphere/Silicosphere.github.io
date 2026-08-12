import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { team } from '../constants/team'
import { SectionTitle } from '../components/common/SectionTitle'
import { getTeamMembers } from '../services/teamService'
import saifPhoto from '../assets/images/saif.png'
import gadPhoto from '../assets/images/gad.png'
import hagrasPhoto from '../assets/images/hagras.png'
import fadyPhoto from '../assets/images/fady.png'

const photoMap = {
  'saif.png': saifPhoto,
  'gad.png': gadPhoto,
  'hagras.png': hagrasPhoto,
  'fady.png': fadyPhoto,
}

export function TeamPage() {
  const members = getTeamMembers()

  return (
    <main>
      <Helmet>
        <title>{`${team.name} | People`}</title>
        <meta name="description" content="Meet the people behind the world models BSc thesis." />
      </Helmet>

      <section className="page-section">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle
            eyebrow="People"
            title="The Ultimate Team"
            description="The members driving this thesis."
          />
        </motion.div>

        <div className="people-list">
          {members.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="member-row"
            >
              <img
                className="member-photo"
                src={photoMap[member.photo]}
                alt={member.photoAlt}
                loading="lazy"
              />
              <div className="member-card-content">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                {member.description ? (
                  <p className="member-description">{member.description}</p>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
