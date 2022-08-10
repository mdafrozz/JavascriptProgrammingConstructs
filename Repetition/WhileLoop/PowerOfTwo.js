/** Power of two  */
const prompts = require("prompt-sync")();
const n = parseInt(prompts("Enter the value of N : "));
let i = 1;
while (i <= n) {
    console.log("2 ^ " + i + " = " + Math.pow(2, i));
    if (Math.pow(2, i) == 256) {
        break;
    }
    i++;
}