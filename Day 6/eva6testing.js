const workoutMinutes = [35, 0, 49, 84, 63, 0, 21];

function classifyDay(minutes) {
    let dayclass;
    if (minutes=0) {dayclass="Rest";}
    if (minutes>0 && minutes<=45) {dayclass="Light";}
    if (minutes>45) {dayclass="Intense"}
    return dayclass;
}
console.log(classifyDay(workoutMinutes));
