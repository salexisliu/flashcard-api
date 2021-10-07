import './App.css';
import NavBar from './NavBar'
import DecksContainer from './components/DecksContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateCardForm from './components/CreateCardForm';
// import ExampleCardForm from './components/ExampleCardForm';
import DeckPage from './components/DeckPage'
import MemoryGame from './components/MemoryGame'

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
       

        <Route exact path="/decks/:id"
            render={({match}) => {return <DeckPage deckId={match.params.id}/>}} />
          
        <Route path="/decks/:id/edit"
          render={({ match }) => {
            return <CreateCardForm deckId={match.params.id}/>}} />

          <Route path="/decks/:id/quiz"
            render={({ match }) => {
              return <MemoryGame deckId={match.params.id} />
            }} />

    
      </Switch>

    </div>
    </Router>
  );
}

export default AuthenticatedApp;
