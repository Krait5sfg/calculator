'use strict';

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

//get item
const itemNode = document.querySelectorAll('.item');
//get display
const disp = itemNode[0].lastChild;
//array for operation log
let log = [];

itemNode.forEach(element => {
    element.addEventListener('click', function (event) {
        let dataElement = element.getAttribute('data-info');

        if (disp.textContent == 'error') {
            disp.textContent = '';
        }

        if (dataElement.length == 1 && (log.length == 0 || log[log.length] != 'add' || log[log.length] != 'subtract' || log[log.length] != 'divide' || log[log.length] != 'subtract')) {
            disp.textContent += dataElement;
        } else if (dataElement == 'clear') {
            disp.textContent = '';
            log = [];
        } else if (disp.textContent.length > 0 && (dataElement == 'add' || dataElement == 'multiply' || dataElement == 'subtract' || dataElement == 'divide')) {
            log.push(disp.textContent, dataElement);
            disp.textContent = '';
        } else if (dataElement == 'equal' && disp.textContent.length > 0 && log.length >= 2) {
            log.push(disp.textContent);
            disp.textContent = '';

            let numbers = []; //for numbers
            let operations = []; //for operations (+, - , *, /)
            //sort numbers and operatins
            for (let i = 0; i < log.length; i++) {
                if (i == 0 || i % 2 == 0) {
                    numbers.push(Math.abs(log[i]));
                } else {
                    operations.push(log[i]);
                }
            }
            //calculation
            operations.forEach(function (element) {
                switch (element) {
                    case 'add':
                        numbers.unshift(operate(add, ...numbers.splice(0, 2)));
                        break;
                    case 'subtract':
                        numbers.unshift(operate(subtract, ...numbers.splice(0, 2)));
                        break;
                    case 'divide':
                        numbers.unshift(operate(divide, ...numbers.splice(0, 2)));
                        break;
                    case 'multiply':
                        numbers.unshift(operate(multiply, ...numbers.splice(0, 2)));
                        break;
                }
            });

            //result
            if (numbers[0] != 'Infinity') {
                disp.textContent = numbers[0];
                log = [];
            } else {
                disp.textContent = 'error';
                log = [];
            }

        } else {
            disp.textContent = 'error';
            log = [];
        }

        // console.log(log);

    });
});