import React, { useState } from 'react';
import PlayersModal from './PlayersModal';
import GameBoard from './GameBoard';
import '../styles/App.css';

const App = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleStartGame = (player1, player2) => {
    console.log(`Starting game with players: ${player1} and ${player2}`);
  
  };

  return (
    <div className="app">
      {showModal && (
        <PlayersModal
          show={showModal}
          handleClose={handleCloseModal}
          handleStartGame={handleStartGame}
        />
      )}
      {!showModal && <GameBoard />}
    </div>
  );
};

export default App;
