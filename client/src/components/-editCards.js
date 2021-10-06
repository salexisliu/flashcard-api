import React, { useState, useEffect } from "react";
import CreateCardForm from "./CreateCardForm";
import Button from "@material-ui/core/Button";


function Cards({flashcards, deckId, deleteCard}) {

  //flashcards comes from DeckPage deck fetch

  
  return (<>
   <div> {flashcards.map(card =>
   <>

       <h3>{card.word}</h3>
       <h4>{card.definition}</h4>

     
     <Button onClick={() => deleteCard(card.id)}> Delete </Button>

     </>
   )
     }
      </div>
  

   <h4> this is the create card form</h4>
      <CreateCardForm deckId = {deckId} />

      </>
  )

    }


export default Cards;
