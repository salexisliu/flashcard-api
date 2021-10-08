import './App.css';
import NavBar from './NavBar'
import DecksContainer from './components/DecksContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateCardForm from './components/CreateCardForm';
// import ExampleCardForm from './components/ExampleCardForm';
import DeckPage from './components/DeckPage'
import Study from './components/Study'
import Home from './components/Home'
import Button from '@mui/material/Button';

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
          <span style={{ color: 'white' }}>Logged in as {currentUser.username} <Button variant="contained" onClick={handleLogout}>Logout</Button></span>
      </nav>
      <Switch>
        <Route exact path="/decks">
          <DecksContainer />
        </Route>
      
        <Route exact path="/">
            <Home currentUser = {currentUser.username}/> </Route>


        <Route exact path="/decks/:id"
            render={({match}) => {return <DeckPage deckId={match.params.id}/>}} />
          
        <Route path="/decks/:id/edit"
          render={({ match }) => {
            return <CreateCardForm deckId={match.params.id}/>}} />

          <Route path="/decks/:id/study"
            render={({ match }) => {
              return <Study deckId={match.params.id} />
            }} />

    
      </Switch>

    </div>
    </Router>
  );
}

export default AuthenticatedApp;
