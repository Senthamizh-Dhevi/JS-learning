//String Methods

//  1. length
/*My Understanding:
.length returns the total number of characters in a string, including spaces. */

//Syntax:
string.length

//Code:

let str = "JavaScript";
console.log(str.length);  // Output: 10
//------------------------------------------------------------------------------------

//2. charAt()
/*My Understanding:
.charAt() returns the character at the specified index.  */

//Syntax:
string.charAt(index);

//Code:
let str = "JavaScript";
console.log(str.charAt(4));  // Output: S
//------------------------------------------------------------------------

//3. indexOf()
/*My Understanding:
.indexOf() returns the index of the first occurrence of a character or word.

If the value is not found, it returns -1.  */

//Syntax:
string.indexOf(value);

//Code:

let str = "JavaScript";
console.log(str.indexOf("a")); // Output: 1
console.log(str.indexOf("z"));  // Output: -1 explanation: The character "a" is found at index 1, while "z" is not present in the string, hence it returns -1.
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//4. includes()
/*My Understanding:
includes() checks whether a string contains the given value.

It returns true or false.  */

//Syntax:
string.includes(value);

//Code:

let str = "JavaScript";
console.log(str.includes("Script"));  // Output: true
console.log(str.includes("Python"));  // Output: false
//-----------------------------------------------------------------------

//5. slice()
/*My Understanding:
slice() extracts a part of a string.

The ending index is not included.  */

//Syntax:
string.slice(start, end);

//Code:
let str = "JavaScript";
console.log(str.slice(0,4));  //output: Java
console.log(str.slice(4,10));  //output: Script
//--------------------------------------------------------------------------

//6. replace()
/*My Understanding:
replace() replaces the first occurrence of a value with another value.  */

//Syntax:
string.replace(oldValue, newValue);

//Code:
let str = "Hello World";
console.log(str.replace("World","JavaScript"));  //output: Hello JavaScript
//----------------------------------------------------------------------------------

//7. toUpperCase()
/*My Understanding:
toUpperCase() converts all letters to uppercase.  */

//Syntax:
string.toUpperCase();

//Code:

let str = "javascript";
console.log(str.toUpperCase());  //output: JAVASCRIPT
//---------------------------------------------------------------------------

//8. toLowerCase()
/*My Understanding:
toLowerCase() converts all letters to lowercase. */

//Syntax:
string.toLowerCase();

//Code:

let str = "JAVASCRIPT";
console.log(str.toLowerCase());  //output: javascript
//--------------------------------------------------------------------------

//9. trim()
/*My Understanding:
trim() removes spaces from the beginning and end of a string.  */

//Syntax:
string.trim();

//Code:

let str = "   JavaScript   ";
console.log(str.trim());   //JavaScript
//------------------------------------------------------------------------

//10. split()
/*My Understanding:
split() converts a string into an array.

The separator determines where the string is split.  */

//Syntax:
string.split(separator);

//Code:

let str = "HTML,CSS,JavaScript";
console.log(str.split(","));    //output:  ["HTML", "CSS", "JavaScript"]