import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './GameResult.css'

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
            <div className="message">
              <p>YOU WON :)</p>
            </div>
          </div>
        )
    else if (wrongGuessCount >= 6)
      return (
        <div className="Lost">
          <div className="message">
            <p>GAME OVER</p>
          </div>
        </div>
      )
    return null
 }
}

const mapStateToProps = ({ Word: { wrongGuessCount }, Word:{ guesses }, Word:{ word } }) => ({ wrongGuessCount, guesses, word })

export default connect(mapStateToProps)(Result)
