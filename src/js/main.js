'use strict';
 //me ha faltado acumular los puntos de las rondas


const userOptions = document.querySelector('.js-options');
const submit = document.querySelector('.js-submit');
const msg = document.querySelector('.js-msg');
const player = document.querySelector('.js-playerCount');
const computer = document.querySelector('.js-computerCount');



function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let selectComputer = '';
const computerSelect = () => {
  const random = getRandomNumber(9);
  console.log(random);
  if (random <= 3) {
    selectComputer = 'piedra';
  } else if (random >= 7) {
    selectComputer = 'papel';
  } else {
    selectComputer = 'tijera';
  }
  console.log(selectComputer);
};

// let resultComputer = 0;
// let resultPlayer = 0;


function handleClick(event) {
// for (let i = 0; i < 10; i++) {
  const playerSelect = userOptions.value;
  console.log(playerSelect);
  getRandomNumber(9);
  computerSelect();
  console.log(selectComputer);
  
    if (playerSelect === selectComputer) {
      msg.innerHTML = 'Empate';
    //   resultComputer += 0;
    //   resultPlayer += 0;
    //   player.innerHTML= `Jugador: ${resultPlayer}`;
    //   computer.innerHTML= `Computadora: ${resultComputer}`;
    } else if (playerSelect === 'piedra' && selectComputer === 'tijera') {
      msg.innerHTML = '¡Has ganado!';
    //   resultPlayer += 1;
    //   resultComputer += 0;
    //   player.innerHTML= `Jugador: ${resultPlayer}`;
    //   computer.innerHTML= `Computadora: ${resultComputer}`;
    } else if (playerSelect === 'papel' && selectComputer === 'piedra') {
      msg.innerHTML = '¡Has ganado!';
    //   resultPlayer += 1;
    //   player.innerHTML= `Jugador: ${resultPlayer}`;
    //   computer.innerHTML= `Computadora: ${resultComputer}`;
    } else if (playerSelect === 'tijera' && selectComputer === 'papel') {
      msg.innerHTML = '¡Has ganado!';
    //   resultPlayer += 1;
    //   player.innerHTML= `Jugador: ${resultPlayer}`;
    //   computer.innerHTML= `Computadora: ${resultComputer}`;
    } else {
      msg.innerHTML = '¡Has perdido!';
    //   resultComputer += 1;
    //   resultPlayer += 0;
    //   player.innerHTML= `Jugador: ${resultPlayer}`;
    //   computer.innerHTML= `Computadora: ${resultComputer}`;
    }
}

submit.addEventListener('click', handleClick);
