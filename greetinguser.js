/*What is your name? Bob
Hello Bob.
Copy Code
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?*/

const readline = require('readline-sync');

console.log('What is your name?');
let answer = readline.question();

if (answer.includes('!')) {
  let name = answer.slice(0, -1);
  let upperCaseName = name.toUpperCase();
  console.log(`HELLO ${upperCaseName}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${answer}`);
}
