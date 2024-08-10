function calculateChange() {
    let amount = parseInt(document.getElementById('changeAmount').value);
    
    if (isNaN(amount) || amount < 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const dollars = Math.floor(amount / 100);
    amount %= 100;
    const quarters = Math.floor(amount / 25);
    amount %= 25;
    const dimes = Math.floor(amount / 10);
    amount %= 10;
    const nickels = Math.floor(amount / 5);
    amount %= 5;
    const pennies = amount;

    document.getElementById('changeResult').textContent = 
        `Dollars: ${dollars}, Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`;
}
