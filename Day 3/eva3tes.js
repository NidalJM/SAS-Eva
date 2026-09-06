let balance = 500;
let totalAttempts = 10;
let isVip = true;

//Step 1

console.log(`=== ATM Withdrawal Simulator ===`);
console.log(`${balance} ${totalAttempts}`);

//Step 2 And 3 And 4 And 5

let attempt = 1;
let reqam = 15;

for (let i = 0; i < totalAttempts; i++) {
    if (attempt%4===0) {console.log(`Attempt ${attempt} - Invalid withdrawal request, skipped`); attempt++;} //Step 3
    if (reqam>balance) {
        console.log(`Attempt ${attempt} - Insufficient funds. Stopping simulation`); // Step 4
        break;
    }
    else console.log(`Attempt ${attempt} - Requested amount: ${reqam}`); // Step 2
        balance-=reqam;
        attempt++;
        console.log(`Attempt ${attempt} - Withdarawal successful. New balance: ${balance}`); //Step 5
    attempt++;
    reqam+=15;
}

//Step 6

console.log(`Simulation complete. Final balance: ${balance} MAD after ${totalAttempts} allowed attempts`);


