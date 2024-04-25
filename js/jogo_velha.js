"use strict"

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");

let isCircleTurn;
const boxEndGame = document.querySelector("[data-boxEndGame]");
const TextEndGame = document.querySelector("[data-textEndGame]");
const btnStartGame = document.querySelector("[data-btnStartGame]");

const winningCombinations = [
    [0, 1, 2], [3, 4 ,5], [6, 7 ,8], //celulas horizontal
    [0, 3, 6], [1, 4, 7], [2, 5 ,8], //celulas vertical
    [0, 4, 8], [2, 4, 6] //celulas diagonais
];

const startGame = () => {
    for(const cell of cellElements ){
        cell.classList.remove("x");
        cell.classList.remove("o");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, { once: true });
    };

    isCircleTurn = false;

    setBoardHoverClass();

    boxEndGame.classList.remove("show-boxEndGame");
};

const endGame = (isDraw) => {
    if(isDraw){
        TextEndGame.innerHTML= "Empate!";
    } else {
        TextEndGame.innerHTML = isCircleTurn ? 'Circulo  Venceu!' : 'X  Venceu!';
    }

    boxEndGame.classList.add("show-boxEndGame");
};

const handleRestartClick = () => {

};

const checkForWin = (currentPlayer) => {
    return winningCombinations.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const checkForDraw = () => {
    return [...cellElements].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("o");
    });
};

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {

    board.classList.remove("o");
    board.classList.remove("x");

    if(isCircleTurn){
        board.classList.add("o");
    } else {
        board.classList.add("x");
    }
};

const swapTurns = () => {
    isCircleTurn = !isCircleTurn;

    setBoardHoverClass();
}

const handleClick = (e) => {
    //Colocar marca (X ou O)
    const cell = e.target;  

    const classToAdd = isCircleTurn ? "o" : "x";

    placeMark(cell, classToAdd);

    //Verificar Vitoria
    const isWin = checkForWin(classToAdd);

    //Verificar Empate 
    const isDraw = checkForDraw();

    if(isWin){
        endGame(false);
    } else if (isDraw){
        endGame(true);
    } else {
        //Mudar Simbolo
        swapTurns();
    }


};

startGame();

btnStartGame.addEventListener("click", startGame);