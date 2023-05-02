
function getComputerChoice(choices){
    return choices[Math.floor(Math.random() * choices.length)];
}
let rock = document.getElementById('btnRock')
let paper = document.getElementById('btnPaper')
let scissors = document.getElementById('btnScissor')


computerSelection = getComputerChoice(["rock", "paper", "scissors"]);

rock.onclick = function(){
    rock = "rock"
    console.log(computerSelection)
    if (rock === computerSelection){
        document.write('Tie!')
    }
    else if(computerSelection === "scissors"){
        document.write('You win')
        
    }
    else{
        document.write("You lose")
    }
}
// function playRound(playerSelection, computerSelection){
//     switch(playerSelection.toLowerCase()){
//         case "rock":
//             if(computerSelection === "rock"){
//                 return "It's a tie!";
//             }
//             else if(computerSelection === "paper"){
//                 return "You lose! Paper beats rock.";
//             }
//             else{
//                 return "You win! Rock beats scissors.";
//             }
//             break;
//         case "paper":
//             if(computerSelection === "rock"){
//                 return "You win! Paper beats rock.";
//             }
//             else if(computerSelection === "paper"){
//                 return "It's a tie!";
//             }
//             else{
//                 return "You lose! Scissors beats paper.";
//             }
//             break;
//         case "scissors":
//             if(computerSelection === "rock"){
//                 return "You lose! Rock beats scissors.";
//             }
//             else if(computerSelection === "paper"){
//                 return "You win! Scissors beats paper.";
//             }
//             else{
//                 return "It's a tie!";
//             }
//             break;
//     }
// }


// function game(playRound){
    
//     for(i=0; i < 5; i++){
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

//console.log(playRound(playerSelection, computerSelection));
  