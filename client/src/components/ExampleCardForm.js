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

function ExampleCardForm() {
  const classes = useStyles();
  const [inputField, setInputField] = useState([{ word: "" }]);
  const [definitions, setDefinitions] = useState([]);

  console.log("def", definitions)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM INPUT WORDS", inputField)
    inputField.map(input => fetchTranslations(input.word))
  }

  const fetchTranslations = (word) => {

    return fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=b033b3b4-4766-4db1-8f40-6af316839bf5`)
    .then(res => res.json())
    .then(data => setDefinitions([...definitions, data[0].shortdef[0]]))
  }




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
            // onClick={handleTranslate}
  
          >

            Translate
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
          Send
        </Button>
      </Container>



    </>
  );
}

export default ExampleCardForm;