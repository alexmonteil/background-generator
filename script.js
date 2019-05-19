var body = document.querySelector('body');
var h3 = document.querySelector('h3');
var randombutton = document.querySelector('button');
color1 = document.querySelectorAll('input')[0];
color2 = document.querySelectorAll('input')[1];

function changeBackground() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    h3.textContent = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')' + ';';
}

function randomBackground() {
    color1.value = ('#' + Math.floor(Math.random() * 16777216).toString(16)).toString();
    color2.value = ('#' + Math.floor(Math.random() * 16777216).toString(16)).toString();
    changeBackground();
}

h3.textContent = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')' + ';';
randombutton.addEventListener('click', randomBackground);
color1.addEventListener('input', changeBackground);
color2.addEventListener('input', changeBackground);