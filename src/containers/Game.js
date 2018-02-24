import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Game extends PureComponent {
  static propTypes = {
    game: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.letter)
    ).isRequired
  }
  render() {
    return (
      <div className="Game">
        <h3>Welcome to Hangman! Ready to go? Guess your first letter!</h3>
      </div>
    )
  }
}

const mapStateToProps =
({wrongGuessCount, guesses}) => ({wrongGuessCount, guesses})
//
// state => {
//   return {
//     wrongGuessCount: state.wrongGuessCount,
//     guesses: state.guesses
//   }
// }

export default connect(mapStateToProps)(Game)
