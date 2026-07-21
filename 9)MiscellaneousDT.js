//Miscellaneous Data Types
/*My Understanding:
Miscellaneous data types are special values provided by JavaScript.

They are used in different situations such as when a variable has no value, an invalid number, or an infinite value.

The commonly used special values are:

undefined
null
NaN
Infinity  */

//1. Undefined
/*My Understanding:
undefined means a variable has been declared but no value has been assigned.  */

//Code:

let a;
console.log(a);  // Output: undefined
console.log(typeof a);  // Output: undefined

//2. Null
/*My Understanding:
null means the variable has no value intentionally.

It represents an empty or unknown value. */

//Code:

let a = null;

console.log(a);   // Output: null
console.log(typeof a);   // Output: object

//Note: typeof null returns "object". This is a well-known behavior in JavaScript.

//3. NaN (Not a Number)
/*My Understanding:
NaN means Not a Number.

It occurs when JavaScript cannot convert a value into a valid number.  */

Code:
let a = Number("Senthamizh");

console.log(a);  // Output: NaN
console.log(typeof a);  // Output: number

//4. Infinity
/*My Understanding:
Infinity represents a value greater than any number.

It usually occurs when a number is divided by 0. */

//Code:
let a = 10 / 0;

console.log(a);  // Output: Infinity
console.log(typeof a);  // Output: number

/*
Important Points
undefined → Variable declared but not assigned.

null → Variable intentionally has no value.

NaN → Invalid number.

Infinity → Result of dividing a number by 0. */

