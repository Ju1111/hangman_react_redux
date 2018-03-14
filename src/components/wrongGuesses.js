import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './WrongGuesses.css'

export class Wrong extends PureComponent {
  static propTypes = {
    wrongGuessCount: PropTypes.number.isRequired,
  }
  render () {
    return (
      <div className="WrongGuess">
        <h3>Amount of wrong guesses: {this.props.wrongGuessCount}</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ word: { wrongGuessCount } }) => ({ wrongGuessCount })

export default connect (mapStateToProps)(Wrong)
