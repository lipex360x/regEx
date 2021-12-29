const { texto } = require('./base');
console.log('-'.repeat(50))
console.log(texto)
console.log('-'.repeat(50), '\n\n')

let regEx = null

// g - global (encontra todas as ocorrências)
// i - insensitive 
// (()()) grupos
// | ou

regEx = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regEx.exec(texto);

if (found) {
  console.log(found)
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}