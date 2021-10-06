import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import React, { useState, useEffect } from "react";

function CreateDeckForm({createDeck}) {

  const [title, setTitle] = useState([])

  console.log(title)


  const handleSubmitForm = (e) => { 
    e.preventDefault()
    createDeck({
      title: title
    })

  };
  return (

      <Container>
        <h3>Make a Deck</h3>

        <form onSubmit={handleSubmitForm}>
       
              <TextField
                name="word"
                variant="standard"
                label="enter a title"
                value={title} //from name
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>

  )
}

export default CreateDeckForm;
