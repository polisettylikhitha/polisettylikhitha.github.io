const gridSize = 5;
const gameContainer = document.getElementById('game-container');
const timerDisplay = document.getElementById('timer');
const clickDisplay = document.getElementById('clicks');
const cells = [];
let timerInterval;
let seconds = 0;
let clicks = 0;
const maxClicks = 30; // Maximum allowed clicks

function initializeGame() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', () => {
            toggleCell(cell);
            incrementClickCounter();
        });
        gameContainer.appendChild(cell);
        cells.push(cell);

        cell.classList.toggle('is-off', Math.random() < 0.5);
    }
    startTimer();
}

function toggleCell(cell) {
    const index = parseInt(cell.dataset.index);
    cell.classList.toggle('is-off');
    toggleNeighbor(index - gridSize);
    toggleNeighbor(index + gridSize);
    if (index % gridSize !== 0) toggleNeighbor(index - 1);
    if (index % gridSize !== gridSize - 1) toggleNeighbor(index + 1);
    setTimeout(checkWin, 100);
}

function toggleNeighbor(index) {
    if (index >= 0 && index < cells.length) {
        cells[index].classList.toggle('is-off');
    }
}

function checkWin() {
    const isWinner = cells.every(cell => !cell.classList.contains('is-off'));
    if (isWinner) {
        clearInterval(timerInterval);
        window.alert(`You win! Time taken: ${seconds} seconds, Clicks: ${clicks}`);
        resetGame();
    } else if (clicks >= maxClicks) {
        clearInterval(timerInterval);
        window.alert("Game Over: Maximum clicks reached!");
        resetGame();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.innerText = `Time: ${seconds} seconds`;
    }, 1000);
}

function resetGame() {
    clearInterval(timerInterval);
    seconds = 0;
    clicks = 0;
    timerDisplay.innerText = 'Time: 0 seconds';
    updateClickDisplay();
    cells.forEach(cell => cell.classList.toggle('is-off', Math.random() < 0.5));
    startTimer();
}

function incrementClickCounter() {
    clicks++;
    updateClickDisplay();
}

function updateClickDisplay() {
    clickDisplay.innerText = `Clicks: ${clicks}`;
}

initializeGame();

// event listener for the Reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);

// event listener for the Addendum button
const addendumButton = document.getElementById('addendum-button');
const addendumSection = document.getElementById('addendum');

addendumButton.addEventListener('click', function() {
    addendumSection.classList.toggle('show');
});