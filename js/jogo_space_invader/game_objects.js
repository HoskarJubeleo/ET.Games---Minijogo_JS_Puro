"use strct"

/* essa classe e um prototipo dos objetos que serao utilizados no jogo */
class GameObject {

    constructor(x, y, w, h, color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
        this.color = color;
    }

    _draw(eng){
        eng.draw_fill_rect(this.x, this.y, this.w, this.h, this.color)
    }

    _phisics(eng, delta) {}

    _onkeydown(eng, key) {}

    _onkeyup(eng, key) {}


}