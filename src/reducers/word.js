import { LETTER_GUESSED } from '../actions/types'

const initialState = {
  wrongGuessCount: 0,
  guesses: [],
  word: '',
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case LETTER_GUESSED :
    state.guesses.push(payload);
    state.guesses += 1;
    return state;
  default:
    return state
  }
}
