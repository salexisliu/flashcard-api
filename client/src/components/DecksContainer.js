import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CreateDeckForm from "./CreateDeckForm";

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

  return (
    <>
      <h1>Decks</h1>

      <h1>Create a deck</h1>
      
      <CreateDeckForm />



      {decks.map((deck) => (
        
        <p>{deck.title}</p>
      ))}
    </>
  );
}

export default DecksContainer;
