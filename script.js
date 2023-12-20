let playerScore = 0; // Stores the player's score
let computerScore = 0; // Stores the computer's score

// Get the computer's choice of move to play
function getComputerChoice() {
    // Returns a random choice
    return randomChoice(["Rock", "Paper", "Scissors"])
}

// Plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    let won = false // Stores if the player has won

    // Lower Case versions of the selections, to make the conditions easier
    let lowerPlayerSelection = playerSelection.toLowerCase()
    let lowerComputerSelection = computerSelection.toLowerCase()
    
    // If the game is a tie, return null
    if (lowerPlayerSelection === lowerComputerSelection) {
        return null
    // If the player has won, set won to true, and increase the score
    } else if (
        (lowerPlayerSelection  === "rock" && lowerComputerSelection === "scissors") ||
        (lowerPlayerSelection === "paper" && lowerComputerSelection === "rock") ||
        (lowerPlayerSelection === "scissors" && lowerComputerSelection === "paper")
    ) {
        won = true
        playerScore++
    // Else if the player has lost, set won to false
    } else {
        won = false
        computerScore++
    }

    // Return a win or loss message
    return (won == true) ? `You Won! ${playerSelection} beats ${computerSelection}` : `You Lose! ${computerSelection} beats ${playerSelection}`
}

// Returns a random item from a list
function randomChoice(items) {
    return items[Math.floor(Math.random() * items.length)]
}

const playerChoice = "Rock" // Player's choice

console.log(playRound(getComputerChoice(), playerChoice)) // Plays a round and then displays the result