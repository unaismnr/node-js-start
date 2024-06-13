var num = 10;

function display() {
    num = 20;

    function hello() {
        num = 30;
    }
    hello()
}

display()
console.log(num)