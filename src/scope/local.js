const helloWorld = () => {
  const hello = 'Hello World'
  console.log(hello)
}

helloWorld()
try {
  console.log(hello)
} catch (e) {
  console.log('Ocurrio un error al imprimir hello')
  console.log(e)
}

var scope = "I am global"

const functionScope = () => {
  var scope = "i am just a local"

  const func = () => {
    return scope
  }

  console.log(func())
}

functionScope()
console.log(scope)