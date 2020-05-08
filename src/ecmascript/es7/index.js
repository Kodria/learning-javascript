//-------------------- includes -------------------------- //
console.log('------------- includes -------------');
let numbers = [1,2,3,4,5,6,7]
const valueToSearch = 9;
// Version anterior - es6

if (numbers.indexOf(valueToSearch) !== -1) {
  console.log('Si se encuentra el valor - es6')
} else {
  console.log('No se encuentra  - es6')
}

// es7

if (numbers.includes(valueToSearch)) {
  console.log('Si se encuentra el valor - es7')
} else {
  console.log('No se encuentra  - es7')
}
console.log('------------- END includes -------------');


//-------------------- Operaciones en forma exponencial -------------------------- //

console.log('------------- Operaciones en forma exponencial -------------');
let base = 4
let exponent = 3
let result = base ** exponent

console.log(result)
console.log('------------- END Operaciones en forma exponencial -------------');