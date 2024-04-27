"use strict"
const message = document.querySelector('.message_start');
let placarGame = document.querySelector('[data-placar-game]');

const boxEndGame = document.querySelector("[data-boxEndGame]");
const btnStartGame = document.querySelector("[data-btnStartGame]");

const clouds = document.querySelector('.img_clouds');
const pipe = document.querySelector('.img_pipe');
const mario = document.querySelector('.img_mario');
const audioJP = new Audio('../assets/jogo_pular/mario_pulando.mp3');

let placar = 0; 
let gameOn = false;

const jump = (event) =>{
    if(event.code != "Space") return;

    message.innerHTML = '';
    gameOn = true;
    audioJP.play();
    audioJP.volume = 0.01;
    placarGame.style.opacity = '1';

        setTimeout(() => {
            pipe.classList.add('run');
        }, 500);    

        mario.classList.add('jump');
    
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 600);
     
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition =+ window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 2 && marioPosition < 60){
        gameOn = false;
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "../assets/img/jogoPular/game-over.png";
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        boxEndGame.classList.add("show");
        clearInterval(loop);
    }
        placarGame.innerHTML = placar;

}, 10); 

setInterval(() => {
    if(gameOn == true){
        placar  = placar + 10;
    }
}, 500);

function resetGame() {
    window.location.reload();
}


// nao consigui reniciar o game com uma funcao entrao fiz reload na pagina por enquento 
/* function resetGame() { 
    boxEndGame.classList.remove("show");

    pipe.style.left = "500px";
    pipe.classList.add('run');

    mario.style.bottom = "0px";
    mario.classList.add('jump');

    mario.src = "../img/jogoPular/mario.gif";
    mario.style.width = '150px';
    mario.style.marginLeft = '0px';
} */

document.addEventListener('keydown', jump); 