const body = document.querySelector('body');
const h3 = document.querySelector('h3');
const randombutton = document.querySelector('button');
const color1 = document.querySelectorAll('input')[0];
const color2 = document.querySelectorAll('input')[1];

const changeBackground = () => {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    h3.textContent = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')' + ';';
}

const randomBackground = () => {
    color1.value = ('#' + Math.floor(Math.random() * 16777216).toString(16)).toString();
    color2.value = ('#' + Math.floor(Math.random() * 16777216).toString(16)).toString();
    changeBackground();
}

h3.textContent = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')' + ';';
randombutton.addEventListener('click', randomBackground);
color1.addEventListener('input', changeBackground);
color2.addEventListener('input', changeBackground);