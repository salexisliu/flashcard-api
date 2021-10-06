
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/container"
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';

function DeckPage() {

  // const { id } = useParams();

  return (<Container>

    <h1>deck page</h1> 

    <NavLink className="navlink" to="/new">Create new cards</NavLink>

  </Container>
  );
}

export default DeckPage;

