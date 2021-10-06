import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

function CreateCardForm() {
  const classes = useStyles();
  const [inputField, setInputField] = useState([{ word: "" }]);
  const [definitions, setDefinitions] = useState([]);
  const [cards, setCards] = useState([]);

  // const createCard = (DATAOBJ) => {
  // fetch("/cards") POST the object to the backend to create a card
  //}

  const handleSubmit = (e) => {
    // const DATAOBJ = {
    //   word: inputField,
    //   definition: inputField,
    //   deck_id: 1
    // }
    // e.preventDefault();

    // something.iterate createCard(something)

    console.log("inputfields", inputField);
    console.log("definitions", definitions);

    const DATAOBJ = [];

    for (let idx = 0; idx < definitions.length; idx++) {
      const innerDataObject = {
        word: inputField[idx]["word"],
        definition: definitions[idx],
        deck_id: 1,
      };
      // innerDataObject.word = inputField[idx]['word']
      // innerDataObject.definition = definitions[idx]
      // innerDataObject.deck_id = 1

      DATAOBJ.push(innerDataObject);
    }

    DATAOBJ.map((obj) => createCard(obj));
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
      setCards(cards.concat(card))
    })
  };

  // function createCardObj(word) {
  //   const obj = {
  //     word: inputField.word,
  //     definition: definitions,
  //     deck_id: 1,
  //   }

  // const cardObj = {
  //   word: inputField[0].word,
  //   definition: translatedWords[0],
  //   deck_id: 1
  // }
  // console.log(cardObj)
  //Send function send to backend
  // createCard({
  //   word: WORD ,
  //   description: DESC,
  //   deck_id: 1/currentdeck?,

  // })

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

  // console.log("definitions", translatedWords)

  // const translate = (input) => {
  //   debugger
  //   console.log("input word", input.word)
  //   let fetchedword = fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input.word}?key=b033b3b4-4766-4db1-8f40-6af316839bf5`)
  //     .then(res => res.json())
  //     .then(data => {setTranslatedWords([...translatedWords, data[0].shortdef[0]])})

  // const fetchTranslations = (word) => {

  //   return fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=b033b3b4-4766-4db1-8f40-6af316839bf5`)
  //   .then(res => res.json())
  //   .then(data => ((data[0].shortdef[0])))

  //   // const dict = {word: v}
  //   // return dict

  // }

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
      <Container>
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
            type="submit"
            onClick={handleGetDefinition}
          >
            Define
          </Button>
        </form>
      </Container>
      <br></br>
      <Container>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Join and Send
        </Button>
      </Container>
    </>
  );
}
export default CreateCardForm;
