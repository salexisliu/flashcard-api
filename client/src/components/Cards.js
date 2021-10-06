import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateCardForm from "./CreateCardForm";
import Button from "@material-ui/core/Button";


function Cards({flashcards, deckId, deleteCard, addCard}) {


  //flashcards comes from DeckPage deck fetch

  
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
  



    <Link to={`/decks/${deckId}/edit`}><h4> Add New Cards? </h4></Link>
{/*     

   <CreateCardForm deckId = {deckId} addCard = {addCard}/> */}


  </>
  )

    }


export default Cards;
