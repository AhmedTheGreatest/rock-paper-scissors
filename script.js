// Constants
let playerScore = 0 // Stores the player's score
let computerScore = 0 // Stores the computer's score

// DOM Elements
const rockButton = document.querySelector("#rock-btn")
const paperButton = document.querySelector("#paper-btn")
const scissorsButton = document.querySelector("#scissors-btn")
const restartButton = document.querySelector("#restart")

const modal = document.querySelector("#restart-modal")

const results = document.querySelector("#results")
const winnerText = document.querySelector("#winner")

const playerScoreText = document.querySelector("#player-score")
const computerScoreText = document.querySelector("#computer-score")

// Add an event listener to the play buttons
rockButton.addEventListener("click", () => handleClick("Rock"))
paperButton.addEventListener("click", () => handleClick("Paper"))
scissorsButton.addEventListener("click", () => handleClick("Scissors"))

// When the restart button is clicked, reset the scores, make the modal invisible, and update the score DOM elements
restartButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    modal.style.display = "none"
    updateScore()
})

// Handle the "play" buttons click
function handleClick(playerSelection) {
    playRound(playerSelection, getComputerChoice())
}

// Get the computer's choice of move to play
function getComputerChoice() {
    // Returns a random choice
    return randomChoice(["Rock", "Paper", "Scissors"])
}

// Plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    let winner = "" // Stores the winner of the round

    // Lower Case versions of the selections, to make the conditions easier
    let lowerPlayerSelection = playerSelection.toLowerCase()
    let lowerComputerSelection = computerSelection.toLowerCase()
    
    // If the game is a tie, set the winner to tie
    if (lowerPlayerSelection === lowerComputerSelection) {
        winner = "tie"
    // If the player has won, set winner to player, and increase the player score
    } else if (
        (lowerPlayerSelection  === "rock" && lowerComputerSelection === "scissors") ||
        (lowerPlayerSelection === "paper" && lowerComputerSelection === "rock") ||
        (lowerPlayerSelection === "scissors" && lowerComputerSelection === "paper")
    ) {
        winner = "player"
        playerScore++
    // Else if the computer has won, set the winner to computer and increase the computer score
    } else {
        winner = "computer"
        computerScore++
    }

    // Updates the DOM elements
    displayWinner(winner, playerSelection, computerSelection)
    updateScore()
}

// Display the winner of the game or round
function displayWinner(winner, playerSelection, computerSelection) {
    if (playerScore === 5) {
        results.textContent = "You WON the game!"
        winnerText.textContent = "You WON the game!"
        modal.style.display = "block" // Make the modal visible
    } else if (computerScore === 5) {
        results.textContent = "You LOST the game!"
        winnerText.textContent = "You LOST the game!"
        modal.style.display = "block" // Make the modal visible
    } else {
        switch (winner.toLowerCase()) {
            case "player":
                results.textContent = `You Won! ${playerSelection} beats ${computerSelection}`
                break;
            
            case "computer":
                results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
                break;
            
            case "tie":
                results.textContent = `It's a TIE! Both player chose ${playerSelection}`
                break;

            default:
                results.textContent = "ERROR"
                break;
        }
    }
}

// Update the score DOM elements
function updateScore() {
    playerScoreText.textContent = `Your Score: ${playerScore}`
    computerScoreText.textContent = `Computer's score: ${computerScore}`
}

// Returns a random item from a list
function randomChoice(items) {
    return items[Math.floor(Math.random() * items.length)]
}