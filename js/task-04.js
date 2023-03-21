
const decrementBtn = document.querySelector('[data-action="decrement"]');
const inscrementBtn = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');
let counterValue = 0;


decrementBtn.addEventListener('click', () => {
   counterValue -= 1;
    counterValueEl.textContent = counterValue;

});

inscrementBtn.addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
});

console.log(counterValue)