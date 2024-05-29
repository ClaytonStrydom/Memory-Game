The objective was to create a Memory (Concentration) card game using React, Redux Toolkit, and Redux-Thunk for state management and asynchronous actions.
Initial Setup
-Project Initialization:
    Created a new React project.
    Installed necessary dependencies: React, Redux, Redux Toolkit, Redux-Thunk.
-Folder Structure:
    Organized the project folder structure with src, assets, components, and store directories.
-Redux Setup
    Set up the Redux store and created slices for managing the game state.
    Created gameSlice.js to handle game-related state and actions.

Development Phases
Phase 1: Basic Game Setup
-Component Structure:
    Created GameBoard.js as the main component to display the game.
    Created Card.js component to represent individual cards.
-Game Logic:
    Implemented basic game logic in gameSlice.js:
      flipCard: Flips a card.
      addFlippedCard: Adds a card to the list of flipped cards.
      resetFlippedCards: Resets the flipped cards list.
      increaseScore: Increases the score for the current player.
      switchPlayer: Switches the turn between players.
      resetGame: Resets the game state.
-Game Interaction:
  Managed card interactions and game state updates in GameBoard.js.

Phase 2: Game Styling
-CSS Styling:
    Applied initial styling for the game components using CSS.
    Ensured the game board and player info sections were visually appealing.
-Font Styling:
    Updated the project's font to use Montserrat throughout the game for a consistent and modern look.

Phase 3: Enhancements and Bug Fixes
-Game Controls:
    Added Reset Game and Exit buttons to control the game flow.
    Ensured buttons were styled and positioned correctly using CSS.
-Shuffling Cards:
    Implemented a shuffle function in gameSlice.js to shuffle cards when the game is reset.
    Ensured cards are flipped back face down and shuffled when the reset button is clicked.
-Bug Fixes:
    Fixed issues related to resetting the game state, including ensuring all cards are flipped back face down and scores are reset.
