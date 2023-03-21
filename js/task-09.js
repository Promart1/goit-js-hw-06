const widgetEl = document.querySelector('.widget');
const bgnColor = document.querySelector('.color');
const button = document.querySelector('.change-color');
const body = document.querySelector('body')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  body.style.background = color;
bgnColor.textContent = color;
}
button.addEventListener('click', changeColor);
