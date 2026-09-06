const name1 = "  sara amrani  ";
const birthYear1 = 2005;
const name2 = "OMAR ALAOUI";
const birthYear2 = 2003;
const name3 = "Nadia Idrissi";
const birthYear3 = 2004;

//Step 1

console.log(`=== Student ID Badge Formatter ===`);
console.log(`${name1} ${birthYear1} | ${name2} ${birthYear2} | ${name3} ${birthYear3}`);

//Step 2

function cleanName(name) {
   return name.trim().toLowerCase();
}
console.log(`Cleaned name 1: ${cleanName(name1)}`);
console.log(`Cleaned name 2: ${cleanName(name2)}`);
console.log(`Cleaned name 3: ${cleanName(name3)}`);

//Step 3

function capitalizeName(name) {
    let word = cleanName(name);
    let space = word.indexOf(" ");
    let firstlet =word[0].toUpperCase();
    let lastlet= word[space+1].toUpperCase();
    let firstword =word.slice(1,space);
    let lastword =word.slice(space+2)
    return firstlet+firstword+" "+lastlet+lastword
}

console.log(`Capitalized name 1:${capitalizeName(name1)}`);
console.log(`Capitalized name 2:${capitalizeName(name2)}`);
console.log(`Capitalized name 3:${capitalizeName(name3)}`);

//Step 4

function getInitials(name) {
    let word = cleanName(name);
    let space = word.indexOf(" ");
    let firstlet =word[0].toUpperCase();
    let lastlet= word[space+1].toUpperCase();
    return firstlet+lastlet
}

console.log(`Initials 1: ${getInitials(name1)}`);
console.log(`Initials 2: ${getInitials(name2)}`);
console.log(`Initials 3: ${getInitials(name3)}`);

//Step 5

function buildBadgeCode(initials, birthYear) {
    let by=String(birthYear).slice(2)
    return "YC-"+initials+"-"+by
}

console.log(`Badge code 1: ${buildBadgeCode(getInitials(name1),birthYear1)}`);
console.log(`Badge code 2: ${buildBadgeCode(getInitials(name2),birthYear2)}`);
console.log(`Badge code 3: ${buildBadgeCode(getInitials(name3),birthYear3)}`);

//Step 6

function generateBadge(rawName,birthYear) {
    let cleanname= cleanName(rawName);
    let displayname= capitalizeName(cleanname);
    let initials= getInitials(cleanname);
    let badgecode = buildBadgeCode(initials,birthYear)
    
    return `${displayname} - Badge: ${badgecode}`
}

console.log(generateBadge(name1, birthYear1));
console.log(generateBadge(name2, birthYear2));
console.log(generateBadge(name3, birthYear3));