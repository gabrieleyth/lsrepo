let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age?\n'));
let age10 = age + 10;
let age20 = age + 20;
let age30 = age + 30;
let age40 = age + 40;

let ages = [age, age10, age20, age30, age40];

for (let index=0; index < ages.length; index +=1) {
  if (ages[index] === ages[0]) {
  console.log('You are ' + age + ' years old.');
  } else if (ages[index] <= ages[4]) {
    console.log(`In ${index}0 years youll be ${ages[index]} years old.`);
  }
}