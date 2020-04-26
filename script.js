// 1. Напишіть функцію, що повертає куб числа.

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

// 4. Реалізуйте функцію знаходження факторіала

// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

// 6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс».
// якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".

// 7. 4 відмінності ерров фанкшина від звичайної функції.

//TASK 1
let cube = (num) => num * num * num;
console.log(cube(5));

//TASK 2
let calculation2 = (num1, num2, num3) => (num1 + num2) / num3;
console.log(calculation2(10, 5, 2));

//TASK 3
let weekDay = (dayNum) => {
  switch (dayNum) {
    case 1:
      return "Понеділок";
      break;
    case 2:
      return "Вівторок";
      break;
    case 3:
      return "Середа";
      break;
    case 4:
      return "Четвер";
      break;
    case 5:
      return "П'ятниця";
      break;
    case 6:
      return "Субота";
      break;
    case 7:
      return "Неділя";
      break;
    default:
      console.log("Введіть число від 1 до 7");
  }
};
console.log(weekDay(1));

//TASK 4
let factorial = (num) => {
  let factor = 1;
  for (let i = 1; i <= num; i++) {
    factor = factor * i;
  }
  return factor;
};
console.log(factorial(5));

//TASK 5
let timeInSeconds = (hours, minutes, seconds) => {
  return (sum = hours * 60 * 60 + minutes * 60 + seconds);
};
console.log(timeInSeconds(1, 15, 25));

//TASK 6
let time = (seconds) => {
  if (seconds / (60 * 60) >= 24) {
    console.log("Більше одного дня.");
  } else {
    let hours = Math.floor(seconds / (60 * 60));
    let minutes = Math.floor((seconds % (60 * 60)) / 60);
    let sec = seconds % 60;
    return `«${hours}:${minutes}:${sec}»`;
  }
};
console.log(time(86350));
