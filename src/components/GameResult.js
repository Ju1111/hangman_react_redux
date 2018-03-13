import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './GameResult.css'

export class Result extends PureComponent {
  static PropTypes = {
    wrongGuessCount: PropTypes.number.isRequired
  }

  render() {
    const { wrongGuessCount } = this.props
    if (wrongGuessCount >= 6)
      return (
        <div className="Lost">
          <div className="message">
            <p>GAME OVER</p>
          </div>
        </div>
      )
    return null
  }
}

const mapStateToProps = ({Word: {wrongGuessCount}}) => ({wrongGuessCount})

export default connect(mapStateToProps)(Result)
