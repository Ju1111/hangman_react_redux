import { START_GAME } from './types'

export const startGame = word => {
  return {
    type: 'START_GAME',
    payload: word
  }
}
