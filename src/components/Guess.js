import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

class Guess extends PureComponent {
  static propTypes = {
    // rightGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    // wrongGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    word: PropTypes.string.isRequired,
  }

  displayGuess = () => {
    console.log('Hello');
    const { word, guesses } = this.props
    // const guesses = rightGuesses.concat(wrongGuesses)
    return word.split('').map(char =>
     { if (guesses.includes(char)) {
        return char
       }
       return '_'
     }).join('')
   }


  render () {
    return (
      <div>
        <p>{this.props.displayGuess}</p>
      </div>
    )
  }
}

const mapStateToProps = ({Word:{guesses}, Word:{word}}) =>
  ({guesses, word})

export default connect (mapStateToProps)(Guess)
