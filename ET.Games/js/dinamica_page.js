"use strict"
"use strict"

let headerDinamico = document.querySelector("header");
let newHeaderDiv;
let newHeaderH1;
let newHeaderH1Text;
let newHeaderImg;

let footerDinamico = document.querySelector("footer");
let newFooter


let link_home = document.querySelector('.div_logo');

let link_game1 = document.querySelector('#game1');
let link_game2 = document.querySelector('#game2');
let link_game3 = document.querySelector('#game3');
let link_game4 = document.querySelector('#game4');

/* header e footer dinamico */

newHeaderDiv = document.createElement("div");
newHeaderDiv.classList.add('div_logo');

newHeaderImg = document.createElement("img");
newHeaderImg.classList.add('img_logo');
newHeaderImg.setAttribute('src',
"https://img.freepik.com/vetores-gratis/bonito-astronauta-voando-com-alienigena-no-espaco-cartoon-vector-icone-ilustracao-icone-de-ciencia-e-tecnologia_138676-6788.jpg?w=740&t=st=1713892798~exp=1713893398~hmac=6191aac6f2c26caba30bf1f3da8f1a79002536f8ba111f8a4e130d5729860783");

newHeaderH1 = document.createElement("h1");
newHeaderH1.textContent = "ET.Games";

newHeaderDiv.appendChild(newHeaderH1);
newHeaderDiv.appendChild(newHeaderImg);
headerDinamico.appendChild(newHeaderDiv);
