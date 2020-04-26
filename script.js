// 1.  Знайдіть суму всіх цифр від 1 до 100.

// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера.

// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

//TASK 1
let sum = 0;
let i = 0;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);

//TASK 2
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//TASK 3
let arr1 = [-1, 22, 3, 44, 5];
console.log(Math.max(...arr1));
let arr2 = [-1, 22, 3, 44, 5];
let max = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > max) {
    max = arr2[i];
  }
}
console.log(max);

//TASK 4
let arrNum = [],
  arrPlusNum = [],
  arrMinusNum = [],
  arrZeros = [];
let agree = confirm(
  "Ви бажаєте скористуватися нашим сервісом? Вам потрібно буде ввести 8 чисел."
);
for (let i = 0; i < 8; i++) {
  if (agree) {
    let addNumber = +prompt(`Введіть будь яке число. ${i + 1} спроба`);
    arrNum.push(addNumber);
    if (addNumber === 0) {
      arrZeros.push(addNumber);
    } else if (addNumber > 0) {
      arrPlusNum.push(addNumber);
    } else if (addNumber < 0) {
      arrMinusNum.push(addNumber);
    }
  } else break;
}
console.log(
  `Ви ввели такі числа ${arrNum}. Ви ввели ${arrZeros.length} нулів, ${arrPlusNum.length} додатніх та ${arrMinusNum.length} від'ємних значень`
);

//TASK 5
for (let i = 1; i <= 9; i++) {
  console.log(`8 x ${i} = ${8 * i}`);
}

//TASK 6
let arr6 = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > 3 && arr6[i] < 10) {
    console.log(arr6[i]);
  }
}

//TASK 7
for (let i = 0; i < Infinity; i++) {
  let agree = confirm("Ви бажаєте скористуватися нашим кальтулятором?");
  if (agree) {
    let num1 = +prompt("Введіть 1шу цифру");
    let num2 = +prompt("Введіть 2гу цифру");
    let sign = prompt("Введіть знак математичної дії");
    let result = 0;
    switch (sign) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }
    alert(`Результат: ${result}  `);
  } else {
    break;
  }
}
