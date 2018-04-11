// async function myFunc(){
//     return 'Hello';

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('hello'), 1000);
//     });

//     const error = true;

//     if(!error){
//         const res = await promsie; // wait until promise is resolved.
//         return res;
//     }else{
//         await Promise.reject(new Error('Soemthing went wrong'));
//     }

   
// }

// myFunc()
//     .then(res => console.log(res));

async function getUsers(){
    //await the response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once resolved.
    const data = await response.json();

    // only proceed once second promise is resolved.
    return data;
}

getUsers().then(users => console.log(users));