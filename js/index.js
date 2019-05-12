// Your code goes here

let letsGoPara = document.querySelector('.text-content');
letsGoPara.addEventListener('auxclick', (event) => {event.target.style.background = 'aqua';});

let letsGo = document.querySelector('.text-content h2');
letsGo.addEventListener('mouseover', (event) => {event.target.style.color = 'aqua';});

let mapPic = document.querySelector('.img-content');
mapPic.addEventListener('mouseenter', (event) => {event.target.style.border = '10px solid gray';});
mapPic.addEventListener('mouseleave', (event) => {event.target.style.border = 'none';});

let busPic = document.querySelector('.intro img');
busPic.addEventListener('mousedown', (event) => {event.target.style.opacity = '.2';});
busPic.addEventListener('mouseup', (event) => {event.target.style.margin = '50px';});

let welcome = document.querySelector('.intro h2');
welcome.addEventListener('dblclick', (event) => {event.target.style.color = 'aqua';});

let welcomeText = document.querySelector('.intro p');
welcomeText.addEventListener('click', (event) => {event.target.style.color = 'aqua';});

let destination = document.querySelectorAll('.destination');
destination.addEventListener('select', (event) => 