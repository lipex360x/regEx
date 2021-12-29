const { arquivos } = require('./base');
console.log('-'.repeat(50))
console.log(arquivos)
console.log('-'.repeat(50), '\n\n')

let regEx1 = null
let regEx2 = null

// ##### QUANTIFICADORES ###### //
// * (opcionais) 0 ou n   - {0,}
// + (obrigatório) 1 ou n - {1,}
// ? (opcionais) 0 ou 1   - {0,1}
// \ caractere de escape
// {n,m} mínimo,máximo
// {10,} no mínimo 10
// {,10} de 0 a 10
// {5,10} de 5 a 10
// {1} uma vez só - padrão


regEx1 = /\.jpe{0,1}g/gi
regEx2 = /\.(jp|JP)(e|E)?(g|G)/g

for (const arquivo of arquivos) {
  const valido = arquivo.match(regEx1)

  // if(!valido) continue

  console.log(valido)

  console.log(arquivo, arquivo.match(regEx2))
}