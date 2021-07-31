// pratice data types in typesscript

// section 1: basic data types
// 1:Srings
var message: string = "Hello World";
console.log(message);

// 1: numbers
var mynumbers: number = 12;
console.log(mynumbers);

// 3:boolean
var isonline: boolean = false;
console.log(isonline);

// 4:void
function sayHi(): void {
  console.log("Hi!");
  return;
}

let s = sayHi();
console.log("speech", s); //Output: undefined

//section 2 :user defined  data types

//1: Arrays
// one way declaration
//1.1 number array
var rollnos: number[] = [1, 2, 3, 4, 5];
console.log(rollnos);
//1.2 second way

let ids: Array<number> = [23, 34, 100, 124, 44];
console.log(ids);

//string declaration arrays
var names: string[] = ["zeeshan", "ahmad"];
console.log(names);
//1.2 second way

let stringid: Array<string> = ["23", "34", "100", "124", "44"];
console.log(stringid);

//multiple types of arrays
let mixed: (string | number)[] = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(mixed);
// or
let values: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(values);

///3:tuples data types :Tuple can contain  different data types.

// Tuple type variable
var employee: [number, string] = [1, "Steve"];
console.log(employee);

//tuple second  example
var user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"];
console.log(user);

//You can declare an array of tuple also.
var employees: [number, string][];
employees = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];
console.log(employees);

//unioun data types
let code: string | number;
code = 123; // OK
code = "ABC"; // OK
// code = false;  Compiler Error

let empId: string | number | boolean;
empId = 111; // OK
empId = "E111"; // OK
empId = true; //

// Any data type it will accept any data type
let something: any = "Hello World!";
something = 23;
something = true;
something = "sayHi";
something = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(something);
