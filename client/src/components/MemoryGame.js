
import React, { useState, useEffect } from "react";
import { useHistory, useParams} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function MemoryGame() {
  const [fcard, setFcard] = useState({})
  const [index, setIndex] = useState(0)
  const [isToggled, setIsToggled] = useState(false)

function toggle(){
  setIsToggled(isToggled => !isToggled)
}

  const {state} = useLocation()
  const flashcardArray = state.deck.flashcards
  
  // const card =  flashcardArray.map(f => <h2>{f.word}</h2>)
  const card = flashcardArray[index].id
  useEffect(() => {
    fetchFlashcard(card);
  }, []);
  
  const handleClick = () => {
    setIsToggled(false)

    const card = flashcardArray[index].id
 
    if (index < flashcardArray.length - 1) {
      setIndex(index + 1);
    } else 
    setIndex(0)
    fetchFlashcard(card)

    }
 
  const fetchFlashcard = (card) => {
    fetch(`/flashcards/${card}`)
      .then(res => res.json())
      .then(data => setFcard(data))
  }

  console.log("state", fcard)

  return(<>
   <h1>Study</h1>
   <Container>

        <Card sx={{ maxWidth: 1200 }}>
          <CardActionArea>
            <CardContent>
            <h2>{fcard.definition} </h2>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                
               
              </Typography>
              <Typography variant="h5" component="div">
              {isToggled && (<>{fcard.word}</>)}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">

              </Typography>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Container>
             
              <Button onClick={toggle}> Show Answer </Button>


              <Button onClick={handleClick}> Next Card </Button>
            </Container>
          </CardActions>
        </Card>
 






   </Container>

  
   </>
  )
}

export default MemoryGame;
