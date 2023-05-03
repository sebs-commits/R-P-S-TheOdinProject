function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}
let rock = document.getElementById("btnRock");
let paper = document.getElementById("btnPaper");
let scissors = document.getElementById("btnScissor");
let score = 0;
let roundsPlayed = 0;
let computerSelection;
function playRound() {
  computerSelection = getComputerChoice(['rock', 'paper', 'scissors'])
  rock.onclick = function () {
    rock = "rock";
    roundsPlayed++;
    if (rock === computerSelection) {
      document.getElementById("placeholder").innerHTML = "Its a tie!";
    } else if (computerSelection === "scissors") {
      document.getElementById("placeholder").innerHTML = "You win!";
    } else {
      document.getElementById("placeholder").innerHTML = "You lose!";
    }
  };
  paper.onclick = function () {
    paper = "paper";
    roundsPlayed++;
    if (paper === computerSelection) {
      document.getElementById("placeholder").innerHTML = "Its a tie!";
    } else if (computerSelection === "rock") {
      document.getElementById("placeholder").innerHTML = "You win!";
    } else {
      document.getElementById("placeholder").innerHTML = "You lose!";
    }
  };
  scissors.onclick = function () {
    scissors = "scissors";
    roundsPlayed++;
    if (scissors === computerSelection) {
      document.getElementById("placeholder").innerHTML = "Its a tie!";
    } else if (computerSelection === "paper") {
      document.getElementById("placeholder").innerHTML = "You win!";
    } else {
      document.getElementById("placeholder").innerHTML = "You lose!";
    }
    console.log(roundsPlayed);
  };
  resetGame();
}
// Function to reset all the variables
function resetGame() {
  rock.disabled = false;
  scissors.disabled = false;
  paper.disabled = false;
  if (roundsPlayed >= 5) {
    roundsPlayed = 0;
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
  }
}
function resetPlaceholder() {
  document.getElementById("placeholder").innerHTML = "";
}

rock.onclick = function () {
  for (let i = 1; i <= 5; i++) {
    playRound();
    resetPlaceholder();
  }
};
