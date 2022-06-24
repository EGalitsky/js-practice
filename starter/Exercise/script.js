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

///////////////////////////////////////////////////////////
/*
Деструктурирующее присваивание
У нас есть объект

Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/
/*
let user = {
  name: 'John',
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name, age, isAdmin);
*/

///////////////////////////////////////////////////////////
/*
Максимальная зарплата
У нас есть объект salaries с зарплатами

Создайте функцию topSalary(salaries),
которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/
/*
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(sals) {
  let maxSal = 0;
  let maxSalName;
  for (let [name, sal] of Object.entries(sals)) {
    if (maxSal < sal) {
      maxSal = sal;
      maxSalName = name;
    }
  }
  return maxSalName;
}

console.log(topSalary(salaries));
*/

///////////////////////////////////////////////////////////
/*
Создайте дату
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
Временная зона – местная.
*/
/*
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);
*/

///////////////////////////////////////////////////////////
/*
Покажите день недели
Напишите функцию getWeekDay(date),
показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/
/*
// function getWeekDay(date) {
//   let day = date.getDay();
//   switch (day) {
//     case 0:
//       return 'Sun';
//     case 1:
//       return 'Mon';
//     case 2:
//       return 'Tue';
//     case 3:
//       return 'Wed';
//     case 4:
//       return 'Thu';
//     case 5:
//       return 'Fri';
//     case 6:
//       return 'Sat';
//   }
// }

// More simple way
function getWeekDay(date) {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return days[date.getDay()];
}

let date = new Date(2012, 0, 3);

console.log(getWeekDay(date));
*/

///////////////////////////////////////////////////////////
/*
День недели в европейской нумерации
В Европейских странах неделя начинается с понедельника (день номер 1),
затем идёт вторник (номер 2) и так до воскресенья (номер 7).
Напишите функцию getLocalDay(date),
которая возвращает «европейский» день недели для даты date.
*/
/*
let date = new Date(2012, 0, 8);

function getLocalDay(date) {
  let day = date.getDay();
  if (day === 0) return 7;
  return day;
}

console.log(getLocalDay(date));
*/

///////////////////////////////////////////////////////////
/*
Какой день месяца был много дней назад?
Создайте функцию getDateAgo(date, days),
возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число,
то getDateAgo(new Date(), 1) вернёт девятнадцатое и
getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях
P.S. Функция не должна изменять переданный ей объект date.
*/
/*
let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  let day = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - days
  );
  return day.getDate();
}

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
*/

///////////////////////////////////////////////////////////
/*
Последнее число месяца?
Напишите функцию getLastDayOfMonth(year, month), 
возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/
/*
function getLastDayOfMonth(year, month) {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));
*/

///////////////////////////////////////////////////////////
/*
Сколько сегодня прошло секунд?
Напишите функцию getSecondsToday(),
возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)

Функция должна работать в любой день,
т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/
/*
function getSecondsToday() {
  const date = new Date();
  const startDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  console.log(date, startDate);
  return (date - startDate) / 1000;
}
console.log(getSecondsToday());
*/

///////////////////////////////////////////////////////////
/*
Сколько секунд осталось до завтра?
Создайте функцию getSecondsToTomorrow(),
возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:
getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день,
т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/
/*
function getSecondsToTomorrow() {
  const date = new Date();
  const tomorrow = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  );
  return (tomorrow - date) / 1000;
}

console.log(getSecondsToTomorrow());
*/

///////////////////////////////////////////////////////////
/*
Форматирование относительной даты
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".

*/
/*
function getTwoSigh(arr) {
  return arr.map(item => item.slice(-2));
}

function formatDate(date) {
  const time = new Date() - date;
  if (time < 1000) console.log('Right now');
  else if (time > 1000 && time < 60 * 1000)
    console.log(`${time / 1000} seconds ago`);
  else if (time > 60 * 1000 && time < 60 * 60 * 1000)
    console.log(`${time / (60 * 1000)} minutes ago`);
  else {
    console.log(
      `${getTwoSigh(['0' + date.getDate()])}.${getTwoSigh([
        '0' + (date.getMonth() + 1),
      ])}.${date.getFullYear()} ${getTwoSigh([
        '0' + date.getHours(),
      ])}:${getTwoSigh(['0' + date.getMinutes()])}`
    );
  }
}

formatDate(new Date(new Date() - 1)); // "прямо сейчас"

formatDate(new Date(new Date() - 30 * 1000)); // "30 сек. назад"

formatDate(new Date(new Date() - 5 * 60 * 1000)); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
formatDate(new Date(new Date() - 86400 * 1000));
*/

