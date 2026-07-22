//Functions in JavaScript
/*My Understanding:
A function is a block of code that performs a specific task.

Instead of writing the same code multiple times, we write it once inside a function and call it whenever needed.

Functions make the code reusable, readable, and easy to maintain.  */

//Syntax
function functionName() {
    // Code to execute
}

//Example 1: Function Without Parameters
/*My Understanding:
A function without parameters does not take any input.

It performs the same task every time it is called.  */

//Code:
function greeting() {
    console.log("Welcome to JavaScript");
}
greeting();  //output: Welcome to JavaScript
//----------------------------------------------------------

//Example 2: Function Called Multiple Times
/*My Understanding:
Once a function is created, we can call it as many times as we want.  */

//Code:
function greeting() {
    console.log("Hello");
}
greeting();  //output: Hello
greeting();  //output: Hello
greeting();  //output: Hello
//------------------------------------------------------------------

//Example 3: Function With Parameters
/*My Understanding:
Parameters are variables that receive values when the function is called.  */

//Syntax
function functionName(parameter1, parameter2) {

}

//Code:
function greeting(name) {
    console.log("Welcome " + name);
}
greeting("Senthamizh");   //output: Welcome Senthamizh
//--------------------------------------------------------------------

//Example 4: Function With Multiple Parameters
/*My Understanding:
A function can accept more than one parameter.   */

//Code:
function add(a, b) {
    console.log(a + b);
}
add(10, 20);    //output: 30

//Example 5: Function With Return Value
/*My Understanding:
The return statement sends a value back to the place where the function was called.

After return, the function stops executing.  */

//Syntax
function functionName() {
    return value;
}

//Code:
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);    //output: 30
//------------------------------------------------------------------------------------

//Example 6: Function Expression
/*My Understanding:
A function can also be stored inside a variable.

This is called a Function Expression.  */

//Code:
const greeting = function () {
    console.log("Hello");
};
greeting();   //output: Hello
//----------------------------------------------------------------------

//Example 7: Arrow Function (ES6)
/*My Understanding:
Arrow functions are the shorter way of writing functions.

They use the => symbol.  */

//Code:
const greeting = () => {
    console.log("Hello");
};
greeting();   //output: Hello
//----------------------------------------------------------------------------

//Example 8: Arrow Function With Return
/*My Understanding:
If there is only one statement, return and {} can be omitted.  */

//Code:
const add = (a, b) => a + b;
console.log(add(10, 20));  //output: 30
//---------------------------------------------------------------

//Example 9: Default Parameters
/*My Understanding:
If no value is passed, the default value is used.  */

//Code:
function greeting(name = "Guest") {
    console.log("Welcome " + name);
}
greeting();    //output: Welcome Guest
greeting("Senthamizh");   //output: Welcome Senthamizh
//----------------------------------------------------------------------------------

/*Important Points:

Functions help avoid writing the same code multiple times.

Functions make code reusable.

Parameters receive values.

Arguments are the actual values passed to a function.

return sends a value back.

Functions can be declared, expressed, or written as arrow functions.

//Difference Between Parameters and Arguments
Parameter	                                              Argument
Variables in the function definition	Actual values passed while calling the function

Example:

function add(a, b) {   // a and b are parameters
    return a + b;
}

add(10, 20);           // 10 and 20 are arguments    */
