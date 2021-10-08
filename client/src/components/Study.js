import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function Study() {
  const [fcard, setFcard] = useState({});
  const [cardArray, setCardArray] = useState([]);
  const [index, setIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const [answerToggle, setAnswerToggle] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [input, setInput] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    const flashcardArray = state.deck.flashcards;
    console.log("array", flashcardArray);
    setCardArray(flashcardArray);
    setFcard(flashcardArray[index]);
  }, [index]);

  console.log("card", cardArray);

  function toggle() {
    setAnswerToggle(false)
    setIncorrect(false)
    setIsToggled((isToggled) => !isToggled);
  }

  const handleClick = () => {
    setInput("")
    setIsToggled(false);
    setAnswerToggle(false);
    if (index < cardArray.length - 1) {
      setIndex(index + 1);
      console.log(index);
    } else setIndex(0);
  };

  const handleQuiz = (e) => {
    e.preventDefault();

    console.log("pressed");
    console.log(input);
    if (input === fcard.word) {
      setAnswerToggle(true)
      setIncorrect(false)
      setIsToggled(true);
    } else {
      setIncorrect(true)
      setAnswerToggle(false)
      setIsToggled(false)
    }
  };

  const handleChangeInput = (index, event) => {
    const values = event.target.value;
    setInput(values);

    // console.log(index, event.target.name);
  };

  return (
    <>
      <div>
        <b>{fcard ? <></> : "oops you have no cards"}</b>
      </div>
    {fcard &&
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        display="flex"
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs={8}>
          <h1>Study</h1>
          <Card
            alignItems="center"
            justify="center"
            sx={{ minWidth: 500, maxWidth: 500 }}
          >
            <CardActionArea>
              <CardContent padding={10}>
                
                {fcard && <h2 style={{ padding: "30px" }}>{fcard.definition} </h2>}
                
               
                <Typography
                  sx={{ padding: 1, fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>
                <Typography
                  sx={{
                    padding: 5,
                  }}
                  variant="h5"
                  component="div"
                >
                  {isToggled && <>{fcard.word}</>}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Container>
                <Button onClick={toggle}> Show Answer </Button>
                <Button onClick={handleClick}> Next Card </Button>
              </Container>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={8} padding={10}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <form onSubmit={handleQuiz}>
              <TextField
                fullWidth
                variant="filled"
                name="word"
                label="word:"
                value={input} //from name
                onChange={(event) => handleChangeInput(index, event)}
                type="text"
                name="password"
                autoComplete="off"
                type="text"
              />
            </form>
          </Box>

          {answerToggle ? <h3 style={{ color: "green" }}>Correct!</h3> : <></>}
          {incorrect ? <h3 style={{ color: "red" }}>Try again!</h3> : <></>}
        </Grid>
      </Grid>
}
    </>
  );
}

export default Study;
