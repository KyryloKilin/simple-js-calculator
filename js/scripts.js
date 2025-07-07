let currentInput = '0';
let previousInput = '0';
let operation = null;

function updateDisplay() {
    document.getElementById('result').innerText = currentInput;
}

function inputDigit(digit) {
    if (currentInput === '0') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function clear() {
    currentInput = '0';
    previousInput = '0';
    operation = null;
    updateDisplay();
}

function setOperation(op) {
    if (operation !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = '0';
    operation = op;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch(operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operation = null;
    previousInput = '0';
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent.trim();
            
            if (/^\d$/.test(value)) {  
            inputDigit(value);
        } else if (value === 'C') {  
            clear();
        } else if (value === '=') {  
            calculate();
        } else {  
            setOperation(value);
        }
    });
});

    updateDisplay();
});
