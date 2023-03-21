const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = sizeControl.value + 'px';

const resizeText = () => {
    text.style.fontSize = `${sizeControl.value}px`;
};
sizeControl.addEventListener('input', resizeText);