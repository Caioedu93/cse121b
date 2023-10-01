/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click',addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2){
    return subtract1 - subtract2;
}
function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(factor1, factor2){
    return factor1 * factor2;
}
function multiplyNumbers(){
    let factorNumber1 = Number(document.querySelector('#factor1').value);
    let factorNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factorNumber1, factorNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor){
    return dividend / divisor;
}
function divideNumbers(){
    let dividendNumber = Number(document.querySelector('#dividend').value);
    let divisorNumber = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividendNumber, divisorNumber);
}
document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */

let currentDate = new Date();

let currentYear = new Year();

currentYear = currentDate.getFullYear();

document.getElementById('year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.getElementById('array').textContent = numbersArray.join(", ");

/* Output Odds Only Array */

let oddNumbers = numbersArray.filter(num => num % 2 === 1);
document.getElementById('odds').textContent = oddNumbers.join(", ");

/* Output Evens Only Array */

let evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(", ");

/* Output Sum of Org. Array */

const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */

const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(", ");


/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
