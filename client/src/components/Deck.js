
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';


function Deck({deck, deleteDeck}) {
  const history = useHistory();

  const playGame = () => {
   
    history.push(`/decks/${deck.id}/quiz`)
  }
  console.log(deck)
  return (<>
    <Grid
      item
      xs={3}>
      <Card sx={{ maxWidth: 345 }}>
      <Link underline="none" to={`/decks/${deck.id}`}><CardActionArea>
      <CardContent>
    
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        <Typography variant="h5" component="div">
          <p>{deck.title}</p>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
   
        </Typography>
     
      </CardContent>
        </CardActionArea></Link>
      <CardActions>
      

        <Button onClick={() => playGame(deck.id)}>PlayGame</Button>
        <Button onClick={() => deleteDeck(deck.id)}>Delete</Button>
      </CardActions>
    </Card>
    </Grid>

 

    </>
    
    ) 
}

export default Deck;
