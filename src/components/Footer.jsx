function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Ibrahim<span className="brand-dot">.</span></strong>
        <p>Building my journey, one project at a time.</p>
      </div>

      <p>© {new Date().getFullYear()} Ibrahim Agoro. Built with React.</p>
    </footer>
  )
}

export default Footer
