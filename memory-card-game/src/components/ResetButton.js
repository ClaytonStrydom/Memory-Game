import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../store/gameSlice';
import '../styles/resetButton.css'

const ResetButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame()); // Dispatch the action to reset the game
  };

  return (
    <button className="reset-button" onClick={handleReset}>
      Reset Game
    </button>
  );
};

export default ResetButton;