function utf16Value(input) {
  for (let i=0; i < input.length; i++) {
    sum += i.charCodeAt();
  }
  console.log(sum);
}


utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0