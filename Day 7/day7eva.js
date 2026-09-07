const fleet = [
  { plate: "A123", model: "Dacia Logan", dailyRate: 30, available: true },
  { plate: "B456", model: "Renault Clio", dailyRate: 25, available: true },
  { plate: "C789", model: "Toyota Corolla", dailyRate: 40, available: false },
  { plate: "D012", model: "Hyundai Accent", dailyRate: 28, available: true }
];

//Step 1

console.log(`=== Car Rental Fleet Manager ===`);
console.log(fleet);

//Step 2

function findCarByPlate(list, plate) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].plate === plate) return list[i];
  }
  return null;
}
console.log(findCarByPlate(fleet,"A123"));
console.log(findCarByPlate(fleet,"J176"));

//Step 3--Unfinished

function rentCar(list, plate) {
    if (findCarByPlate(list,plate)) {
        list.available=false;
        return true;}
    else return false;
}

console.log(rentCar(fleet,"A123"));
console.log(rentCar(fleet,"C789"));

//Step 4--Bugged for now - No time left - Skipped

function countAvailable(list) {
    let count =0;
    for (let i = 0; i < list.length; i++) {
        if(fleet[i].available===true); count++
    }
    return count
}

console.log(countAvailable(fleet));

//Step 5

function fleetValue(list) {
    let sum =0;
    for (let i = 0; i < list.length; i++) {
        sum+=list[i].dailyRate;
    }
    return sum
}

console.log("Total fleet value: "+fleetValue(fleet));

//Step 6 -Also unfinished

function cheapestAvailableCar(list) {
    let lowestrate= fleet[0].dailyRate;
    for (let i = 0; i < list.length; i++) {
        if (lowestrate<list[i].dailyRate)   lowestrate = list[i]
    }
    return lowestrate
}

console.log("Cheapestavailable "+cheapestAvailableCar(fleet));
