//add function
function add(number1, number2) {
    return number1 + number2;
}
//subtract function
function subtract(number1, number2) {
    return number1 - number2;
}
//multiply function
function multiply(number1, number2) {
    return number1 * number2;
}
//divide function
function divide(number1, number2) {
    return number1 / number2;
}
//operate function
function operate(operator, number1, number2) {
    let result = operator(number1, number2);
    return result;
}

//get digit number
const digitNode = document.querySelectorAll('.digit');
//get operator number
const operNode = document.querySelectorAll('.operate');
//array for saving numbers pressed on calculator
let numberArray = [];
//array for saving operation name
let operationArray = [];
//variable for reuslt
let result = 0;
//get a display
const disp = document.querySelector('.display');
//display number
digitNode.forEach(element => {
    element.addEventListener('click', (event) => {
        disp.textContent += element.getAttribute('data-info');
    });
});
//function on operator
operNode.forEach(element => {
    element.addEventListener('click', (event) => {
        switch (element.getAttribute('data-info')) {
            case 'clear':
                numberArray = [];
                operationArray = [];
                disp.textContent = '';
                break;
            case 'add':
            case 'divide':
            case 'subtract':
            case 'multiply':
                numberArray.push(Math.abs(disp.textContent)); //save number not string
                operationArray.push(element.getAttribute('data-info'));
                disp.textContent = '';
                break;
            case 'equal':
                numberArray.push(Math.abs(disp.textContent));//save number not string
                //calculate (2 numbers)
                if (numberArray.length == 2 && operationArray.length == 1) {
                    operationArray.forEach(element => {
                        if (element == 'add') {
                            disp.textContent = operate(add, ...numberArray);
                        } else if (element == 'multiply') {
                            disp.textContent = operate(multiply, ...numberArray);
                        } else if (element == 'subtract') {
                            disp.textContent = operate(subtract, ...numberArray);
                        } else if (element == 'divide') {
                            disp.textContent = operate(divide, ...numberArray);
                        }
                    });
                }
                //calculate greater than 2 numbers
                if (numberArray.length > 2 && operationArray.length > 1) {
                    //..code here
                }
                //reset on zero after the end calculation
                numberArray = [];
                operationArray = [];
                console.log(result);

        }

        console.log('numberArray: ', numberArray, 'operationArray: ', operationArray);
    });
});
