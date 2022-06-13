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
/*
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
*/

///////////////////////////////////////////////////////////
/*
Фильтрация уникальных элементов массива

Допустим, у нас есть массив arr.

Создайте функцию unique(arr),
которая вернёт массив уникальных,
не повторяющихся значений массива arr.
*/
/*
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values)); // Hare,Krishna,:-O
*/

///////////////////////////////////////////////////////////
/*
Отфильтруйте анаграммы
Анаграммы – это слова, у которых те же буквы в том же количестве,
но они располагаются в другом порядке.

Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/
/*
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  let map = new Map();
  for (let a of arr) {
    let sort = a.toLowerCase().split('').sort().join();
    map.set(sort, a);
  }

  return Array.from(map.values());
}

console.log(aclean(arr));
*/

///////////////////////////////////////////////////////////
/*

Перебираемые ключи
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними,
например, применить метод .push.

Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
*/
/*
let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys());
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more');
console.log(keys);
*/

///////////////////////////////////////////////////////////
/*
Хранение отметок "не прочитано"
Есть массив сообщений:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
У вас есть к ним доступ, но управление этим массивом происходит где-то ещё.
Добавляются новые сообщения и удаляются старые,
и вы не знаете в какой момент это можетпроизойти.

Имея такую вводную информацию, решите,
какую структуру данных вы могли бы использовать для ответа на вопрос
«было ли сообщение прочитано?». Структура должна быть подходящей,
чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого
объекта сообщения.

P.S. Когда сообщение удаляется из массива messages,
оно должно также исчезать из структуры данных.

P.P.S. Нам не следует модифицировать сами объекты сообщений,
добавлять туда свойства. Если сообщения принадлежат какому-то другому коду,
то это может привести к плохим последствиям.
*/
/*
let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readedText = new WeakSet();

readedText.add(messages[0]);
readedText.add(messages[1]);
readedText.add(messages[2]);


console.log(readedText);
// messages.pop();
// messages.pop();
// console.log(readedText);
*/

///////////////////////////////////////////////////////////
/*
Хранение времени прочтения

Есть массив сообщений такой же, как и в предыдущем задании.

Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать
для хранения информации о том, когда сообщение было прочитано?

В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет».
Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении
«сборщиком мусора» сообщения.
*/
/*
let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readDate = new WeakMap();

readDate.set(messages[0], new Date());
readDate.set(messages[1], new Date());
readDate.set(messages[2], new Date());
console.log(readDate);
// messages.pop();
// messages.pop();
// console.log(readDate);
*/

///////////////////////////////////////////////////////////
/*
Сумма свойств объекта
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries),
которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.
*/
/*
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  return Object.values(obj).reduce((sum, item) => sum + item, 0);
}

console.log(sumSalaries(salaries)); // 650
*/

///////////////////////////////////////////////////////////
/*
Подсчёт количества свойств объекта
Напишите функцию count(obj), которая возвращает количество свойств объекта:
P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/
/*
let user = {
  name: 'John',
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user)); // 2
*/
