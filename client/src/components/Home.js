import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Home({currentUser}) {
  return (
    <>
    <Container>

        <h1>Welcome, {currentUser}!</h1>


        <Route exact path="/decks" />
        <Link style={{ textDecoration: 'none' }} to={{
          pathname: `/decks`
        }}>
          <Button variant="outlined" size="large"> Create a Deck </Button></Link>
    </Container>
  

    </>
  );
}

export default Home;
