import React from 'react'
import './App.css';

import { NavLink } from 'react-router-dom'

function NavBar() {


  return (
  <>
  <nav>
  <NavLink className="navlink" to="/decks">Decks  </NavLink>

  <NavLink className="navlink" to="/">Home</NavLink>


  </nav>
</>
  )
}

export default NavBar
