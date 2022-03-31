//get html elements.
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const sum = document.getElementById("sum");
const operator = document.getElementById("operator");

//define the current operator.
let CurrentOperator = operator.value;



//on change for the operators (*,-,*,/) and recalculate the new operation
operator.addEventListener("change", function () {
    CurrentOperator = operator.value;
    sum.textContent = calculate(parseFloat(inputA.value), parseFloat(inputB.value));
})

//onChange for the first input (A) calculate new values and show it in hml
inputA.addEventListener("input", function () {
    sum.textContent = calculate(parseFloat(inputA.value), parseFloat(inputB.value));
})

//onchange for the second input (B) calculate new values and show it in hml
inputB.addEventListener("input", function () {
    sum.textContent = calculate(parseFloat(inputA.value), parseFloat(inputB.value));
})

// calculate the 2 given numbers depending on the operator.
function calculate(number1, number2) {
    if (CurrentOperator === "+") {
        return number1 + number2;
    }
    else if (CurrentOperator === "-") {
        return number1 - number2;
    }
    else if (CurrentOperator === "*") {
        return number1 * number2;
    }
    else if (CurrentOperator === "/") {
        return number1 / number2;
    }

    //just to show the first calculate.
    function initialize() {
        CurrentOperator = "+";
        sum.textContent = calculate(parseFloat(inputA.value), parseFloat(inputB.value));
        console.log("hello");
    }
    // initialize the first run
    initialize().call;


}