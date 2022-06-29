//Importing module

// console.log('Importing module');

// import { addToCart, totalPrice as price, tq } from './shoppingCard.js';
// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCard.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCard.js';
// console.log(price, tq);

import add, { cart } from './shoppingCard.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggeIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggeIn = false;

console.log(state);
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

console.log(cart.find(el => el.quantity >= 2));
