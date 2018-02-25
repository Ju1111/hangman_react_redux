import React, { Component } from 'react';
import LogoImg from './game.png';
import './App.css';
import Title from './components/Title'
import Guess from './components/Guess'
import CreateGameButton from './components/startGameButton'
import Input from './components/input'

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
        <CreateGameButton />
        <div className="guesses">
          <Input className="input"/>
          <Guess />
        </div>
      </div>
    );
  }
}

export default App;
