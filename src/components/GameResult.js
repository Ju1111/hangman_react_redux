import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './GameResult.css'
import hangFinal from './hangmans/hang_final.png'
import CreateGameButton from './StartGameButton'

export class Result extends PureComponent {
  static PropTypes = {
    wrongGuessCount: PropTypes.number.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    word: PropTypes.string.isRequired
  }

  render() {
    const { wrongGuessCount, guesses, word } = this.props
    const showWord = word.split('').map(char =>
      (guesses.includes(char) ? char:'_')).join('')
    if (word === showWord)
        return (
          <div className="Won">
            <div className="Message">
              <h2>YOU WON :)</h2>
              <p>The word was indeed: <br/><br/>{ this.props.word }</p>
              <CreateGameButton />
            </div>
          </div>
        )
    else if (wrongGuessCount >= 6)
      return (
        <div className="Lost">
          <div className="Message">
            <p>GAME OVER</p>
            <img alt="hangman" className="Hangman" src={ hangFinal }/>
            <p>The word was: <br/><br/>{ this.props.word }</p>
            <CreateGameButton />
          </div>
        </div>
      )
    return null
 }
}

const mapStateToProps = ({ word: { wrongGuessCount, guesses, word } }) =>
  ({ wrongGuessCount, guesses, word })

export default connect(mapStateToProps)(Result)
