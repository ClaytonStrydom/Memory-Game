import { createSlice } from '@reduxjs/toolkit';
import { shuffleCards } from '../utils/cardData'; // Utility function to shuffle cards

const initialState = {
  cards: shuffleCards(),
  flippedCards: [],
  matchedCards: [],
  currentPlayer: 'player1',
  scores: { player1: 0, player2: 0 },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    flipCard: (state, action) => {
      const cardId = action.payload;
      const card = state.cards.find(card => card.id === cardId);
      card.isFlipped = !card.isFlipped;
    },
    addFlippedCard: (state, action) => {
      state.flippedCards.push(action.payload);
      if (state.flippedCards.length === 2) {
        const [card1, card2] = state.flippedCards;
        if (card1.name === card2.name && card1.color === card2.color) {
          state.matchedCards.push(card1, card2);
          state.scores[state.currentPlayer]++;
          state.flippedCards = [];
        }
      }
    },
    resetFlippedCards: (state) => {
      state.flippedCards = [];
      state.currentPlayer = state.currentPlayer === 'player1' ? 'player2' : 'player1';
    },
  },
});

export const { flipCard, addFlippedCard, resetFlippedCards } = gameSlice.actions;

export default gameSlice.reducer;