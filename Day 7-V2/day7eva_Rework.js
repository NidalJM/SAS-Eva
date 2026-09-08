const employees = [
  { name: "Sara", department: "Engineering", salary: 12000, yearsWorked: 4 },
  { name: "Omar", department: "Sales", salary: 9000, yearsWorked: 2 },
  { name: "Nadia", department: "Engineering", salary: 15000, yearsWorked: 6 },
  { name: "Yassine", department: "Marketing", salary: 8000, yearsWorked: 1 }
];

//Step 1

console.log(`=== Employee Directory ===`);
console.log(employees);

//Step 2

function findEmployeeByName(list,name) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === name) {return list[i]}
        }
        return null
}

console.log(`Find Omar: `,findEmployeeByName(employees,"Omar"));
console.log(`Find Karim: `,findEmployeeByName(employees,"Karim"));

//Step 3

function giveRaise(list, name, amount) {
    let employee= findEmployeeByName(list,name)
    if (employee) {
        employee.salary += amount;
        return true
    }
    return false
}
console.log(`Give Omar a raise: `,giveRaise(employees,"Omar",1000));
console.log(`Give Karim a raise (Missing): `,giveRaise(employees,"Karim",1000));
console.log(`Omar after raise: `,findEmployeeByName(employees,"Omar"));

//Step 4

function averageSalary(list) {
    let average = 0;
    for (let i = 0; i < list.length; i++) {
        average +=list[i].salary
    }
    return average/list.length
}

console.log(`Average salary: `,averageSalary(employees));

//Step 5

function countByDeparment(list, department) {
    let count =0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].department==="Engineering") {
            count++
        }
    }
    return count
}

console.log(`Engineering count: `,countByDeparment(employees,"Engineering"));

//Step 6

function highestPaidEmployee(list) {
    highestpaid = employees[0]
    for (let i = 0; i < list.length; i++) {
        if (list[i].salary>highestpaid.salary){highestpaid=list[i]}
    }
    return highestpaid
}

console.log(`Highest paid employee: `,highestPaidEmployee(employees));
