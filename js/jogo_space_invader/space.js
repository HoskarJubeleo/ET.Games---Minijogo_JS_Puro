"use strict"

/* cria um objeto do motor do jogo */
const engine = new Engine('canva');

engine.add_object(new Player(
    (engine.canva.offsetWidth / 2) - 30, engine.canva.offsetHeight - 70,
    (pt) => { /* att os pontos na interface */ }
))

/* funcao criar grupo de escudo */
function generate_shield(x, y){
    for(let xp = 0; xp < 5; xp++){
        engine.add_object(new Shield(x + (xp * 20), y, 1));
        engine.add_object(new Shield(x + (xp * 20), y, 2));
        engine.add_object(new Shield(x + (xp * 20), y, 3));
        engine.add_object(new Shield(x + (xp * 20), y, 4));
    }

    for(let xp = 0; xp < 5; xp++){
        if(xp != 2){
            engine.add_object(new Shield(x + (xp * 20), y + 20, 1));
            engine.add_object(new Shield(x + (xp * 20), y + 20, 2));
            engine.add_object(new Shield(x + (xp * 20), y + 20, 3));
            engine.add_object(new Shield(x + (xp * 20), y + 20, 4));
        }

    }

    for(let xp = 0; xp < 5; xp += 4){
        if(xp != 2){
            engine.add_object(new Shield(x + (xp * 20), y + 40, 1));
            engine.add_object(new Shield(x + (xp * 20), y + 40, 2));
            engine.add_object(new Shield(x + (xp * 20), y + 40, 3));
            engine.add_object(new Shield(x + (xp * 20), y + 40, 4));
        }

    }
}

generate_shield(100, engine.canva.offsetHeight - 150);
generate_shield(270, engine.canva.offsetHeight - 150);
generate_shield(440, engine.canva.offsetHeight - 150);
generate_shield(610, engine.canva.offsetHeight - 150);

/* inicia a atualização do jogo */
engine.update();