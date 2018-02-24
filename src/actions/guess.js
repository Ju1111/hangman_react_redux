import { LETTER_GUESSED } from './types'

export const guessLetter = letter => ({
  type: 'LETTER_GUESSED',
  payload: letter
})
