var read = require('readline-sync')

var value = read.question('Enter a Number: ')

console.log(value)

//Larger Check
var num1 = read.question('Enter first Numbers: ')
var num2 = read.question('Enter second Numbers: ')


if (num1 > num2) {
    console.log('Larger is ' + num1)
} else if (num1 === num2) {
    //For Checking, should be use === not ==.
    //in ==, not check type.
    //in ===, will check type also.
    console.log('2 Numbers are equal')
} else {
    console.log('Larger is ' + num2)
}
