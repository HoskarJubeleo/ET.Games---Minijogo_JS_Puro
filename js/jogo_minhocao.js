"use strict"

const canvas = document.querySelector("canvas");
let score = document.querySelector("[data-score-value]");
const ctx = canvas.getContext("2d");

const boxEndGame = document.querySelector("[data-boxEndGame]");
const TextEndGame = document.querySelector("[data-textEndGame]");
const btnStartGame = document.querySelector("[data-btnStartGame]");

const audioJM = new Audio('assets/jogo_minhocao/minhocao_comendo.mp3');

const size = 20;

let snake = [ {x:size, y:size} ];

let direction, loopId, defeat;

const randonNumber = (min, max) => { //criacao numeros -randon-
    return Math.round(Math.random() * (max - min) + min);
}

const randonPosition = () => { //criacao posicao da comida -randon-
    const number = randonNumber(0, canvas.height - size);
    return Math.round(number / size) * size;
};

const randomColor = () => { //alterar cores da comida -randon-
    const red = randonNumber(0, 255);
    const green = randonNumber(0, 255);
    const blue = randonNumber(0, 255);

    if(
        red == 102 && green == 205 && blue == 170 
        || red == 0 && green == 255 && blue == 127 
        || red == 28 && green == 28 && blue == 28
    ) return;

    return `rgb(${red}, ${green}, ${blue})`;
}

const food = { // objeto da comida 
    x: randonPosition(), 
    y: randonPosition(), 
    color: randomColor()
};

const drawFood = () => { //criacao da comida
    const { x, y , color } = food;

    ctx.shadowColor = color
    ctx.shadowBlur = 50;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
    ctx.shadowBlur = 0;
};

const drawSnake = () => { //criacao da cobra

    ctx.fillStyle = "#66CDAA";

    snake.forEach((position, index) => {
        if(index == snake.length -1){
            ctx.fillStyle = "#00FF7F";
        }

    ctx.fillRect(position.x, position.y, size, size);

    });
};

const moveSnake = () => { //movimentacao da cobra
    if(!direction) return;

    if(defeat === true) return;

    const head = snake[snake.length -1];

    if(direction == "up"){
        snake.push({ x:head.x, y:head.y - size});
    }
    if(direction == "left"){
        snake.push({ x:head.x - size, y:head.y });
    }
    if(direction == "right"){
        snake.push({ x:head.x + size, y:head.y });
    }
    if(direction == "down"){
        snake.push({ x:head.x, y:head.y + size });
    }

    snake.shift();
};

const drawGrid = () => { //desenho do fundo
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(0, 0, 0, .2)";

    for(let i = size; i < canvas.width; i += size ){
        ctx.beginPath();
        ctx.lineTo(i, 0);
        ctx.lineTo(i, canvas.width);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
};

const checkEat = () => { //validar se a cobra comeu

    const head = snake[snake.length -1];

    if(head.x == food.x && head.y == food.y){
        snake.push(head);
        audioJM.play();
        score.innerHTML = parseInt(score.innerText) + 10;

        let x = randonPosition();
        let y = randonPosition();

        while(snake.find((position) => position.x == x && position.y == y)){
            x = randonPosition();
            y = randonPosition();
        }
        
        food.x = x;
        food.y = y;
        food.color = randomColor();
    }

};

const checkColision = () => { //validar se houve algum colisao no jogo
    const head = snake[snake.length - 1];
    const canvasLimit = canvas.width - size;
    const neckIndex = snake.length - 2;

    const wallColosion = head.x < 0 || head.x > canvasLimit || head.y < 0 || head.y > canvasLimit;

    const selfCollision = snake.find((position, index) => {
        return index < neckIndex && position.x == head.x && position.y == head.y

    })

    if(wallColosion || selfCollision){
        gameOver();
    };
};

const gameLoop = () => { //loop para rodar o game
    clearInterval(loopId);

    ctx.clearRect(0, 0, canvas.width, canvas.width);

    drawFood();
    drawSnake();
    moveSnake();
    drawGrid();
    checkEat();
    checkColision();

    loopId = setTimeout(() => {
        gameLoop();

    },300);
};

const gameOver = () => {
    direction = undefined;
    defeat = true;
    boxEndGame.classList.add("show-boxEndGame");
};

gameLoop();

document.addEventListener("keydown", ({ key }) => { //captura a tecla para movimentacao da cobra
    if(key == "ArrowUp" && direction != "down"){
        direction = "up";
    } 

    if(key == "ArrowRight" && direction != "left"){
        direction = "right";
    } 

    if(key == "ArrowLeft" && direction != "right"){
        direction = "left";
    } 
    
    if(key == "ArrowDown" && direction != "up"){   
        direction = "down";
    }
});

btnStartGame.addEventListener("click",()  => {
    defeat = false;
    score.innerHTML = "00";
    boxEndGame.classList.remove("show-boxEndGame");

    snake = [ {x:size, y:size} ];
})
