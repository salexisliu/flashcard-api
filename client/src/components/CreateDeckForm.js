import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";

function CreateDeckForm({ createDeck }) {
  const [title, setTitle] = useState([]);

  console.log(title);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    createDeck({
      title: title,
    });
   
  };
  return (
    <Container>
      <h3>Create a new Deck</h3>

      <form onSubmit={handleSubmitForm}>
        <TextField
          name="word"
          variant="standard"
          label="enter title"
          value={title} //from name
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default CreateDeckForm;
