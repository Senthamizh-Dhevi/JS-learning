/*
=========================================
            TYPE COERCION
=========================================

Type Coercion means JavaScript automatically converts one data type
into another data type while performing an operation.
*/


// =========================================
// String + Number
// =========================================

var a = "25";
var b = 25;

console.log(a + b);

// Output: 2525
// Since 'a' is a string and 'b' is a number,
// JavaScript automatically converts the number
// into a string and concatenates them.


// =========================================
// Number + Number
// =========================================

a = Number(a); // Convert string to number
b = 25;

console.log(a + b);

// Output: 50
// Since both values are numbers,
// JavaScript performs addition.


// (OR)

a = 25;
b = 25;

console.log(a + b);

// Output: 50
// Since both values are numbers,
// JavaScript performs addition.