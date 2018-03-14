import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Input.css'
import { connect } from 'react-redux'
import { userInput } from '../actions/guess'

class Input extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
      PropTypes.string).isRequired
  }

  handleChange = (event) => {
    this.props.userInput(event.target.value);
    event.target.value = ''
  }

render() {
    return(
      <div>
          <input onKeyUp={this.handleChange}
            className="userInput"
            type="text"
          />
      </div>
    );
  }
}

export default connect(null, { userInput })(Input);
