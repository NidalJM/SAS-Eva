const passengerName = "Yassine";

let weightKg = 27;

let isOversized = true;

let ticketClass = "business";

console.log("=== Baggage Fee Calculator for Yassine ===");
console.log(weightKg + " "+ isOversized +" "+ ticketClass);

let Fee;

if (weightKg <= 20) {
    Fee = 0;
    
}   else if (weightKg >=21 && weightKg <= 32) {
    Fee = 15;
}
    if(weightKg > 32){
    Fee = 40;
    }
console.log("Base Fee: " + Fee);

if (isOversized === true) {
    Fee += 10;
    console.log("Fee after oversized baggage fee: " + Fee);
}

switch (ticketClass) {
    case "business":
        Fee -= 5
        break;
    case "first":
        Fee = 5
        break;
    default:
        break;
}
console.log("Fee after class adjustment: " + Fee);

let isValidWeight
if (weightKg >= 0 && weightKg <= 100) {
    isValidWeight = true;
} else {
    isValidWeight = false;
}

console.log("Valid weight: ", isValidWeight);

console.log(passengerName + " (" + weightKg + "Kg) " + Fee + " MAD");

let isDiplomat = true;

if (isDiplomat === true) {
    Fee = 0;
    console.log("New price after Diplomatic Exemption = 0");
}

if (Fee === 0) {
    console.log("No Fee")
} else if (Fee >=0 && Fee <=20) {
    console.log("Low")
} if (Fee >=20) {
    console.log("High")
}