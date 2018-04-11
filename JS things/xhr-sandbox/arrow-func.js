// const sayHello = function (){
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// // }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';

//REturn object
// const sayHello = () => ({msg:'Hello'})

// Single param does not needs parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

//Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${$lastName}`);
// sayHello('Brad', 'Traversy');

const users = ['nathan', 'john', 'william'];

// const nameLengths = users.map(function(name){
//     return name.length;
// });

// Shorter
const nameLengths = users.map(name => {
    return name.length;
});

const nameLengths = users.map(name => name.length)

console.log(nameLengths);