// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:

// 1 2 3 4 5 6 7 8 9 ... 49 50

// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла while.
let b1 = document.querySelector(".b1");
let out1 = document.querySelector(".out1");

function t1() {
	let i = 1;

	while (i <= 50) {
		out1.textContent += `${i} `;
		console.log("asdasd");
		i++;
	}
}
b1.addEventListener("click", t1, false);

// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:

// 2 4 6 ... 122

// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла while.

let b2 = document.querySelector(".b2");
let out2 = document.querySelector(".out2");

function t2() {
	let i = 2;
	while (i <= 122) {
		out2.textContent += `${i} `;
		i += 2;
	}
}
b2.addEventListener("click", t2, false);

// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:

// 25 24 23 22 . . 7

// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла while.

let b3 = document.querySelector(".b3");
let out3 = document.querySelector(".out3");

function t3() {
	let i = 25;
	while (i >= 7) {
		out3.textContent += `${i} `;
		i--;
	}
}
b3.addEventListener("click", t3, false);
