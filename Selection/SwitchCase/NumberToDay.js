/** Number to week day */
//Q2

const prompts = require("prompt-sync")();
let day = prompts("Enter a number : ")
switch (parseInt(day)) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 0: console.log("Sunday");
        break;
    default: console.log("Enter a number between 0-6");
}