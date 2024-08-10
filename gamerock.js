const choices = ['rock', 'paper', 'scissors'];
let gameCount = 0;

function playGame() {
    const player1Choice = choices[Math.floor(Math.random() * 3)];
    const player2Choice = choices[Math.floor(Math.random() * 3)];
    
    document.getElementById('player1Img').src = `${player1Choice}.png`;
    document.getElementById('player2Img').src = `${player2Choice}.png`;
    document.getElementById('player1Img').style.display = 'inline';
    document.getElementById('player2Img').style.display = 'inline';

    let resultText;
    if (player1Choice === player2Choice) {
        resultText = "It's a tie! Play again.";
    } else if ((player1Choice === 'rock' && player2Choice === 'scissors') ||
               (player1Choice === 'paper' && player2Choice === 'rock') ||
               (player1Choice === 'scissors' && player2Choice === 'paper')) {
        resultText = "Player 1 wins! Play again.";
        addToHistory("Player 1");
    } else {
        resultText = "Player 2 wins! Play again.";
        addToHistory("Player 2");
    }
    
    document.getElementById('result').textContent = resultText;
}

function addToHistory(winner) {
    gameCount++;
    const row = document.createElement('tr');
    const gameCell = document.createElement('td');
    const winnerCell = document.createElement('td');

    gameCell.textContent = gameCount;
    winnerCell.textContent = winner;

    row.appendChild(gameCell);
    row.appendChild(winnerCell);
    document.getElementById('gameHistory').appendChild(row);
}
