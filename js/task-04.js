// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// let counterValue = 0;
// const valueEl = document.getElementById('value');
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');

// function updateValue() {
//   valueEl.textContent = counterValue;
// }

// function decrement() {
//   counterValue -= 1;
//   updateValue();
// }

// function increment() {
//   counterValue += 1;
//   updateValue();
// }

// decrementBtn.addEventListener('click', decrement);
// incrementBtn.addEventListener('click', increment);

// updateValue(); 

let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const span = document.getElementById("value");

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    span.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    span.textContent = counterValue;
});