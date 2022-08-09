/** Number to word  */
const prompts = require("prompt-sync")();
let number = prompts("Enter a single digit number : ")
switch (parseInt(number)) {
    case 1: console.log("One");
        break;
    case 2: console.log("Two");
        break;
    case 3: console.log("Three");
        break;
    case 4: console.log("Four");
        break;
    case 5: console.log("Five");
        break;
    case 6: console.log("Six");
        break;
    case 7: console.log("Seven");
        break;
    case 8: console.log("Eight");
        break;
    case 9: console.log("Nine");
        break;
    case 0: console.log("Zero");
        break;
    default: console.log("Enter a number between 0-9");
}