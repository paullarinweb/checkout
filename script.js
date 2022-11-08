"use strict";
// counts
let decrementOne = document.querySelectorAll(".counter__btn.dec")[0];

let decrementTwo = document.querySelectorAll(".counter__btn.dec")[1];

let IncrementOne = document.querySelectorAll(".counter__btn.inc")[0];

let IncrementTwo = document.querySelectorAll(".counter__btn.inc")[1];

// inputs
let InputOne = document.querySelectorAll(".counter__show")[0];
let InputTwo = document.querySelectorAll(".counter__show")[1];

// prices

let ItemOnePrice = Number(
  document.querySelectorAll(".card__price__new")[0].textContent
);

let ItemTwoPrice = Number(
  document.querySelectorAll(".card__price__new")[1].textContent
);

let TotalPrice = Number(
  document.querySelectorAll(".checkout__total__shipping.total__shipping")[0]
    .textContent
);

let TotalSpanPrice = document.querySelectorAll(
  ".checkout__total__shipping.total__shipping"
)[0];

const priceFirstItem = 54.99;
const priceSecondItem = 74.99;

TotalSpanPrice.textContent = priceFirstItem + priceSecondItem;

// decrements

decrementOne.addEventListener("click", function () {
  if (InputOne.value > 1) {
    InputOne.value -= 1;
    // change price item
    ItemOnePrice = ItemOnePrice - priceFirstItem;
    TotalPrice = ItemOnePrice + ItemTwoPrice;
    // console.log(ItemOnePrice.toFixed(2));
    // console.log(TotalPrice);
    TotalSpanPrice.textContent = TotalPrice.toFixed(2);
  }
});

decrementTwo.addEventListener("click", function () {
  if (InputTwo.value > 1) {
    InputTwo.value -= 1;
    // change price item
    ItemTwoPrice = ItemTwoPrice - priceSecondItem;
    TotalPrice = ItemOnePrice + ItemTwoPrice;
    // console.log(ItemTwoPrice.toFixed(2));
    // console.log(TotalPrice);
    TotalSpanPrice.textContent = TotalPrice.toFixed(2);
  }
});

// increments

IncrementOne.addEventListener("click", function () {
  if (InputOne.value >= 0) {
    InputOne.value = ++InputOne.value;
    // change price item
    ItemOnePrice = priceFirstItem + ItemOnePrice;
    TotalPrice = ItemOnePrice + ItemTwoPrice;

    // console.log(ItemOnePrice.toFixed(2));
    // console.log(TotalPrice);
    TotalSpanPrice.textContent = TotalPrice.toFixed(2);
  }
});

IncrementTwo.addEventListener("click", function () {
  if (InputTwo.value >= 0) {
    InputTwo.value = ++InputTwo.value;
    // change price item
    ItemTwoPrice = priceSecondItem + ItemTwoPrice;
    TotalPrice = ItemOnePrice + ItemTwoPrice;
    // console.log(ItemTwoPrice.toFixed(2));
    // console.log(TotalPrice);
    TotalSpanPrice.textContent = TotalPrice.toFixed(2);
  }
});
