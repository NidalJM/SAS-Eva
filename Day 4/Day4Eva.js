const weight1 = 4, distance1 = 60;
const weight2 = 15, distance2 = 80;
const weight3 = 30, distance3 = 50;

console.log(`=== Package Shipping Cost Estimator ===`);
console.log(`${weight1} ${distance1} ${weight2} ${distance2} ${weight3} ${distance3}`);
 


function baseFee(weight) {
    if (weight <=5) {
        return 20;
    } else if (weight >5 && weight <=20) {
        return 50;
    } if (weight >20) {
        return 90;
    }
    return fee;
}

console.log(`Base fee for package 1: ${baseFee(weight1)}`);
console.log(`Base fee for package 2: ${baseFee(weight2)}`);
console.log(`Base fee for package 3: ${baseFee(weight3)}`);

        let surcharge

function distanceSurcharge(distance) {
    surcharge = distance *0.5;
    return surcharge;
}
console.log(`Distance surcharge for package 1: ${distanceSurcharge(distance1)}`);
console.log(`Distance surcharge for package 1: ${distanceSurcharge(distance2)}`);
console.log(`Distance surcharge for package 1: ${distanceSurcharge(distance3)}`);

 

function totalCost(weight, distance) {
    return baseFee(weight)+distanceSurcharge(distance);
}
console.log(`Total cost for package 1: ${totalCost(weight1,distance1)}`);
console.log(`Total cost for package 2: ${totalCost(weight2,distance2)}`);
console.log(`Total cost for package 3: ${totalCost(weight3,distance3)}`);
// Total cost is unfinished

let valid;

function isRealistic(weigght, disttance) {

    if (weigght>0 && weigght<=100 && disttance >0 && disttance<=3000)
        return true;
    return false;
}

    console.log(`Package 1 valid: ${isRealistic(weight1,distance1)}`);
    console.log(`Package 2 valid: ${isRealistic(weight2,distance2)}`);
    console.log(`Package 3 valid: ${isRealistic(weight3,distance2)}`);


function estimateShipping(weight, distance) {
    let estimate;
    if (isRealistic(weight, distance) === true) {

        estimate =  totalCost(weight, distance);
    }

    return estimate;
}
    console.log(`Estimate for package 1: ${estimateShipping(weight1,distance1)}`);
    console.log(`Estimate for package 2: ${estimateShipping(weight2,distance2)}`);
    console.log(`Estimate for package 3: ${estimateShipping(weight3,distance3)}`);
    
    //Estimate unfinished