/**  Maximum and Minimum Value among 5 random 3 digit numbers */

const random1 = Math.floor(Math.random() * 900) + 100;
const random2 = Math.floor(Math.random() * 900) + 100;
const random3 = Math.floor(Math.random() * 900) + 100;
const random4 = Math.floor(Math.random() * 900) + 100;
const random5 = Math.floor(Math.random() * 900) + 100;
console.log("Random Numbers : " + random1 + "," + random2 + "," + random3 + "," + random4 + "," + random5);

let maximum = random1;
if (random2 > maximum) 
maximum = random2;
if (random3 > maximum) 
maximum = random3;
if (random4 > maximum) 
maximum = random4;
if (random5 > maximum) 
maximum = random5;
console.log("Maximum value = " + maximum);

let minimum = random1;
if (random2 < minimum) 
minimum = random2;
if (random3 < minimum) 
minimum = random3;
if (random4 < minimum) 
minimum = random4;
if (random5 < minimum) 
minimum = random5;
console.log("Minimum value = " + minimum);