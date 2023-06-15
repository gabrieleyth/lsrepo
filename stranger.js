
function greetings(array, object) {
  let name = array.join(' ');
  let occupation = object["title"] + ' ' + object["occupation"];
  console.log(`Hello ${name}! Nice to have a ${occupation} around.`);
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
