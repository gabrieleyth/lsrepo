centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

function centerOf(input) {
  if (input.length % 2 ===0 ) {
    let middleIndexOne = (input.length / 2) - 1;
    let middleIndexTwo = input.length /2;
    console.log(input[middleIndexOne] + input[middleIndexTwo]);
  } else {
    let oddIndex = Math.floor(input.length / 2);
    console.log(input[oddIndex]);
  }
}