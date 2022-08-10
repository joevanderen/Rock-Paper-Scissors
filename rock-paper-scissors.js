function getComputerChoice() {
    choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1) {
        return 'rock'
    }
    if (choice === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playChoice, compChoice) {
    let playLowerCase = playChoice.toLowerCase();
    let playNum = choiceToNumber(playLowerCase);
    let compNum = choiceToNumber(compChoice);
    let gameTime = compNum - playNum;
    if (gameTime === 0) {
        results.textContent = "It's a tie!";
        return 0
    } if (gameTime === 1 || gameTime === -2) {
        results.textContent = `You Lose! ${compChoice} beats ${playLowerCase}`;
        return 1
    } else {
        results.textContent = `You Win! ${playLowerCase} beats ${compChoice}`;
        return -1
    }
}

function choiceToNumber(word) {
    if (word === 'rock') {
        return 1
    } if (word === 'paper') {
        return 2
    } if (word === 'scissors') {
        return 3
    } else {
        return 
    }
}

function game() {
    let gameCounter = 0;
    for (let i = 0; i < 5; i++) {
        let playChoice = prompt("Rock, Paper, or Scissors?", "rock");
        let compChoice = getComputerChoice();
        result = playRound(playChoice, compChoice);
        gameCounter += result;
        console.log(gameCounter);
    }
    if (gameCounter === 0) {
        return 'After 5 rounds, It\'s a tie!'
    } if (gameCounter > 0) {
        return 'Sorry! You lost! Better sell your body for money'
    } else {
        return 'You FUCKING won! Fuck yeah!'
    }
}

function btnGame(pt) {
    if (point < 0) {
        pScore -= point;
    } if (point > 0) {
        cScore += point;
    }
    score.textContent = `Your Score: ${pScore} Computer Score: ${cScore}`;
    if (pScore === 5) {
        const winner = document.createElement('div');
        winner.classList.add('winnder');
        winner.textContent = `You Win!`
        score.appendChild(winner);
        cScore = 0;
        pScore = 0; 
    } if (cScore ===5) {
        const winner = document.createElement('div');
        winner.classList.add('winnder');
        winner.textContent = `You Lose!`
        score.appendChild(winner);
        cScore = 0;
        pScore = 0;
    }
}

const results = document.querySelector('#results');

document.getElementById('rock').onclick = function(){
    point = playRound('rock', getComputerChoice());
    btnGame(point);
}

document.getElementById('paper').onclick = function(){
    point = playRound('paper', getComputerChoice());
    btnGame(point);
}

document.getElementById('scissors').onclick = function(){
    point = playRound('scissors', getComputerChoice());
    btnGame(point);
}

let pScore = 0, cScore = 0;
const score = document.querySelector('#score');