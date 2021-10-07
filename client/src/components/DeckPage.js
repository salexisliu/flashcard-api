
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/container"
import Cards from "./Cards"
import Card from '@mui/material/Card';


function DeckPage({ deckId }) {

  console.log(deckId)

  const [deck, setDeck] = useState({ flashcards: [] })
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetchDeck();
  }, []);

  const fetchDeck = () => {
    fetch(`/decks/${deckId}`)
      .then(res => res.json())
      .then(data => setDeckandCards(data))
  }

  const setDeckandCards = (data) => {
    setDeck(data)
    setCards(data.flashcards)
  }

  const deleteCard = (cardId) => {

    console.log(cardId)

    fetch(`http://localhost:4000/flashcards/${cardId}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          const updatedCards = cards.filter(card => card.id !== cardId)
          setCards(updatedCards)
        }
      })
  }

  console.log("flashcards from the deck fetch", cards)

  // not using this

  const addCard = (card) => {
    setCards([...cards, card])
  }

  console.log("deck", deck)
  return (<Container>

    <h2>Deck title: {deck.title} </h2>

    <h4> Deck cards</h4>

    <Cards flashcards={cards} deleteCard={deleteCard} deckId = {deckId} addCard={addCard}/>


  </Container>
  );
}

export default DeckPage;

