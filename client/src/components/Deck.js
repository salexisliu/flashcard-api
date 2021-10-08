
import React, { useState, useEffect } from "react";

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MemoryGame from './Study';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

function Deck({deck, deleteDeck}) {


  console.log(deck)
  return (<>
    <Grid
      item
      xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <Link style={{ color: "black", textDecoration: 'none' }} to={`/decks/${deck.id}`}><CardActionArea>
      <CardContent>
    
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
            <Typography variant="h5" component="div" sx={{ minHeight: 100 }}>
          <p>{deck.title}</p>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
   
        </Typography>
     
      </CardContent>
        </CardActionArea></Link>
      <CardActions>
      <Container>
      <Route exact path="/:id/study" deck={deck} />
          <Link style={{ textDecoration: 'none' }} to={{
            pathname: `/decks/${deck.id}/study`,
            state: {deck}
       }}
>
         <Button>Study</Button> </Link>
        <Button onClick={() => deleteDeck(deck.id)}>Delete</Button>
            </Container>
      </CardActions>
    </Card>
    </Grid>

 

    </>
    
    ) 
}

export default Deck;
