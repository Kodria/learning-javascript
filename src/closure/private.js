const person = () => {
  var saveName = 'Name'

  return {
    getName: () => {
      return saveName
    },
    setName: (name) => {
      saveName = name
    }
  }
}

const nicolas = person()
console.log(nicolas.getName())
nicolas.setName('Nicolas')
console.log(nicolas.getName())

const mafe = person()
console.log(mafe.getName())
mafe.setName('Mafe')
console.log(mafe.getName())