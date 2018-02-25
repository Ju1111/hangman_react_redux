import { LETTER_GUESSED } from '../actions/types'
import { START_GAME } from '../actions/types'
// import { WRONG_GUESS } from '../actions/types'

const initialState = {
  wrongGuessCount: 0,
  guesses: [],
  word: 'coding',
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case START_GAME :
      console.log('Hey there')
      return {...state, word: 'relax'};
    case LETTER_GUESSED :
      console.log('helllooooooo');
      return {
        ...state, guesses: [state.guesses, payload] };
  default:
    return state.guesses
  }
}
