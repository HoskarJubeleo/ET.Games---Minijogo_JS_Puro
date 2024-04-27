"use strict"
/* header dinamico */

let headerDinamico = document.querySelector("header");
let urlImg = "https://img.freepik.com/vetores-gratis/bonito-astronauta-voando-com-alienigena-no-espaco-cartoon-vector-icone-ilustracao-icone-de-ciencia-e-tecnologia_138676-6788.jpg?w=740&t=st=1713892798~exp=1713893398~hmac=6191aac6f2c26caba30bf1f3da8f1a79002536f8ba111f8a4e130d5729860783";
let newHeaderDiv, newHeaderH1, newHeaderH1Text, newHeaderImg, newHerderNav, newHerderAHome, newHerderASobre;

//Logo do Header
newHeaderDiv = document.createElement("div");
newHeaderDiv.classList.add('div_logo');
newHeaderImg = document.createElement("img");
newHeaderImg.classList.add('img_logo');
newHeaderImg.setAttribute('src', urlImg);
newHeaderH1 = document.createElement("h1");
newHeaderH1.textContent = "ET.Games";

//NavBar do Herder
newHerderNav = document.createElement("nav");
newHerderAHome = document.createElement("a");
newHerderAHome.textContent = "Home";
newHerderAHome.classList.add('linkHome');
newHerderAHome.setAttribute('href', "../index.html");
newHerderASobre = document.createElement("a");
newHerderASobre.textContent = "Sobre";
newHerderASobre.classList.add('linkSobre');
newHerderASobre.setAttribute('href', "../sobre.html");

//Logo do Header
newHeaderDiv.appendChild(newHeaderH1);
newHeaderDiv.appendChild(newHeaderImg);
headerDinamico.appendChild(newHeaderDiv);

//NavBar do Herder
newHerderNav.appendChild(newHerderAHome);
newHerderNav.appendChild(newHerderASobre);
headerDinamico.appendChild(newHerderNav);

/* layout dinamico temporario  dinamico */

let divBoxMobile = document.querySelector(".box_mobile");
let newBmDiv, newBmPrimSpan, newBmH1, newBmSegSpan, newBmPrimH2, newBmSegH2, newBmImg, newBmTercH2;

newBmDiv = document.createElement("div");

newBmPrimSpan = document.createElement("span");
newBmPrimSpan.classList.add("material-symbols-outlined");
newBmPrimSpan.textContent = "warning";

newBmH1 = document.createElement("h1");
newBmH1.textContent = "ATENÇÃO";

newBmSegSpan = document.createElement("span");
newBmSegSpan.classList.add("material-symbols-outlined");
newBmSegSpan.textContent = "warning";

newBmPrimH2 = document.createElement("h2");
newBmPrimH2.textContent = "Por favor, não tente acessar pelo celular, pois ainda não temos um layout desenvolvido para isso, ainda...";

newBmSegH2 = document.createElement("h2");
newBmSegH2.textContent = "Agradeço a compreensão";

newBmImg = document.createElement("img");
newBmImg.classList.add('img_logo');
newBmImg.setAttribute('src', urlImg);

newBmTercH2 = document.createElement("h2");
newBmTercH2.textContent = "ET.GAMES";

newBmDiv.appendChild(newBmPrimSpan);
newBmDiv.appendChild(newBmH1);
newBmDiv.appendChild(newBmSegSpan);

divBoxMobile.appendChild(newBmDiv);
divBoxMobile.appendChild(newBmPrimH2);
divBoxMobile.appendChild(newBmSegH2);
divBoxMobile.appendChild(newBmImg);
divBoxMobile.appendChild(newBmTercH2);