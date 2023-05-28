let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let indexOfFive = -1;

for (let i=0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}
console.log(indexOfFive);
