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

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.props.userInput(event.target.value);
    console.log(event.target.value);
    this.setState({guess: ''});
    console.log(event.target.value);

  }


render() {
    return(
      <div>
        Guess a letter:
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
