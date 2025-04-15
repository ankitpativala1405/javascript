let board = document.getElementById('board');
let cells = document.querySelectorAll('.cell');
let resetBtn = document.getElementById('resetBtn');
let status = document.getElementById('status');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

// Winning combinations
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Handle player move
function handleCellClick(e) {
    const cellIndex = e.target.getAttribute('data-index');

    if (gameState[cellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    e.target.classList.add('taken');

    checkWinner();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Check for winner
function checkWinner() {
    let winner = null;

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            winner = gameState[a];
            break;
        }
    }

    if (winner) {
        gameActive = false;
        status.textContent = `${winner} wins!`;
    } else if (!gameState.includes('')) {
        gameActive = false;
        status.textContent = "It's a draw!";
    }
}

// Reset the game
function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    status.textContent = '';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken');
    });
}

// Event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetBtn.addEventListener('click', resetGame);



document.querySelector("#myform").addEventListener("submit", (e) => {
    e.preventDefault();

    let players=JSON.parse(localStorage.getItem("players")) || []

    let player1 =document.getElementById("player1").value;
    let player2 =document.getElementById("player2").value;

    let player={player1:player1,
        player2:player2
    }

    players.push(player)

    localStorage.setItem("players", JSON.stringify(players));

    document.querySelector(".game-container").style.display = "block";
    document.querySelector("#myform").style.display = "none"; 

})