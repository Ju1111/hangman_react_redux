import React, { Component } from 'react';
import LogoImg from './game.png';
import './App.css';
import Title from './components/Title'
import Result from './components/GameResult'
import Game from './containers/Game'
import CreateGameButton from './components/StartGameButton'


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
          <Game />
          <CreateGameButton />
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
