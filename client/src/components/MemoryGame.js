
import React, { useState, useEffect } from "react";
import { useHistory, useParams} from 'react-router-dom';

import { Link } from "react-router-dom";

function MemoryGame() {
  const { id } = useParams()
  // const [deck, setDeck] = useState({ flashcards: [] })
  const [cards, setCards] = useState([])
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    fetchDeck();
  }, []);

  const fetchDeck = () => {
    fetch(`/decks/${id}`)
      .then(res => res.json())
      .then(data => setCards(data.flashcards))
  }

  return(
   <h1>memory</h1>
  )
}

export default MemoryGame;
