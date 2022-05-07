'use strict';

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    50
  );
  console.log(output);
}

//Working with Strings
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
console.log(airline.slice(-5, -2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat :(');
  else console.log('You got lucky ;)');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(2));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix czpitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const annoucement = 'All passengers come to barding door 23. Boarding door 23';
console.log(annoucement.replace('door', 'gate'));
console.log(annoucement.replace(/door/g, 'gate')); //Old method
console.log(annoucement.replaceAll('door', 'gate'));

//Booleans

const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('B320'));
console.log(plane1.startsWith('Air'));
console.log(plane1.startsWith('A3'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of NEW AIRbus family');
}

//Practice exersise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else console.log('Welcome aboard');
};

checkBaggage('I have a laptop, some Food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//Split and join method
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName);
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
console.log(typeof newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //other way
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann amith davis');
capitalizeName('jonas schmedtmann');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+'));

const maskCreditCars = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCars(4165414556456561));
console.log(maskCreditCars('55662652629812652658161465'));

//Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/
/*
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
*/
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

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert oject to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
console.log([question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
//Maps fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon', 'Portugal');

console.log(rest);
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest.size);
rest.set([1, 2], 'Test');
console.log(rest);
rest.set(document.querySelector('h1'), 'Heading');
*/

/*
//Sets
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');

console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
*/
/*
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
/*
const odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
};
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
  odds,
};
*/
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
/*
//Challenge # 2
//1
const goals = game.scored;
for (const [goal, name] of goals.entries()) {
  console.log(`Goal ${goal + 1}: ${name}`);
}
//Jonas solution
for (const [i, player] of game.scored.entries()) {
  console.log(`goal ${i + 1}: ${player}`);
}
//2
let sum = 0;
const avrOdds = Object.values(game.odds);
for (const i of avrOdds) sum += i;
console.log(sum / avrOdds.length);
//Jonas solution
let average = 0;
for (const odd of Object.values(game.odds)) average += odd;
average /= Object.values(game.odds).length;
console.log(average);
//3
console.log(`Odd of victory ${game.team1}: ${avrOdds[0]}`);
//console.log(`Odd of victory ${game.team1}: ${odds.team1}`);
console.log(`Odd of draw: ${avrOdds[1]}`);
console.log(`Odd of victory ${game.team2}: ${avrOdds[2]}`);
//console.log(`Odd of victory ${game.team2}: ${odds.team2}`);
//Jonas solution
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

/*Coding Challenge #3 
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time). 
Your tasks: 
1.  Create an array 'events' of the different game events that happened (no 
duplicates) 
2.  After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log. 
3.  Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes) 
4.  Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this: 
[FIRST HALF] 17: ⚽  GOAL 
*/
/*
const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);
//3
console.log(
  `An event happened, on average, every ${90 / [...gameEvents].length} minutes`
);
//Jonas way
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
//4
for (const [minutes, event] of gameEvents) {
  if (minutes <= 45) console.log(`[FIRST HALF] ${minutes}: ${event}`);
  else if (minutes => 45) console.log(`[SECOND HALF] ${minutes}: ${event}`);
}
//Jonas way
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

/*
Coding Challenge #4 
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase. 
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed. 
Test data (pasted to textarea, including spaces): 
underscore_case 
 first_name 
Some_Variable  
  calculate_AGE 
delayed_departure 
Should produce this output (5 separate console.log outputs): 
underscoreCase      ✅ 
firstName           ✅✅ 
someVariable        ✅✅✅ 
calculateAge        ✅✅✅✅ 
delayedDeparture    ✅✅✅✅✅ 
*/

// My version
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
let list = [];
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  list = text.split('\n');
  transform(list);
});

const transform = function (arr) {
  for (const [a, name] of arr.entries()) {
    const workName = name.trim().toLowerCase().split('_');
    let str = '';
    for (let i = 0; i < workName.length; i++) {
      if (i > 0) {
        workName[i] = workName[i].replace(
          workName[i][0],
          workName[i][0].toUpperCase()
        );
      }
      str += workName[i];
    }
    console.log(`${str.padEnd(25)} ${'🆗'.repeat(a + 1)}`);
  }
};
*/
//Jonas way
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)} ${'🆗'.repeat(i + 1)}`);
  }
});
*/
