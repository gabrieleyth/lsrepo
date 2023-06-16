let advice = "Few things in life are as important as house training your pet dinosaur.";

let indexOfImportant = advice.indexOf('important');
let newAdvice = advice.slice(0, indexOfImportant) + 'urgent' + advice.slice((indexOfImportant + 9));
// +9 being the length of important as a word

console.log(newAdvice);