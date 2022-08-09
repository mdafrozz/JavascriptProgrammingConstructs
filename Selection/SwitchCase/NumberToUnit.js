/** Number to display unit */
const prompts = require("prompt-sync")();
let num = prompts("Enter a number : ")
switch (parseInt(num)) {
    case 1: console.log("Unit");
        break;
    case 10: console.log("Ten");
        break;
    case 100: console.log("Hundred");
        break;
    case 1000: console.log("Thousand");
        break;
    case 10000: console.log("Ten Thousand");
        break;
    case 100000: console.log("Hundred Thousand");
        break;
    case 1000000: console.log("One Million");
        break;
    case 10000000: console.log("Ten Million");
        break;
    case 100000000: console.log("Hundred Million");
        break;
    case 1000000000: console.log("One Billion");
        break;
    default: console.log("Enter a valid number");
}