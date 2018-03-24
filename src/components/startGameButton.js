import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './StartGameButton.css'
import { startGame } from '../actions/startGame'
import { connect } from 'react-redux'

class CreateGameButton extends PureComponent {
  static PropTypes = {
    startGame: PropTypes.func.isRequired,
    label: PropTypes.string
  }

  handleClick = (event) => {
    this.props.startGame();
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="CreateGameButton"
      >
        { 'Play Again'}
      </button>
    )
  }
}

export default connect (null, { startGame })(CreateGameButton)
