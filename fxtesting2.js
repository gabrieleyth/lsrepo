let string = 'launch school tech & talk'; 
// Declare a variable 'string' and assign it the value 'launch school tech & talk'

let words = string.split(' '); 
// Split the string into an array of words using the space character as the separator

let capitalizedWords = []; 
// Declare an empty array to store the capitalized words

for (let i = 0; i < words.length; i++) { // Iterate over each word in the 'words' array
  let word = words[i]; // Store the current word in a variable called 'word'

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1)); 
  // Capitalize the first letter of the word by extracting the first character, converting it to uppercase, 
  // and concatenating it with the rest of the word. Then, add the capitalized word to the 'capitalizedWords' array
}

capitalizedWords.join(' '); 
// Join all the words in the 'capitalizedWords' array with a space character as the separator, 
// resulting in the final capitalized string 'Launch School Tech & Talk'
