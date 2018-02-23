import React, { Component } from 'react';
import LogoImg from './game.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img id="logo" src={LogoImg} alt=''/>
          <h1 className="title">HANGMAAAAAN</h1>
        </header>
      </div>
    );
  }
}

export default App;
