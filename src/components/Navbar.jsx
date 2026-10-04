import { useState } from 'react'

const links = [
  ['About', '#about'],
  ['Journey', '#journey'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['GitHub', '#github'],
  ['Future', '#future'],
  ['Contact', '#contact'],
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark">IA</span>
        <span>Ibrahim<span className="brand-dot">.</span></span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          View work
        </a>
      </nav>
    </header>
  )
}

export default Navbar
