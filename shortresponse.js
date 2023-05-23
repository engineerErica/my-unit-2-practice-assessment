//1. The function declaration comes after the variable declaration in the code below. What will happen when it this code runs?

/*
let greeting = "Hello!"

function sayItLoud() {
  console.log(`${greeting}!!!`)
}

sayItLoud();
*/

// 1 ANSWER: When this code runs, "Hello!!!!" is logged. This code works because the variable, greeting, used inside the function, sayItLoud, is initialized before the function is declared.

//2. Why does the code below throw an error?

/*
sayItLoud();

function sayItLoud() {
    console.log(`${greeting}!!!`)
}

let greeting = "Hello"
*/

// 2 ANSWER: This code throws an error because the entire function declaration that gets hoisted has a variable, greeting, that cannot be hoisted because it was initialized with the let keyword.

// 3. Mmhmmm... so what about this😰. What does the following code log? Why?

// /*
sayItLoud();
function sayItLoud() {
  console.log(`${greeting}!!!`)
}
var greeting = "Hello"
// */

// 3 ANSWER: "undefined!!!" is logged because the entire function declaration gets hoisted, but the variable declaration gets hoisted, but does not hoisted the variable assignment.

// 4: Why does the following block of code throw an error? How can we fix this without changing the variable declaration keyword?