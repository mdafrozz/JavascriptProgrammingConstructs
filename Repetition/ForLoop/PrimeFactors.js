/** compute factors of number n using prime-factorization method */

const prompts = require("prompt-sync")();
let num = parseInt(prompts("Enter a number to find prime factors : "));
let arr = [];
for (var i = 2; i < num; i++) {
    let isPrime
    if (num % i === 0) {
        isPrime = true;
        for (var j = 2; j <= i; j++) {
            if (i % j === 0) {
                isPrime == false;
            }
        }
    }
    if (isPrime == true) {
        arr.push(i)
    }
}
console.log(arr);