function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate < 0 || loanTerm <= 0) {
        alert("Please enter valid loan details.");
        return;
    }

    const monthlyPayment = loanAmount * interestRate / (1 - Math.pow(1 + interestRate, -loanTerm));
    document.getElementById('mortgageResult').textContent = 
        `Loan Amount: $${loanAmount.toFixed(2)}\nLoan Term: ${loanTerm / 12} years\nInterest Rate: ${(interestRate * 12 * 100).toFixed(2)}%\nYour monthly payment will be $${monthlyPayment.toFixed(2)}`;
}
