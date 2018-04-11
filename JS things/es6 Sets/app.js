// Sets - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'john'});
set1.add(true);
set1.add(100); // Wont be added, already there.

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

console.log(set1);

//get count
console.log(set1.size);

// check for values
console.log(set1.has(100)); // 100 - True
console.log(set1.has(50 + 50)); // 100 - True
console.log(set1.has({name: 'John'})); // False - Reference types are not value types

console.log({name: 'John'} === {name: 'John'}); // False - Reference types are stored in the heap, memory address is different.

// Delete from set
set1.delete(100);

console.log(set1);

// Iterating through sets

// For...of
for(let item of set1){
    console.log(item);
}

// Foreach loop
set1.forEach((value) => {
    console.log(value);
});

// Convert into array
const setArr = Array.from(set1);
console.log(setArr);
