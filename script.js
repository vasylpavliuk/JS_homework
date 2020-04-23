// // TASK 1
// let age = +prompt("Вкажіть будь ласка свій вік");
// console.log(`Привіт, мені - ${age} років!`);

// TASK 2
let bitrhYear = +prompt("Вкажіть будь ласка рік народження");
let age = 2020 - bitrhYear;
console.log(`Ваш вік ${age} років`);

// TASK 3
let a = +prompt("Вкажіть довжину сторони a прямокутника");
let b = +prompt("Вкажіть довжину сторони b прямокутника");
let perimeter = a * b;
console.log(
  `Периметр прямокутника із довжиною сторін ${a} та ${b} складає ${perimeter}`
);

// TASK 4
let radius = +prompt("Вкажіть радіус кола");
let square = 3.14 * radius * radius;
console.log(`Площа кола із радіусом ${radius} складає ${square}`);

// TASK 5
let speedAvrg = 50;
let timeNeeded = +prompt(
  "Вкажіть орієнтовний час, що необхідний для подолання відстані"
);
let distance = speedAvrg * timeNeeded;
console.log(`Відстань, яку залишилося подолати, складає ${distance} км`);

// TASK 6
let kmToMiles = +prompt(
  "Вкажіть відстань у кілометрах, котру ви бажаєте перевести у милі"
);
let converterKmToMiles = console.log(
  `Вказані Вами ${kmToMiles} кілометрів дорівнюють ${kmToMiles * 0.62} милям`
);
let milesToKm = +prompt(
  "Вкажіть відстань у милях, котру ви бажаєте перевести у кілометри"
);
let converterMilesToKm = console.log(
  `Вказані Вами ${milesToKm} миль дорівнюють ${milesToKm * 1.61} кілометрам`
);

//TASK 7
let money = +prompt("Вкажіть кількість коштів на вашому рахунку");
let petrolPrice = +prompt("Вкажіть варість 1 л палива");
let petrolToBuy = console.log(
  `Ви можете придбати ${Math.floor(
    money / petrolPrice
  )} літрів пального, залишок коштів на вашій картці буде складати  ${
    money % petrolPrice
  } гривень.`
);
