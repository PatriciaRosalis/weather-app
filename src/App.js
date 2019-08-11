import React from 'react';
import './App.scss';
import Loading from './Components/Loading';
import Image from './Components/Image';
import MyCard from './Components/MyCard';
import Nav from './Components/Nav';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <Loading />
      <Image />
      <br />
      <MyCard />
      <br />
      <br />
      <Nav />
    </div>
  );
}

export default App;
