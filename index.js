// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, name) {
const result = drivers.filter(n => n === name);
return result;
}

console.log(findMatching(drivers, 'Bobby'))