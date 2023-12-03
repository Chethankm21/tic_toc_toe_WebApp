document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const restartButton = document.getElementById("restartButton");
    const popup = document.getElementById("popup");
    const winnerMessage = document.getElementById("winnerMessage");
    const popupRestartButton = document.getElementById("popupRestartButton");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Function to create cells in the tic-tac-toe board
    function createBoard() {
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            cell.addEventListener("click", handleCellClick);
            board.appendChild(cell);
        }
    }

    // Function to handle cell clicks
    function handleCellClick(event) {
        const index = event.target.dataset.index;
        if (gameBoard[index] === "" && !checkWinner()) {
            gameBoard[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            if (checkWinner()) {
                displayWinner();
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    // Function to check for a winner
    function checkWinner() {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true;
            }
        }

        return false;
    }

    // Function to display the winner in a popup
    function displayWinner() {
        popup.style.display = "block";
        winnerMessage.textContent = `Player ${currentPlayer} wins!`;
    }

    // Function to restart the game
    function restartGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.textContent = "";
        });
        popup.style.display = "none";
    }

    // Event listeners
    restartButton.addEventListener("click", restartGame);
    popupRestartButton.addEventListener("click", restartGame);

    // Initialize the board
    createBoard();
});
