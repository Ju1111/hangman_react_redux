import { LETTER_GUESSED } from '../actions/types'
import { START_GAME } from '../actions/types'

const initialState = {
  wrongGuessCount: 0,
  guesses: [],
  word: 'coding',
  rightGuessCount: 0
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case START_GAME :
      return {...state, word: 'relax'};
    case LETTER_GUESSED :
      if (state.word.indexOf(payload) === -1) {
          state.wrongGuessCount += 1
          console.log(state.wrongGuessCount)
          return{...state, guesses:[...state.guesses, payload]}
      }
      else {
        state.rightGuessCount += 1
        return{...state, guesses:[...state.guesses, payload]}
      }
  default:
    return state
  }
}
