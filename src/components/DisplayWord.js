import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

class DisplayWord extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    word: PropTypes.string.isRequired,
  }

  render () {
    const { word, guesses } = this.props
    const showWord = word.split('').map(char =>
      (guesses.includes(char) ? char:'_')).join('')
      return (
        <div className="Word">
          <p>{ showWord }</p>
        </div>
      )
  }
}

const mapStateToProps = ({ word:{ guesses, word } }) =>
  ({ guesses, word })

export default connect (mapStateToProps)(DisplayWord)
