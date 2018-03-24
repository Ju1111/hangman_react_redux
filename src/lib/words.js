const word = ['jedi',
  'sith',
  'chewbacca',
  'hansolo',
  'padawan',
  'bobafett',
  'deathstar',
  'alderaan',
  'dagobah',
  'hoth',
  'tatooine',
  'leia',
  'luke',
  'yoda',
  'stormtrooper',
  'countdooku',
  'darthvader',
  'ewok',
  'padme',
  'milleniumfalcon',
  'starfighter',
  'lightsaber',
  'starwars'
  ]

export const RandomWord = () => {
  let newWord = word[Math.floor(Math.random() * word.length)]
  return newWord
}
