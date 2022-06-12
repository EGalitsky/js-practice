'use strict';

// aclean(arr);
///////////////////////////////////////////////////////////
/*
Подмассив наибольшей суммы

На входе массив чисел, например: arr = .

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.
*/
/*
const getMaxSubSum = function (arr) {
  let sum = 0;
  let sumMax = 0;
  for (let a of arr) {
    sum += a;
    sumMax = Math.max(sumMax, sum);
    if (sum < 0) sum = 0;
  }
  return sumMax;
};

console.log(getMaxSubSum([2, -1, 2, 3, -9]));
*/

///////////////////////////////////////////////////////////
/*
Напишите функцию camelize(str), которая преобразует строки 
вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/
/*
const camelize = function (str) {
  return str
    .split('-')
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join('');
};

console.log(camelize('my-short-string'));
*/

///////////////////////////////////////////////////////////
/*
Фильтрация по диапазону
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.
*/
/*
const arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

console.log(filterRange(arr, 1, 4));
console.log(arr);
*/

///////////////////////////////////////////////////////////
/*
Фильтрация по диапазону "на месте"
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает 
массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
*/
/*
let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item < a || item > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);
*/

///////////////////////////////////////////////////////////
/*
Сортировать в порядке по убыванию
*/
/*
let arr = [5, 2, 1, -10, 8];
console.log(arr.sort((a, b) => b - a));
*/

///////////////////////////////////////////////////////////
/*
Скопировать и отсортировать массив
У нас есть массив строк arr. Нужно получить отсортированную копию,
но оставить arr неизменённым.

Создайте функцию copySorted(arr),
которая будет возвращать такую копию.
*/
/*
let arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr);

console.log(arr);
console.log(sorted);
*/

///////////////////////////////////////////////////////////
/*
Создать расширяемый калькулятор

Создайте функцию конструктор Calculator,
которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str),
который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО»
(разделено пробелами) и возвращает результат.
Метод должен понимать плюс + и минус -.


Затем добавьте метод addMethod(name, func),
который добавляет в калькулятор новые операции.
Он принимает оператор name и функцию с двумя аргументами func(a,b),
которая описывает его.
Например, давайте добавим умножение *,
деление / и возведение в степень **:
*/
/*
function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function (str) {
    let arr = str.split(' '),
      a = +arr[0],
      sign = arr[1],
      b = +arr[2];
    return this.methods[sign](a, b);
  };

  this.addMethod = function (sign, func) {
    this.methods[sign] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate('3 + 7')); // 10

let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log(result);
*/

///////////////////////////////////////////////////////////
/*
Трансформировать в массив имён
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
*/
/*
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

console.log(names); // Вася, Петя, Маша
*/

///////////////////////////////////////////////////////////
/*
Трансформировать в объекты
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
*/
/*
let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(item => ({
  fullName: `${item.name} ${item.surname}`,
  id: `${item.id}`,
}));

console.log(usersMapped);
*/

///////////////////////////////////////////////////////////
/*
Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users),
которая принимает массив объектов со свойством age и сортирует их по нему.
*/
/*
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let arr = [vasya, petya, masha];

function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}
sortByAge(arr);
console.log(arr);
*/

///////////////////////////////////////////////////////////
/*

Перемешайте массив
Напишите функцию shuffle(array),
которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести
к разным последовательностям элементов.
*/
/*
// Мой вариант
let arr = [1, 2, 3];

function shuffle(arr) {
  return arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
}

// Тасование Фишера — Йетса

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
*/

///////////////////////////////////////////////////////////
/*
Получить средний возраст
важность: 4
Напишите функцию getAverageAge(users),
которая принимает массив объектов со свойством age
и возвращает средний возраст.
*/
/*
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
  return arr.reduce((sum, item) => (sum += item.age), 0) / arr.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
*/

///////////////////////////////////////////////////////////
/*
Оставить уникальные элементы массива
Пусть arr – массив строк.

Напишите функцию unique(arr),
которая возвращает массив, содержащий только уникальные элементы arr.
*/
function unique(arr) {
  let newArr = [];
  for (let a of arr) {
    if (!newArr.includes(a)) {
      newArr.push(a);
    }
  }
  return newArr;
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

console.log(unique(strings));
