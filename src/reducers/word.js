import { LETTER_GUESSED } from '../actions/types'
import { START_GAME } from '../actions/types'
import { RandomWord } from '../lib/words'

const initialState = {
  wrongGuessCount: 0,
  guesses: [],
  word: RandomWord,
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case START_GAME :
      return [state.wrongGuessCount===0, state.guesses=[], state.word=RandomWord]
    case LETTER_GUESSED :
      console.log(state.word)
      if (!state.guesses.includes(payload)) {
        if (state.word.indexOf(payload) === -1) {
          state.wrongGuessCount += 1
          console.log(state.wrongGuessCount)
          return{...state, guesses:[...state.guesses, payload]}
        }
        else {
          return{...state, guesses:[...state.guesses, payload]}
        }
      }
  default:
    return state
  }
}
