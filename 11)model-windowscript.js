//Modal Windows in JavaScript
/*My Understanding:
Modal windows are popup dialog boxes provided by the browser.
They appear on top of the webpage and require the user to respond before continuing.
JavaScript provides three built-in modal windows:

alert()

confirm()

prompt()  */
//-------------------------------------------------------------------------

//1. alert() Modal Window
/*My Understanding:
alert() is used to display a message to the user.

It contains only one button (OK).

It is mainly used to show information or warning messages.  */

//Syntax:
alert("Message");

//Code:
alert("Welcome to JavaScript!");

/*Output:
+---------------------------+
| Welcome to JavaScript!    |
|                           |
|            OK             |
+---------------------------+  */

//--------------------------------------------------------------------------------

//2. confirm() Modal Window
/*My Understanding:
confirm() is used to ask the user for confirmation.

It contains two buttons (OK and Cancel).

It returns:

true → if the user clicks OK

false → if the user clicks Cancel  */

//Syntax:
confirm("Message");

//Code:

let result = confirm("Do you want to continue?");
console.log(result);

/*Output (If OK is clicked):
true
Output (If Cancel is clicked):
false  */
//---------------------------------------------------------------------------------

//3. prompt() Modal Window
/*My Understanding:
prompt() is used to get input from the user.

It displays a text box where the user can enter a value.

It returns:

The entered value (string) if OK is clicked.

null if Cancel is clicked.  */

//Syntax:
prompt("Message");

//Code:

let name = prompt("Enter your name:");
console.log(name);

/*Sample Input:
Senthamizh
Output:
Senthamizh  */