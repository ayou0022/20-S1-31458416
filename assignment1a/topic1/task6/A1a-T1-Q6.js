// topic 1 task 6

// define age of student, current date

let currentDate = Date.now();
let birthDate = new Date(2000,6,4);


// work through time measurements from milliseconds to years
// round down years to get age

let msOld = (currentDate - birthDate);
let secondsOld = (msOld / 1000);
let minutesOld = (secondsOld / 60);
let hoursOld = (minutesOld / 60);
let daysOld = (hoursOld / 24);
let yearsOld = (daysOld / 365.25);

let age = Math.floor(yearsOld);


// print age to nearest whole number

console.log(age);
