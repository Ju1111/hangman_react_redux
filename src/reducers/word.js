import { LETTER_GUESSED } from '../actions/types'
import { START_GAME } from '../actions/types'

const initialState = {
  wrongGuessCount: 0,
  guesses: [],
  // rightGuesses: [],
  word: 'coding',
  answer: ''
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
        return{...state, guesses:[...state.guesses, payload]}
      }
  default:
    return state
  }
}

// displayGuess = () => {
//   console.log('Hello');
//   const { word, guesses } = this.props
//   // const guesses = rightGuesses.concat(wrongGuesses)
//   return word.split('').map(char =>
//    { if (guesses.includes(char)) {
//       return char
//      }
//      return '_'
//    }).join('')
//  }
