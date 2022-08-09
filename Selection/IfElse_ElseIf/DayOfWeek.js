/**  Display week day */
const prompts = require("prompt-sync")();
let day = prompts("Enter a single digit number : ")
if (day == 0) console.log("Sunday");
else if (day == 1) console.log("Monday");
else if (day == 2) console.log("Tuesday");
else if (day == 3) console.log("Wednesday");
else if (day == 4) console.log("Thursday");
else if (day == 5) console.log("Friday");
else if (day == 6) console.log("Saturday");
else console.log("Enter a number between 0-6")