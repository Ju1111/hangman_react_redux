import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Input from '../components/input'
import { connect } from 'react-redux'

export class UserInput extends PureComponent {
  static propTypes = {
    game: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.letter))
  }

  render() {
    return (
      <div className="Result">
        <p>test</p>
      </div>
    )
  }
}

// const mapStateToProps = ({ board }) => ({ board })


// function mapDispatchToProps(dispatch){
//    return {
//     onSubmit => {
//       render()
//     }
//   }

const mapDispatchToProps = (dispatch) => {
  return {
    render()
    // onTodoClick: (id) => {
    //   dispatch(toggleTodo(id))
    // }
  }
}

export default connect(mapStateToProps)(Board)
