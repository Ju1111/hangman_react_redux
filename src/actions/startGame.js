import { START_GAME } from './types'
import { RandomWord } from '../lib/words'

export const startGame =  (word) => ({
    type: START_GAME,
    payload: word
  })
