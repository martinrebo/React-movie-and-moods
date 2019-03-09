import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from '././components/Movies';
import Weather from '././components/Weather';
import RakutenMenu from './components/RakutenMenu';
import Footer from './components/Footer';
import ClassWeather from './components/ClassWeahter';

function App() {

  const [genreURL, setGenreURL] = useState(12);

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Movie and moods</p></header>
      <br></br>
      <RakutenMenu/>
      <h2> React Component for Comedy Movies </h2>
      <Movies url={35} />
      <h2> React Component for  Adventure Movies</h2>
      <Movies url={12} />
      <h2> React Component for Animation Movies</h2>
      <Movies url={16} />

<Footer />
    </div>
  );

}

export default App;
