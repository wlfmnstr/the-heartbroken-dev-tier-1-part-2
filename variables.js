const URL = "https://www.google.com";
const PORT = 3000;
const DATABASE_NAME = "mydb";
const USERNAME = "admin";

//check that javascript is linked
console.log("hello world!");

/**
 * This is a multiline comment
 * It spans multiple lines...
 */

// Variables
// let keyword is for variables that can be reassigned values
let counter; // variable declaration
const counterconst = 0;

counter = 1; // variable assignment
console.log("Let counter: " + counter);

// const keyword is for variables that cannot be reassigned values
const NAME = "Casey";
console.log("Const NAME: " + NAME);

//reassigning a value to let - no error:
counter = 2;
console.log("Let counter after re-assignment " + counter);

// //Can't reassign a value to const - error:
// NAME = "Bob";
// console.log("Const NAME after re-assignment " + NAME);

function logCounterValue() {
    console.log("Counter in function: " + counter);
}

function incrementCounter() {
    logCounterValue();
    counter++;
    logCounterValue();
}

incrementCounter();


// SCOPE
// Global scope
// The stuff from the top of the file is in the global scope
console.log("URL: " + URL);

function logGlobalVariable() {
    console.log("URL in function: " + URL);
}

logGlobalVariable();

// Function Scope (block scope inside {})
function logFunctionVariable() {
    let functionVariable = "I am a function variable";
    console.log("Function variable: " + functionVariable);
    {
        var blockVariable = "I am a block variable";
        let blockLetVariable = "I am a block let variable";
        console.log("Block variable: " + blockVariable);
    }
    console.log("Block variable outside block: " + blockVariable);
}

logFunctionVariable();

console.log("functionVariable: " + functionVariable);