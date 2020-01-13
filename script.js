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

//get digit
const digitNode = document.querySelectorAll('.digit');
//array for saving digit numbers
let numberArray = [];
//get a display
const disp = document.querySelector('.display');
//make a element with number to fill the display
digitNode.forEach(element => {
    element.addEventListener('click', (event) => {
        disp.textContent += element.getAttribute('data-info');
        numberArray.push(element.getAttribute('data-info'));
        console.log(numberArray);
    });
});

