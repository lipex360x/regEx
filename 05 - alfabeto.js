const { alfabeto } = require('./base');
console.log('-'.repeat(50))
console.log(alfabeto)
console.log('-'.repeat(50), '\n\n')

let regEx = null

// [...]  -> Conjunto
// [^...] -> Conjunto Negado
// [0-9]  -> Range

regEx = /[abc]+/g
console.log(alfabeto.match(regEx))

regEx = /[123]+/g
console.log(alfabeto.match(regEx))

regEx = /[abc123]+/g
console.log(alfabeto.match(regEx))

regEx = /[^abc123]/g
console.log(alfabeto.match(regEx))

regEx = /[0-9]/g
console.log(alfabeto.match(regEx))

regEx = /[0-9]+/g
console.log(alfabeto.match(regEx))