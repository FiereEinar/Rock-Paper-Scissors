const button = document.querySelectorAll('.btn');
const label = document.querySelector('.label');
const player = document.querySelector('.playerChoice');
const computer = document.querySelector('.computerChoice');

let playerSelection;
let winCheck;

button.forEach(button =>{
  button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    update();
  });
});

function update () {
  label.innerText = winCheck;
  player.innerText = playerSelection;
  computer.innerText = computerSelection;
}

function getComputerChoice () {
  let choices = ["rock", "paper", "scissors"];
  let x = Math.floor(Math.random() * 3);
  return choices[x];
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case 'rock':
        return winCheck = "Tie"
        break;
      case 'paper':
        return winCheck = "You Lose"
        break;
      case 'scissors':
        return winCheck = "You Win"
        break;
    }
  } else if (playerSelection === "paper") {
      switch (computerSelection) {
        case 'rock':
          return winCheck = "You Win"
          break;
        case 'paper':
          return winCheck = "Tie"
          break;
        case 'scissors':
          return winCheck = "You Lose"
          break;
    }
  } else if (playerSelection === "scissors") {
      switch (computerSelection) {
        case 'rock':
          return winCheck = "You Lose"
          break;
        case 'paper':
          return winCheck = "You Win"
          break;
        case 'scissors':
          return winCheck = "Tie"
          break;
    }
  } 
}
