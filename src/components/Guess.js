import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

class Guess extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  displayGuess = () => {
    const { word, guesses } = this.props
    return word.split('').map(letter => {
      if(guesses.indexOf(letter) === -1) {
        return "_"
      }
        return letter
    }).join("")
  }

  render () {
    return (
      <div>
        {this.displayGuess(this.props.guesses)}
      </div>
    )
  }
}

const mapStateToProps = ({word, guesses}) => ({word, guesses})

export default connect (mapStateToProps)(Guess)
