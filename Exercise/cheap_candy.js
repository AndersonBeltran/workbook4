"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Sour Patch Kids", price: 6.82 },
  { product: "Skittles", price: 4.79 },
];


for (const product of products) {
  if (product.price < 4) {
    console.log(product);
  }
}

function getCheapCandies(candies,price) {
  let cheapCandies = [];

  for (const candy of candies) {
    if (candy.price <= price) {
      cheapCandies.push(candy);
    }
  }

  return cheapCandies;
}

let cheapCandies = getCheapCandies(products, 3);
console.log(cheapCandies);

