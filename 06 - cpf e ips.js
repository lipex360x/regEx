const { cpfs, ips, html } = require('./base');
console.log('-'.repeat(50))
console.log(cpfs)
console.log('-'.repeat(50))
console.log(ips)
console.log('-'.repeat(50), '\n\n')

let regEx = null

// regEx = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g
regEx = /(\d{3}\.){2}\d{3}\-\d{2}/g
console.log(cpfs.match(regEx))

// regEx = /192\.168\.0\.25/g
// regEx = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g
// regEx = /(\d{1,3}\.){3}\d{1,3}/g

// 250 - 255 -> 25[0-5]
// 200 - 249 -> 2[0-4][0-9]
// 100 - 199 -> 1\d{2}
// 10  -  99 -> [1-9]\d
//  1  -  9  -> \d

regEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g
console.log(ips.match(regEx))



