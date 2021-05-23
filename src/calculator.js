const theme1 = document.getElementById('theme1')
const theme2 = document.getElementById('theme2')
const theme3 = document.getElementById('theme3')
const buttons = document.querySelectorAll('button')
const calculator = {
    displayValue: '0',
    firstOperand: null,
    haveSecondOperand: false,
    operator: null
}
const existingTheme = localStorage.getItem('calculator-theme')
const themeToggles = document.querySelectorAll('label')

// handle the changes to the theme
function toggleTheme(switchToTheme) {
    document.querySelector('body').setAttribute('color-scheme', switchToTheme)
    // remove 'toggled-on' from all the labels
    themeToggles.forEach(theme => theme.classList.remove('toggled-on'))

    // add 'toggled-on' to the one desired label (themeToggles) 
    switchToTheme === 'theme1' ? themeToggles[0].classList.add('toggled-on') : switchToTheme === 'theme2' ? themeToggles[1].classList.add('toggled-on') : themeToggles[2].classList.add('toggled-on')
    // save the new value to local storage
    localStorage.setItem('calculator-theme', switchToTheme)
}

// check localstorage for a saved them, and then load it
if (existingTheme) {
    toggleTheme(existingTheme)
} else {
    toggleTheme('theme1')
}

// event listeners for radio input's
theme1.addEventListener('click', () => {
    toggleTheme('theme1')
})

theme2.addEventListener('click', () => {
    toggleTheme('theme2')
})

theme3.addEventListener('click', () => {
    toggleTheme('theme3')
})

// handle the input of numbers
function inputDigit(digit) {
    const {
        displayValue,
        haveSecondOperand
    } = calculator;

    if (haveSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.haveSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function updateDisplay() {
    // select the element with id of `display`
    const display = document.getElementById('display')
    // update the value of the element with the contents of `displayValue`
    display.textContent = Number(calculator.displayValue).toLocaleString();
}

//updateDisplay();


function handleOperator(nextOperator) {
    const {
        firstOperand,
        displayValue,
        operator
    } = calculator
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.haveSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }

    calculator.haveSecondOperand = true;
    calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {

    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === 'x') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.haveSecondOperand = false;
    calculator.operator = null;
}

// handle the use of the mouse as input device
buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()
        const {
            textContent
        } = e.target

        switch (textContent) {
            case '+':
            case '-':
            case 'x':
            case '/':
            case '=':
                handleOperator(textContent);
                break;
            case 'DEL':
                calculator.displayValue = calculator.displayValue.slice(0, -1)
                break
            case '.':
                !calculator.displayValue.includes('.') ? calculator.displayValue += '.' : null
                break
            case 'RESET':
                resetCalculator()
                break
            default:
                if (Number.isInteger(parseFloat(textContent))) {
                    inputDigit(textContent);
                }
        }
        updateDisplay();
    })
})

// handle the use of the keyboard as input device
document.body.addEventListener('keydown', e => {
    let {
        key
    } = e
    key = key.toLowerCase()
    key === 'enter' ? key = "=" : null

    switch (key) {
        case '+':
        case '-':
        case 'x':
        case '/':
        case '=':
            handleOperator(key);
            break;
        case 'delete':
            calculator.displayValue = calculator.displayValue.slice(0, -1)
            break
        case 'backspace':
            calculator.displayValue = calculator.displayValue.slice(0, -1)
            break
        case '.':
            !calculator.displayValue.includes('.') ? calculator.displayValue += '.' : null
            break
        case 'RESET':
            resetCalculator()
            break
        default:
            if (Number.isInteger(parseFloat(key))) {
                inputDigit(key);
            }
    }
    updateDisplay();
})