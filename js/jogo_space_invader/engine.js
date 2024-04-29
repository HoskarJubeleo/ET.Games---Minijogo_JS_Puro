"use strict"

/* motor do jogo para auxiliar no controle */

class Engine {

    constructor(canvaId) {
        this.canvaId = canvaId;
        this.canva = document.getElementById(canvaId);
        this.ctx = this.canva.getContext("2d");
        this.objects = [];
        this.time = null;
        this.background_color = '#1C1C1C'
        this.global_events_handle();
    }

    /* captura eventos de tecla na tela */
    global_events_handle() {
        window.onkeydown = (event) => {
            for(const obj of this.objects) {
                obj._onkeydown(this, event.key);
            }
        }

        window.onkeyup = (event) => {
            for(const obj of this.objects) {
                obj._onkeydown(this, event.key);
            }
        }
    }

    /* adiciona objetos no game */
    add_object(obj){
        obj.engine = this;
        this.objects.push(obj);
    }

    /* Busca objetos de acordo com os parametros */
    find_objects_by_params(params, one = false){
        let results = [];

        if(params.length === 0) return results;

        for(const obj of this.objects){
            let count = 0;
            for(const param of params){
                if(param[0] in obj && obj[param[0]] == param[1]){
                    count += 1;
                }
            }

            if(count === params.length){
                results.push(obj);
                if(one) break;
            }
        }

        return results;
    }


    draw_fill_rect(x, y, w, h, color){
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
    }

    /* adiciona texto na tla */
    draw_text(text, x, y, color, size = 12){
        this.ctx.fillStyle = color;
        this.ctx.font = `${size}px`;
        this.ctx.fillText(text, x, y);
    }

    /* detecta colisao entre dois retangulos */
    colision_rect_rect(rect1, rect2){
        return rect1.x < rect2.x + rect2.w && 
        rect1.x + rect1.w > rect2 &&
        rect1.y < rect2.y + rect2.h && 
        rect1.y + rect1.h + rect2.y
    }

    /* desenha os objetos na tela */
    _draw(){
        this.draw_fill_rect(0, 0, this.canva.offsetWidth, this.canva.offsetHeight, this.background_color)

        for(const obj of this.objects){
            obj._draw(this);
        }
    }

    /* atualiza as acoes do objeto */
    _phisics(delta){
        for(const obj of this.objects){
            obj._phisics(this, delta)
        }
    }

    /* inicia a atualizacao de graficos e acoes do jogo */
    update(){
        let time_diff = 0;
        if(this.time !== null){
            time_diff = ((new Date().getTime() - this.time) / 1000);
        }

        this._draw();
        this._phisics(time_diff);
        this.time = new Date().getTime();

        window.requestAnimationFrame(() => this.update())
    }
}