// 1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних"). При натисканні alt + A,
// замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати.
// Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span.

// 2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо
// мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.

// 3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.

// 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.

//TASK 1
let span = document.body.appendChild(document.createElement("span"));
let input;
document.addEventListener("keydown", createInput);
document.addEventListener("keydown", saveInput);
span.innerText = "Очікую на ввід даних";

function createInput(event) {
  if (
    event.code === "KeyA" &&
    event.altKey &&
    (!input || input.style.display === "none")
  ) {
    input = document.createElement("input");
    input.placeholder = span.innerText;
    span.style.display = "none";
    document.body.appendChild(input);
    input.oninput = function textChange() {
      span.innerText = input.value;
    };
  }
}

function saveInput(event) {
  if (input && event.code === "KeyS" && event.shiftKey) {
    event.preventDefault();
    span.style.display = "inline";
    input.style.display = "none";
  }
}

//TASK 2
window.addEventListener("resize", screenSize);
function screenSize() {
  if (window.screen.width >= 600) {
    console.log("You use desktop version of device");
  } else {
    console.log("You use mobile version of device");
  }
}

//TASK 3
let input3 = document.body.appendChild(document.createElement("input"));
input3.addEventListener("input", (event) => console.log(input3.value));

//TASK 4
let modalWindow;
document.addEventListener("keydown", createModal);
document.addEventListener("keydown", closeModal);

function createModal(event) {
  if (event.code === "KeyO" && event.altKey && !modalWindow) {
    modalWindow = document.body.appendChild(document.createElement("div"));
    modalWindow.innerText = "Some text!";
    modalWindow.classList.add("modalWindow");
  }
}

function closeModal(event) {
  if (event.code === "KeyC" && event.altKey) {
    modalWindow.remove();
  }
}
