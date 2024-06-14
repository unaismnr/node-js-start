function Person(name, age, place) {
    this.name = name;
    this.age = age;
    this.place = place;
    this.display = function () {
        console.log('Name: ' + this.name)
    }
}

var Sebash = new Person('Sebash', 24, 'Calicut');
var Tebash = new Person('Tebash', 34, 'Kochi');

Sebash.display();
Tebash.display();