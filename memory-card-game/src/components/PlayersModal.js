import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling

const PlayersModal = ({ show, handleClose, handleStartGame }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = () => {
    if (player1.trim() !== '' && player2.trim() !== '') {
      handleStartGame(player1, player2);
      handleClose();
    } else {
      alert('Please enter both players\' names.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enter Players' Names</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="player1">
            <Form.Label>Player 1:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Player 1's Name"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="player2">
            <Form.Label>Player 2:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Player 2's Name"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Start Game
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlayersModal;