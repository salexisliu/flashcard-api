import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

function Study() {
  const [fcard, setFcard] = useState({});
  const [cardArray, setCardArray] = useState([]);
  const [index, setIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const { state } = useLocation();

  useEffect(() => {
    const flashcardArray = state.deck.flashcards;
    console.log("array", flashcardArray);
    setCardArray(flashcardArray);
    setFcard(flashcardArray[index]);
  }, [index]);

  console.log("card", cardArray);

  function toggle() {
    setIsToggled((isToggled) => !isToggled);
  }

  const handleClick = () => {
    setIsToggled(false);
    if (index < cardArray.length - 1) {
      setIndex(index + 1);
      console.log(index);
    } else setIndex(0);
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        display="flex"
        style={{ minHeight: "50vh" }}
      >
        <h1>Study</h1>
        <Card
          alignItems="center"
          justify="center"
          sx={{ minWidth: 500, maxWidth: 500 }}
        >
          <CardActionArea>
            <CardContent padding={10}>
              <h2 style={{ padding: "30px" }}>{fcard.definition} </h2>
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
              <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Container>
              <Button onClick={toggle}> Show Answer </Button>
              <Button onClick={handleClick}> Next Card </Button>
            </Container>
          </CardActions>
        </Card>


        <TextField></TextField>
      </Grid>
    </>
  );
}

export default Study;
