import { evalHelper, addToScreen, detectOperator } from "./helpers.js";
let inputs = document.querySelectorAll('.input');
let calcScreen = document.getElementById('screen');
let clearDisplay = false;
document.onkeydown = function (e) {
    if (Number.isInteger(parseFloat(e.key))) {
        inputNumber(e.key, null);
    }
    switch (e.key) {
        case '/':
            inputNumber(e.key, null);
            break;
        case '+':
            inputNumber(e.key, null);
            break;
        case '-':
            inputNumber(e.key, null);
            break;
        case '*':
            inputNumber(e.key, null);
            break;
    }
    if (e.key === 'Enter') {
        inputNumber(null, 'calculate');
    }
    if (e.key === 'Backspace') {
        inputNumber(null, 'delete');
    }
};
function inputFn(ev) {
    ev.preventDefault();
    var value = this.getAttribute("data-value");
    var method = this.getAttribute("data-method");
    inputNumber(value, method);
}
function inputNumber(value, method) {
    if (value === null && method === null) {
        console.error('No action available');
        return;
    }
    if (value !== null) {
        let newVal = addToScreen(value, calcScreen.value);
        let operator = detectOperator(value);
        if (clearDisplay && operator == 'unknown operator') {
            newVal = addToScreen(value, '');
        }
        clearDisplay = false;
        calcScreen.value = newVal;
        return;
    }
    if (method != null) {
        switch (method) {
            case 'calculate':
                evalResult();
                break;
            case 'delete':
                deleteFromScreen();
                break;
            case 'clear':
                clearScreen();
            default:
                return;
        }
    }
}
function deleteFromScreen() {
    let newDisplay = calcScreen.value.slice(0, -1);
    calcScreen.value = newDisplay;
}
function clearScreen() {
    calcScreen.value = '';
}
function evalResult() {
    let result = evalHelper(calcScreen.value);
    calcScreen.value = result;
    clearDisplay = true;
}
Array.from(inputs).forEach(element => {
    element.addEventListener('click', inputFn);
});
//# sourceMappingURL=scripts.js.map