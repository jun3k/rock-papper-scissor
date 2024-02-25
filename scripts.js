getPlayerSelection = () => playerSelection = prompt("Chice: rock, papper or scissor")

getComputerSelection = () => {
    random = (Math.round(Math.random()*3))
    if (random === 0){
        computerSelection = "rock";
        return `${computerSelection}`;
    } else if (random === 1){
        computerSelection = "papper";
        return `${computerSelection}`;
    }
    computerSelection = "scissor";
    return `${computerSelection}`
}

console.log(getComputerSelection());