import React from 'react'
import './App.css';

import { Switch, Route, NavLink } from 'react-router-dom'

function NavBar() {


  return (
  <>
  <nav>
  <NavLink className="navlink" to="/decks">Decks</NavLink>
  <NavLink className="navlink" to="/flashcards">Flashcard</NavLink>
  <NavLink className="navlink" to="/new">Create new deck</NavLink>
  </nav>
</>
  )
}

export default NavBar
