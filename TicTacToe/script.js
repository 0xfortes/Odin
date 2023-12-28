// The Gameboard module encapsulates the game board functionality
const Gameboard = (() => {
    // The game board is represented as an array of 9 empty strings
    const board = Array(9).fill('');

    // Returns the current state of the game board
    const getBoard = () => board;

    // Resets the game board to an empty state
    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
    };

    // Expose the public methods and properties
    return { getBoard, resetBoard };
})(); // IIFE used here

// The Player factory creates player objects
const Player = (name, marker) => {
    return { name, marker };
};

// The Game module controls the flow of the game
const Game = (() => {
    // Create two players
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    // Initialize the current player to player1
    let currentPlayer = player1;
    // Flag to track if the game is active
    let gameActive = true;

    // Switches the current player between player1 and player2
    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    // Checks if there is a winner on the current game board
    const checkWinner = () => {
        const board = Gameboard.getBoard();
        // Define winning patterns (rows, columns, diagonals)
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        // Check each winning pattern
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            // If the markers on the board match in a winning pattern, return true
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }

        // If no winner is found, return false
        return false;
    };

    // Checks if the game is a tie (no empty spaces and no winner)
    const checkTie = () => {
        const board = Gameboard.getBoard();
        // If there are no empty spaces and no winner, it's a tie
        return !board.includes('') && !checkWinner();
    };

    // Ends the game and displays the result
    const endGame = (result) => {
        gameActive = false;
        DisplayController.renderResult(result);
    };

    // Handles a player's turn
    const playTurn = (index) => {
        // Check if the game is active and the selected space is empty
        if (gameActive && Gameboard.getBoard()[index] === '') {
            // Mark the space with the current player's marker
            Gameboard.getBoard()[index] = currentPlayer.marker;
            // Render the updated board on the UI
            DisplayController.renderBoard();

            // Check for a winner or a tie
            if (checkWinner()) {
                endGame(`${currentPlayer.name} wins!`);
            } else if (checkTie()) {
                endGame('It\'s a tie!');
            } else {
                // Switch to the next player if the game is still active
                switchPlayer();
            }
        }
    };

    // Restarts the game by resetting the board and other variables
    const restartGame = () => {
        Gameboard.resetBoard();
        gameActive = true;
        currentPlayer = player1;
        DisplayController.renderBoard();
        DisplayController.renderResult('');
    };

    // Expose the public methods and properties
    return { playTurn, restartGame };
})(); // IIFE used here

// The DisplayController module handles rendering the game on the UI
const DisplayController = (() => {
    // Get references to the HTML elements
    const boardContainer = document.getElementById('game-container');
    const resultContainer = document.getElementById('result-container');
    const restartBtn = document.getElementById('restart-btn');

    // Renders the game board on the UI
    const renderBoard = () => {
        boardContainer.innerHTML = '';
        const board = Gameboard.getBoard();

        // Create HTML elements for each board space
        for (let i = 0; i < board.length; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.textContent = board[i];
            // Add a click event listener to each space to handle player turns
            square.addEventListener('click', () => {
                Game.playTurn(i);
            });
            boardContainer.appendChild(square);
        }
    };

    // Renders the game result on the UI
    const renderResult = (result) => {
        resultContainer.textContent = result;
    };

    // Add a click event listener to the restart button to reset the game
    restartBtn.addEventListener('click', () => {
        Game.restartGame();
    });

    // Expose the public methods and properties
    return { renderBoard, renderResult };
})(); // IIFE used here

// Initialize the game by rendering the initial game board on the UI
DisplayController.renderBoard();
