function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <span className="eyebrow">01 · About me</span>
        <h2>A developer journey, not just a portfolio.</h2>
        <p>
          This website is a living record of what I'm learning, what I'm
          building and the direction I'm taking in technology.
        </p>
      </div>

      <div className="about-grid">
        <article className="card about-main">
          <div className="avatar">IA</div>
          <h3>Curious. Practical. Always learning.</h3>
          <p>
            My journey in tech has taken me through web development, Java,
            databases, React, backend development and developer tools. I enjoy
            taking an idea, breaking it into smaller problems and turning those
            problems into working software.
          </p>
          <p>
            I want to keep growing into a developer who can understand both
            the user-facing experience and the systems behind it.
          </p>
        </article>

        <div className="about-side">
          <article className="card mini-card">
            <span className="mini-icon">01</span>
            <h3>Learn by building</h3>
            <p>Projects are where I turn concepts into practical experience.</p>
          </article>
          <article className="card mini-card">
            <span className="mini-icon">02</span>
            <h3>Think full-stack</h3>
            <p>Frontend, backend, databases, testing and deployment all matter.</p>
          </article>
          <article className="card mini-card">
            <span className="mini-icon">03</span>
            <h3>Keep improving</h3>
            <p>Every bug is another chance to understand how the system works.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
