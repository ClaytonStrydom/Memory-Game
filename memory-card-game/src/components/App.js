import React, { useState } from 'react';
import PlayersModal from './PlayersModal';
import GameBoard from './GameBoard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [players, setPlayers] = useState({ player1: '', player2: '' });
  const [gameStarted, setGameStarted] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleStartGame = (player1, player2) => {
    setPlayers({ player1, player2 });
    setGameStarted(true);
  };

  return (
    <div className="App">
      <PlayersModal
        show={showModal}
        handleClose={handleClose}
        handleStartGame={handleStartGame}
      />
      {gameStarted && <GameBoard players={players} />}
    </div>
  );
};

export default App;
