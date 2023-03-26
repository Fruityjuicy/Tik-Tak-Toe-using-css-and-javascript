// Initialize game variables
let squares = document.querySelectorAll(".square");
let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

// Define winning combinations
const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

// Handle square click events
function handleSquareClick(e) {
	// Get index of clicked square
	let squareIndex = e.target.id;

	// Check if square is already filled or game is inactive
	if (gameState[squareIndex] !== "" || !gameActive) {
		return;
	}

	// Fill square with current player's symbol
	gameState[squareIndex] = currentPlayer;
	e.target.innerText = currentPlayer;

	// Check if current player has won
	checkForWin();

	// Switch to next player
	currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Check if current player has won
function checkForWin() {
	for (let i = 0; i < winningCombinations.length; i++) {
		let a = gameState[winningCombinations[i][0]];
		let b = gameState[winningCombinations[i][1]];
		let c = gameState[winningCombinations[i][2]];

		if (a === "" || b === "" || c === "") {
			continue;
		}

		if (a === b && b === c) {
			gameActive = false;
			alert("Player " + currentPlayer + " has won!");
			return;
		}
	}

	// Check if game is a tie
	let isTie = !gameState.includes("");
	if (isTie) {
		gameActive = false;
		alert("Game is a tie!");
		return;
