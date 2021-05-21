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

function toggleTheme(switchToTheme) {
    console.log('clicked', switchToTheme)
    //console.log(theme1, theme2, theme3)
    // Default to light theme, since that is starting theme
    // window.theme = typeof(window.theme)==='string' ? window.theme : 'theme1';
    // console.log(window.theme)
    // var switchToTheme = window.theme === 'theme1' ? 'theme2' : 'theme1';
    // window.theme = switchToTheme;
    document.querySelector('body').setAttribute('color-scheme', switchToTheme)
    themeToggles.forEach(theme => theme.classList.remove('toggled-on'))
    // themeToggles.forEach(theme => {
    //     console.log(theme.attributes[0].value)
    //     console.log(theme.attributes[0], switchToTheme)
    //     if(theme.attributes[0] === switchToTheme) {
    //         theme.classList.add('toggled-on')
    //     }
    // })
    switchToTheme === 'theme1' ? themeToggles[0].classList.add('toggled-on') : switchToTheme === 'theme2' ? themeToggles[1].classList.add('toggled-on') : themeToggles[2].classList.add('toggled-on')
    localStorage.setItem('calculator-theme', switchToTheme ) 
    //console.log(themeToggles)
}


theme1.addEventListener('click', () => {

    toggleTheme('theme1')
})

theme2.addEventListener('click', () => {

    toggleTheme('theme2')
})

theme3.addEventListener('click', () => {

    toggleTheme('theme3')
})

if(existingTheme) {
    //console.log(existingTheme)
    toggleTheme(existingTheme)
}


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
    display.textContent = Number(calculator.displayValue).toLocaleString();
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
    console.log('operator = ', operator)
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