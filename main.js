'use strict'

const btn = document.querySelector(".button");
const clue = document.querySelector(".clue");
const attempt = document.querySelector(".attempt");
const input = document.querySelector(".input");



// función número aleatorio
function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}
const numberRandom = getRandomNumber(100);
console.log(numberRandom);

// función listener
function go() {
    const inputValue = parseInt(input.value);
    console.log(inputValue);
    // condicionales de clue.Entrando en el if
    if(inputValue > 100 || inputValue < 0){
        clue.innerHTML = "El número debe estar entre 1 y 100";
        console.log("El número debe estar entre 1 y 100");
    // condicionales de clue.Saliendo del if
    }else{
        console.log(inputValue, numberRandom);
        if(inputValue > numberRandom){
        clue.innerHTML = "Demasiado alto";
        console.log("Demasiado alto");
        }else if(inputValue < numberRandom){
        clue.innerHTML = "Demasiado bajo";
        console.log("Demasiado bajo");
        }else if(inputValue === numberRandom){
        clue.innerHTML = "Has ganado campeona!!!";
        console.log("Has ganado campeona!!!");
        }
    }
}

go();

btn.addEventListener('click', go);
