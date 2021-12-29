const { cpfs, cpfs2 } = require('./base');
console.log('-'.repeat(50))
console.log(cpfs)
console.log('-'.repeat(50))
console.log(cpfs2)
console.log('-'.repeat(50), '\n\n')

let regEx = null
let cpf = null

// MODIFICADORES
//  ^...-> começa com...
// [^]  -> negação
//  $   -> termina com...
//  m   -> multiline

cpf = '047.258.369-96'
regEx = /^(\d{3}\.){2}\d{3}\-\d{2}$/g
console.log(cpf.match(regEx))

cpf = ' 047.258.369-96'
regEx = /^(\d{3}\.){2}\d{3}\-\d{2}$/g
console.log(cpf.match(regEx))

regEx = /(\d{3}\.){2}\d{3}\-\d{2}/g
console.log(cpfs.match(regEx))

regEx = /^(\d{3}\.){2}\d{3}\-\d{2}$/g
console.log(cpfs2.match(regEx))

regEx = /(\d{3}\.){2}\d{3}\-\d{2}/gm
console.log(cpfs2.match(regEx))
