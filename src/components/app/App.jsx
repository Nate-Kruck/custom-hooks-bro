import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterDetailPage from '../../pages/CharacterDetailPage';
import CharacterPage from '../../pages/CharacterPage';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterPage} />
        <Route exact path="/characters/:id" component={CharacterDetailPage} />
      </Switch>
    </Router>
  );
}
