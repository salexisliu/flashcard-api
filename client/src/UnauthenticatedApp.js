import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
// import Signup from './components/Signup'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/">

        <h1>hello please sign in</h1>
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        {/* <Signup setCurrentUser={setCurrentUser} /> */}
        <h1>signup page</h1>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default UnauthenticatedApp
