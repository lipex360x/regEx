const { texto } = require('./base');
console.log('-'.repeat(50))
console.log(texto)
console.log('-'.repeat(50), '\n\n')

let regEx1 = null
let regEx2 = null


// (...)(...)(...) $1 $2 $3 ...

regEx1 = /João|maria/gi
console.log(texto.match(regEx1))

regEx2 = /(João|maria)/ig
const textReplace = texto.replace(regEx2, function(input) {
  return "### " + input.toUpperCase() + " ###"
})
console.log(textReplace)