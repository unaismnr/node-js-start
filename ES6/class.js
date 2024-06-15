
class Sample {
    sampleHello() {
        console.log('This is sample hello')
    }
}

//inheritance
class Hello extends Sample {
    constructor(num1, num2) {
        super();
        this.num1 = num1;
        this.num2 = num2;
    }
    hello() {
        console.log('Number Sum is: ' + (this.num1 + this.num2))
    }
}

let abc = new Hello(10, 20);
abc.hello()
abc.sampleHello()