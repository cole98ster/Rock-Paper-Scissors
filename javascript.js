let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundCount = 0;
const maxRounds = 5; 

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

function playRound(playerSelection) {
    if (roundCount >= maxRounds) {
        displayResult("Game over! Refresh the page to play again.");
        return;
    }
    
    const computerChoice = getComputerChoice();
    
    if (playerSelection === computerChoice) {
        tieScore++;
        displayResult("It's a tie!");
    } else if (
        (playerSelection === 'rock' && computerChoice === 'scissors') ||
        (playerSelection === 'paper' && computerChoice === 'rock') ||
        (playerSelection === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        displayResult("User wins this round!");
    } else {
        computerScore++;
        displayResult("Computer wins this round!");
    }
    
    roundCount++;
    updateScoreDisplay();
    
    if (roundCount >= maxRounds) {
        endGame();
    }
}

function displayResult(message) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.textContent = message;
}

function updateScoreDisplay() {
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');
    const tieScoreDisplay = document.getElementById('tie-score');
    playerScoreDisplay.textContent = `Player: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    tieScoreDisplay.textContent = `Ties: ${tieScore}`;
}

function endGame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    const resultsContainer = document.getElementById('results');
    resultsContainer.textContent = `Game over! Final Score - Player: ${humanScore}, Computer: ${computerScore}, Ties: ${tieScore}`;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    console.log('Computer chose: ' + computerChoice);
    return computerChoice;
}