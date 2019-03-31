import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="red">
      <div className="nav-wrapper container">
        <Link className="brand-logo left niconne" to='/'>Tabletop Tavern</Link>
        <ul id="nav-mobile" className="right hide-on-small-and-down">
          <li>
            <Link to='#'>One</Link>
          </li>
          <li>
            <Link to='#'>Two</Link>
          </li>
          <li>
            <Link to='#'>Three</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
