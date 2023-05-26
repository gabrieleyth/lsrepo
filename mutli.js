let rlSync = require('readline-sync');

function booba() {
  let name1 = Number(rlSync.question('First Number?\n'));
  let name2 = Number(rlSync.question('Second Number?\n'));
  let multi = name1 * name2;
  return multi;
}

let greeting = `answer is ${booba()}!` 
console.log(greeting);

