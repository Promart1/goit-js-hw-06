const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector(`ul#ingredients`);
// console.log(ingredientsEl);

const firstEngredient = document.createElement("li");
firstEngredient.textContent = ingredients[0];
firstEngredient.classList.add("item");
// console.log(firstEngredient);

const secondEngredient = document.createElement("li");
secondEngredient.textContent = ingredients[1];
secondEngredient.classList.add("item");
// console.log(secondEngredient);

const thirdEngredient = document.createElement("li");
thirdEngredient.textContent = ingredients[2];
thirdEngredient.classList.add("item");
// console.log(thirdEngredient);

const forthEngredient = document.createElement("li");
forthEngredient.textContent = ingredients[3];
forthEngredient.classList.add("item");
// console.log(forthEngredient);

const fifthEngredient = document.createElement("li");
fifthEngredient.textContent = ingredients[4];
fifthEngredient.classList.add("item");
// console.log(fifthEngredient);

const lastEngredient = document.createElement("li");
lastEngredient.textContent = ingredients[5];
lastEngredient.classList.add("item");
// console.log(lastEngredient);

ingredientsEl.append(firstEngredient, secondEngredient, thirdEngredient, forthEngredient, fifthEngredient, lastEngredient);
