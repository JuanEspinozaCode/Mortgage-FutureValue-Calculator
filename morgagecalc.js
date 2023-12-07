//TODO Morgage calculator
//MORGAGE CALCULATOR
function calculateMortgage() {

    //User Values
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanLength = parseInt(document.getElementById('loanLength').value);

    //Formula
    const monthlyRate = interestRate / 12;
    const nPayments = loanLength * 12;
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, nPayments);
    const denominator = Math.pow(1 + monthlyRate, nPayments) -1;
    const monthlyPayment = principal * (numerator / denominator);
    const totalInterest = monthlyPayment * nPayments -principal;

    document.getElementById('mortgageResult').innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}, Total Interest: $${totalInterest.toFixed(2)}`;
};

//FUTURE CALCULATOR
function calculateFutureValue() {

    //User Values
    const deposit = parseFloat(document.getElementById('deposit').value);
    const interestRate = parseFloat(document.getElementById('futureInterestRate').value) / 100;
    const futureYears = parseInt(document.getElementById('futureYears').value);

    //Formula
    const nCompounds = 365; // Daily compounding
    const futureValue = deposit * Math.pow(1 + (interestRate / nCompounds), nCompounds * futureYears);
    const totalInterest = futureValue -deposit;
    document.getElementById('futureValueResult').innerHTML = 
    `Future Value: $${futureValue.toFixed(2)}, Total Interest: $${totalInterest.toFixed(2)}`;
    };

