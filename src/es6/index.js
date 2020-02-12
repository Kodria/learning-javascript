//-------------------- Parametros por defecto -------------------------- //

// Version anterior - es5
function newFunction(name, age, country) {
  var name = name || 'Nicolas'
  var age = age || 28
  var country = country || 'Colombia'

  console.log(name, age, country)
}

// es6 
function newFunction2(name = 'Nicolas', age = 28, country = 'Colombia') {
  console.log(name, age, country)
}

newFunction2()
newFunction2('Camilo')

//--------------------- Template literals ------------------------- //

// Version anterior - es5

let hello = "Hello"
let world = "World"
let epicPhrase = hello + " " + world
console.log(epicPhrase)

// Template literals
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

//--------------------- Multilinea ------------------------- //

// Version anterior - es5

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. \n"
+ " Odio atque fugit aperiam quo totam possimus velit, quos similique praesentium vitae magni deserunt! Optio minima deserunt fugit, accusantium deleniti eius! Nesciunt!"

console.log(lorem)

// es6 - Multilinea
let lorem2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Odio atque fugit aperiam quo totam possimus velit, quos similique praesentium vitae magni deserunt! Optio minima deserunt fugit, accusantium deleniti eius! Nesciunt!
`

console.log(lorem2)

//--------------------- Destructuración de elementos ------------------------- //

let person = {
  name: 'Nicolas',
  age: 28,
  country: 'CO'
}

// Version anterior - es5
console.log(person.name, person.age, person.country)

// es6

let { name, age, country } = person
console.log(name, age, country)

//--------------------- Operador de propagación (Spread operator) ------------------------- //

let team1 = ['Usuario 1', 'Usuario 2', 'Usuario 3']
let team2 = ['Usuario 4', 'Usuario 5', 'Usuario 6']


// Version anterior - es5

// es6
let education = ['Usuario 7', ...team1, ...team2]
console.log(education)

//--------------------- Asignación en memoria ------------------------- //

var helloVar = 'Hello var' // Esta disponible en toda la aplicación
let hellolet = 'Hello let' // Esta disponible solo en el scope (Bloque de codigo donde se invoca)

{
  var globalVar = "Global var"
}

{
  let globalLet = "Global let"
  console.log(globalLet)
}

console.log(globalVar)
console.log(globalLet) // Error

const a = 'b'
a = 'a'
console.log(a)

//--------------------- Propiedad de objetos mejorada ------------------------- //

let name = 'Nicolas'
let age = 28

// Version anterior - es5

let obj = {
  name: name, age: age
}

// es6
let obj2 = {name, age}

console.log(obj, obj2)

//--------------------- Arrow function ------------------------- //

const names = [
  {name: 'Nicolas', age: 28},
  {name: 'Camilo', age: 27}
]

let listOfNames = names.map(function(item) {
  console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))

//--------------------- Promise ------------------------- //

const helloPromise = (status) => {
  return new Promise((resolve, reject) => {
    if (status === true) resolve('Hey!')

    reject('Opps!!!')
  })
}

helloPromise(true)
  .then(result => console.log(result))
  .catch(err => console.error(err))


//--------------------- Classes ------------------------- //

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(a, b) {
    this.valueA = a;
    this.valueB = b;
    return this.valueA + this.valueB
  }
}

const calculator = new Calculator();
let sum = calculator.sum(1,2)
console.log(sum)

//--------------------- Modulos ------------------------- //

import moduleE6 from './module'

moduleE6()

//--------------------- Generator ------------------------- //

function* helloWorld() {
  if (true) {
    yield 'Hello, '
  }

  if(true) {
    yield 'world'
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)