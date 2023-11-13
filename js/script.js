//queryselector seleciona apenas um elemento (o primeiro)
//queryselector seleciona todos elementos e coloca dentro de um array

const body = document.querySelector("body");
const game = document.querySelector(".game");

const count = document.querySelector("h1");
const restart = document.querySelector(".reset");

const ash = document.querySelector("#ash");

const pikachu = document.querySelector("#pikachu");
const zubat = document.querySelector("#zubat");
const charmander = document.querySelector("#charmander");



body.addEventListener("keydown", (e) =>{
  e.stopPropagation();

  switch (e.code) {
    case "ArrowLeft":
      ash.src = "../assets/left.png";
      break;

    case "ArrowRight":
      ash.src = "../assets/right.png";
      break;

    case "ArrowDown":
      ash.src = "../assets/front.png";
      break;

    case "ArrowUp":
      ash.src = "../assets/back.png";
      break;
  
    default:
      break;
  }

});