let playerScore = 0;
let computerScore = 0;
function computerPlay() {// 0 is rock, 1 is paper, 2 is scissors
    let randomValue = Math.floor(Math.random()*3);
    if (randomValue===0){
        return "Rock";
    }
    else if (randomValue===1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
function playRound(playerSelection, computerSelection){
    let winCondition = false;
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    if (playerSelection===computerSelection){ //Set up condition where player draws
        return `Draw! Both players chose ${computerSelection}.`;
    }
    else if ((playerSelection==="Rock" && computerSelection==="Scissors") || //Set up condition where player wins
             (playerSelection==="Paper" && computerSelection==="Rock") ||
             (playerSelection==="Scissors" && computerSelection==="Paper")){ 
        winCondition = true;
    }
    if (winCondition===true) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } 
    else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function test(e){

    let playerSelection = e.path[1].id;
    let computerSelection = computerPlay();
    console.log(e.path[1].id);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`The current score is:\nPlayer: ${playerScore}\tComputer: ${computerScore}`);
    playerS.innerHTML = playerScore;
    computerS.innerHTML = computerScore;
    if (playerScore === 5 || computerScore=== 5){
        if (playerScore === 5){
            gameW.textContent = "You did it! Luck was on your side!";
            console.log("You did it! Luck was on your side!");
        }
        else if (computerScore===5){
            gameW.textContent = "You lost! Luck was not on your side";
            console.log("You lost! Luck was not on your side");
        }
        playerScore = 0;
        computerScore = 0;
    }
}
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const countGame = document.querySelectorAll("button");
const playerS = document.querySelector("#player-count");
const computerS = document.querySelector("#computer-count");
const gameW = document.querySelector("#game-win");
countGame.forEach(countGame => countGame.addEventListener('click', test))
