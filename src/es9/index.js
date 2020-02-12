//-------------------- Operador de reposo -------------------------- //

const obj = {
  name: 'Nicolas',
  age: 28,
  country: 'CO'
}

let {name, ...example} = obj
console.log(name, example)

//-------------------- propagación -------------------------- //

const obj2 = {
  name: 'Nicolas',
  age: 28,
}
const obj3 = {
  ...obj2,
  country: 'CO'
}

console.log(obj3)

//-------------------- Promise.finally -------------------------- //

const helloWold = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello wold'), 3000)
      : reject(new Error('Test error'))
  })
}

helloWold()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finalizo'))

//-------------------- Mejoras en RegEx -------------------------- //

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-01-01')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)