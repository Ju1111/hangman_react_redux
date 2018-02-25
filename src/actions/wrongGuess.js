import { WRONG_GUESS } from './types'

export const wrongLetter = letter => ({
  type: WRONG_GUESS,
  payload: letter
})
