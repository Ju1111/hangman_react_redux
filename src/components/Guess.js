import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guessLetter } from '../actions/guess'

export class Guess extends PureComponent {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }
  render () {
    const { guesses } = this.props
    return (
      <div>
        <h4>Your guesses: {guesses}</h4>
      </div>
    )
  }
}

export default connect (guessLetter)(Guess)
