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

const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');

const calcBody = document.querySelector('.calc-body');
//const calcBody = document.querySelector('.calc-body');

lightMode.addEventListener('click', () => {
    document.body.style.backgroundColor = '#c2e2f2';
    calcBody.style.borderColor = '#444647';
    calcBody.style.backgroundColor = 'white'
})

darkMode.addEventListener('click', () => {
    document.body.style.backgroundColor = '#444647';
    calcBody.style.borderColor = '#c2e2f2';
    calcBody.style.backgroundColor = '#c2e2f2'
})

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

equalButton.addEventListener('click', () => {
    operate();
    updateScreen();
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
    
    num1 = Math.round((calculation * 10)) / 10;
    currentOperator = '';
    num2 = '';
}

function updateScreen() {
    currentScreen.textContent = num1;
    previousScreen.textContent = `${num2} ${currentOperator}`;
}