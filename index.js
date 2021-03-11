// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby', 'bobby']


function findMatching (drivers, name) {
const loweCase = drivers.filter(n => n.toLowerCase() === name.toLowerCase());
return loweCase;
}

function fuzzyMatch (drivers, letters) {
    const matchChars = drivers.filter(n => n.substring(0, 2) === letters);
    console.log(matchChars);
    return matchChars;
}

function matchName(drivers, name) {
    const objName = drivers.filter(n => n.name === name);
    console.log(objName);
    return objName;
}

console.log(matchName(drivers, 'Bobby'));