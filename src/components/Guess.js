import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

class Guess extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    word: PropTypes.string.isRequired,
  }

  render () {
    const { word, guesses } = this.props
    const showWord = word.split('').map(char =>
      (guesses.includes(char) ? char:'_')).join('')
      return (
        <div>
          <p>{ showWord }</p>
        </div>
      )
  }
}

const mapStateToProps = ({ Word:{ guesses }, Word:{ word } }) =>
  ({ guesses, word })

export default connect (mapStateToProps)(Guess)
