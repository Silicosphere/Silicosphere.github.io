import PropTypes from 'prop-types'

export function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}
