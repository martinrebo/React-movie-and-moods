import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from '././components/Movies';
import Weather from '././components/Weather';

function App() {

  const [genreURL, setGenreURL] = useState(12);

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Movie and moods</p></header>
      <br></br>

      <h2> Weather recomended movies</h2>
      <div>
<Weather/>

      </div>
      <Movies url={35} />

      <h2> Howdo you feel ?</h2>
      <button onClick={() => setGenreURL(25)}>Decrement</button>
      <Movies url={12} />

    </div>
  );

}

export default App;
