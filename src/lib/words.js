const word = ['coding',
  'relax',
  'ruby',
  'javascript',
  'random',
  'love',
  'hugs',
  'yummy',
  'magnificent',
  'wish',
  'spooky',
  'breathe',
  'fascinating',
  'sunflower',
  'forest',
  'netherlands',
  'amsterdam',
  'avocado',
  'cake',
  'codaisseur',
  'coding',
  'typescript',
  'starwars'
  ]

export const RandomWord = () => {
  let newWord = word[Math.floor(Math.random() * word.length)]
  return newWord
}
