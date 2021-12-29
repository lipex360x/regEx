const { texto } = require('./base');
console.log('-'.repeat(50))
console.log(texto)
console.log('-'.repeat(50), '\n\n')

let regEx = null
let word = null


// (...)(...)(...) $1 $2 $3 ...

regEx = /João|maria/gi
console.log(texto.match(regEx))

regEx = /(João|maria)/ig
const textReplace = texto.replace(regEx, text => {
  return "### " + text.toUpperCase() + " ###"
})
console.log(textReplace)

regEx = /([-_ ]\w)/g
word = 'texto_snake_case to cameo case'
console.log(word.match(regEx))

word = word.toLowerCase()
word = word.charAt(0).toUpperCase() + word.slice(1)
word = word.replace(regEx, text => text[1].toUpperCase())
console.log(word)