'use strict';

const userOptions= document.querySelector('.js-options');
const submit= document.querySelector('.js-submit');
const msg= document.querySelector('.js-msg');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function handleClick(event){
    const playerSelect = userOptions.value;
    console.log(playerSelect);

}

submit.addEventListener('click', handleClick);


