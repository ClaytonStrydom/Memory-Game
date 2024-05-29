const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const colors = {
  hearts: 'red',
  diamonds: 'red',
  clubs: 'black',
  spades: 'black',
};

const cardNames = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
];

export const cards = [];

let id = 1;

suits.forEach(suit => {
  cardNames.forEach(name => {
    cards.push({
      id: id++,
      name: `${name}`,
      suit: suit,
      color: colors[suit],
      image: require(`../assets/cardImages/${name}_of_${suit}.png`),
    });
  });
});

// Add jokers
cards.push(
  { id: id++, name: 'Joker', suit: 'red', color: 'red', image: require('../assets/cardImages/red_joker.png' )},
  { id: id++, name: 'Joker', suit: 'black', color: 'black', image: require('../assets/cardImages/black_joker.png' )},
);

export const shuffleCards = () => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};