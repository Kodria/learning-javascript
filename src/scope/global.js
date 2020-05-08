var hello = 'Hello' // Instanciada de forma global por lo cual se puede usar en cualquier sitio
let world = 'Hello world'
const helloworld = 'Hello world!'

// Todas las variables son globales pero solo var puede ser reasignado creando una nueva variable 

const anotherFunction = () => {
  console.log(hello, world, helloworld)
  hello = 'Change'
}

anotherFunction()
console.log(hello, world, helloworld)