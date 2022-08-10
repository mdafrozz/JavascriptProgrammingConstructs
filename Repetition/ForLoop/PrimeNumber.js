/** Take user input and check number is prime or not */
const prompts = require("prompt-sync")();
const num = prompts("Enter a number to check prime or non-prime : ")
let isPrime = true;
for (i = 2; i < num; i++) {
    if (num % i == 0)
        isPrime = false;
}
if (isPrime)
    console.log(num + " is a prime number");
else
    console.log(num + " is not a prime number");