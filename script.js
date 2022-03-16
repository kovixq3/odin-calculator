function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(o, a, b) {
    let temp;
    switch (o) {
        case 'add':
            temp = add(a, b);
            break;
        case 'subtract':
            temp = subtract(a, b);
            break;
        case 'multiply':
            temp = multiply(a, b);
        case 'divide':
            temp = divide(a, b);
        default:
            break;
    }
    display.textContent = operator = valuePassive = valueActive = '';
    display.textContent = temp;
}

let operator = valuePassive = valueActive = '';

const display = document.querySelector('#display');
const numpad = document.querySelectorAll('#numpad button');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const functions = document.querySelectorAll('#functions button')

numpad.forEach(e => e.addEventListener('click', () => {
    valueActive += e.id;
    display.textContent += e.id;
}));

functions.forEach(e => e.addEventListener('click', () => {
    valuePassive = valueActive;
    valueActive = '';
    operator = e.id;
    display.textContent += ` ${e.textContent} `;
}))

equal.addEventListener('click', () => {
    valuePassive = parseInt(valuePassive);
    valueActive = parseInt(valueActive);
    operate(operator, valuePassive, valueActive);
})

clear.addEventListener('click', () => display.textContent = operator = valuePassive = valueActive = '');