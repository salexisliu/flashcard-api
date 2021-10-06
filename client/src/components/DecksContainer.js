import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import CreateDeckForm from "./CreateDeckForm";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function DecksContainer() {
  useEffect(() => {
    fetchDecks();
  }, []);

  const [decks, setDecks] = useState([]);

  const fetchDecks = () => {
    fetch("/decks")
      .then((res) => res.json())
      .then((data) => setDecks(data));
  };

const createDeck = (formData) => {
  fetch("/decks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((errors) => Promise.reject(errors));
      }
    })
    .then(deck => {
      setDecks(decks.concat(deck))
    })
  }

const deleteDeck = (id) => {

  fetch(`decks/${id}`, {
    method: 'DELETE',
  })
  .then(res => {
    if (res.ok) {
      const updatedDecks = decks.filter(deck => deck.id !== id)
      setDecks(updatedDecks)         
      }
    })
  }

  return (
    <Container>
      <h1>Decks</h1>

      {decks.map((deck) => (

<>
        <p>{deck.title}</p>
        <Link to={`/decks/${deck.id}`}><p>See more</p></Link>
        <Button onClick={()=> deleteDeck(deck.id)}>Delete</Button>
        </>
     
      ))}

      <CreateDeckForm createDeck={createDeck}/>

     
    </Container>
  );
}

export default DecksContainer;
