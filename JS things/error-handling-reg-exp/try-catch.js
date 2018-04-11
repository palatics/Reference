const user = {email: 'jdoe@gmail.com'};

try{
    // Produce a reference error
    // myFunction();

    // Product a TypeError
    // null.myFunction();

    // Will product SyntaxError
    // console.log(eval('Hello World'));

    // Will produce a URIError
    // decodeURIComponent('%');

    if(!user.name){
        // throw 'User has no name';

        throw new SyntaxError('User has no name');
    }

}catch(e){
    console.log(`User Error: ${e.message}`);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
} finally {
    console.log('Finally runs regardless of result...');
}

console.log('Program continues...');