const passengerName = "Yassine";

let weightKg = 27;

let isOversized = true;

let ticketClass = "business";

//Step 1

console.log(`=== Baggage Fee Calculator for Yassine ===`);
console.log(`${weightKg} ${isOversized} ${ticketClass}`);

//Step 2

let fee;
if (weightKg<=20) {fee=0}
else if (weightKg>20&&weightKg<=32){fee=15}
else fee=40
console.log(`Base Fee: ${fee}`);

//Step 3

if (isOversized===true){fee+=10}
console.log(`Fee after oversized baggage fee: ${fee}`);

//Step 4

switch (ticketClass) {
    case "economy":
        break;
    case "business":
        fee-=5;
        break;
    case "first":
        fee=0;
        break;
}

console.log(`Fee after class adjustment: ${fee}`);

//Step 5

let isValidWeight=false

if (weightKg<=100) {isValidWeight=true}
console.log(`Valid weight: ${isValidWeight}`);

//Step 6

console.log(`Baggage fee for ${passengerName} (${weightKg}kg): ${fee} MAD`);

//Step 7

let isDiplomat = true;

if (isDiplomat===true) {fee=0}
console.log(`Diplomatic exemption applied, new fee: ${fee} MAD`);

//Step 8

switch (true) {
    case fee===0:
        console.log(`No fee`);
        break;
    case fee<=20:
        console.log(`Low`);
        break;
    default:
        console.log(`High`);
        break;
}