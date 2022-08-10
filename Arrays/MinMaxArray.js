/** Without sort find 2nd largest and 2nd smallest number */
let random;
let randomNum = [];
for (let i = 0; i < 10; i++) {
    random = Math.floor(Math.random() * 900) + 100;
    randomNum.push(random);
}
console.log("Random numbers are:" + randomNum);

function getMaxOfArray(max) {
    return Math.max(...max);
}
let max = getMaxOfArray(randomNum);
randomNum.splice(randomNum.indexOf(max), 1);
console.log("Second Maximum number = " + getMaxOfArray(randomNum));

function getMinOfArray(min) {
    return Math.min(...min);
}
let min = getMinOfArray(randomNum);
randomNum.splice(randomNum.indexOf(min), 0);
console.log("Second Minimum number = " + getMinOfArray(randomNum));