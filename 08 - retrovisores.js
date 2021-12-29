const { html2 } = require('./base');
console.log('-'.repeat(50))
console.log(html2)
console.log('-'.repeat(50), '\n\n')

let regEx = null

// Retrovisores
// () () () <- $1 $2 $3 <- \1 \2 \3

regEx = /<.+?>.+?<\/.+?>/g // non-greedy
console.log(html2.match(regEx))

regEx = /<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g // non-greedy
console.log(html2.match(regEx))

regEx = /(<(\w+)([\s\S]*?)>)([\s\S]*?)(<\/\2>)/g // non-greedy
console.log(html2.replace(regEx, '$1 "$4" $5'))

regEx = /(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g // non-greedy
console.log(html2.replace(regEx, '$1 "$3" $4'))
