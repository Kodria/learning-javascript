//-------------------- Objects -------------------------- //

console.log('------------- Objects -------------');
const data = {
  frontend: 'Camilo',
  backend: 'Nicolas',
  design: 'Brand'
}

const entries = Object.entries(data)
const values = Object.values(data)
const keys = Object.keys(data)

console.log(entries)
console.log(values)
console.log(keys)
console.log('------------- END Objects -------------');

//-------------------- Padding -------------------------- //

console.log('------------- Padding -------------');
const string = 'hello'

console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' ---'))
console.log('------------- END Padding -------------');


//-------------------- Async/Await -------------------------- //

console.log('------------- Async/Await -------------');
const helloWorld = (status) => {
  return new Promise((resolve, reject) => {
    if (status === true) {
      setTimeout(() => {
        resolve('Hello world')
      }, 3000)
    } else {
      reject('Opps!!!')
    }
  })
}

const helloAsync = async (status) => {
  const hello = await helloWorld(status)
  console.log(hello)
}

helloAsync(true);

const anotherFunction = async (status) => {
  try {
    const hello = await helloWorld(status)
    console.log(hello)
  } catch(err) {
    console.log(err)
  }
}

anotherFunction(false)

// helloWorld(true)
//   .then((result) => {
//     console.log(result)
//   }).catch(err => {
//     console.log(err)
//   })
console.log('------------- END Async/Await -------------');