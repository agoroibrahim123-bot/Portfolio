import { useEffect, useState } from 'react'

function GitHub() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/agoroibrahim123/repos?sort=updated&direction=desc&per_page=6')
      .then((response) => {
        if (!response.ok) throw new Error('GitHub request failed')
        return response.json()
      })
      .then((data) => setRepos(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="github" className="section github-section">
      <div className="section-heading">
        <span className="eyebrow">05 · Live GitHub</span>
        <h2>My latest work, pulled from GitHub.</h2>
        <p>This section connects directly to my GitHub profile, so visitors can see my latest public repositories.</p>
      </div>
      {loading && <div className="github-status">Loading my GitHub projects...</div>}
      {error && <div className="card github-status">GitHub could not be loaded right now. You can still visit my profile.</div>}
      {!loading && !error && (
        <div className="github-grid">
          {repos.map((repo) => (
            <a className="card repo-card" href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
              <div className="repo-top"><span>Repository</span><span>↗</span></div>
              <h3>{repo.name}</h3>
              <p>{repo.description || 'No description added yet.'}</p>
              <div className="repo-meta"><span>{repo.language || 'Code'}</span><span>★ {repo.stargazers_count}</span></div>
            </a>
          ))}
        </div>
      )}
      <a className="button secondary github-button" href="https://github.com/agoroibrahim123" target="_blank" rel="noreferrer">Open my GitHub profile ↗</a>
    </section>
  )
}

export default GitHub
