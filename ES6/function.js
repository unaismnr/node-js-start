
//Note: scope of var is only inside of function
//Note: scope of let is only inside of block. block is {}
function hello() {
    var i = 0;
    let hoi = 10;
    if (i === 0) {
        var hey = 30;
        let hoi = 50;
    }
    console.log(hoi)
    console.log(hey)
}

hello()