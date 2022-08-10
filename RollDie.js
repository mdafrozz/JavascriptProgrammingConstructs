/** Die roll practice problem */
let dieRollNumber;
let isReached = false;
let dieRollMap = new Map();

//function to set key- dieRollNumber, value - max time number repeated
function newDieRollMap(dieRollNumber) {
    dieRollMap.set(dieRollNumber, dieRollMap.get(dieRollNumber) + 1);
}
//function for find max number
function maximumNumber(dieRollNumber) {
    if (dieRollMap.get(dieRollNumber) == 10) {
        console.log(dieRollNumber + " has maximum times = 10");
        return true;
    }
    return false;
}
//function for find min number
function minimumNumber() {
    let keyNum = 1;
    let min = dieRollMap.get(1);
    for (const [key, value] of dieRollMap.entries()) {
        if (value < min) {
            min = value;
            keyNum = key;
        }
    }
    console.log(keyNum + " has minimum times = " + min);
}
//for loop to set dice key 1-6
for (let i = 1; i < 7; i++) {
    dieRollMap.set(i, 0)
}
while (!isReached) {
    dieRollNumber = Math.floor(Math.random() * 6) + 1; //random number of die
    newDieRollMap(dieRollNumber);
    isReached = maximumNumber(dieRollNumber);
}
minimumNumber();