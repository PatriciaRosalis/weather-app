import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Fav from './Components/Fav';
import FiveDays from './Components/FiveDays';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Favorites" component={Fav} />
        <Route path="/Five-Days-Weather" component={FiveDays} />
      </Switch>
      
    </div>
  );
}

export default App;
