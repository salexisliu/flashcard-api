import React, { useState } from "react";
import { Redirect, useHistory, Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


function Login({ setCurrentUser }) {
  
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
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };
  return (
    <div className="authForm">
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <Button variant="outlined" size="small" type="submit">Log In</Button>
        </p>
        <p>-- or --</p>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
