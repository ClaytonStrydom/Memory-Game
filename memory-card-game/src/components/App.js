import React, { useState } from 'react';
import PlayersModal from './PlayersModal';
import GameBoard from './GameBoard'; // Replace with your actual game board component
import '../styles/App.css'; // Adjust the path to your CSS file if necessary

const App = () => {
  const [showModal, setShowModal] = useState(true); // Initial state to show modal

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleStartGame = (player1, player2) => {
    console.log(`Starting game with players: ${player1} and ${player2}`);
    // Perform any actions needed to start the game
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
      {!showModal && <GameBoard />} {/* Render game board when modal is closed */}
    </div>
  );
};

export default App;
