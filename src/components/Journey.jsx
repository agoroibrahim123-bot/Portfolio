import { journey } from '../data/journey'

function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="section-heading">
        <span className="eyebrow">02 · My journey</span>
        <h2>From first lines of code to bigger systems.</h2>
        <p>
          Every stage added another layer to the way I think about software.
        </p>
      </div>

      <div className="timeline">
        {journey.map((item) => (
          <article className="timeline-item" key={item.year}>
            <div className="timeline-number">{item.year}</div>
            <div className="timeline-line" />
            <div className="card timeline-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Journey
