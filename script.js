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

//test
let test = operate(divide, 1, 2);
console.log(test);