var read = require('readline-sync')

//Larger Check in Switch
var num1 = read.question('Enter first Numbers: ')
var num2 = read.question('Enter second Numbers: ')

switch (true) {
    case num1 > num2:
        console.log(`${num1} is larger than ${num2}`);
        break;
    case num1 < num2:
        console.log(`${num2} is larger than ${num1}`);
        break;
    default:
        console.log(`${num1} and ${num2} are equal`);
}
