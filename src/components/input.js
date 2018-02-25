import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './input.css'
import { connect } from 'react-redux'


export class Input extends PureComponent {
  constructor(props) {
  super(props);
  this.state = {value: ''};
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('lovely');
    console.log(this.refs.user_input.value);
  }

render() {
    return(
      <div>
        Guess a letter:
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="user_input"
            className="Input"
            defaultValue={this.state.value}
          />
          <button type="submit">
              Guess
          </button>
        </form>
      </div>
    )
  }
}

export default Input
