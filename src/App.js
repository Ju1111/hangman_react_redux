import React, { Component } from 'react';
import LogoImg from './game.png';
import './App.css';
import Title from './components/Title'
import Game from './containers/Game'
import CreateGameButton from './components/startGameButton'
import Input from './components/input'
import Guess from './components/Guess'
import Wrong from './components/wrongGuesses'
import Result from './components/GameResult'

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
        <div className="guesses">
          <h2>Welcome to Hangman! Ready to go? Guess a letter:</h2>
          <Input className="input"/>
          <Game />
          <Guess />
          <Wrong />

          <Result />
        </div>
        <CreateGameButton />
      </div>
    );
  }
}

export default App;
