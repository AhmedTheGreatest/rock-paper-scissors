// Constants
const ROUNDS = 5; // Stores the number of rounds to be played

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

// Plays a whole game of Rock, Paper, Scissors, depending on the ROUNDS constant
function game() {
    // Play ROUNDS number of rounds
    for (let i = 0; i < ROUNDS; i++) {
        let result; // Result string of the current game

        // Keep playing until it isn't a tie
        do {
            let playerSelection; // Stores the move selection of the player

            // Keep prompting the user for a move until it is a valid move
            do {
                // If the user cancels the prompt, then reprompt
                do {
                    playerSelection = prompt("What do you want to choose: 'Rock', 'Paper', or 'Scissors.'")    
                } while (playerSelection === null);
            } while (
                playerSelection.toLowerCase() !== "rock" && 
                playerSelection.toLowerCase() !== "paper" &&
                playerSelection.toLowerCase() !== "scissors"
            );
            
            // Plays a round of Rock, Paper, Scissors
            result = playRound(playerSelection, getComputerChoice())
            
            // If the game is a tie, Display a message, and continue with the next iteration
            if (result === null) {
                console.log("It's a TIE! Replay the round.")
                continue
            }
            
            // Displays the result and the score
            console.log(`${result}`)
            console.log(`Your score is ${playerScore} while the computer's score is ${computerScore}.`)
        } while (result === null);
    }

    // Displays the winner and the score
    if (playerScore > computerScore) {
        console.log("YOU WON THE GAME!")
        console.log(`You had ${playerScore} points, while the computer had ${computerScore}.`)
    } else {
        console.log("You lost the game!")
        console.log(`You had ${playerScore} points, while the computer had ${computerScore}.`)
    }
}

// Returns a random item from a list
function randomChoice(items) {
    return items[Math.floor(Math.random() * items.length)]
}

game(); // Plays the game