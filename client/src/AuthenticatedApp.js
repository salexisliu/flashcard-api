import './App.css';
import NavBar from './NavBar'
import DecksContainer from './components/DecksContainer'
import { Switch, Route, NavLink, useHistory } from 'react-router-dom'
import CreateDeckForm from './components/CreateDeckForm';

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  // const history = useHistory()

  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          // history.push('/')
        }
      })
  }
  return (
    <div className="App">
      <nav>
        <span>
          <NavBar/>
        </span>
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>
        <Route path="/decks">
          <DecksContainer />
        </Route>
        <Route path="/flashcard">
          {/* <EventsContainer /> */}
        </Route>
        <Route path="/new">
          <CreateDeckForm />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
