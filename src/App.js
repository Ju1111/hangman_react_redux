import React, { Component } from 'react';
import LogoImg from './game.png';
import './App.css';
import Title from './components/Title'
import Word from './components/Word'
import Game from './containers/Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img id="logo" src={LogoImg} alt=''/>
          <div>
            <Title content="HANGMAAAAAAAAN"/>
          </div>
        </header>
        <Game />
        <div className="word">
          <Word />
        </div>
      </div>
    );
  }
}

export default App;
