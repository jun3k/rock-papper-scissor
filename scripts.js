getPlayerSelection = () => playerSelection = prompt("Chice: rock, papper or scissor")

getComputerSelection = () => {
    random = (Math.round(Math.random()*3))
    if (random === 0){
        computerSelection = "rock";
        return `${computerSelection}`;
    } else if (random === 1){
        computerSelection = "papper";
        return `${computerSelection}`;
    } else {
        computerSelection = "scissor";
        return `${computerSelection}`
    }
}

playRound = function (playerSelection, computerSelection){
    if(
       playerSelection === "rock" && computerSelection === "scissor" ||
       playerSelection === "papper" && computerSelection === "rock" ||
       playerSelection === "scissor" && computerSelection === "papper" ){
        return alert(`You win! ${playerSelection} beats ${computerSelection}`)
    } else if(
        playerSelection === "rock" && computerSelection === "papper" ||   playerSelection === "papper" && computerSelection === "scissor" || playerSelection === "scissor" && computerSelection === "rock"){
            return alert(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }else if(playerSelection === computerSelection){
        return alert(`Is a tie!`)
    }
    return alert(`something went wrong`);
}

playGame = function (play){
    do {
        playRound(getPlayerSelection(), getComputerSelection());
        play = confirm("Do you want play again?")
    } while(play===true);
}

playGame();
