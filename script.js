'use strict';

// A secret number between 1 and 20 that users will be guessing
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// todo: to be removed
document.querySelector('.number').textContent = secretNumber;

// Score that users will be starting with
let userScore = 20;
document.querySelector('.score').textContent = userScore;

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
        document.querySelector('.message').textContent = 'Correct number!'
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