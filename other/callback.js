
let hello = function (data) {
    console.log('Data: ' + data)
}

function hey(callback) {
    callback('Example')
}

hey(hello)