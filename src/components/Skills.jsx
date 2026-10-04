import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <span className="eyebrow">03 · Tech stack</span>
        <h2>The tools I'm using to build.</h2>
        <p>
          A growing toolkit across frontend, backend, databases, mobile,
          testing and development workflow.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="card skill-card" key={skill.name}>
            <div className="skill-symbol">{skill.symbol}</div>
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
