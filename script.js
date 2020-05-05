// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:

// Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км.
//(врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну.

// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне -
//рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

// {

//   tomato: {

//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true

//   } , ...

// }
//  Виводимо список покупок - спочатку ті які є в магазині потім яких немає,
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

// 4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}].
// Вивести всіх адмінів.
// Вивести середній вік усіх працівників.
// Вивести тільки унікальні хоббі працівників.

// //TASK 1
// function Animal(name, weight, age, avrSpeed) {
//   this.name = name;
//   this.weight = weight;
//   this.age = age;
//   this.avrSpeed = avrSpeed;
//   this.info = function () {
//     console.log(
//       `This is a ${this.name}. He is ${this.age} years. His weight is ${this.weight} kg and average speed ${this.avrSpeed} kph.`
//     );
//   };
//   this.distance1000 = function () {
//     let time = 1000 / this.avrSpeed;
//     if (time > 12) {
//       let days = Math.floor(time / 12);
//       let hours = time % days;
//       console.log(
//         `${this.name} can run 1000 km in ${days} days and ${hours} hours`
//       );
//     } else {
//       console.log(`${this.name} can run 1000 km in ${time} hours`);
//     }
//   };
//   this.nameChanger = function (newName, nickname) {
//     this.name = newName;
//     this.nickname = nickname;
//     console.log(
//       `Animal changed to ${this.name}, its nickname is ${this.nickname}`
//     );
//   };
// }
// let tiger = new Animal("tiger", 50, 10, 40);
// tiger.info();
// tiger.distance1000();
// tiger.nameChanger("leopard", "Leo");

// //TASK 2
// let rectangle = {
//   sideA: 10,
//   sideB: 7,
//   perimeter: function () {
//     return 2 * (this.sideA + this.sideB);
//   },
//   square: function () {
//     return this.sideA * this.sideB;
//   },
//   nameChanger: function (name) {
//     this.name = name;
//   },
//   lengthChanger: function () {
//     this.sideA = this.sideA / 100;
//     this.sideB = this.sideB / 100;
//   },
// };
// console.log(rectangle.perimeter());
// console.log(rectangle.square());
// rectangle.sideB = 10;
// console.log(rectangle.nameChanger("roundRectangle"));
// console.log(rectangle.name);
// console.log(rectangle.lengthChanger());
// console.log(rectangle.sideA);
// console.log(rectangle.sideB);
// console.log(rectangle.perimeter());
// console.log(rectangle.square());

// // TASK 3
// let items = {
//   tomato: {
//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true,
//   },
//   apple: {
//     count: 7,
//     price: 25,
//     buy: true,
//     outOfstore: false,
//   },
//   cucumber: {
//     count: 3,
//     price: 40,
//     buy: false,
//     outOfstore: true,
//   },
//   banana: {
//     count: 7,
//     price: 30,
//     buy: true,
//     outOfstore: false,
//   },
//   beetroot: {
//     count: 5,
//     price: 10,
//     buy: false,
//     outOfstore: false,
//   },

//   buyItem: function (prop) {
//     if (items[prop].buy === false) {
//       items[prop].buy = true;
//     }
//   },
//   sumCheck: function () {
//     let sum = 0;
//     for (let prop in items) {
//       if (items[prop].buy === true) {
//         sum = sum + items[prop].count * items[prop].price;
//       }
//     }
//     return sum;
//   },
//   countIncrement: function (prop) {
//     items[prop].count++;
//   },
//   countDicrement: function (prop) {
//     if (items[prop].count > 0) {
//       items[prop].count--;
//     }
//   },
// };

// console.table(items);
// let inStock = [],
//   outOfStock = [],
//   boughtItems = [];
// for (let prop in items) {
//   if (items[prop].outOfstore === false) {
//     inStock.push(prop);
//   }
// }
// for (let prop in items) {
//   if (items[prop].outOfstore === true) {
//     outOfStock.push(prop);
//   }
// }
// for (let prop in items) {
//   if (items[prop].buy === true) {
//     boughtItems.push(prop);
//   }
// }
// console.log(`Товари в наявності: ${inStock}`);
// console.log(`Товари, що на разі відсутні: ${outOfStock}`);
// console.log(`Придбані товари: ${boughtItems}`);
// items.buyItem("tomato");
// // items.buyItem("cucumber");
// // items.buyItem("beetroot");
// console.log(`Здійснено покупки на загальну суму ${items.sumCheck()}`);
// items.countIncrement("tomato");
// items.countIncrement("tomato");
// items.countIncrement("tomato");
// console.log(`Здійснено покупки на загальну суму ${items.sumCheck()}`);
// items.countDicrement("cucumber");

//TASK 4
let persons = [
  { name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin" },
  {
    name: "John",
    age: 45,
    hobby: ["films", "skiing", "swiming"],
    type: "Guest",
  },
  {
    name: "Petr",
    age: 25,
    hobby: ["films", "car races", "travelling"],
    type: "Guest",
  },
  {
    name: "Bred",
    age: 50,
    hobby: ["swiming", "games", "travelling"],
    type: "Admin",
  },
];

let admins = persons.filter((obj) => obj.type === "Admin");
console.log(admins);

let totalAge = persons
  .map((person) => person.age)
  .reduce((sum, curr) => sum + curr);
let avrgAge = totalAge / persons.length;
console.log(totalAge);
console.log(avrgAge);

let hobbies = [];
persons.map((person) => {
  let personHobby = person.hobby;
  hobbies.push(...personHobby);
});
console.log(hobbies);
for (let i = 0; i < hobbies.length; i++) {
  let hobbiesNewArr = hobbies.slice();
  let currentHobby = hobbiesNewArr.splice(i, 1);
  console.log(currentHobby);
  console.log(hobbiesNewArr);
  if (!hobbiesNewArr.includes(currentHobby[0])) {
    console.log(`Знайдено унікальне хоббі: ${currentHobby[0]}`);
  }
}
