'use strict';

const userOptions= document.querySelector('.js-options');
const submit= document.querySelector('.js-submit');
const msg= document.querySelector('.js-msg');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);

}
let resultComputer='';
const computerSelect = () => {
    const random = getRandomNumber(9);
    console.log(random);
    if (random <= 3) {
        resultComputer = 'piedra';
    } else if (random >=7) {
        resultComputer = 'papel';
    } else {
        resultComputer ='tijera';
    } 
    console.log(resultComputer);
}

function handleClick(event){
    const playerSelect = userOptions.value;
    console.log(playerSelect);
    getRandomNumber(9);
    computerSelect();
    console.log(resultComputer);
    if (playerSelect === resultComputer) {
        msg.innerHTML= 'Empate';
    } else if (playerSelect === 'piedra' && resultComputer === 'tijera') {
        msg.innerHTML= '¡Has ganado!';
    } else if (playerSelect === 'papel' && resultComputer === 'piedra'){
        msg.innerHTML= '¡Has ganado!';
    } else if (playerSelect === 'tijera' && resultComputer === 'papel'){
    msg.innerHTML= '¡Has ganado!';
    } else {
        msg.innerHTML= '¡Has perdido!';
    }   
}

submit.addEventListener('click', handleClick);


