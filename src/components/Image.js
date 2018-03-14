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
import hangFinal from './hangmans/hang_final.png'

class Hangman extends PureComponent {
  static PropTypes = {
    wrongGuessCount: PropTypes.number.isRequired
  }

  const 

  render() {
    const { wrongGuessCount } = this.props
    if (wrongGuessCount === 0)
      return (
        <div>
          <img className="Image" alt="hangman" src={ hangStart }/>
        </div>
      )
    return null
  }
}

const mapStateToProps = ({ word: { wrongGuessCount } }) => ({ wrongGuessCount })

export default connect (mapStateToProps)(Hangman)
