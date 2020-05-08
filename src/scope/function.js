const fruits = () => {
  var fruit = 'apple'
  console.log(fruit)
}

fruits()
try {
  console.log(fruit)
} catch (e) {
  console.log('Ocurrio un error al imprimir fruit')
  console.log(e)
}

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  // let y = 2; // No se puede volver a reasignar
  console.log(x)
  console.log(y)
}

anotherFunction();