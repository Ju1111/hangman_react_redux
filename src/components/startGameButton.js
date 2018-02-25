import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './startGameButton.css'
import { startGame } from '../actions/startGame'
import { connect } from 'react-redux'

export class CreateGameButton extends PureComponent {
  static propTypes = {
    startGame: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.startGame()
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

export default connect (startGame) (CreateGameButton)
