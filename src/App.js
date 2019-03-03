import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from '././components/Movies';
import Weather from '././components/Weather';
import RakutenMenu from './components/RakutenMenu';

function App() {

  const [genreURL, setGenreURL] = useState(12);

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Movie and moods</p></header>
      <br></br>
      <RakutenMenu/>
      <h2> Weather recomended movies</h2>
      <div>
        <Weather />
      </div>
      <h2> Comedy Movies </h2>
      <Movies url={35} />
      <h2> Adventure Movies</h2>
      <Movies url={12} />
      <h2> Animation Movies</h2>
      <Movies url={16} />

    </div>
  );

}

export default App;
