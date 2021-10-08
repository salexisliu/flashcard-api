import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import Box from "@mui/material/Box";

function CreateDeckForm({ createDeck }) {
  const [title, setTitle] = useState([]);

  console.log(title);

  const handleSubmitForm = (e) => {
    setTitle("")
    e.preventDefault();
    createDeck({
      title: title,
    });
    

   
  };
  return (
    <Box>
     <form onSubmit={handleSubmitForm}>
        <h3>Create a new Deck:</h3><TextField
          name="word"
          variant="filled"
          label="Enter a title..."
          value={title} //from name
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <Button variant="outlined" size="large" color="primary" type="submit">
          Submit
        </Button>
        </form> 
    </Box>
  );
}

export default CreateDeckForm;
