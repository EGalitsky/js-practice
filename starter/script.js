'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

//Property VALUE
const value = Object.values(openingHours);
console.log(value);

//Entire object
const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.fri.open);
// Optional chaining operator
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHour?.mon?.open);
//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Arrays
//const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const users = [];
console.log(users[0]?.name ?? 'User array empty');
*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}



const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(otherFood);

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

const add = function (...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];

  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 5, 6, 1, 3, 7, 9, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredients);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCope = [...restaurant.mainMenu];
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);


console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

restourant.numGuests = 23;
const guests1 = restourant.numGuests ? restourant.numGuests : 10;

*/
// Challenge
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
// 1
//const players1 = game.players[0];
//const players2 = game.players[1];
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2
const [gk, ...fieldPlayers] = game.players[0];
console.log(gk);
console.log(fieldPlayers);

//3
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

//4
const playersFinal = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

//5
const { team1, x: draw, team2 } = game.odds;
// const team1Win = game.odds.team1;
// const draw = game.odds.x;
// const team2Win = game.odds.team2;
console.log(team1);
console.log(draw);
console.log(team2);

//6
const printGoals = function (...str) {
  let goals = str.length;
  console.log(...str, `Goals scored: ${goals}`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7

for (; game.odds.team1 > game.odds.team2; ) {
  console.log('Team 2 is more likely to win');
  break;
}
for (; game.odds.team1 < game.odds.team2; ) {
  console.log('Team 1 is more likely to win');
  break;
}

game.odds.team1 > game.odds.team2 &&
  console.log('Team 2 is more likely to win');
game.odds.team1 < game.odds.team2 &&
  console.log('Team 1 is more likely to win');
*/
//Challenge # 2

const goals = game.scored.entries();
console.log(goals);
// for (const [goal, [item]] of goals) {
//   console.log(`Goal ${goal}: ${item}`);
// }

//const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}
