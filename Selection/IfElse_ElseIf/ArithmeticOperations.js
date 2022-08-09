
/** 
Arithmetic Operations find min and max
*/
const prompts = require("prompt-sync")();
let a = prompts("Enter A value : ")
let b = prompts("Enter B value : ")
let c = prompts("Enter C value : ")
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;
console.log("Result of a + b * c : " + result1); 
console.log("Result of a % b + c : " + result2 );
console.log("Result of c + a / b : " + result3 );
console.log("Result of a * b + c : " + result4);
let maximum = result1;
if (result2 > maximum) maximum = result2;
if (result3 > maximum) maximum = result3;
if (result4 > maximum) maximum = result4;
console.log("Maximum value is= " + maximum);
let minimum = result1;
if (result2 < minimum) minimum = result2;
if (result3 < minimum) minimum = result3;
if (result4 < minimum) minimum = result4;
console.log("Minimum Value = " + minimum);