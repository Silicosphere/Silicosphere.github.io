import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { team } from '../constants/team'
import { SectionTitle } from '../components/common/SectionTitle'
import { getTeamMembers, getSupervisors } from '../services/teamService'
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
  const supervisors = getSupervisors()

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
                {member.website ? (
                  <a className="person-link" href={member.website} target="_blank" rel="noreferrer">
                    Website &rarr;
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle
            eyebrow="Supervision"
            title="Supervisors"
            description="The people guiding the research."
          />
        </motion.div>

        <div className="people-list">
          {supervisors.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="supervisor-row"
            >
              <h3>{person.name}</h3>
              <p className="member-role">{person.role}</p>
              <p className="member-description">{person.affiliation}</p>
              {person.website ? (
                <a className="person-link" href={person.website} target="_blank" rel="noreferrer">
                  Website &rarr;
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
