import './App.css';
import NavBar from './NavBar'
import DecksContainer from './components/DecksContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateDeckForm from './components/CreateCardForm';
import DeckPage from './components/DeckPage'

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
    <Router>
    <div className="App">
      <nav>
        <span>
          <NavBar/>
        </span>
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>
        <Route exact path="/decks">
          <DecksContainer />
        </Route>
        <Route path="/flashcard">
          {/* <EventsContainer /> */}
        </Route>
        <Route exact path="/decks/:id">
          <DeckPage/>
        </Route>
        <Route path="/new">
          <CreateDeckForm />
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default AuthenticatedApp;
