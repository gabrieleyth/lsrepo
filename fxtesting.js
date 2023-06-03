// Implement a function repeat that repeats an input string a given number of 
// times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().


function repeat(a, b) {
  for (let i=0; i < a; i++) {
    console.log(b);
  }
}

repeat(3, 'ha'); // should say 'hahaha' but mine just logs has on a new line everu time 

