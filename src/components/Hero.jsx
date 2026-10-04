function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="hero-content reveal">
        <div className="hero-identity">
          <div className="profile-photo-wrap">
            <img src="/profile.jpg" alt="Ibrahim Agoro" className="profile-photo" onError={(event) => { event.currentTarget.style.display = 'none' }} />
            <div className="profile-fallback">IA</div>
          </div>
          <div>
            <p className="hero-kicker">Hello, I'm Ibrahim Agoro</p>
            <span className="profile-caption">Developer · Builder · Learner</span>
          </div>
        </div>
        <div className="status-pill"><span className="status-dot" />Building my next chapter in tech</div>
        <h1>I build ideas into<span> digital experiences.</span></h1>
        <p className="hero-description">I'm a technology learner and developer documenting my journey from learning the fundamentals to building real-world applications with React, Java, Spring Boot, databases, Git, Docker and more.</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">Explore my work <span>↗</span></a>
          <a className="button secondary" href="#journey">See my journey</a>
        </div>
        <div className="hero-stats">
          <div><strong>03</strong><span>Featured projects</span></div>
          <div><strong>∞</strong><span>Learning</span></div>
          <div><strong>01</strong><span>Goal: Build</span></div>
        </div>
      </div>
      <div className="hero-terminal reveal">
        <div className="terminal-top"><div className="terminal-dots"><i /><i /><i /></div><span>ibrahim@dev:~</span></div>
        <div className="terminal-body">
          <p><span className="terminal-green">$</span> whoami</p><h3>Ibrahim Agoro</h3>
          <p><span className="terminal-green">$</span> focus</p><p className="terminal-muted">Full-Stack Development · React · Java</p>
          <p><span className="terminal-green">$</span> next</p><p className="terminal-purple">Learn → Build → Ship → Improve</p><span className="cursor">_</span>
        </div>
      </div>
      <a className="scroll-hint" href="#about" aria-label="Scroll to about"><span>Scroll to explore</span>↓</a>
    </section>
  )
}
export default Hero
