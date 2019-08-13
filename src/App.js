import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import FiveDays from './Components/FiveDays';
import HomePage from './Components/HomePage';
import FavPage from './Components/FavPage';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Favorites" component={FavPage} />
        <Route path="/Five-Days-Weather" component={FiveDays} />
      </Switch>
      
    </div>
  );
}

export default App;
