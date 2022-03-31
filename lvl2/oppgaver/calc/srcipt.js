let firsNumber = 50;
let secondNumber = 120;

// currentOperator: defines the current operation. ex: (+,-,*,/) MUST BE USED AS A STRING.
let currentOperator = "*";

console.log(calculate(firsNumber, secondNumber));

//function calculate, calculates the assigned 2 numbers depending on the current operator.
//firstNumber: is the first number in the calculation.
//secondNumber: is the first number in the calculation.
//return: returns the sum of the calculation.
function calculate(firsNumber, secondNumber) {
    let sum = 0;
    switch (currentOperator) {
        case (currentOperator = "+"):
            sum = firsNumber + secondNumber;
            break;
        case (currentOperator = "-"):
            sum = firsNumber - secondNumber;
            break;
        case (currentOperator = "*"):
            sum = firsNumber * secondNumber;
            break;
        case (currentOperator = "/"):
            sum = firsNumber / secondNumber;
        default:
            break;
    }
    return sum;
}