const button = document.querySelectorAll('.btn');
const label = document.querySelector('.label');
const player = document.querySelector('.playerChoice');
const computer = document.querySelector('.computerChoice');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const scoreText = document.querySelector('.scoreText');

let playerSelection;
let winCheck;
let pScore = 0;
let cScore = 0;

button.forEach(button =>{
  button.addEventListener('click', () => {
    if (pScore !== 10 && cScore !== 10) {
      playerSelection = button.id;
      computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      update();
    } else if (pScore == 10) {
      label.innerText = "Winner: Player!";
      scoreText.innerText = "Click reset to play again";
    } else if (cScore == 10) {
      label.innerText = "Winner: Computer!";
      scoreText.innerText = "Click reset to play again";
    }
  });
});

function update () {
  label.innerText = winCheck;
  player.innerText = playerSelection;
  computer.innerText = computerSelection;
  if (winCheck === 'You Win') {
    playerScore.innerText++
    pScore++;
  } else if (winCheck === 'You Lose') {
    computerScore.innerText++
    cScore++;
  } 
}

function getComputerChoice () {
  let choices = ["rock", "paper", "scissors"];
  let x = Math.floor(Math.random() * 3);
  return choices[x];
}

function reset () {
  playerScore.innerText = 0;
  computerScore.innerText = 0;
  label.innerText = "Start";
  player.innerText = "";
  computer.innerText = "";
  pScore = 0;
  cScore = 0;
  scoreText.innerText = "score 10 to win!";
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case 'rock':
        return winCheck = "Tie"
      case 'paper':
        return winCheck = "You Lose"
      case 'scissors':
        return winCheck = "You Win"
    }
  } else if (playerSelection === "paper") {
      switch (computerSelection) {
        case 'rock':
          return winCheck = "You Win"
        case 'paper':
          return winCheck = "Tie"
        case 'scissors':
          return winCheck = "You Lose"
    }
  } else if (playerSelection === "scissors") {
      switch (computerSelection) {
        case 'rock':
          return winCheck = "You Lose"
        case 'paper':
          return winCheck = "You Win"
        case 'scissors':
          return winCheck = "Tie"
    }
  } 
}
