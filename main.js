// Global variables
let num1 = '';
let num2 = '';
let currentOperator = '';

const previousScreen = document.querySelector('.calc-previous-screen');
const currentScreen = document.querySelector('.calc-current-screen');

const numList = document.querySelectorAll('.number');
const operatorList = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

numList.forEach(num => {
    num.addEventListener('click', () => {
        appendNumber(num.textContent);
        updateScreen();
    })
})

operatorList.forEach(operator => {
    operator.addEventListener('click', () => {
        selectOperator(operator.textContent);
        updateScreen();
    })
})

clearButton.addEventListener('click', () => {
    clearScreen();
})

function clearScreen() {
    num1 = '';
    num2 = '';
    currentOperator = '';
    updateScreen();
}

function appendNumber(num) {
    num1 = num1.toString() + num.toString()
}

function selectOperator(operator) {
    if (num1 === '') {
        return;
    } else if (num2 !== '') {
        operate();
    }

    num2 = num1;
    num1 = '';
    currentOperator = operator;
}

function operate() {
    let calculation = 0;
    let first = parseFloat(num1);
    let second = parseFloat(num2);
    if (isNaN(first) || isNaN(second)) {
        return;
    }
    switch (currentOperator) {
        case '+':
            calculation = second + first;
            break;
        case '-':
            calculation = second - first;
            break;
        case 'x':
            calculation = second * first;
            break;
        case '/':
            calculation = second / first;
            break;
        default:
            return;
    }
    
    num1 = calculation;
    currentOperator = '';
    num2 = '';
}

function updateScreen() {
    currentScreen.textContent = num1;
    previousScreen.textContent = `${num2} ${currentOperator}`;
}