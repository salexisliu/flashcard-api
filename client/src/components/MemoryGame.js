
import React, { useState, useEffect } from "react";
import { useHistory, useParams} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


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


    <Card> Deck</Card>

      <h2>{fcard.definition} </h2>
      {isToggled && <h2>Answer: {fcard.word} </h2>}

      <Button onClick={toggle}> Show Answer </Button>

  
      <Button onClick={handleClick}> Next Card </Button>

   </Container>

  
   </>
  )
}

export default MemoryGame;
