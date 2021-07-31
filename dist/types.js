// pratice data types in typesscript
// section 1: basic data types
// 1:Srings
var message = "Hello World";
console.log(message);
// 1: numbers
var mynumbers = 12;
console.log(mynumbers);
// 3:boolean
var isonline = false;
console.log(isonline);
// 4:void
function sayHi() {
    console.log("Hi!");
    return;
}
var s = sayHi();
console.log("speech", s); //Output: undefined
//section 2 :user defined  data types
//1: Arrays
// one way declaration
//1.1 number array
var rollnos = [1, 2, 3, 4, 5];
console.log(rollnos);
//1.2 second way
var ids = [23, 34, 100, 124, 44];
console.log(ids);
//string declaration arrays
var names = ["zeeshan", "ahmad"];
console.log(names);
//1.2 second way
var stringid = ["23", "34", "100", "124", "44"];
console.log(stringid);
//multiple types of arrays
var mixed = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(mixed);
// or
var values = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(values);
///3:tuples data types :Tuple can contain  different data types.
// Tuple type variable
var employee = [1, "Steve"];
console.log(employee);
//tuple second  example
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"];
console.log(user);
//You can declare an array of tuple also.
var employees;
employees = [
    [1, "Steve"],
    [2, "Bill"],
    [3, "Jeff"],
];
console.log(employees);
//unioun data types
var code;
code = 123; // OK
code = "ABC"; // OK
// code = false;  Compiler Error
var empId;
empId = 111; // OK
empId = "E111"; // OK
empId = true; //
// Any data type it will accept any data type
var something = "Hello World!";
something = 23;
something = true;
something = "sayHi";
something = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(something);
