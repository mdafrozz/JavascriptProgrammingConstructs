/** Check number is prime and palindrome */
const prompts = require("prompt-sync")();
let number = parseInt(prompts("Enter a number : "));
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
if (isPrime(number)) {
    console.log(number + " is a Prime Number");
} else console.log(number + " is not a Prime Number");

function palindrome(num) {
    let newNumber = 0;
    while (num != 0) {
        let remainder = num % 10;
        newNumber = newNumber * 10 + remainder;
        num = Math.floor(num / 10);
    }
    if (isPrime(newNumber)) {
        console.log(newNumber + " is a Prime number");
    } else console.log(newNumber + " is not a prime number");
}
palindrome(number);