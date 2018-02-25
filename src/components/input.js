import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './input.css'
import { connect } from 'react-redux'
import { userInput } from '../actions/input'


class Input extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
      PropTypes.string).isRequired
  }

  handleChange = (event) => {
    event.preventDefault();
    this.props.userInput(event.target.value);
    // event.target.value = ''
  }


render() {
    return(
      <div className="inputForm">
        Welcome to Hangman! Ready to go? Guess a letter:
        <form>
          <input onChange={this.handleChange.bind(this)}
            className="userInput"
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { userInput })(Input);
