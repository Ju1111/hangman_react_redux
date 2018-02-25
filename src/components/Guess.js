import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import { userInput } from '../actions/input'
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { guesses: state.guesses };
};

class Guess extends PureComponent {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }

  render () {
    const { guesses } = this.props
    return (
      <div>
        <h4>Your guesses: { guesses }</h4>
      </div>
    )
  }
}

const Guesses = connect (mapStateToProps) (Guess)

export default Guess
