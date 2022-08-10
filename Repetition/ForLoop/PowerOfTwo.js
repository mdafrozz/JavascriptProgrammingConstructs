/** Print the table of powers of 2 */
const prompts = require("prompt-sync")();
let num = prompts("Enter the value of num : ");
num = parseInt(num);
for (i = 0; i <= num; i++) {
    console.log("2 ^ " + i + " = " + Math.pow(2, i));
}