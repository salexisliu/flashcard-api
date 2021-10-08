import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

function CreateCardForm({deckId}) {
  const history = useHistory();
  const classes = useStyles();
  const [inputField, setInputField] = useState([{ word: "" }]);
  const [definitions, setDefinitions] = useState([]);
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {

    console.log("submiting")
    // console.log("inputfields", inputField);
    // console.log("definitions", definitions);

    const DATAOBJ = [];

    for (let i = 0; i < definitions.length; i++) {
      const innerDataObject = {
        word: inputField[i]["word"],
        definition: definitions[i],
        deck_id: deckId,
      };
      // innerDataObject.word = inputField[idx]['word']
      // innerDataObject.definition = definitions[idx]
      // innerDataObject.deck_id = 1

      DATAOBJ.push(innerDataObject);
    }

    DATAOBJ.map((obj) => createCard(obj))
    history.push(`/decks/${deckId}`)


  };


  const createCard = (obj) => {
    console.log(obj);
    return fetch("/flashcards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((errors) => Promise.reject(errors));
      }
    })
    .then(card => {
      setCards(cards.concat(card));
     
    })
  };

  const handleGetDefinition = (e) => {
    e.preventDefault();
    Promise.all(
      inputField.map((input) =>
        fetch(
          `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input.word}?key=b033b3b4-4766-4db1-8f40-6af316839bf5`
        )
      )
    )
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then((results) =>
        setDefinitions(results.map((result) => result[0].shortdef[0]))
      );

  };

  useEffect(() => {
   console.log("usereffect", definitions)
  }, [definitions]);


  const handleAddField = () => {
    setInputField([...inputField, { word: "" }]);
  };

  const handleRemoveField = (index) => {
    const values = [...inputField];
    values.splice(index, 1);
    setInputField(values);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputField];
    values[index][event.target.name] = event.target.value;
    setInputField(values);

    // console.log(index, event.target.name);
  };

  return (
    <>
      <Link to={`/decks/${deckId}`}
        style={{ textDecoration: 'none' }} >
        <Button
          style={{ margin: "5px", padding: '5px' }}
   
          variant="text"
          color="primary"
          type="button"
        >
          Back to Deck
        </Button>
      </Link>
      <Grid
        container
        spacing={0}
        direction="column"
        style={{ padding: '50px' }}
        display="flex"
        style={{ margin: "30px" }}
      >

        <Grid item xs={3} >
          
        <h3>Add new word</h3>

        <form className={classes.root} onSubmit={handleSubmit}>
          {inputField.map((inputField, index) => (
            <div key={index}>
              <TextField
                name="word"
                variant="standard"
                label="enter a word"
                value={inputField.word} //from name
                onChange={(event) => handleChangeInput(index, event)}
                type="text"
              />

              <IconButton onClick={() => handleRemoveField(index)}>
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => handleAddField()}>
                <AddIcon />
              </IconButton>
            </div>
          ))}

          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={handleGetDefinition}
          >
            Define
          </Button>
            <Button

              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Send
            </Button>
        </form>

          {definitions && <Box sx={{
          width: 800,
          height: 300}}><ul>
            {definitions.map(d => <li>{d}</li> )}
          </ul>
          </Box>
        }
   
      <br></br>
      
        

     </Grid>

      </Grid>

      <Box></Box>
     
    </>
  );
}
export default CreateCardForm;
