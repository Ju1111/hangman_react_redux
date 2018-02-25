import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './input.css'
import { connect } from 'react-redux'
import { userInput } from '../actions/input'


class Input extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
      PropTypes.letter).isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userInput(event.target.value);
    this.setState({guess: ''});
  }


render() {
    return(
      <div>
        Guess a letter:
        <form onSubmit={this.handleSubmit}>
          <input
            className="userInput"
            type="text"
          />
          <button type="submit" className="button">
              Guess
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { userInput })(Input);
