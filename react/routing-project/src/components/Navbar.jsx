import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
