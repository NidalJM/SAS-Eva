const workoutMinutes = [35, 0, 49, 84, 63, 0, 21];

console.log(`=== Week 1 Fitness Tracker ===`);
console.log(workoutMinutes);
workoutMinutes.push(40);
console.log(`After logging today: [ ${workoutMinutes} ]`);
console.log(`Removed entry: ${workoutMinutes.pop()}`);
console.log(`After correction: ${workoutMinutes}`);



function totalMinutes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function averageMinutes(arr) {
    let average = totalMinutes(arr)/arr.length;
    return average;
}

console.log(`Total minutes: ${totalMinutes(workoutMinutes)}`);
console.log(`Average minutes: ${averageMinutes(workoutMinutes)}`);

function classifyDay(minutes) {
    let dayclass;
    if (minutes===0) {dayclass="Rest";}
    if (minutes>0 && minutes<=45) {dayclass="Light";}
    if (minutes>45) {dayclass="Intense"}
    return dayclass;
}

for (let i = 0; i < workoutMinutes.length; i++) {
    let DayCount = i+1;
    console.log(`Day ${DayCount}: ${workoutMinutes[i]} min - ${classifyDay(workoutMinutes[i])}`);
}


console.log(`--- Enhanced review ---`);
for (let i = 0; i < workoutMinutes.length; i++) {
    let DayCount =i+1;
    if (workoutMinutes[i]>80) {
        console.log(`Day ${DayCount}: ${workoutMinutes[i]} - New personal record! Stopping review`);
        break;
    } else if (workoutMinutes[i]>0){
        console.log(`Day ${DayCount}: ${workoutMinutes[i]} - ${classifyDay(workoutMinutes[i])}`);
    }
}



function bestDayIndex(arr) {
    let max = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>max) max = arr[i];
    day = i+1;
}    
    return max
}


let dayindex = 0;
for (let i = 1; i < workoutMinutes.length; i++) {
    let max = 0;
    if (workoutMinutes[i]>max) dayindex++;
}

console.log(`Best day index: ${dayindex} With ${bestDayIndex(workoutMinutes)} minutes`);



function countIntenseDays(arr) {
    for (let i = 0; i < arr.length; i++) {
        let intensedays = 0
        if (classifyDay(workoutMinutes[i])==="Intense") {intensedays++;
            return intensedays
        }
    }
}

console.log("Intense days: "+countIntenseDays(workoutMinutes));
