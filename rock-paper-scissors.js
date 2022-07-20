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
        console.log("It's a tie!");
        return 0
    } if (gameTime === 1 || gameTime === -2) {
        console.log(`You Lose! ${compChoice} beats ${playLowerCase}`);
        return 1
    } else {
        console.log(`You Win! ${playLowerCase} beats ${compChoice}`);
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

console.log(game()); 

