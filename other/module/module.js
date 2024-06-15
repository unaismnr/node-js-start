
module.exports.hello = function () {
    console.log('Hi Friends')
}

var swcp = require('to-lower-case')

var sv = swcp("HELLO WORLD")
console.log(sv)