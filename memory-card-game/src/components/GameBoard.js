import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Cards';
import { flipCard, addFlippedCard, resetFlippedCards } from '../store/gameSlice';

const GameBoard = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.game.cards);
  const flippedCards = useSelector(state => state.game.flippedCards);
  const currentPlayer = useSelector(state => state.game.currentPlayer);
  const scores = useSelector(state => state.game.scores);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      if (card1.name !== card2.name || card1.color !== card2.color) {
        setTimeout(() => {
          dispatch(flipCard(card1.id));
          dispatch(flipCard(card2.id));
          dispatch(resetFlippedCards());
        }, 1000);
      } else {
        dispatch(resetFlippedCards());
      }
    }
  }, [flippedCards, dispatch]);

  const handleCardClick = (id) => {
    dispatch(flipCard(id));
    const card = cards.find(card => card.id === id);
    dispatch(addFlippedCard(card));
  };

  return (
    <div className="game-container">
      <div className="player-info left">
        <h2>Player 1</h2>
        <p>Score: {scores.player1}</p>
        {currentPlayer === 'Player 1' && <p>It's Your Turn</p>}
      </div>
      <div className="game-board">
        {cards.map(card => (
          <Card key={card.id} card={card} onClick={() => handleCardClick(card.id)} />
        ))}
      </div>
      <div className="player-info right">
        <h2>Player 2</h2>
        <p>Score: {scores.player2}</p>
        {currentPlayer === 'Player 2' && <p>It's Your Turn</p>}
      </div>
    </div>
  );
};

export default GameBoard;