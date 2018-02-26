import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { wrongLetter } from '--/actions/wrongGuess'

export class Wrong extends PureComponent {
  static propTypes = {
    guess: PropTypes.function.isRequired,
  }
  render () {
    const { guessCounts } = this.props
    return (
      <div>
        <h4>'Number of wrong guesses: '{guessCounts}</h4>
      </div>
    )
  }
}

export default connect (wrongLetter)(Wrong)
