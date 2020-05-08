// Домашка
// 1. створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення.
// Населення відобразити в млн "40 млн". Київ та Україна підсвітити синьо-жовтим кольором.

// var CountryList = [
// {
//  country: "Україна",
//  capital:"Київ",
//  count: 40000000
// },
// {
//  country: "Грузія",
//  capital:"Тбілісі"
// count: 10000000
// },
// {
//  country: "Великобританія",
//  capital:"Лондон",
//  count: 100000000
// },
// {
//  country: "США",
//  capital:"Вашингтон"
// count: 300000000
// }];
// 2. Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється модальне вікно по центрі
// екрану(центрування елемента). В модальному вікні має бути текст та кнопка закрити.

// 3. Створити список в якому можна буде довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів).

// // TASK 1
// var countryList = [
//   {
//     country: "Україна",
//     capital: "Київ",
//     count: 40000000,
//   },
//   {
//     country: "Грузія",
//     capital: "Тбілісі",
//     count: 10000000,
//   },
//   {
//     country: "Великобританія",
//     capital: "Лондон",
//     count: 100000000,
//   },
//   {
//     country: "США",
//     capital: "Вашингтон",
//     count: 300000000,
//   },
// ];

// let heading = document.createElement("h2");
// heading.innerHTML = "Завдання 1";
// document.body.append(heading);
// let orderedList = document.createElement("ol");
// orderedList.innerHTML = "Список країн та дані про них:";
// document.body.append(orderedList);

// let countries = countryList.map((data) => {
//   let listItem = document.createElement("li");
//   listItem.innerHTML = `Країна: ${data.country}, столиця: ${
//     data.capital
//   }, населення: ${data.count / 1000000} млн.`;
//   if (data.country === "Україна" && data.capital === "Київ") {
//     listItem.classList.add("color-blue");
//   }
//   orderedList.appendChild(listItem);
// });

//TASK 2
window.onload = function addOpenModalBtn() {
  let openModalBtn = document.createElement("button");
  openModalBtn.innerText = "Відкрийте модальне вікно";
  openModalBtn.classList.add("openModalBtn");
  document.body.appendChild(openModalBtn);
  openModalBtn.addEventListener("click", this.showModal);
};

function closeModal() {
  let myModal = document.getElementById("myModal");
  myModal.classList.add("closeModal");
  document.querySelector(".openModalBtn").style.visibility = "visible";
}
function showModal() {
  let myModal = document.createElement("div");
  let closeBtn = document.createElement("button");

  myModal.innerHTML = "<p><strong>Увага!</strong> Сталося щось важливе!</p>";
  myModal.id = "myModal";
  myModal.classList.add("modalWindow");
  myModal.append(closeBtn);

  closeBtn.innerHTML = "Close";
  closeBtn.classList.add("btn");
  closeBtn.addEventListener("click", closeModal);

  document.body.append(myModal);
  document.querySelector(".openModalBtn").style.visibility = "hidden";
}

// //TASK 3
// let div = document.getElementById("container");
// window.onload = function createListItem() {
//   let list = document.createElement("ul");
//   div.appendChild(list);
//   for (let i = 0; i < 5; i++) {
//     let item = document.createElement("li");
//     item.innerHTML = `Item ${i + 1}`;
//     item.classList.add("item");
//     item.addEventListener("dblclick", changeColor);
//     list.appendChild(item);
//   }
// };

// let colors = document.createElement("select");
// let colorsArr = ["red", "green", "blue", "coral", "yellow"];
// colors.id = "colorSelect";

// for (let j = 0; j < 5; j++) {
//   let color = document.createElement("option");
//   color.value = colorsArr[j];
//   color.innerText = colorsArr[j];
//   color.classList.add("color");
//   color.style.backgroundColor = colorsArr[j];
//   colors.appendChild(color);
//   div.after(colors);
//   console.log(color);
// }

// function changeColor(e) {
//   console.log("Hello world");
// }
