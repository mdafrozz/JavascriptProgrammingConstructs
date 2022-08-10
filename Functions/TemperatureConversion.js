/** Temperature conversion */
const prompts = require("prompt-sync")();
function degF(temp) {
    if (temp >= 0 && temp <= 100)
        console.log((temp * 9 / 5) + 32);
    else if (temp < 0) console.log("Please enter value above freezing point");
    else if (temp > 100) console.log("Please enter value below boiling point");
}
function degC(temp) {
    if (temp >= 32 && temp <= 212)
        console.log((temp - 32) * 5 / 9);
    else if (temp < 32) console.log("Please enter value above freezing point");
    else if (temp > 212) console.log("Please enter value below boiling point");
}
function conversion() {
    console.log(("Enter \n1.To convert Celsius to Farenheit \n2.To convert Farenheit to Celsius : "));
    let choice = parseInt(prompts("Enter choice : "));
    let temp;
    switch (choice) {
        case 1:
            temp = parseInt(prompts("Enter the Temperature in Celsius (0 - 100): "));
            degF(temp);
            break;
        case 2:
            temp = parseInt(prompts("Enter the Temperature in Farenheit(32 - 212) : "));
            degC(temp);
            break;
        default: console.log("Select a valid option");
    }
}
conversion();