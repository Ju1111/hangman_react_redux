import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Wrong extends PureComponent {
  static propTypes = {
    wrongGuessCount: PropTypes.number.isRequired,
  }
  render () {
    return (
      <div>
        <h4>Amount of wrong guesses: {this.props.wrongGuessCount}</h4>
      </div>
    )
  }
}

const mapStateToProps = ({ word: { wrongGuessCount } }) => ({ wrongGuessCount })

export default connect (mapStateToProps)(Wrong)
