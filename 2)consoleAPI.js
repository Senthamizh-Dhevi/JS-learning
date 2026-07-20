// String
console.log("Hello");

// Number
console.log(123456);

// Float (Decimal Number)
console.log(12.40);

// Boolean
console.log(true);

// Array
console.log([58, 62, "ammu", 11]);

// Object (Not JSON)
console.log({ fname: "sen", age: 18 });

// Display object as a table
console.table({ fname: "sen", age: 18 });

// Error message
console.error("Password should contain at least 8 characters.");

// Warning message
console.warn("Wrong password");

// Clear the console
console.clear();

// Timer
console.time("Timer");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.timeEnd("Timer");