import React, { useState, useEffect } from "react";
import CreateCardForm from "./CreateCardForm";
import Button from "@material-ui/core/Button";

function Cards({ deckId }) {
  const [cards, setCards] = useState([]);

  console.log("cards page deck id", deckId);

  useEffect(() => {
    fetchCards();
  }, [cards]);

  const fetchCards = () => {
    fetch(`/decks/${deckId}`)
      .then((res) => res.json())
      .then((deck) => setCards(deck.flashcards));
  };

  const deleteCard = (cardId) => {
    console.log(cardId);

    fetch(`http://localhost:4000/flashcards/${cardId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const updatedCards = cards.filter((card) => card.id !== cardId);
        setCards(updatedCards);
      }
    });
  };

  console.log("flashcards", cards);

  return (
    <>
      {deckId}
      <div>
        {" "}
        {cards.map((card) => (
          <>
            <h3>{card.word}</h3>
            <h4>{card.definition}</h4>

            <Button onClick={() => deleteCard(card.id)}> Delete </Button>
          </>
        ))}
      </div>
      new card page
    </>
  );
}

export default Cards;
