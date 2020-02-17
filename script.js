// Caches all needed dom elements
const body = document.querySelector('body');
const css = document.querySelector('h3');
const randombutton = document.querySelector('button');
const color1 = document.querySelectorAll('input')[0];
const color2 = document.querySelectorAll('input')[1];

// Changes background gradient to selected colors & displays CSS property on screen
const changeBackground = () => {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ');';
    css.textContent = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ');';
}

// Generates random colors and changes background gradient to those
const randomBackground = () => {
    color1.value = ('#' + Math.floor(Math.random() * 16777216).toString(16)).toString();
    color2.value = ('#' + Math.floor(Math.random() * 16777216).toString(16)).toString();
    changeBackground();
}

// Displays CSS background gradient property from the start
css.textContent = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ');';

// Events attached to buttons & inputs
randombutton.addEventListener('click', randomBackground);
color1.addEventListener('input', changeBackground);
color2.addEventListener('input', changeBackground);