"use strict";

const btn = document.querySelector(".button");
const clue = document.querySelector(".clue");
const input = document.querySelector(".input");
const attempt = document.querySelector(".attempt");

// función número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const numberRandom = getRandomNumber(100);

// Hacer el sumatorio
let acc = 0;

function sumAtt() {
  // inicia el incremento
  attempt.innerHTML = acc++;
}

function handlerClick() {
  PaintListener();
  sumAtt();
}

// función listener
function PaintListener() {
  // cambiar pista
  // coger el valor
  const inputValue = parseInt(input.value);
  // condicionales de clue.Entrando en el if
  if (inputValue > 100 || inputValue < 0) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
    // condicionales de clue.Saliendo del if
  } else {
    console.log(inputValue, numberRandom);
    if (inputValue > numberRandom) {
      clue.innerHTML = "Demasiado alto";
    } else if (inputValue < numberRandom) {
      clue.innerHTML = "Demasiado bajo";
    } else if (inputValue === numberRandom) {
      clue.innerHTML = "Has ganado campeona!!!";
    }
  }
}

btn.addEventListener("click", handlerClick);
