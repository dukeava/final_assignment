let flipCount = 0;
let headsCount = 0;
let tailsCount = 0;

function flipCoin() {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    flipCount++;

    if (result === 'heads') {
        headsCount++;
        document.getElementById('coinImage').src = 'heads.png';  // replace with your heads image
    } else {
        tailsCount++;
        document.getElementById('coinImage').src = 'tails.png';  // replace with your tails image
    }

    document.getElementById('coinImage').style.display = 'block';

    const ratio = `Heads: ${headsCount}, Tails: ${tailsCount}`;
    document.getElementById('ratio').textContent = ratio;

    const row = document.createElement('tr');
    const flipCell = document.createElement('td');
    const resultCell = document.createElement('td');

    flipCell.textContent = flipCount;
    resultCell.textContent = result.charAt(0).toUpperCase() + result.slice(1);

    row.appendChild(flipCell);
    row.appendChild(resultCell);
    document.getElementById('flipHistory').appendChild(row);
}
