import { LETTER_GUESSED } from '../actions/types'
import { START_GAME } from '../actions/types'

const initialState = {
  wrongGuessCount: 0,
  wrongGuesses: [],
  rightGuesses: [],
  word: 'coding'
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case START_GAME :
      return {...state, word: 'relax'};
    case LETTER_GUESSED :
      if (state.word.indexOf(payload) === -1) {
          state.wrongGuessCount += 1
          console.log(state.wrongGuessCount)
          return{...state, wrongGuesses:[...state.wrongGuesses, payload]}
      }
      else {
        return{...state, rightGuesses:[...state.rightGuesses, payload]}
      }
  default:
    return state
  }
}
