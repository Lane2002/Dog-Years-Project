//age
const myAge = 43;
//dogs age
let earlyYears = 2;
//dog age 2 comp to human age at 10.5
earlyYears *= 10.5;
//- first 2 years
let laterYears = myAge - 2;
//multiply later years by 4.
laterYears *= 4;
console.log(earlyYears, laterYears);
//my age in dog years.
let myAgeInDogYears = earlyYears + laterYears;
let myName ='lane'.toLowerCase();
console.log(`My name is ${myName}.I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);