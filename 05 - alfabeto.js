const { alfabeto } = require('./base');
console.log('-'.repeat(50))
console.log(alfabeto)
console.log('-'.repeat(50), '\n\n')

let regEx = null

// [...]  -> Conjunto
// [^...] -> Conjunto Negado
// [0-9]  -> Range

regEx = /[abc]+/g
console.log('01:', alfabeto.match(regEx), '\n')

regEx = /[123]+/g
console.log('02:', alfabeto.match(regEx), '\n')

regEx = /[abc123]+/g
console.log('03:', alfabeto.match(regEx), '\n')

regEx = /[^abc123]/g
console.log('04:', alfabeto.match(regEx), '\n')

regEx = /[0-9]+/g
console.log('05:', alfabeto.match(regEx), '\n')

regEx = /[a-z]+/g
console.log('06:', alfabeto.match(regEx), '\n')

regEx = /[a-zA-Z0-9]+/g
console.log('🏹 07:', alfabeto.match(regEx), '\n')

regEx = /\w+/g
console.log('🎯 07:', alfabeto.match(regEx), '\n')

regEx = /[^a-zA-Z0-9]+/g
console.log('🏹 08:', alfabeto.match(regEx), '\n')

regEx = /\W+/g
console.log('🎯 08:', alfabeto.match(regEx), '\n')

regEx = /[0-9]+/g
console.log('🏹 09:', alfabeto.match(regEx), '\n')

regEx = /\d+/g
console.log('🎯 09:', alfabeto.match(regEx), '\n')

regEx = /[\u00a0-\u00BA]+/g
console.log('10:', alfabeto.match(regEx), '\n')
// https://en.wikipedia.org/wiki/List_of_Unicode_characters

regEx = /(aten(c|ç)?(a|ã)?o)+/g
console.log('11:', alfabeto.match(regEx), '\n')

regEx = /\s+/g
console.log('🎯 12:', alfabeto.match(regEx), '\n')

regEx = /\S+/g
console.log('🎯 13:', alfabeto.match(regEx), '\n')
