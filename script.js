function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let humanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

  while (!choices.includes(humanChoice)) {
      humanChoice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
  }

  return humanChoice;
}

// Global variables
let humanScore = 0;
let computerScore = 0;

console.log(`Initial Human Score: ${humanScore}`);
console.log(`Initial Computer Score: ${computerScore}`);

function playRound(humanChoice, computerChoice) {

  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
      return "It's a tie!";
  } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++; // Increment human score for a win
        return "You win this round!";
      } else {
        computerScore++; // Increment computer score for a win
        return "Computer wins this round!";
      }
    }
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));



// Print updated scores
    console.log(`Current Human Score: ${humanScore}`);
    console.log(`Current Computer Score: ${computerScore}`);

    