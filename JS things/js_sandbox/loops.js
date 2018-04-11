// For Loop

for(let i = 0; i < 10; i++){
    // console.log(`Number ${i}`);

    if(i === 2){
        console.log('2 is my favorite number');
        continue; // Go to next iteration
    }

    if(i === 5){
        break;
    }

    console.log(`Number ${i}`)
}

// While Loop
let i = 0;

while(i < 10){
    console.log(`Number ${i}`);
    i++;
}

// Do while Loop
i = 0;

do{
    console.log(`Number ${i}`);
    i++;
}
while(i < 10)


// Loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++)
// {
//     console.log(cars[i]);
// }

// Foreach on array
cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});

// Map
const users = [
    {id:1, name:'John'},
    {id:2, name:'Sarah'},
    {id:3, name:'Karen'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}