import { Helmet } from 'react-helmet-async'
import { SectionTitle } from '../components/common/SectionTitle'
import { getTeamMembers } from '../services/teamService'

export function TeamPage() {
  const members = getTeamMembers()

  return (
    <main>
      <Helmet>
        <title>Graduation Documentation | About Us</title>
        <meta name="description" content="Meet the team behind the graduation project documentation website." />
      </Helmet>

      <section className="team-wrapper team-card">
        <SectionTitle eyebrow="About us" title="The team behind the project" description="Each member is represented as a reusable profile card, with data sourced from structured JSON content." />

        <div className="team-grid">
          {members.map((member) => (
            <article key={member.name} className="member-card">
              <div className="member-card-content">
                <div className="member-avatar" aria-label={member.photoAlt}>
                  {member.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
              <p className="member-description">{member.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
