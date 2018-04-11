// Destructuring Assignment
let a, b;
[a, b]= [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({a, b} = {a: 100, b:200, c:300, d:400, e:500});
({a, b, ...rest} = {a: 100, b:200, c:300, d:400, e:500});

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;

// Parse array returned from function
function getPeople(){
    return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

// Object Destructuring
const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function(){

    }
}

// Old ES5 way
const name = person.name,
      age = person.age,
      city = person.city;

// New es6 destruturing
const {name, age, city, sayHello} = person;