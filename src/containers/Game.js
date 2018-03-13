import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Game extends PureComponent {
  static propTypes = {
    // wrongGuesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    // rightGuesses: PropTypes.arrayOf(PropTypes.string).isRequired
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }
  render() {
    return (
      <div className="Game">
        <h3>Your guesses: {this.props.guesses.join(',')}</h3>
      </div>
    )
  }
}

// const mapStateToProps = ({Word:{wrongGuesses}, Word:{rightGuesses}}) => ({wrongGuesses, rightGuesses})
const mapStateToProps = ({Word:{guesses}}) => ({guesses})

export default connect(mapStateToProps)(Game)
