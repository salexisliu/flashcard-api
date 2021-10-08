import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateCardForm from "./CreateCardForm";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";

function Cards({flashcards, deckId, deleteCard, addCard}) {


  //flashcards comes from DeckPage deck fetch
console.log("flashobject", flashcards)
  console.log("flash", flashcards[1])
  console.log("fword", flashcards[1])
  
  return (<>
   <div> {flashcards.map(card =>
   <>

       <h4>{card.word}</h4>
       <h5>definition: {card.definition}</h5>

     
     <Button onClick={() => deleteCard(card.id)}> Delete </Button>

     </>
   )
     }
      </div>
  



    <Link to={`/decks/${deckId}/edit`}><Button>Add New Cards? </Button></Link>

    <Box>
      <br></br><br></br><br></br><br></br>


    </Box>
  </>
  )

    }


export default Cards;
