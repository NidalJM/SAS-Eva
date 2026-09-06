const name1 = "  sara amrani  ";
const birthYear1 = 2005;
const name2 = "OMAR ALAOUI";
const birthYear2 = 2003;
const name3 = "Nadia Idrissi";
const birthYear3 = 2004;

// Step 1

console.log(`=== Student ID Badge Formatter ===`);
console.log(`${name1} ${birthYear1} | ${name2} ${birthYear2} | ${name3} | ${birthYear3}`);

// Step 2

function cleanName(name) { name=name.toLowerCase();
    return name.trim()
}

console.log(`Cleaned name 1: ${cleanName(name1)}`);
console.log(`Cleaned name 2: ${cleanName(name2)}`);
console.log(`Cleaned name 3: ${cleanName(name3)}`);

// Step 3 | Still unfinished

function capitalizeName(name) {
    let word = cleanName(name) ;
    let space = word.indexOf(" ");
    let Firstlet = word[0].toUpperCase();
    let Secondlet = word[space+1].toUpperCase();
    let capsresult = Firstlet + Secondlet;

    return capsresult;
//let capitalized = word[0].toUpperCase() + word.slice(1);
//return capitalized
}
console.log("Capitalized name 1: "+capitalizeName((name1)));
console.log("Capitalized name 2: "+capitalizeName((name2)));
console.log("Capitalized name 3: "+capitalizeName((name3)));
// Step 4 

function getInitials(name) {
    let fullName = name;
let parts = fullName.split(" ");
let initials = "";

for (let i = 0; i < parts.length; i++) {
  if (parts[i].length > 0) {
    initials += parts[i][0];
  }
  return initials;
}

}


function getInitials(name) {
    

let fullName = name;
let parts = fullName.split(" ");
let initials = "";

for (let i = 0; i < parts.length; i++) {
  if (parts[i].length > 0) {
    initials += parts[i][0];
  }
} 
    return initials;
}
console.log("Initial 1: "+getInitials(name1).toUpperCase());
console.log("Initial 2: "+getInitials(name2).toUpperCase());
console.log("Initial 3: "+getInitials(name3).toUpperCase());

//Step 5  Unfinished

function buildBadgeCode(initial, birthYear) {
    return "YC-"+initial+"-"+birthYear;
}
console.log(buildBadgeCode(getInitials(name1).toUpperCase(),birthYear1));
console.log(buildBadgeCode(getInitials(name2).toUpperCase(),birthYear2));
console.log(buildBadgeCode(getInitials(name3).toUpperCase(),birthYear3));

//No time left to finish :/

function generateBadge(rawName, birthYear) {
        return clean
}