import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import Guess from '../components/Guess'

export class Game extends PureComponent {
  static propTypes = {
    wrongGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    rightGuesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }
  render() {
    return (
      <div className="Game">
        <h3>Wrong guesses: {this.props.wrongGuesses.join(',')}</h3>
        <h2>Word: {this.props.rightGuesses}</h2>
      </div>
    )
  }
}

const mapStateToProps = ({Word:{wrongGuesses}, Word:{rightGuesses}}) => ({wrongGuesses, rightGuesses})

export default connect(mapStateToProps)(Game)
