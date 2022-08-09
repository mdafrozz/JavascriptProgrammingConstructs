/** Number to units  */
const prompts = require("prompt-sync")();
let num = prompts("Enter a number like 1,10,100,1000 etc : ")
if (num == 1) console.log("Unit");
else if (num == 10) console.log("Ten");
else if (num == 100) console.log("Hundred");
else if (num == 1000) console.log("Thousand");
else if (num == 10000) console.log("Ten Thousand");
else if (num == 100000) console.log("Hundred Thousand");
else if (num == 1000000) console.log("One Million");
else if (num == 10000000) console.log("Ten Million");
else if (num == 100000000) console.log("Hundred Million");
else if (num == 1000000000) console.log("One Billion");
else console.log("Please enter a valid number");