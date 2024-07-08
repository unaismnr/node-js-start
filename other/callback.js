
let hello = function (data) {
    console.log('Data: ' + data)
}

function hey(callback) {
    callback('Example')
}

// hey(hello)

// const interval = setInterval(() => {
//     console.log('Running');
// }, 1000);

// setTimeout(() => console.log('Running Time'), 2000);

setTimeout(() => {
    clearInterval(interval);
}, 3000)

console.log(global);