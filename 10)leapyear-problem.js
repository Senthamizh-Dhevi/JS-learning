// Leap Year Problem
/*My Understanding:
If the year is divisible by 400, it is a leap year.
Otherwise, if the year is divisible by 4 but not divisible by 100, it is also a leap year.
In all other cases, it is not a leap year.  */

//Code:

let year = 2024;

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");   // Output: 2024 is a Leap Year
}

//Example 1
//Code:

let year = 2000;

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");   // Output: Leap Year
}

//Example 2
//Code:

let year = 1900;

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");  // Output: Not a Leap Year
}

//Example 3
//Code:

let year = 2023;

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");  // Output: Not a Leap Year
}
