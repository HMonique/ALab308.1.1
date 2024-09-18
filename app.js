const n1 = 20
const n2 = 10;
const n3 = 15;
const n4 = 5;

const isSum50 = (n1 + n2 + n3 + n4) == 50;

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isUnique = n1 !=n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 !=n4;

const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

console.log()



Part: 2 

const distance = 1500;
const cost = 3.00;
const fuelAt55 = 30;
const fuelAt60 = 28;
const fuelAt75 = 23;
const budget = 175;

const fuelCostAt55 = distance/fuelAt55;
const fuelDurationAt55 = distance/55;
const fuelNeededAt55 = distance/55 * cost;
console.log();



