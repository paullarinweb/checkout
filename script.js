"use strict";
// data-action
let decrementOne = document.querySelectorAll(".counter__btn.dec")[0];

let decrementTwo = document.querySelectorAll(".counter__btn.dec")[1];

let IncrementOne = document.querySelectorAll(".counter__btn.inc")[0];

let IncrementTwo = document.querySelectorAll(".counter__btn.inc")[1];

let InputOne = document.querySelectorAll(".counter__show")[0];
let InputTwo = document.querySelectorAll(".counter__show")[1];

// prices

let ItemOnePrice = document.querySelectorAll(".card__price__new")[0];
let ItemTwoPrice = document.querySelectorAll(".card__price__new")[1];

const priceFirstItem = 54.99;
const priceSecondItem = 74.99;

// decrements

decrementOne.addEventListener("click", function () {
  if (InputOne.value > 1) {
    InputOne.value -= 1;
    // change price item
    ItemOnePrice.textContent = +ItemOnePrice.textContent - priceFirstItem;
  }
});

decrementTwo.addEventListener("click", function () {
  if (InputTwo.value > 1) {
    InputTwo.value -= 1;
    // change price item
    ItemTwoPrice.textContent = +ItemTwoPrice.textContent - priceSecondItem;
  }
});

// increments

IncrementOne.addEventListener("click", function () {
  if (InputOne.value >= 0) {
    InputOne.value = ++InputOne.value;
    // change price item
    ItemOnePrice.textContent = priceFirstItem + +ItemOnePrice.textContent;
  }
});

IncrementTwo.addEventListener("click", function () {
  if (InputTwo.value >= 0) {
    InputTwo.value = ++InputTwo.value;
    // change price item
    ItemTwoPrice.textContent = priceSecondItem + +ItemTwoPrice.textContent;
  }
});

console.dir(InputOne);

console.dir(decrementOne);

console.log(ItemOnePrice);