///////////////////////////////////////////////////////////
/*
Преобразуйте объект в JSON, а затем обратно в обычный объект
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
*/
/*
let user = {
  name: 'Василий Иванович',
  age: 35,
};
console.log(user);
let jsonUser = JSON.stringify(user);
console.log(jsonUser);
let jsonReadUser = JSON.parse(jsonUser);
console.log(jsonReadUser);
*/

///////////////////////////////////////////////////////////
/*
Исключить обратные ссылки

В простых случаях циклических ссылок мы можем исключить свойство,
из-за которого они возникают, из сериализации по его имени.

Но иногда мы не можем использовать имя,
так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах.
Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования,
которая удалит свойства, ссылающиеся на meetup:
*/
/*
let room = {
  number: 23,
};

let meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
console.log(meetup);

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key !== '' && value === meetup ? undefined : value;
  })
);
*/

///////////////////////////////////////////////////////////
/*
Mrs. Shear is a grade 3 teacher. She wants to ensure that students  in her class learn 
in groups of 3. Write a function called grouping()  which takes a number  as a 
parameter. Within the function use a try-catch block to throw an error if the 
number  passed into the function grouping() is not divisible  by 3. If it is divisible 
by 3 then return  the number  of groupings  that are formed. The finally block 
must let Mrs. Shear know that the function is over. 
*/
/*
function grouping(number) {
  try {
    if (number % 3 === 0)
      console.log(`A number of grouping will be ${number / 3}`);
    else if (number % 3 !== 0)
      throw new Error(`Number of students is not divisible by 3`);
  } catch (e) {
    console.log(e.name + e.message);
  } finally {
    console.log('Function is over');
  }
}

grouping(9);
grouping(8);
*/

///////////////////////////////////////////////////////////
/*
Вычислить сумму чисел до данного
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Сделайте три варианта решения:
С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/
/*
function sumToCycle(n) {
  let sum = 0;
  for (n; n > 0; n--) {
    sum += n;
  }
  return sum;
}
console.log(sumToCycle(100));

function sumToRecurcion(n) {
  return n > 1 ? n + sumToRecurcion(n - 1) : n;
}
console.log(sumToRecurcion(100));

function sumToProgression(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumToRecurcion(100));
*/

///////////////////////////////////////////////////////////
/*
Вычислить факториал
Факториал натурального числа – это число, умноженное на "себя минус один",
затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
*/
/*
function factorial(num) {
  return num > 1 ? num * factorial(num - 1) : num;
}
console.log(factorial(5));
*/

///////////////////////////////////////////////////////////
/*
Числа Фибоначчи
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3)
и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
*/
/*
function fib(n) {
  // Slow
  // return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  // Fast
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(7));
*/

///////////////////////////////////////////////////////////
/*
Вывод односвязного списка
Допустим, у нас есть односвязный список
Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.
*/
/*
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListCycle(obj) {
  while (obj) {
    console.log(obj.value);
    obj = obj.next;
  }
}

printListCycle(list);

function printListRec(obj) {
  console.log(obj.value);
  if (obj.next) {
    printListRec(obj.next);
  }
}

printListRec(list);
*/

///////////////////////////////////////////////////////////
/*
Вывод односвязного списка в обратном порядке
Выведите односвязный список из предыдущего задания
Сделайте два решения: с использованием цикла и через рекурсию.
*/
/*
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListCycle(obj) {
  let arr = [];
  while (obj) {
    arr.push(obj.value);
    obj = obj.next;
  }
  arr.reverse().forEach(a => console.log(a));
}
printListCycle(list);

function printListRec(obj) {
  if (obj.next) {
    printListRec(obj.next);
  }
  console.log(obj.value);
}
printListRec(list);
*/
/*
function slow(x) {
  // здесь могут быть ресурсоёмкие вычисления
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    return result;
  };
}
*/

///////////////////////////////////////////////////////////
/*
Сумма с помощью замыканий
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
Да, именно таким образом, используя двойные круглые скобки (не опечатка).
*/
/*
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
*/

///////////////////////////////////////////////////////////
/*
Фильтрация с помощью функции
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

console.log(arr.filter(inBetween(3, 6)));

console.log(arr.filter(inArray([1, 2, 10])));
*/

///////////////////////////////////////////////////////////
/*
Сортировать по полю
У нас есть массив объектов, который нужно отсортировать:

Обычный способ был бы таким:
// по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);
// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

Можем ли мы сделать его короче, скажем, вот таким?
users.sort(byField('name'));
users.sort(byField('age'));

То есть, чтобы вместо функции, мы просто писали byField(fieldName).
Напишите функцию byField, которая может быть использована для этого.
*/
/*
let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

function byField(key) {
  return (a, b) => (a[key] > b[key] ? 1 : -1);
}

users.sort(byField('name'));
console.log(users);
// users.sort(byField('age'));
// console.log(users);
*/

