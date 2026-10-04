import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <span className="eyebrow">04 · Selected work</span>
        <h2>Things I've built while learning.</h2>
        <p>
          These projects represent different stages of my development journey.
          More projects will be added as the journey continues.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.number}>
            <div className="project-top">
              <span>{project.number}</span>
              <span className="project-arrow">↗</span>
            </div>

            <div className="project-preview">
              <span>{project.title.slice(0, 2).toUpperCase()}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a className="project-link" href={project.link}>
              Discuss this project <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
