import React from 'react'
import { NavLink } from 'react-router-dom'

const Nabvar = () => {
  return (
    <nav className='navbar'>
    <ul className='navbar-list'>
      <li className='navbar-item'>
          <NavLink to="/" className="navbar-link">About</NavLink>
      </li>

      <li className='navbar-item'>
          <NavLink to="/resume" className="navbar-link">Resume</NavLink>
      </li>

      <li className='navbar-item'>
          <NavLink to="/projects" className="navbar-link">Projects</NavLink>
      </li>

      <li className='navbar-item'>
          <NavLink to="/certificates" className="navbar-link">Certificates</NavLink>
      </li>

      <li className='navbar-item'>
          <NavLink to="/contact" className="navbar-link">Contact</NavLink>
      </li>

    </ul>
  </nav>
  )
}

export default Nabvar
