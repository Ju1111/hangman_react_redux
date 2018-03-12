import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './startGameButton.css'
import { startGame } from '../actions/startGame'
import { connect } from 'react-redux'

class CreateGameButton extends PureComponent {
  static PropTypes = {
    startGame: PropTypes.func.isRequired
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.startGame();
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="CreateGameButton"
      >
        New Game
      </button>
    )
  }
}

export default connect (null, {startGame})(CreateGameButton)
