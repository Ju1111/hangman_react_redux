import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Input.css'
import { connect } from 'react-redux'
import { userInput } from '../actions/guess'

class Input extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(PropTypes.string)
  }

  handleChange = (event) => {
    this.props.userInput(event.target.value);
    event.target.value = ''
  }

render() {
    return(
      <div>
          <input onKeyUp={this.handleChange}
            className="UserInput"
            type="text"
          />
      </div>
    );
  }
}

export default connect(null, { userInput })(Input);
