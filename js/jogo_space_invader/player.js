"use strict"

class Player extends GameObject {

    constructor(x, y, points_update_handle = null){
        super(x, y, 50, 50, '#00FF7F');
        this.vx = 0;
        this.isplayer = true;
        this.group = 'player';
        this.points = 0;
        this.points_update_handle = points_update_handle;
    }

    _draw(eng){
        eng.draw_fill_rect(this.x, this.y + (this.h / 2), this.w, this.h / 2, this.color);
        eng.draw_fill_rect(this.x + (this.w / 4), this.y, this.w / 2, this.h / 2, this.color);
    }

    _phisics(eng, delta){
        this.x += this.vx;
    }

    _onkeydown(eng, key){
        if(key === "ArrowLeft"){
            this.vx = -5;
        }

        if(key === "ArrowRight"){
            this.vx = 5;
        }
    }

    _onkeyup(eng, key){
        if(key === "ArrowLeft" || key === "ArrowRight"){
            this.vx = 0;
        }
    }
}