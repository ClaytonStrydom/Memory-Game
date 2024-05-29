import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Cards'; // Adjust the path to your Card component
import { flipCard, addFlippedCard, resetFlippedCards, increaseScore, resetGame } from '../store/gameSlice'; // Import resetGame action

const GameBoard = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.game.cards);
  const flippedCards = useSelector(state => state.game.flippedCards);
  const currentPlayer = useSelector(state => state.game.currentPlayer);
  const scores = useSelector(state => state.game.scores);
  const playerNames = useSelector(state => state.game.playerNames);

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
        dispatch(increaseScore(currentPlayer));
      }
    }
  }, [flippedCards, currentPlayer, dispatch, playerNames]);

  const handleCardClick = (id) => {
    dispatch(flipCard(id));
    const card = cards.find(card => card.id === id);
    dispatch(addFlippedCard(card));
  };

  const handleReset = () => {
    dispatch(resetGame()); // Dispatch the resetGame action
  };

  const handleExit = () => {
    // Implement exit logic here, e.g., redirect to home or exit the game
    console.log('Exiting game...');
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h1>Memory</h1>
        <div className="game-controls">
          <button className="exit-button" onClick={handleExit}>Exit</button>
          <button className="reset-button" onClick={handleReset}>Reset Game</button>
        </div>
      </div>
      <div className="player-info left">
        <h2>{playerNames.player1}</h2>
        <p>Score: {scores.player1}</p>
        {currentPlayer === 'player1' && <p className="turn-indicator">It's Your Turn</p>}
      </div>
      <div className="game-board">
        {cards.map(card => (
          <Card key={card.id} card={card} onClick={() => handleCardClick(card.id)} />
        ))}
      </div>
      <div className="player-info right">
        <h2>{playerNames.player2}</h2>
        <p>Score: {scores.player2}</p>
        {currentPlayer === 'player2' && <p className="turn-indicator">It's Your Turn</p>}
      </div>
    </div>
  );
};

export default GameBoard;