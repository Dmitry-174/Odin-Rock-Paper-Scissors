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
    let result = {}
    if (playerSelection === computerSelection) {
        result = {
            winner: 'draw',
            playerSelection: capitalize(playerSelection),
            computerSelection: capitalize(computerSelection)
        };
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
        result = {
            winner: "player",
            playerSelection: capitalize(playerSelection),
            computerSelection: capitalize(computerSelection)
        };
    } else {
        result = {
            winner: "computer",
            playerSelection: capitalize(playerSelection),
            computerSelection: capitalize(computerSelection)
        };
    }
    return result;
}

function showCurrentScores(playerScores, computerScores) {
    scoresEl.textContent = `Player: ${playerScores}, \
    Computer: ${computerScores}`;
}

function makeAllButtonsDisable() {
    btns.forEach(btn => {
        btn.setAttribute('disabled', 'disabled');
    })
}

let computerScores = 0;
let playerScores = 0;
let stopGame = false;

const resultEl = document.querySelector('.result');
const scoresEl = document.querySelector('.scores')
const finalResultEl = document.querySelector('.final-result');

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (stopGame) return;
        const result = playRound(e.target.textContent.toLowerCase(), computerPlay());
        switch (result.winner) {
            case 'draw':
                resultEl.textContent = `Draw! Computer also \
                chose ${result.computerSelection}`;
                showCurrentScores(playerScores, computerScores);
                break;
            case "player":
                resultEl.textContent = `You Win! ${result.playerSelection} \
                beats ${result.computerSelection}`;
                playerScores++;
                showCurrentScores(playerScores, computerScores);
                break;
            case 'computer':
                resultEl.textContent = `You Lose! ${result.computerSelection} \
                beats ${result.playerSelection}`;
                computerScores++;
                showCurrentScores(playerScores, computerScores);
                break;
        }
        if (computerScores >= 5 || playerScores >= 5) {
            stopGame = true;
            makeAllButtonsDisable();
            if (computerScores > playerScores) {
                finalResultEl.textContent = `You LOSE!`
            } else {
                finalResultEl.textContent = `You WIN!`
            }

        }
    })
});