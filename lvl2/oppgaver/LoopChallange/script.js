// -------------------------------------------------------
// EXERCISES FOR LOOPING
// -------------------------------------------------------

// -------------------------------------------------------
// 1) Create a for loop that console logs the string 'hi' 4 times
//    Example output:
//    "hi" 
//    "hi" 
//    "hi" 
//    "hi" 
// -------------------------------------------------------

for (let i = 0; i < 4; i++) {
    console.log("hi");
}

// -------------------------------------------------------
// 2) Create a for loop that console logs the numbers 2 - 22 
//    Example output:
//    2 3 4 5 6 7 ...
// -------------------------------------------------------
let start = 2;
let end = 22;

for (let i = start; i <= end; i++) {
    console.log(i);
}

// -------------------------------------------------------
// 3) Create a for loop that console each item in an array
//    Example array: const randomArr =  ['hi', 5, true, 'hopefully this worked'] 
//    Example output:
//    'hi' 5 true 'hopefully this worked'
// -------------------------------------------------------
const randomArr = ['hi', 5, true, 'hopefully this worked']
for (let i = 0; i < randomArr.length; i++) {
    console.log(randomArr[i]);
}


// -------------------------------------------------------
// 4) Create a for loop that takes items from an array and console logs a sentence using each item in the array.
//    For example: const cuteAnimals = ["piggies", "puppies", "kitties", "birdies"]
//    Example output:
//    "piggies are cute" "puppies are cute" "kitties are cute" "birdies are cute" 
// -------------------------------------------------------

//enchanced for loop
const cuteAnimals = ["piggies", "puppies", "kitties", "birdies"]
for (let animal of cuteAnimals) {
    console.log(animal + " are cute");
}

// -------------------------------------------------------
// 5) Create a for loop that console logs the numbers 2 - 7 in reverse order
//    Example output:
//    7 6 5 4 3 2
// -------------------------------------------------------

//enhanced for loop with reverse
const reverseThisArray = [2, 3, 4, 5, 6, 7];
for (const number of reverseThisArray.reverse()) {
    console.log(number);
}

// -------------------------------------------------------
// 6) Now take the loop from exercise 4 so the console logs are in reverse order
//    Example output:
//    "birdies are cute" "kitties are cute" "puppies are cute" "piggies are cute" 
// -------------------------------------------------------

for (let animal of cuteAnimals.reverse()) {
    console.log(animal + " are cute in reverse order");
}

// -------------------------------------------------------
// 7) Using a function with parameter n, create a for loop which console log 
//    all even numbers up to and including n. Don’t include 0.
//    let n = 22
//    Example output: 
//    2 4 6 8 10 12 14 16 18 20 22
// -------------------------------------------------------
let n = 22;
printEven(n)
function printEven(number) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}



// -------------------------------------------------------
// 8) Use a for loop to get the sum of an array
//    Example output:
//    let arrOfNums = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
//    sumOfNums = 276
// -------------------------------------------------------
const arrOfNums = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let sumOfNums = 0;
for (let number of arrOfNums) {
    sumOfNums += number;
}
console.log(arrOfNums);
console.log("Sum: " + sumOfNums);

// -------------------------------------------------------
// 9) Get the sum of two arrays… actually the sum of all their elements.
//    Example output:
//    276 + 351 = 627

//    let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
//    let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// -------------------------------------------------------

const arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
const arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
const collectArrays = arr_1.concat(arr_2);
let collectedSum = 0;

for (let number of collectArrays) {
    collectedSum += number;
}

console.log("Sum of both arrays = " + collectedSum);
// -------------------------------------------------------
// 10) Create a multiplication table which multiplies all values of x and y. Each should range from 1 to 10.
//     Hint: start with making one loop that console logs the numbers 1 through 10.  Then think about
//     how you can use this to create a multiplication table by creating another loop
//     Example output:
//     x:1 y:1 multiple: 1
//     x:2 y:1 multiple: 2
//     x:3 y:1 multiple: 3
//     etc. with 1 also scaling each time x reaches 10
// -------------------------------------------------------

const y = 2;
for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
        let multiple = y * x;
        console.log("x:" + x + " y:" + y + " multiple: " + multiple);
    }
}

// -------------------------------------------------------
//  BONUS CHALLENGE: CREATE A FUNCTION THAT RECEIEVES 2 PARAMETERS, AN ARRAY OF PRODUCT COSTS AND A TAX
//                   AS PARAMETERS AND RETURNS A BILL OF ALL PRODUCTS + PRODUCT COSTS*TAX
//                   Example input: calculateTotalWithTax([1, 10, 19, 19, 2], .2)
// -------------------------------------------------------
let tax = .2;
let productCosts = [1, 10, 19, 2];

console.log(calculateTotalWithTax(productCosts, tax));



function calculateTotalWithTax(productCosts, tax) {
    let sumWithTax = 0;
    let sumWithoutTax = 0;
    for (let productCost in productCosts) {
        console.log(productCosts[productCost]);
        sumWithoutTax += productCosts[productCost];
        sumWithTax += (productCosts[productCost] * parseFloat(tax));
    }
    sumWithTax += sumWithoutTax;
    return "bill: " + sumWithoutTax + " billWithTax: " + sumWithTax;
}