///////////////////////////////////////////////////////////
/*
Установка и уменьшение значения счётчика
Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

*/
/*
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }
  counter.set = value => (count = value);
  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());

console.log(counter.set(10));

counter.decrease();
console.log(counter());
*/

///////////////////////////////////////////////////////////
/*
Сумма с произвольным количеством скобок
Напишите функцию sum, которая бы работала следующим образом:
*/
/*
function sum(a) {
  let currentSum = a;
  function func(b) {
    currentSum += b;
    return func;
  }

  func.toString = function () {
    return currentSum;
  };

  return func;
}

console.log(sum(1)(2) == 3);
console.log(sum(1)(2)(3) == 6);
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);
*/

///////////////////////////////////////////////////////////
/*
Вывод каждую секунду
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
начиная от from и заканчивая to.

Сделайте два варианта решения.
Используя setInterval.
Используя рекурсивный 
*/
/*
function printNumbersInter(from, to) {
  let timerId = setInterval(function () {
    console.log(from);
    if (from === to) {
      clearInterval(timerId);
    }
    from++;
  }, 1000);
}

printNumbersInter(1, 5);

function printNumbersTimeout(from, to) {
  setTimeout(function timeout() {
    console.log(from);
    if (from < to) {
      setTimeout(timeout, 1000);
    }
    from++;
  }, 1000);
}

printNumbersTimeout(6, 10);
*/

///////////////////////////////////////////////////////////
/*
Декоратор-шпион
Создайте декоратор spy(func), который должен возвращать обёртку,
которая сохраняет все вызовы функции в своём свойстве calls.
Каждый вызов должен сохраняться как массив аргументов.
*/
/*
function work(a, b) {
  alert(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert('call:' + args.join()); // "call:1,2", "call:4,5"
}
*/

///////////////////////////////////////////////////////////
/*
Добавить функциям метод "f.defer(ms)"
Добавьте всем функциям в прототип метод defer(ms),
который вызывает функции через ms миллисекунд.
*/
/*
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log('Hello!');
}

f.defer(1000);
*/

///////////////////////////////////////////////////////////
/*
Добавьте функциям декорирующий метод "defer()"
Добавьте всем функциям в прототип метод defer(ms),
который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
*/
/*
Function.prototype.defer = function (ms) {
  return (a, b) => setTimeout(this, ms, a, b);
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
*/

///////////////////////////////////////////////////////////
/*
Класс Clock написан в функциональном стиле.
Перепишите его, используя современный синтаксис классов.

function Clock({ template }) {
  let timer;
  function render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }
  this.stop = function() {
    clearInterval(timer);
  };
  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };
}
let clock = new Clock({template: 'h:m:s'});
clock.start();
*/
/*
class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop = function () {
    clearInterval(this.timer);
  };

  start = function () {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  };
}

let clock = new Clock({ template: 'h:m:s' });
console.log(clock);
clock.start();
*/

///////////////////////////////////////////////////////////
/*
Встроенная функция setTimeout использует колбэк-функции. 
Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис,
который перейдёт в состояние «выполнен» через ms миллисекунд,
так чтобы мы могли добавить к нему .then:
*/
/*
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));
*/

///////////////////////////////////////////////////////////
/*
Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка
таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы
функцию-callback.
*/
/*
function go() {
  showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append('Привет, мир!');
  });
}

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  });
}

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append('Hello, world!');
});
*/

///////////////////////////////////////////////////////////
/*
Перепишите, используя async/await
Перепишите один из примеров раздела Цепочка промисов,
используя async/await вместо .then/catch

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
*/
/*
async function loadJson(url) {
  const response = await fetch(url);

  if (response.status == 200) {
    return await response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson('no-such-user.json').catch(console.log());
*/

///////////////////////////////////////////////////////////
/*
Перепишите, используя async/await
Ниже пример из раздела Цепочка промисов, перепишите его,
используя async/await вместо .then/catch.
В функции demoGithubUser замените рекурсию на цикл: используя async/await,
сделать это будет просто.

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Полное имя: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
*/
/*
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt('Введите логин?', 'iliakan');

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
        return demoGithubUser();
      } else {
        throw err;
      }
    }
  }
  alert(`Полное имя: ${user.name}.`);
  return user;
}

demoGithubUser();
*/

///////////////////////////////////////////////////////////
/*
Вызовите async–функцию из "обычной"
Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
*/
/*
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(a => console.log(a));
}
*/
