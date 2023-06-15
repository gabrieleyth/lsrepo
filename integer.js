const readline = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

prompt('Enter the first number:');
let firstNumber = readline.question();

prompt('Enter the second number:');
let secondNumber = readline.question();

// computational functions
function displayAdd(a, b) {
  return `${a} + ${b} = ${a + b}`;
}

function displaySub(a, b) {
  return `${a} - ${b} = ${a - b}`;
}

function displayMul(a, b) {
  return `${a} * ${b} = ${a * b}`;
}

function displayDiv(a, b) {
  return `${a} / ${b} = ${a / b}`;
}

function displayRem(a, b) {
  return `${a} % ${b} = ${a % b}`;
}

function displaySquare(a, b) {
  return `${a} ** ${b} = ${a ** b}`;
}
// computational functions ended

function displayAnswers(firstNumber, secondNumber) {
  let a = Number(firstNumber);
  let b = Number(secondNumber);
  prompt(displayAdd(a, b));
  prompt(displaySub(a, b));
  prompt(displayMul(a, b));
  prompt(displayDiv(a, b));
  prompt(displayRem(a, b));
  prompt(displaySquare(a, b));
}

displayAnswers(firstNumber, secondNumber);


