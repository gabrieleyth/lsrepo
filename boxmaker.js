function logInBox(input) {
  let lineFirstType = '+--+';
  let lineSecondType = '|  |';
  if (input === '') {
    console.log(lineFirstType);
    console.log(lineSecondType);
    console.log(lineSecondType);
    console.log(lineSecondType);
    console.log(lineFirstType);
  } else {
  let newLineFirstType = '+-' + '-'.repeat(input.length) + '-+';
  let newLineSecondType = '| ' + ' '.repeat(input.length) + ' |';
  let lineSecondTypeWithInput = '| ' + input + ' |';
  console.log(newLineFirstType);
  console.log(newLineSecondType);
  console.log(lineSecondTypeWithInput);
  console.log(newLineSecondType);
  console.log(newLineFirstType);
  }
}

logInBox('');
logInBox('To boldly go where no one has gone before.');