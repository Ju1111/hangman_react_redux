import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Wrong extends PureComponent {
  static propTypes = {
    wrongGuessCount: PropTypes.number.isRequired,
  }
  render () {
    // const { wrongGuessCount } = this.props
    return (
      <div>
        <h4>Ammount wrong guesses: {this.props.wrongGuessCount}</h4>
      </div>
    )
  }
}

const mapStateToProps = ({Word: {wrongGuessCount}}) => ({wrongGuessCount})

export default connect (mapStateToProps)(Wrong)
