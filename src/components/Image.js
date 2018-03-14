import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import hangStart from './hangmans/hang_start.png'
import hang1 from './hangmans/hang_1.png'
import hang2 from './hangmans/hang_2.png'
import hang3 from './hangmans/hang_3.png'
import hang4 from './hangmans/hang_4.png'
import hang5 from './hangmans/hang_5.png'
import hang6 from './hangmans/hang_6.png'

class Hangman extends PureComponent {
  static PropTypes = {
    wrongGuessCount: PropTypes.number.isRequired,
    displayImage: PropTypes.function
  }

  displayImage = () => {
    const { wrongGuessCount } = this.props
    switch(wrongGuessCount) {
      case 0:
        return hangStart
      case 1:
        return hang1
      case 2:
        return hang2
      case 3:
        return hang3
      case 4:
        return hang4
      case 5:
        return hang5
      case 6:
        return hang6
    default:
     return null
   }
  }

  render() {
    return (
      <div className="Image">
        <img className="Display" alt="hangman" src={ this.displayImage() }/>
      </div>
    )
  }
}

const mapStateToProps = ({ word: { wrongGuessCount } }) => ({ wrongGuessCount })

export default connect (mapStateToProps)(Hangman)
