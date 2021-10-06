
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/container"
import Cards from "./XXCards"

function DeckPage({deckId}) {

  console.log(deckId)

  const [deck, setDeck] = useState({flashcards: []})

  useEffect(() => {
    fetchDeck();
  }, []);

  const fetchDeck = () => {
      fetch(`/decks/${deckId}`)
        .then(res => res.json())
        .then(deck => setDeck(deck))
    }
   
  console.log("deck", deck)
  return (<Container>

  <h2>deck title: {deck.title} </h2>

  <h4> Deck cards:</h4>


  <Cards flashcards = {deck.flashcards} />
  

    {/* <NavLink className="navlink" to="/new">Create new cards</NavLink> */}

  

  </Container>
  );
}

export default DeckPage;

