function utf16Value(input) {
  let sum = 0;
  for (let i=0; i < input.length; i++) {
    sum += input[i].charCodeAt();
  }
  console.log(sum);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0
