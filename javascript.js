
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  //digits
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator);
    }
//Error

//Clear 
function clearScreen(){
    calculator.displayValue = '';
}
//operators
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand){
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
    }

    if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
    } else if (operator){
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }
    return secondOperand;
}


function updateDisplay(){
    const display = document.querySelector('.screen');
    display.value = calculator.displayValue;
    }
updateDisplay();



const keys = document.querySelector('.keys')
keys.addEventListener('click', (event) =>{

    // Access the clicked element
    const { target } = event;
    //equivalent to : //   const target = event.target;
    
    // Check if the clicked element is a button.
    // If not, exit from the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operators')){
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if(target.classList.contains('special')){
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('clear')) {
        clearScreen();
    }

inputDigit(target.value);
updateDisplay();

});





// // numbers on screen
// for(var i= 0; i<10 ; i++){
//     document.getElementById("num"+i).onclick = function(){
//             document.getElementById("screen").value += this.innerHTML;

//     }
// }

// //operators on screen
// for(var i=1; i<5 ; i++){
//     document.getElementById("operators"+i).onclick = function(){
//             document.getElementById("screen").value += this.innerHTML;

//     }
// }

// //clear
// document.getElementById("clear").onclick = function(){
//     document.getElementById("screen").value = "";
// }

