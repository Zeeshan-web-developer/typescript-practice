//Typescript functions

//normal functions
function Sum(x: number, y: number): number {
  return x + y;
}

let rtnvalue: number = Sum(2, 3); // returns 5
console.log(rtnvalue);

//anonyms functions
let sad = function (x: number, y: number): number {
  return x + y;
};

var s = sad(2, 3); // returns 5
console.log("Hi", s);

//function calling
// In TypeScript, the compiler expects a function to receive the exact number and
//  type of arguments as defined in the function signature. If the function expects
//  three parameters, the compiler
//  checks that the user has passed values for all three parameters
//  i.e. it checks for exact matches.

function Greet(greeting: string, name: string): string {
  return greeting + " " + name + "!";
}

Greet("Hello", "Steve"); //OK, returns "Hello Steve!"
// Greet('Hi'); // Compiler Error: Expected 2 arguments, but got 1.
// Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.

// Optional Parameters
// TypeScript has an optional parameter functionality.
// The parameters that may or may not receive a value can be appended
// with a '?' to mark them as optional.

function Greets(greeting: string, name?: string): string {
  return greeting + " " + name + "!";
}

Greets("Hello", "Steve"); //OK, returns "Hello Steve!"
Greets("Hi"); // OK, returns "Hi undefined!".
//Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.
