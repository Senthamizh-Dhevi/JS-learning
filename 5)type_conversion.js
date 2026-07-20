/*
=========================================
          TYPE CONVERSION
=========================================

Type Conversion means converting one data type into another data type.
*/


// =========================================
// Number to String
// =========================================

var a = 25; // Number Data Type
console.log(a);
console.log(typeof a);

a = String(a); // Convert Number to String
console.log(a);
console.log(typeof a);


// =========================================
// Boolean to String
// =========================================

var b = true; // Boolean Data Type
console.log(b);
console.log(typeof b);

b = String(b); // Convert Boolean to String
console.log(b);
console.log(typeof b);


// =========================================
// Date to String
// =========================================

var c = new Date(); // Date Object
console.log(c);
console.log(typeof c);

c = String(c); // Convert Date to String
console.log(c);
console.log(typeof c);


// =========================================
// Array to String
// =========================================

var d = [1, 2, 3, 4, 5]; // Array Data Type
console.log(d);
console.log(typeof d);

d = String(d); // Convert Array to String
console.log(d);
console.log(typeof d);


// =========================================
// Another Way to Convert to String
// =========================================

var e = 25.5;

console.log(e);
console.log(typeof e);

e = e.toString(); // Convert Number to String
console.log(e);
console.log(typeof e);



// =========================================
// String to Number
// =========================================

var a = "25"; // String Data Type
console.log(a);
console.log(typeof a);

a = Number(a); // Convert String to Number
console.log(a);
console.log(typeof a);


// =========================================
// Boolean to Number
// =========================================

var b = true;
// true becomes 1 and false becomes 0

console.log(b);
console.log(typeof b);

b = Number(b); // Convert Boolean to Number
console.log(b);
console.log(typeof b);


// =========================================
// Array to Number
// =========================================

var a = [1, 2, 3, 4, 5];

console.log(a);
console.log(typeof a);

a = Number(a); // Convert Array to Number
console.log(a);
console.log(typeof a);

// Output: NaN (Not a Number)


// =========================================
// String (Words) to Number
// =========================================

var b = "ammu";

console.log(b);
console.log(typeof b);

b = Number(b); // Convert String to Number
console.log(b);
console.log(typeof b);

// Output: NaN (Not a Number)
// Because a word cannot be converted into a valid number.



// =========================================
// parseInt() and parseFloat()
// =========================================

// parseInt() converts a string to an integer.
// parseFloat() converts a string to a floating-point number.

var a = "25.55";

console.log(a);
console.log(typeof a);

console.log(parseInt(a));   // 25
console.log(parseFloat(a)); // 25.55