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

function game(){
    for(i=0;i<5;i++) {
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`The current score is:\nPlayer: ${playerScore}\tComputer: ${computerScore}`)
    }
}

game();