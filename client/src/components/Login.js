import React, { useState } from "react";
import { Redirect, useHistory, Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";


function Login({ setCurrentUser }) {
  const [formErrors, setFormErrors] = useState([]);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push('/decks')
        });
      } else {
        res.json()
          .then(errors => setFormErrors(errors.error));
      }
    });
  };
  return (<>
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
                {formErrors.length > 0
                  ?
                  <p key={formErrors} style={{ color: "red" }}>
                    {formErrors}
                  </p>

                  : null}
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
               
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" fullWidth type="submit" variant="contained">
                Log In
              </Button>
              <Link to="/signup"><Button>Sign up</Button></Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  </>









    // <div className="authForm">
    //   <Redirect to="/" />
    //   <form onSubmit={handleSubmit}>
    //     <h1>Log In</h1>
    //     <p>
    //       <label htmlFor="username">Username</label>
    //       <input
    //         type="text"
    //         name="username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </p>
    //     <p>
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         name=""
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </p>
    //     <p>
    //       <Button variant="outlined" size="small" type="submit">Log In</Button>
    //     </p>
    //     <p>-- or --</p>
    //     <p>
    //       <Link to="/signup">Sign Up</Link>
    //     </p>
    //   </form>
    // </div>
  );
}

export default Login;
