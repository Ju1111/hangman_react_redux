import { START_GAME } from './types'

export const startGame = (wrongGuessCount, guesses, word) => ({
    type: START_GAME,
    payload: {
      wrongGuessCount,
      guesses,
      word
    }
  })
