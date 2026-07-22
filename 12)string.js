//Strings in JavaScript
/*My Understanding:
A String is a data type used to store text or characters.

A string can contain letters, numbers, symbols, and spaces.

Strings are written inside:

Double quotes " "

Single quotes ' '

Backticks ` ` (Template Literals)  */
//-----------------------------------------------------
//Syntax:
let variableName = "String";
//-------------------------------------------------------------

//1. String Using Double Quotes
/*My Understanding:
We can create a string using double quotes (" ").  */

//Code:

let name = "Senthamizh";
console.log(name);    // Output: Senthamizh
console.log(typeof name);   // Output: string
//--------------------------------------------------------------------------

//2. String Using Single Quotes
/*My Understanding:
We can also create a string using single quotes (' ').  */

//Code:

let city = 'Puducherry';
console.log(city);  // Output: Puducherry
console.log(typeof city);  // Output: string
//--------------------------------------------------------------------------

//3. String Using Backticks (Template Literals)
/*My Understanding:
Backticks (` `) are used to create template literals.

They allow us to write multi-line strings and insert variables using ${}. */

//Code:

let name = "Senthamizh";
console.log(`Welcome ${name}`); // Output: Welcome Senthamizh
//note: Template literals are enclosed in backticks (` `) and can span multiple lines without the need for concatenation or escape characters.
//-------------------------------------------------------------

//4. String Length
/*My Understanding:
The .length property returns the total number of characters in a string, including spaces.  */

//Code:
let name = "Senthamizh";
console.log(name.length);  // Output: 10
//----------------------------------------------------------------------------------

//5. Accessing Characters
/*My Understanding:
Each character in a string has an index.

The first character starts at index 0.  */

//Code:

let name = "Senthamizh";
console.log(name[0]); // Output: S
console.log(name[4]);  // Output: h
//-------------------------------------------------------------

//6. String Concatenation
/*My Understanding:
Concatenation means joining two or more strings.

We can use the + operator.  */

//Code:

let firstName = "Senthamizh";
let lastName = "R";
console.log(firstName + " " + lastName);  // Output: Senthamizh R
//---------------------------------------------------------------------------

//7. Template Literals
/*My Understanding:
Template literals make it easy to combine strings and variables.

Variables are written inside ${}.  */

//Code:

let name = "Senthamizh";
let age = 19;
console.log(`My name is ${name} and I am ${age} years old.`);  // Output: My name is Senthamizh and I am 19 years old.
//----------------------------------------------------------------------------------------------------------------------------

//8. Escape Characters
/*My Understanding:
Escape characters are used to include special characters inside a string.

Escape Character	Meaning
\'	               Single Quote
\"	               Double Quote
\\	               Backslash
\n	               New Line
\t	               Tab Space        */

//Code:

console.log("Hello\nWorld");  
// Output:
Hello
World
console.log("JavaScript\tNotes");
//output: JavaScript    Notes

/* Important Points
Strings are used to store text.

typeof a string returns "string".

Strings can be written using " ", ' ', or ` `.

String indexing starts from 0.

.length returns the number of characters.

Template literals use ${} to insert variables.  */