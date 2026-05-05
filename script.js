'use strict';

// Score that users will be starting with
const userStartScore = 20;

// A secret number between 1 and 20 that users will be guessing
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize user's strarting score
let userScore = userStartScore;
document.querySelector('.score').textContent = userScore;

// Store user's highscore so far
let userHighscore = 0;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {

    if (userScore === 0) {
        document.querySelector('.message').textContent = 'Game over!'
        return;
    }

    // Get user's guessed number
    const guess = Number(document.querySelector('.guess').value);
    
    // Logic to check if user guessed the right number
    if(!guess){
        document.querySelector('.message').textContent = 'No number detected!'
    } else if (guess === secretNumber) {
        userScore -= 1;
        document.querySelector('.message').textContent = 'Correct number!'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = Math.max(userHighscore, userScore);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high!'
        userScore -= 1;
    } else {
        document.querySelector('.message').textContent = 'Too low!'
        userScore -= 1;
    }

    // Update the user score on display
    document.querySelector('.score').textContent = userScore;
    
});


// If user clicks on 'Play Again' button, we reset the game conditions
document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    userScore = userStartScore;
    document.querySelector('.score').textContent = userScore;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    
});