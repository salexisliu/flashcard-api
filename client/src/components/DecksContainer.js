import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CreateDeckForm from "./CreateDeckForm";
import Container from "@mui/material/Container";

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

  console.log(decks);

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

  return (
    <Container>
      <h1>Decks</h1>

      {decks.map((deck) => (
        <p>{deck.title}</p>
      ))}

      <CreateDeckForm createDeck={createDeck}/>

     
    </Container>
  );
}

export default DecksContainer;
