//1. if Statement
/*My Understanding:
The if statement is used to execute a block of code only when the given condition is true. 

Syntax:
if (condition) {
    // code
}  */

//Code:

let myAge = 25;
if (myAge >= 18) {
    console.log("Eligible"); //output: Eligible
}
//-----------------------------------------------------
//2. if Statement with prompt()
/*My Understanding:
prompt() is used to get input from the user.

The if statement checks whether the entered value satisfies the condition.*/
//Code:

let age = prompt("Enter your age:");

if (age != null && age >= 18) {
    console.log("You're Eligible"); //sample input: 20, output: You're Eligible
}
//-----------------------------------------------------
//3. if...else Statement
/*My Understanding:
if...else is used when there are only two possible outcomes.

If the condition is true, the if block executes.

Otherwise, the else block executes.

Syntax:

if (condition) {

}
else {

} */
//Code:

let myAge = 15;

if (myAge >= 18) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}
//-----------------------------------------------------
//4. else if Statement (Else If Ladder)
/*My Understanding:
Used when there are multiple conditions.

JavaScript checks each condition from top to bottom.

Once a condition becomes true, the remaining conditions are skipped. */

//Example 1
//Code:

let age = 52;

if (age == 18) {
    console.log("College");
}
else if (age <= 10) {
    console.log("Child");
}
else if (age < 18) {
    console.log("Higher Secondary");
}
else if (age >= 50) {
    console.log("Retired Person");
}
else {
    console.log("Invalid");
}

//Example 2
//Code:

let mark = 75;

if (mark <= 100 && mark >= 90) {
    console.log("Grade A");
}
else if (mark >= 75 && mark < 90) {
    console.log("Grade B");
}
else if (mark >= 50 && mark < 75) {
    console.log("Grade C");
}
else if (mark >= 25) {
    console.log("Pass");
}
else {
    console.log("Fail");
}
//-----------------------------------------------------
//5. Nested if Statement
/*My Understanding:
A nested if means an if statement inside another if statement.

The inner if executes only if the outer if condition is true.

Syntax:
if (condition) {

    if (condition) {

    }

} */
//Code:

let eng = 95;
let tamil = 98;
let maths = 75;

let total = eng + tamil + maths;
let avg = total / 3;

console.log("Total:", total);
console.log("Average:", avg.toFixed(2));

if (eng >= 35 && tamil >= 35 && maths >= 35) {

    console.log("Pass");

    if (avg >= 91 && avg <= 100) {
        console.log("Grade A");
    }
    else if (avg >= 81 && avg <= 90) {
        console.log("Grade B");
    }
    else if (avg >= 71 && avg <= 80) {
        console.log("Grade C");
    }
    else {
        console.log("Grade D");
    }

}
else {

    console.log("Result: Fail");
    console.log("Grade: No Grade");

}
//-----------------------------------------------------
//6. switch Statement
/*My Understanding:
The switch statement is used when one variable has multiple possible values.

It compares the variable with each case.

If a matching case is found, that block executes.

break stops execution from continuing into the next case.

default runs if no case matches.

Syntax:
switch (expression) {
    case value:
        // code
        break;
    default:
        // code
} */

//Code:

let num = 1;

switch (num) {

    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;

    default:
        console.log("Invalid");

}
//-----------------------------------------------------
//7. Grouping switch Cases
/*My Understanding:
Multiple case labels can execute the same block of code.

This avoids writing the same code repeatedly.  */

//Code:

let letter = "a";

switch (letter) {

    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log(letter + " is a vowel");
        break;

    default:
        console.log(letter + " is not a vowel");
}
//-----------------------------------------------------
//8. for Loop
/*My Understanding:
A for loop is used when the number of iterations is known.

Syntax:
for (initialization; condition; increment/decrement) {

} */
//Example 1

for (let i = 1; i <= 5; i++) {
    console.log(i);  //output: 1 2 3 4 5
}
//Example 2

let arr = [];

for (let i = 0; i <= 20; i++) {
    arr.push(i);
}
console.log(arr); //output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//-----------------------------------------------------
//9. while Loop
/*My Understanding:
The while loop executes as long as the condition is true.

If the condition is false initially, the loop will not execute even once.

Syntax:
while (condition) {
} */

//Code:

let i = 1;
while (i <= 10) {
    console.log(i);  //output: 1 2 3 4 5 6 7 8 9 10
    i++;
}
//-----------------------------------------------------
//10. do...while Loop
/*My Understanding:
The do...while loop executes the code at least once, even if the condition is false.

The condition is checked after executing the loop body.

Syntax:
do {

}
while (condition);  */

//Code:

let table = 2;
let limit = 5;
let i = 1;

do {
    console.log(table + " x " + i + " = " + (table * i));
    i++;
}
while (i <= limit);

/*Output
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10 */
//-----------------------------------------------------
//11. Looping Over an Object
/*My Understanding:
Objects cannot be looped through directly using a normal for loop.
We first convert the object into an array using:

Object.keys() → Returns all the keys.
Object.values() → Returns all the values.
Object.entries() → Returns both keys and values as an array. 

After converting the object into an array, we can loop through it. */

//1. Object.keys()
/*My Understanding:
Object.keys() returns all the property names (keys) of an object as an array. */

//Code:

let user = {
    name: "SENTHAMIZH",
    age: 19,
    city: "Puducherry",
    contact: "9087654321"
};
console.log(Object.keys(user));    //output: ["name", "age", "city", "contact"]

//2. Object.values()
/*My Understanding:
Object.values() returns all the property values of an object as an array. */

//Code:

let user = {
    name: "SENTHAMIZH",
    age: 19,
    city: "Puducherry",
    contact: "9087654321"
};
console.log(Object.values(user));  //output: ["SENTHAMIZH", 19, "Puducherry", "9087654321"]

//3. Object.entries()
/*My Understanding:
Object.entries() returns both keys and values as nested arrays.  
Each inner array contains one key-value pair.  */

//Code:

let user = {
    name: "SENTHAMIZH",
    age: 19,
    city: "Puducherry",
    contact: "9087654321"
};
console.log(Object.entries(user));
/*Output:
[
  ["name", "SENTHAMIZH"],
  ["age", 19],
  ["city", "Puducherry"],
  ["contact", "9087654321"]
] */

//4. Loop Using Object.keys()
/*My Understanding:
We can use Object.keys() with a for...of loop to access each key and its corresponding value. */

//Code:

let user = {
    name: "SENTHAMIZH",
    age: 19,
    city: "Puducherry",
    contact: "9087654321"
};

for (let key of Object.keys(user)) {
    console.log(key, ":", user[key]);
}
/*Output:
name : SENTHAMIZH
age : 19
city : Puducherry
contact : 9087654321  */

//5. Loop Using Object.entries()
/*My Understanding:
Object.entries() is the easiest way to loop through both keys and values together.  */

//Code:

let user = {
    name: "SENTHAMIZH",
    age: 19,
    city: "Puducherry",
    contact: "9087654321"
};

for (let [key, value] of Object.entries(user)) {
    console.log(key, ":", value);
}
/*Output:
name : SENTHAMIZH
age : 19
city : Puducherry
contact : 9087654321 */
//-----------------------------------------------------
