import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPlayerNames } from '../store/gameSlice'; // Import setPlayerNames action
import '../styles/PlayerModal.css'; // Adjust the path to your CSS file if necessary
import avatar1 from '../assets/astronaut1.png';
import avatar2 from '../assets/astronaut2.png';

const PlayersModal = ({ show, handleClose, handleStartGame }) => {
  const dispatch = useDispatch();
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = () => {
    if (player1.trim() !== '' && player2.trim() !== '') {
      dispatch(setPlayerNames({ player1, player2 })); // Dispatch action to set player names
      handleStartGame(player1, player2);
      handleClose();
    } else {
      alert('Please enter both players\' names.');
    }
  };

  return (
    <div className={`modal-background ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title centered">Memory</h2>
          <button className="modal-exit-button" onClick={handleClose}>Exit Game</button>
        </div>
        
        <div className="modal-body">
          <h2 className="modal-title centered">Are you ready to play?</h2>
          <div className="player-inputs">
            <div className="player">
              <img src={avatar1} alt="Avatar" className="avatar" />
              <input
                type="text"
                placeholder="Enter Player 1's Name"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="player">
              <img src={avatar2} alt="Avatar" className="avatar" />
              <input
                type="text"
                placeholder="Enter Player 2's Name"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="start-game-button" onClick={handleSubmit}>Let's Play</button>
        </div>
      </div>
    </div>
  );
};

export default PlayersModal;
