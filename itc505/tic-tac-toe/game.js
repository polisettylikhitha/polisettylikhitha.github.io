// Variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Functions
function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        
        if (checkWinner()) {
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (gameBoard.every(cell => cell !== '')) {
            document.getElementById('message').innerText = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern =>
        gameBoard[pattern[0]] !== '' &&
        gameBoard[pattern[0]] === gameBoard[pattern[1]] &&
        gameBoard[pattern[1]] === gameBoard[pattern[2]]
    );
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;

    const cells = document.getElementById('board').children;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

document.getElementById('endButton').addEventListener('click', function() {
    // Redirect to the game page
    window.location.href = 'index.html';
});

// Generate game board dynamically
const boardElement = document.getElementById('board');
for (let i = 0; i < 9; i++) {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.addEventListener('click', () => handleCellClick(i));
    boardElement.appendChild(cellElement);
}

