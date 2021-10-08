import React from 'react'
import './App.css';

import { NavLink } from 'react-router-dom'

function NavBar() {


  return (
  <>
  <nav>
  <NavLink className="navlink" to="/home">Home</NavLink>
  <NavLink className="navlink" to="/decks">Decks  </NavLink>

 


  </nav>
</>
  )
}

export default NavBar
