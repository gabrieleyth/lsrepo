let rlSync = require('readline-sync');
let number = parseFloat(rlSync.question('Please enter an integer greater than 0: \n'));
let calculation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. \n');

function area() {
  if (number > 0) {
    let sum = 0;
    let product = 1;
    if (calculation === 's') {
      for (let i=0; i <= number; i++) {
        sum += i;
      }
      console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
    } else if (calculation === 'p') {
      for (let j=1; j <= number; j++) {
        product *= j;
      } 
      console.log(`The product of the integers between 1 and ${number} is ${product}.`);
    }
   }
}

area();
