const fleet = [
  { plate: "A123", model: "Dacia Logan", dailyRate: 30, available: true },
  { plate: "B456", model: "Renault Clio", dailyRate: 25, available: true },
  { plate: "C789", model: "Toyota Corolla", dailyRate: 40, available: false },
  { plate: "D012", model: "Hyundai Accent", dailyRate: 28, available: true }
];

//Step 1

console.log(`=== Car Rental Fleet Manager ===`);
for (car of fleet){
    console.log(`Plate ${car.plate}, Model: ${car.model}, DailyRate: ${car.dailyRate},available: ${car.available}`);
    
}

//Step 2

function findCarByPlate(list,plate)
    {
        for (let i = 0; i < list.length; i++) {
            if(list[i].plate===plate)   return list[i]
            };
        return null
        }


let findplate1="B456"
let findplate2="Z999"
console.log(`Find ${findplate1}: `,findCarByPlate(fleet,findplate1));
console.log(`Find ${findplate2}: `,findCarByPlate(fleet,findplate2));

//Step 3

function rentCar(list, plate) {
    let car= findCarByPlate(list,plate)
    if (car !== null && car.available) {
        car.available = false
        return true
    }
    return false
}

console.log(rentCar(fleet,"B456"));
console.log(rentCar(fleet,"C789"));

//Step 4

function countAvailable(list) {
    let count = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i].available) count++
    }
    return count
}
console.log(countAvailable(fleet));

//Step 5

function fleetValue(list) {
    sum = 0
    for (let i = 0; i < list.length; i++) {
        sum += list[i].dailyRate;
        
    }
    return sum
}

console.log("Total fleet value: ",fleetValue(fleet));

//Step 6

function cheapestAvailableCar(list) {
    let chcar = { plate: "", model: "", dailyRate: Infinity, available: true };
    for(let value of list){
        if (value.available && value.dailyRate < chcar.dailyRate) 
            return value
    }
}

console.log(cheapestAvailableCar(fleet));