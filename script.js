let displayValue = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'clear':
                displayValue = '';
                operator = '';
                firstNumber = '';
                secondNumber = '';
                break;
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                operator = button.id;
                firstNumber = displayValue;
                displayValue = '';
                break;
            case 'equals':
                secondNumber = displayValue;
                calculate();
                break;
            default:
                displayValue += button.id;
        }
        document.getElementById('display').value = displayValue;
    });
});

function calculate() {
    let result = 0;
    switch (operator) {
        case 'add':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case 'subtract':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case 'multiply':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case 'divide':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
    }
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
}