let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // Must start with case insensitive h
re = / world$/i; // Must end with case insensitive world
re = /^hello$/i; // must begin and end with case insensitive hello
re = /h.llo/i; // Matches any one character
re = /h*llo/i; // Matches any character zero or more times
re = /gre?a?y/i; // Optional characters
re = /gre?a?y\?/i;// escape character 

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be uppercase G or F
re = /[^GF]ray/i; // Must be anything except a g or f
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any case letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {x} amount of times
re = /Hel{2,4}o/i; // Must occur between 2 and 4 amount of times
re = /Hel{2,}o/i; // Must occur atleast 2 times

// Parenthesis () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/; // Word chracter - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; //Match any non digit
re = /\s/; // Match whitespace
re = /\S/; //Match non-whitespace char
re = /Hell\b/i; // word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if not followed by y


// String to match
const str = 'Hello World';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);