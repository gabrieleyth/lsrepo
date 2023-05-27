function evenOrOdd(input) {
  let number = Number(input);
  if (number % 2 === 0) {
    return 'even';
  }
  else {
    return 'odd';
  }
}

console.log(evenOrOdd(2));