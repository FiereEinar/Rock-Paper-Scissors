let winCheck;
let playerSelection;
let computerSelection;
let input;

const label = document.querySelector(".label");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function(){
    label.innerText = buttons.value;
  });
});


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


function inputChecker (playerSelection) {
  if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
    return input = true;
  }
}


function game() {
  
  inputChecker(playerSelection);
  if (playerSelection === '' || playerSelection === null) {
    return;
  } else if (input) {
    alert("Only enter rock, paper, or scissors");
  } else {
    playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  alert(`The computer chose - ${computerSelection}
You chose - ${playerSelection}
  
${winCheck}`);
  }
} 