let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let newReversedNumbers = [];
let newSortedNumbers = [];

function dontChangeNumbersReverse() {
  numbers.forEach(element => newReversedNumbers.push(element));
  newReversedNumbers.reverse();
  console.log(newReversedNumbers);
}

dontChangeNumbersReverse(); 

function dontChangeNumbersSort() {
  numbers.forEach(element => newSortedNumbers.push(element));
  newSortedNumbers.sort(((num1, num2) => num2 - num1));
  console.log(newSortedNumbers);
}

dontChangeNumbersSort();

/*
numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
*/