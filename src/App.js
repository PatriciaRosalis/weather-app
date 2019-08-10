import React from 'react';
import './App.scss';
import Loading from './Components/Loading';
import Image from './Components/Image';
import Card from './Components/Card';
import Nav from './Components/Nav';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <Loading isVisible="true" />
      <Image />
      <br />
      <Card />
      <br />
      <br />
      <Nav />
    </div>
  );
}

export default App;
