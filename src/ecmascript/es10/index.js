let array = [1,2,3, [1,2,3, [1,2,3]]]
console.log(array.flat(2))

let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value*2]))

let hello = '         hello wold'
console.log(hello)
console.log(hello.trimStart())

let hello = 'hello wold   '
console.log(hello)
console.log(hello.trimEnd() )


// try {
//   throw new Error('error')
// } catch {
//   console.log(error)
// }

let entries = [['name', 'Nicolas'], ['age', 28]]
console.log(Object.fromEntries(entries))