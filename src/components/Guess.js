import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guessLetter } from '../actions/guess'

// var guesses = ['word']

export class Guess extends PureComponent {
  static propTypes = {
    content: PropTypes.array.isRequired,
  }
  render () {
    const { guesses } = this.props
    return (
      <div>
        <h4>{guesses.join(', ')}</h4>
      </div>
    )
  }
}

export default connect (guessLetter)(Guess)
