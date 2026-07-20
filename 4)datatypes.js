/*
=========================================
           DATA TYPES
=========================================

Primitive Data Types

i.   Number      -> Example: 1, 1.25
ii.  String      -> Example: "Senthamizh", "Hello"
iii. Boolean     -> Example: true, false
iv.  Null
v.   Undefined
vi.  Symbol      -> A special data type introduced in ES6.

Reference Data Types

vii. Array
viii.Object Literals
ix.  Date
*/


/*
=========================================
      TO FIND THE DATA TYPE
=========================================
*/

// Number
var a = 25;
console.log(typeof a);      // number


// String
var firstName = "Senthamizh";
console.log(typeof firstName);

// Note:
// Avoid using the variable name "name"
// because it is already used by the browser.
// Instead, use firstName or lastName.


// Boolean
var isMarried = true;
console.log(typeof isMarried);


// Null
var phone = null;
console.log(typeof phone);

// Note:
// typeof null returns "object".
// This is a well-known JavaScript bug.


// Undefined
let b;
console.log(typeof b);


// Date
var date = new Date();
console.log(date);
console.log(typeof date);   // object