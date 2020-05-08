const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true) 
      ? setTimeout(() => resolve('Do something async'), 3000)
      : reject(new Error('Test error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  
  // try {

  // } catch (err) {
    
  // }
  console.log(something)
}

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something)
  } catch (err) {
    console.log(err)
  }
}

console.log('Before')
anotherFunction()
console.log('After')