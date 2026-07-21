//1. Arithmetic Operators
/*My Understanding:
Arithmetic operators are used to perform mathematical calculations.

+ → Addition

- → Subtraction

* → Multiplication

/ → Division

% → Modulus (Remainder)

** → Exponentiation (Power)

++ → Increment

-- → Decrement

** (Exponentiation Operator) was introduced in ES2016.  */

//code:
let a = 100;
let b = 50;

let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
let g = a % b;
let h = 2 ** 3;
let i = ++a;
let j = --a;
let k = --b;

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
//-----------------------------------------------------
//2. Assignment Operators
/*My Understanding:
Assignment operators are used to assign or update the value of a variable.

= assigns a value.

+=, -=, *=, /=, %= perform the operation and then assign the result.  */

//code:
let a = 10;

console.log(a += 10);
console.log(a -= 10);
console.log(a *= 10);
console.log(a /= 10);
console.log(a %= 10);
//-----------------------------------------------------

//3. Comparison Operators
/*My Understanding:
Comparison operators compare two values.

The output will always be true or false.

== checks only the value.

=== checks both the value and the data type.

!= checks whether the values are not equal.  */

//code:
let a = 20;
let b = "20";
let c = 20;

console.log(a == b);
console.log(a === b);
console.log(a === c);
console.log(a != b);
//-----------------------------------------------------------------
//4. Relational Operators
/*My Understanding:
Relational operators compare two values.

They are mostly used in conditions such as checking age, marks, salary, etc.  */

//code:
let a = 20;
let b = 30;

console.log("a > b :", a > b);
console.log("a < b :", a < b);
console.log("a >= b :", a >= b);
console.log("a <= b :", a <= b);
//-----------------------------------------------------------------
//5. Logical Operators
/*My Understanding:
Logical operators combine two or more conditions.

&& (AND): All conditions must be true.

|| (OR): At least one condition must be true.

! (NOT): Returns the opposite Boolean value.  */

//code:
let mark = 45;

console.log(mark >= 35 && mark <= 100);

let mark2 = 30;

console.log(mark2 <= 20 || mark2 >= 40);

let a = 5;

console.log(a == 2 || a >= 5);

let b = true;

console.log(!b);
//-----------------------------------------------------------------
//6. Strict Equality (Identity) Operator
/*My Understanding:
=== checks both the value and the data type.

Both must be the same to return true. */

//code:
let a = 20;
let b = "20";
let c = 20;
let d = 10;

console.log(a === b);
console.log(a === c);
console.log(c === d);
//-----------------------------------------------------------------
/* Conditional (Ternary) Operator
condition ? trueValue : falseValue;
Example:
const age = 20;
console.log(age >= 18 ? "Eligible" : "Not Eligible");
Output:
Eligible */

//7. Conditional (Ternary) Operator
/*My Understanding:
The ternary operator is a shortcut for if...else.

? checks the condition.

If the condition is true, the first value is returned.

Otherwise, the second value is returned. */
const age = 15;

const result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result);

//8. Ternary Operator for Default Values (Null Handling)
/*My Understanding:
The ternary operator can be used to check whether a value is available.

If the value is null, undefined, or empty, we can display a default value.

This is one way to handle missing values. */

//code:
function welcome(name) {
    const result = name ? name : "No Name";

    console.log("Welcome", result);
}

welcome();          //Output: Welcome No Name
welcome(null);      //Output: Welcome No Name
welcome("ammu");    //Output: Welcome ammu

//example:
function welcome(name) {
    console.log("Welcome", name);
}

welcome();          //Output: Welcome undefined

//9. Ternary Operator with Objects
/*My Understanding:
We can use the ternary operator to compare an object's property.

Based on the condition, it returns one of two values.  */

//code:
const user = {
    name: "john",
    age: 18
};

console.log(user);
console.log(user.name);

const result = user.name == "sen"
    ? "Correct name is sen"
    : "Wrong name";

console.log(result);  
/* Output: 
{ name: 'john', age: 18 }
john
Wrong name */

//10. Nested Ternary Operator (Condition Chaining)
/*My Understanding:
Nested ternary operators are used when there are multiple conditions.

It works like multiple if...else if...else statements.

Question:

If grade >= 90 → A Grade
If grade >= 80 → B Grade
Otherwise → C Grade  */
//code:
const grade = 89;

const result =
    grade >= 90
        ? "A Grade"
        : grade >= 80
        ? "B Grade"
        : "C Grade";

console.log(result);  // Output: B Grade
/* Important Note
In modern JavaScript, for handling null or undefined, the Nullish Coalescing Operator (??) is often preferred over a ternary operator when you simply want a default value.
Example:
const name = null;
console.log(name ?? "No Name");
Output:
No Name */

//-----------------------------------------------------------------
// 11. Nullish Coalescing Operator (??)
/*My Understanding:
?? returns the right-side value only when the left-side value is null or undefined.  */

//Code:
const a = null ?? "No Value";

console.log(a);

const b = 25 ?? 45;

console.log(b);  //output: 25 explanation: In the first case, since 'a' is null, it returns "No Value".In the second case, since 'b' is 25 (not null or undefined), it returns 25.
//-------------------------------------------------
// 12. Nullish Coalescing Assignment Operator (??=)
/*My Understanding:
??= assigns a value only if the variable is null or undefined.  */

//Code:
const user = {
    name: "sen"
};

console.log(user); // Output: { name: 'sen' }

console.log(user.city); // Output: undefined

user.city ??= "Pondy";  // Output: Pondy

console.log(user.city);  // Output: Pondy

console.log(user);  // Output: { name: 'sen', city: 'Pondy' }
//-------------------------------------------
// 13. Arrow Function
/*My Understanding:
Arrow functions provide a shorter way to write functions.

=> is called the arrow operator. */

//Code:
const greeting = () => {
    return "Hello";
};

console.log(greeting); // Output: [Function: greeting]

console.log(greeting()); // Output: Hello   explanation: The first console.log prints the function definition, while the second one calls the function and prints its return value.
//-------------------------------------------
//14. Bitwise Operators
/*My Understanding:
Bitwise operators work with the binary representation of numbers.  */

//Code:

const a = 2;
const b = 3;

console.log(a & b);  // Output: 2 (Binary: 10 & 11 = 10)
console.log(a | b); // Output: 3 (Binary: 10 | 11 = 11)
console.log(a ^ b); // Output: 1 (Binary: 10 ^ 11 = 01)
//-------------------------------------------
// 15. Increment and Decrement Operators
/*My Understanding:
++ increases the value by 1.

-- decreases the value by 1.  */

Code:

let a = 10;
a++;
console.log(a); // Output: 11

let b = 10;
b--;
console.log(b); // Output: 9
//-------------------------------------------
// 16. Prefix and Postfix Operators
/*My Understanding:
Postfix (x++) :
First uses the current value.
Then increments the variable.
Prefix (++x) :
First increments the variable.
Then uses the updated value.  */

Code:

let x = 5;
const y = x++;
console.log("x =", x, "y =", y);  // Output: x = 6 y = 5

let r = 5;
const s = ++r;
console.log("r =", r, "s =", s);  // Output: r = 6 s = 6
//-----------------------------------------------------------