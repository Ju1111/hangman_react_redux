import { LETTER_GUESSED } from '../actions/types'
// import { WRONG_GUESS } from '../actions/types'

const initialState = {
  wrongGuessCount: 0,
  guesses: [],
  word: 'coding',
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case LETTER_GUESSED :
      return {
        ...state, guesses: [...state.guesses, payload] };
      default:
        return state
  }
}
