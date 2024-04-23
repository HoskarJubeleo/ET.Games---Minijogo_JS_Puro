"use strict"

/* let headerDinamico = document.querySelector("header");
let newHeaderDiv;
let newHeaderH1;
let newHeaderH1Text;
let newHeaderImg;

let footerDinamico = document.querySelector("footer");
let newFooter */


let link_home = document.querySelector('.div_logo');

let link_game1 = document.querySelector('#game1');
let link_game2 = document.querySelector('#game2');
let link_game3 = document.querySelector('#game3');
let link_game4 = document.querySelector('#game4');

/* header e footer dinamico */

/* newHeaderDiv = document.createElement("div");
newHeaderDiv.classList.add('div_logo');

newHeaderImg = document.createElement("img");
newHeaderImg.classList.add('img_logo');
newHeaderImg.setAttribute('src',"img/header/logo.jpg");

newHeaderH1 = document.createElement("h1");
newHeaderH1.textContent = "ET.Games";

newHeaderDiv.appendChild(newHeaderH1);
newHeaderDiv.appendChild(newHeaderImg);
headerDinamico.appendChild(newHeaderDiv); */

/* Links pages games */
link_home.addEventListener('click', () => {
    window.location.href = "../";
});

link_game1.addEventListener('click', () => {
    window.location.href = "layoutGames/jogo_velha.html"
});

link_game2.addEventListener('click', () => {
    window.location.href = "layoutGames/jogo_pular.html"
});

link_game3.addEventListener('click', () => {
    window.location.href = ""
});

link_game4.addEventListener('click', () => {
    window.location.href = "layoutGames/jogo_minhocao.html"
});


