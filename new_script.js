let rock = document.getElementById("btnRock");
let paper = document.getElementById("btnPaper");
let scissors = document.getElementById("btnScissor");
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let computerSelection;

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  computerSelection = getComputerChoice(["rock", "paper", "scissors"]);
  roundsPlayed++;

  if (playerSelection === computerSelection) {
    document.getElementById("placeholder").innerHTML = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    document.getElementById("placeholder").innerHTML = "You win!";
    playerScore++;
  } else {
    document.getElementById("placeholder").innerHTML = "You lose!";
    computerScore++;
  }
  if (roundsPlayed >= 5) {
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
    document.getElementById("final-score").innerHTML = "\nPlayer score: " + playerScore + " Computer Score: " + computerScore;
    if(playerScore > computerScore){
        document.getElementById("placeholder").innerHTML = "You won the game!";
      } else {
        document.getElementById("placeholder").innerHTML = "You lost the game!";
      } if (playerScore === computerScore){
        document.getElementById("placeholder").innerHTML = "The game is a tie!"
      }
      // Below creates the reset button
      var resetBtn = document.createElement("BUTTON");
      var resetBtnDiv = document.getElementById("reset-btn-container")
      
      resetBtn.setAttribute("id", "reset")
      resetBtn.setAttribute("class", "btn-reset")
      resetBtn.textContent = "Play Again!"
      
      resetBtnDiv.appendChild(resetBtn)
      resetBtn.addEventListener("click", function(){
        resetGame()
        resetBtn.remove()
      })
  }
  
}
// This resets all the values
function resetGame() {
  rock.disabled = false;
  scissors.disabled = false;
  paper.disabled = false;
  roundsPlayed = 0;
  playerScore = 0;
  computerScore = 0;
  document.getElementById("placeholder").innerHTML = "";
  document.getElementById("final-score").innerHTML = "";
}
// Function for all buttons, when user clicks a button, it registers their choice. Stored as "playerSelection"
rock.addEventListener("click", function () {
  playRound("rock");
});

paper.addEventListener("click", function () {
  playRound("paper");
});

scissors.addEventListener("click", function () {
  playRound("scissors");
});