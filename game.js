'use strict'

const scope = ['rock', 'scissors', 'paper']

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function computerPlay() {
    const index = Math.floor(Math.random() * scope.length);
    return scope[index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return {
            'winner': 'draw',
            'playerSelection': capitalize(playerSelection),
            'computerSelection': capitalize(computerSelection)
        };
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
        return {
            'winner': "player",
            'playerSelection': capitalize(playerSelection),
            'computerSelection': capitalize(computerSelection)
        };
    } else {
        return {
            'winner': "computer",
            'playerSelection': capitalize(playerSelection),
            'computerSelection': capitalize(computerSelection)
        };
    }
}

function showCurrentScores(playerScores, computerScores) {
    console.log(`Player: ${playerScores}, Computer: ${computerScores}`);
}

function game() {
    let computerScores = 0;
    let playerScores = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Please choose: Rock, Scissors or Paper')
            .toLowerCase();

        const result = playRound(playerSelection, computerSelection);

        switch (result.winner) {
            case 'draw':
                console.log(`Draw! Both of players chose ${result.computerSelection}`);
                showCurrentScores(playerScores, computerScores);
                break;
            case "player":
                console.log(`You Win! ${result.playerSelection} beats ${result.computerSelection}`);
                playerScores++;
                showCurrentScores(playerScores, computerScores);
                break;
            case 'computer':
                console.log(`You Lose! ${result.computerSelection} beats ${result.playerSelection}`);
                computerScores++;
                showCurrentScores(playerScores, computerScores);
                break;
        }
    }

    if (playerScores > computerScores) {
        console.log(`You Win! ${playerScores}:${computerScores}`);
    } else if (playerScores < computerScores) {
        console.log(`You Lose! ${playerScores}:${computerScores}`);
    } else {
        console.log(`Draw! ${playerScores}:${computerScores}`);
    }
}

game();