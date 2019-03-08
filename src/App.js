import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MovieList from './components/MovieList'
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <MovieList/>
      </div>
    );
  }
}

export default App;
