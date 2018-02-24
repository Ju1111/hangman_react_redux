import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

var guesses = ['word']

export class Word extends PureComponent {
  static propTypes = {
    content: PropTypes.array.isRequired,
  }
  render () {
    return (
      guesses
    )
  }
}

export default Word
