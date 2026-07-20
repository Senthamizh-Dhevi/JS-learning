//KEYWORDS or VARIABLES of javascript:
 //VAR,LET,CONST
    //differce b/w them


//1.scope
//----------------------------------------------------------------------------------------------
 //i.var

 /*My Understanding:
var has function scope.
We can access a var variable both inside and outside the {} block (within the same function).*/
 
 if (true) {
    var msg = "var has function scope";
    console.log(msg);//Accessible inside the block
}
console.log(msg); // Accessible outside the block also

//------------------------------------------------------------------------------------------------------------

  //ii.let

  /*My Understanding:
let has block scope.
We can access a let variable only inside the {} block.
If we try to access it outside the block, it will show an error.*/

 if (true) {
    let msg = "let has block scope";
    console.log(msg);
}
console.log(msg); // Error

//---------------------------------------------------------------------------------------------------------

//iii.const

/*My Understanding:
const also has block scope.
It works like let for scope.
We can access it only inside the {} block.*/
  if (true) {
    const msg = "const has block scope";
    console.log(msg);
}
console.log(msg); // Error 

//======================================================================================================================
  
 // 2.variable declaration
 
 //(i)var
 /*My Understanding:
var allows redeclaration.
We can declare the same variable again.*/

   var a = 25;
console.log(a);

var a = 45; // Redeclaration is allowed
console.log(a);
  //-----------------------------------------------------------------------------------------------------
//(ii)let

/*My Understanding:
let does not allow redeclaration.
If we declare the same variable again, it will show an error.*/

   let a = 25;
console.log(a);

let a = 45; // Error: Redeclaration is not allowed
console.log(a);
  //----------------------------------------------------------------
 //(iii)const

 /*My Understanding:
const does not allow redeclaration.
Once declared, it cannot be declared again.*/

 const a = 25;
console.log(a);

const a = 45; // Error: Redeclaration is not allowed
console.log(a);
  //====================================================================================================

//where const is implement---> const with Objects

/*My Understanding:
const does not allow us to reassign the entire object.
But we can modify the properties inside the object.*/


 const student = {
    name: "sen",
    age: 19
};

console.log(student);

console.table(student); // Display object in table format

console.log(student.name);

student.name = "ammu"; // Modifying the object property

console.table(student);
