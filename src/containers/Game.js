import React, { PureComponent } from 'react'
import Input from '../components/Input'
import Guess from '../components/ShowGuesses'
import DisplayWord from '../components/DisplayWord'
import Wrong from '../components/WrongGuesses'
import Hangman from '../components/Image'
import './Game.css'

class Game extends PureComponent {
  render() {
    return (
      <div className="Box">
        <div className="Playing">
          <Input />
          <Guess />
          <DisplayWord />
          <Wrong />
        </div>
        <div className="Hanging">
          <Hangman />
        </div>
      </div>
    )
  }
}

export default Game
