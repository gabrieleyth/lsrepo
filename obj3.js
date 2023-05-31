function bar(arg1, arg2) {
//      object, variable / variables   
  
  let foo = 'Hello'; // variable / primitive value
  const qux = { // variable / whats between {} is an object, whats between [] and [[]] also objects 
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

// everything on the left obj property name // every number and null are primitive values  

  return qux; // variable
}

let result = bar('Victor', 'Antonina');
// variables / object and variable / variables and primitive values