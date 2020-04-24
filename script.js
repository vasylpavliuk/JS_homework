//TASK1
let num;
console.log(typeof num);
num = 9;
console.log(typeof num);
num = "string";
console.log(typeof num);
num = true;
console.log(typeof num);
num = null;
console.log(typeof num);
num = Symbol();
console.log(typeof num);
num = new Object();
console.log(typeof num);
num = Object;
console.log(typeof num);
num = NaN;
console.log(typeof num);

// TASK 2
let currencyConverter = +prompt(
  "Введіть кількість гривень, що бажаєте конвертувати?"
);
if (
  currencyConverter !== null &&
  currencyConverter !== undefined &&
  currencyConverter !== 0 &&
  !isNaN(currencyConverter)
) {
  console.log(`Ви можете придбати ${currencyConverter / 26} доларів США,
    або ж ${currencyConverter / 28} євро,
    або ж ${currencyConverter / 500} барелів нафти марки Brent,
    або ж ${currencyConverter / 1000} грам золота`);
} else {
  console.log(
    "Введіть будь ласка кількість гривень, що бажаєте конвертувати, числовим значенням"
  );
}

// TASK 3
let order = +prompt("Введіть суму замовлення");
let discount = 0.01;
if (order >= 500 && order < 1000) {
  discount = 0.05;
}
if (order >= 1000) {
  discount = 0.1;
}
let discountSum = order * discount;
if (order < 1000) {
  console.log(`Congratulations, you receive ${discountSum} gryvnas discount`);
} else {
  console.log(
    `Congratulations, you receive ${discountSum} discount and a 200 gryvnas gift certificate`
  );
}

//TASK 4
alert(
  "Пройдіть тест про все на світі. Дайте правильні відповіді на усі 5 питань та отримайте 1 бонусний бал!"
);
let questions = [
  "Столиця США?",
  "Найдовша річка у світі?",
  "5 * 5 = ?",
  "Найвища точка світу?",
  "Столиця України?",
];
let answers = ["Вашингтон", "Ніл", "25", "Еверест", "Київ"];
let correctAnswers = 0;
for (let i = 0; i < 5; i++) {
  let userAnswers = prompt(questions[i]);
  if (userAnswers === answers[i]) {
    correctAnswers++;
  }
}

if (correctAnswers === 5) {
  alert(
    "Вітаємо, Ви дали правильні відповіді на усі 5 запитань, тому отримуєте 1 бонусний бал. Загальна кільність балів - 6."
  );
} else {
  alert(`Ви дали правильні відповіді на ${correctAnswers} запитань із 5-ти.`);
}

//TASK5
let number = prompt(
  "Введіть будь яке трьохзначне число та довідайтесь чи у ньому є однакові цифри"
);
if (
  number[0] === number[1] ||
  number[0] === number[2] ||
  number[0] === number[2]
) {
  console.log("У вказаному Вами числі Є одинакові цифри");
} else {
  console.log(
    "У вказаному Вами числі НЕМАЄ одинакових цифр або ж Ви ввели некоректні дані"
  );
}

//TASK6
let key = prompt(
  "Введіть будь яку клавішу із рядка клавіатури, що починається клавішею 1 та закінчуючи ="
);
switch (key) {
  case "1":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо !`);
    break;
  case "2":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо @`);
    break;
  case "3":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо #`);
    break;
  case "4":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо $`);
    break;
  case "5":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо %`);
    break;
  case "6":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо ^`);
    break;
  case "7":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо &`);
    break;
  case "8":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо *`);
    break;
  case "9":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо (`);
    break;
  case "0":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо )`);
    break;
  case "-":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо _`);
    break;
  case "=":
    console.log(`При нажиманні клавіші ${key} з шифтом отримаємо +`);
    break;
  default:
    console.log(
      "Введено некоректне значення. Введіть будь яку клавішу із рядка клавіатури, що починається клавішею 1 та закінчуючи ="
    );
}
