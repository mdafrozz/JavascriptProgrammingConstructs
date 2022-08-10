/* gambler problem */
let amount = 100;
let winCount = 0;
let loseCount = 0;
while (amount != 0 && amount < 200) {
    bet = Math.floor(Math.random() * 2);
    if (bet == 0) {
        amount++;
        winCount++;
    } else {
        amount--;
        loseCount++;
    }
}
console.log("Final Amount = " + amount + " Number of times won = " + winCount + " Number of times lost = " + loseCount + '\n'); 