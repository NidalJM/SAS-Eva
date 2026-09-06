let balance = 500;

let totalAttempts = 10;

console.log(`=== ATM Withdrawal Simulator ===`);
console.log(`${balance} ${totalAttempts}`);
let reqam = 0;
let attpl = 1;
    for (let att = 1; att <= totalAttempts; att++) {
        reqam = reqam+= 15;
        if (reqam > balance) {
            console.log(`Attempt ${att} - Requested amount: ${reqam}`);
            console.log(`Attemtp ${att} - Insufficient funds. Stopping simulation.`);
            break;
        }
        if (reqam %4 ===0) {
            console.log(`Attempt ${att} - Invalid withdawal request, skipped`);
            
        }
        if (reqam %4 !==0)
        console.log(`Attempt ${att} - Requested amount: ${reqam}`);
        balance -= reqam;
        attpl += 1
        console.log(`Attempt ${attpl} - Withdrawal successful. New balance: ${balance}`);
        
    }
    
    console.log(`Simulation complete. Final balance ${balance} MAD after ${totalAttempts} Allowed attemtps.`);
    
