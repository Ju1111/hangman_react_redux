import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './ShowGuesses.css'

export class Guess extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }
  render() {
    return (
      <div className="Guesses">
        <h3>Your guesses: {this.props.guesses.join(',')}</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ word:{ guesses } }) => ({ guesses })

export default connect(mapStateToProps)(Guess)
