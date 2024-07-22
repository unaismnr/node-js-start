const promise = require('promise');

function add(num1, num2) {
    return new promise((resolve, reject) => {
        if (num1 == 0) {
            reject("first number is 0")
        }
        resolve(num1 + num2)
    })
}

function multiply(num1, num2) {
    return new promise((resolve, reject) => {
        if (num1 == 0) {
            reject("first number is 0")
        }
        resolve(num1 * num2)
    })
}

function div(num1, num2) {
    return new promise((resolve, reject) => {
        if (num1 == 0) {
            reject("first number is 0")
        }
        resolve(num1 / num2)
    })
}


add(10, 20).then((sum) => {
    console.log(sum)
    return multiply(sum, sum)
}).then((product) => {
    console.log(product);
    return div(product, 10)
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});