var person = {
    name: 'Sabash', age: '24', place: 'Kochi', display: function () {
        console.log(this.age)
    }
}
//add property
person.dob = '20-12-2020'

//add method
person.seeAge = function () {
    console.log(this.age)
}

console.log(person.seeAge())


for (item in person) {
    console.log(item)
    console.log('.........')
    console.log(person[item])
    console.log('.........')
}

console.log(person.name)

