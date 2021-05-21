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

function toggleTheme(switchToTheme) {
    // Default to light theme, since that is starting theme
    // window.theme = typeof(window.theme)==='string' ? window.theme : 'theme1';
    // console.log(window.theme)
    // var switchToTheme = window.theme === 'theme1' ? 'theme2' : 'theme1';
    // window.theme = switchToTheme;
    document.querySelector('body').setAttribute('color-scheme', switchToTheme);
}


theme1.addEventListener('click', () => {
    //console.log("theme 1 clicked")
    toggleTheme('theme1')
})

theme2.addEventListener('click', () => {
    //console.log("theme 2 clicked")
    toggleTheme('theme2')
})

theme3.addEventListener('click', () => {
    //console.log("theme 3 clicked")
    toggleTheme('theme3')
})

toggleTheme('theme1')

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
    // select the element with class of `calculator-screen`
    const display = document.getElementById('display')
    // update the value of the element with the contents of `displayValue`
    display.textContent = calculator.displayValue;
}

updateDisplay();

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

buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()
        const {
            textContent
        } = e.target
        console.log(textContent)
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