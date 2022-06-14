const random = (min, max) => {
    return parseInt((Math.random() * (max-min)) + min);
}
const URL = 'https://rickandmortyapi.com/api/character/';

const next = document.querySelector('#next');
next.addEventListener('click', newCharacter);
const yes = document.querySelector('#yes');
yes.addEventListener('click', hitsFunction);
const not = document.querySelector('#not');
not.addEventListener('click', mistakesFunction);

let hits = 0;
let mistakes = 0;

fetch(`${URL}${random(1, 826)}`)
    .then(response => response.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data.image;
    });

async function newCharacter() {
    const response = await fetch(`${URL}${random(1, 826)}`);
    const data = await response.json();
    const img = document.querySelector('img');
    img.src = data.image;
    next.disabled = true;
    yes.disabled = false;
    not.disabled = false;
}

function hitsFunction() {
    hits += 1;
    const span = document.querySelector('.hits');
    span.textContent = hits;
    next.disabled = false;
    yes.disabled = true;
    not.disabled = true;
}

function mistakesFunction() {
    mistakes += 1;
    const span = document.querySelector('.mistakes');
    span.textContent = mistakes;
    next.disabled = false;
    yes.disabled = true;
    not.disabled = true;
}
