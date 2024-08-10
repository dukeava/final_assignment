let targetNumber = Math.floor(Math.random() * 100) + 1;
let chancesLeft = 5;
let wins = 0;
let losses = 0;

function makeGuess() {
    let guess = parseInt(document.getElementById('guess').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = "Please enter a number between 1 and 100.";
        return;
    }

    chancesLeft--;
    if (guess === targetNumber) {
        wins++;
        document.getElementById('message').textContent = "Congratulations! You've guessed the right number!";
        resetGame();
    } else if (chancesLeft > 0) {
        if (guess < targetNumber) {
            document.getElementById('message').textContent = "Too low!";
        } else {
            document.getElementById('message').textContent = "Too high!";
        }
        document.getElementById('chances').textContent = chancesLeft;
    } else {
        losses++;
        document.getElementById('message').textContent = `Sorry! You've run out of chances. The number was ${targetNumber}.`;
        resetGame();
    }
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    chancesLeft = 5;
    document.getElementById('chances').textContent = chancesLeft;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('guess').value = '';
    if (confirm("Play again?")) {
        document.getElementById('message').textContent = '';
    } else {
        document.getElementById('message').textContent = 'Game over. Thanks for playing!';
    }
}
