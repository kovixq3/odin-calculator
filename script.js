function operate(o, a, b) {
    if (a === '' || b === '') return;
    a = parseInt(a);
    b = parseInt(b);
    
    let solution;
    switch (o) {
        case 'add':
            solution = a + b;
            break;
        case 'subtract':
            solution = a - b;
            break;
        case 'multiply':
            solution = a * b;
            break;
        case 'divide':
            if (b == 0) {
                display.textContent = 'whoaaaa u can\'t do that';
                operator = valuePassive = valueActive = '';
                return;
            }
            solution = a / b;
            break;
        default:
            return;
    }
    display.textContent = operator = valuePassive = valueActive = '';
    display.textContent = valuePassive = solution;
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
    if (valuePassive == '' && valueActive == '') return;
    (valuePassive === '') ? valuePassive = valueActive : operate(operator, valuePassive, valueActive);
    operator = e.id;
    valueActive = '';
    display.textContent = `${valuePassive} ${e.textContent} `;
}));

equal.addEventListener('click', () => (valueActive !== '') ? operate(operator, valuePassive, valueActive) : null);
clear.addEventListener('click', () => display.textContent = operator = valuePassive = valueActive = '');