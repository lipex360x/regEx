const { html } = require('./base');
console.log('-'.repeat(50))
console.log(html)
console.log('-'.repeat(50), '\n\n')

let regEx = null

regEx = /<.+>.+<\/.+>/g // greedy
console.log(html.match(regEx))  

regEx = /<.+?>.+?<\/.+?>/g // non-greedy
console.log(html.match(regEx))  
