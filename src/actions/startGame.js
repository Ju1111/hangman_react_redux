import { START_GAME } from './types'

export const startGame = word => ({
    type: START_GAME,
    payload: word
  })
