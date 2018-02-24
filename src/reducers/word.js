import { LETTER_GUESSED } from '../actions/types'

const initialState = {
  wrongGuessCount: 0,
  guesses: [],
  word: 'coding',
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case LETTER_GUESSED :
      if (state.word.indexOf(payload) === -1) {
        state.guesses += 1};
      return {
        ...state, guesses:
      state.guesses.contact(payload)};
      default:
        return state
  }
}
