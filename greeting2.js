let rlSync = require('readline-sync');

function booba() {
  let name1 = rlSync.question('What is your name?\n');
  let name2 = rlSync.question('What is your last name?\n');
  let fullname = name1 + ' ' + name2;
  return fullname;
}

let greeting = 
console.log(`Hello, ${booba()}!`);

