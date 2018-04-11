// Function Declarations

function greet(firstName = 'John', lastName = 'Doe'){
    //console.log('Hello');
    return `Hello ${firstName} ${lastName}`;
}

// console.log(greet());

// Function expressions
const square = function(x = 3){
    return x*x;
};

// console.log(square())

// Immediately Invokable Function Expressions - IIFEs
(function(name){
    console.log(`Hello ${name}`);
})('Brad');

// Property Methods
const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();