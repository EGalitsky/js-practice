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
