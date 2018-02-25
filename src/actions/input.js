import { LETTER_GUESSED } from './types'

export const userInput = (input) => {
  return {
    type: LETTER_GUESSED,
    payload: input
  }
};
