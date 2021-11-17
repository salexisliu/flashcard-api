import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";



function Signup({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user)
          history.push('/home')
        });
      } else {
        setCurrentUser({ username: "Demo" });
        history.push('/')
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
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
        padding={20}
      >
     
        <Box bgcolor="white" >
          <form onSubmit={handleSubmit}>
            <Grid padding={10} container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth 
                label="username" 
                size="small" 
              
               
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name=""
                 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  size="small"
                 
                />
              </Grid>
                <Grid item xs={12}>
                  <TextField
                   

                    color="warning"
                    id="filled-basic" 
                    variant="filled"
                    fullWidth
                    label="Confirm your password"
                    type="password"
                    size="small"
                  
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth type="submit" variant="contained">
             Sign up
            </Button>
              <Link to="/"><Button>Log In</Button></Link>
          </Grid>
        </Grid>
      </form>
      </Box>
     </Grid>

    </>
  );
}

export default Signup;
