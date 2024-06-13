function hello() {
    console.log('hello');
}

hello()

function hello(num1, num2) {
    console.log('hello');
    var sum = num1 + num2;
    return sum;
}

console.log(hello(10, 20));