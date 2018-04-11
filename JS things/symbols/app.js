// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(typeof sym2);

console.log(Symbol('123') === Symbol('123')); // false
console.log(`Hello ${sym1.toString()}`);

// Unique object keys
const key1 = Symbol();
const key2 = Symbol('sym2');

const myObj = {};

myObj[key1] = 'Prop1';
myObj[key2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';
// Symbols are not enumeruable in for...in

for(let i in myObj){
    console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));