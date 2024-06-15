
//synchronous example
function longTask(milliSeconds) {
    dt = new Date();
    while ((new Date - dt) - milliSeconds) { }

}

console.log('Started')
longTask(2000)
console.log('End')

console.log('Started')
longTask(2000)
console.log('End')

//asynchronous example
function showEnd() {
    console.log('End')
}

console.log('Started')
setTimeout(showEnd, 2000)

console.log('Started')
setTimeout(showEnd, 2000)