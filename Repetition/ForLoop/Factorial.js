/** Take user input and find factorial  */
const prompts = require("prompt-sync")();
const factorial = parseInt(prompts("Enter a number to find factorial : "));
let result = 1;
for (i = 1; i <= factorial; i++) {
    result *= i;
}
console.log(factorial + "! = " + result);