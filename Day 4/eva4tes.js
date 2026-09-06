const weight1 = 4, distance1 = 60;
const weight2 = 15, distance2 = 80;
const weight3 = 30, distance3 = 50;

//Step 1

console.log(`=== Package Shipping Cost Estimator ===`);
console.log(`${weight1} ${distance1} ${weight2} ${distance2} ${weight3} ${distance3}`);

//Step 2

function baseFee(weight) {
    if (weight<=5) {return 20}
    if (weight<=20){return 50}
    else return 90;
}

console.log(`Base fee for package 1: ${baseFee(weight1)}`);
console.log(`Base fee for package 2: ${baseFee(weight2)}`);
console.log(`Base fee for package 3: ${baseFee(weight3)}`);

//Step 3

function distanceSurcharge(distance) {return distance*0.5}

console.log(`Distance surcharge for package 1: ${distanceSurcharge(distance1)}`);
console.log(`Distance surcharge for package 2: ${distanceSurcharge(distance2)}`);
console.log(`Distance surcharge for package 3: ${distanceSurcharge(distance3)}`);

//Step 4

function totalCost(weight, distance) {return weight+distance}
console.log(`Total cost for package 1: ${totalCost(baseFee(weight1),distanceSurcharge(distance1))}`);
console.log(`Total cost for package 2: ${totalCost(baseFee(weight2),distanceSurcharge(distance2))}`);
console.log(`Total cost for package 3: ${totalCost(baseFee(weight3),distanceSurcharge(distance3))}`);

//Step 5

function isRealistic(weight, distance) {
    if (weight<=100&&distance<=3000) return true;
    else return false;
}

console.log(`Package 1 valid: ${isRealistic(weight1,distance1)}`);
console.log(`Package 2 valid: ${isRealistic(weight2,distance2)}`);
console.log(`Package 3 valid: ${isRealistic(weight3,distance3)}`);

//Step 6

function estimateShipping(weight, distance) {
    if (isRealistic(weight, distance)===true)return totalCost(baseFee(weight),distanceSurcharge(distance))
        else return "Invalid package data"}
    
console.log(`Estimate for package 1: ${estimateShipping(weight1,distance1)}`);
console.log(`Estimate for package 2: ${estimateShipping(weight2,distance2)}`);
console.log(`Estimate for package 3: ${estimateShipping(weight3,distance3)}`);