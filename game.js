'use strict'

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function computerPlay() {
    const scope = ['rock', 'scissors', 'paper'];
    const index = Math.floor(Math.random() * scope.length);
    return scope[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `Draw! Both players chose ${capitalize(playerSelection)}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } else {
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
