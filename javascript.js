const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 0; i <= 4; i++) {
    playRound(i);
  }
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  //console.log(computerSelection);
  const winner = checkWinner(playerSelection, computerSelection);
  //console.log(winner);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type rock, paper or scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Type Rock, Paper, or Scissors. Check Spelling!");
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins: ", playerWins);
  console.log("Computer Wins: ", computerWins);
  console.log("Ties: ", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round: ", round);
  console.log("Player chose: ", playerChoice);
  console.log("Computer Choice: ", computerChoice);
  console.log(winner, "Won the Round");
  console.log("-------------------------------");
}

game();

// function getComputerChoice

// function playRound(playerSelection, computerSelection) {
//     // your code here!
//   }

//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));

// function getComputerChoice randomly rock paper scissors
// fuction plays single round takes two parameters playerSelection and
//                                                  computerSelection
// returns a string declaring a winner
//
// make function playerSelection case insensitive
