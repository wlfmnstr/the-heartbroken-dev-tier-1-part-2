/**
 * Conditionals
 */

// Basic Conditional (if statement)
// create a variable with someone's name in it
let firstName = 'Jasey';

if (firstName === 'Casey') {
    console.log('Hello Casey!');
} else {
    console.log('Hello Stranger!');
}

// basic with if, else if, else

if (firstName === 'Casey') {
    console.log('Hello Casey!');
} else if (firstName === 'Jasey') {
    console.log('Hello Jasey!');
} else {
    console.log('Hello Stranger!');
}

let age = 18;

switch (age) {
    case 18:
        console.log('You are 18');
        break;
    case 18:
        console.log('You are 21');
        break;
    case 33:
        console.log('You are 33');
        break;
    default:
        console.log('You are not 18, 21, or 33');
        break;
}


// if else calling function in conditional

function returnName() {
    return 'Casey';
}

if (returnName() === 'Casey') {
    console.log('Hello Casey we called a function!');
}

// Look into SRP (Single Responsibility Principle)
function isVotingAge() {
    let ageFromUser = prompt('What is your age?');
    let isVotingAge = ageFromUser >= 18;
    
    console.log("isVotingAge: " + isVotingAge);
    if (isVotingAge) {
        console.log('You can vote and we called a function in a conditional!!!!');
    } else {
        console.log('You cannot vote and we called a function in a conditional!!!!');
    }

    return isVotingAge;
}

if (isVotingAge()) {
    console.log('You can vote and we called a function in a conditional!!!!');
} else {
    console.log('You cannot vote and we called a function in a conditional!!!!');
}

function howOldAreYou() {
    let ageFromUser = prompt('What is your age?');
    return ageFromUser;
}

switch (howOldAreYou()) {
    case '18':
        console.log('You are 18');
        break;
    case '21':
        console.log('You are 21');
        break;
    case '33':
        console.log('You are 33');
        break;
    default:
        console.log('You are not 18, 21, or 33');
        break;
}


