let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let numbers = things.filter(element => typeof element === 'number');

console.log(numbers);
