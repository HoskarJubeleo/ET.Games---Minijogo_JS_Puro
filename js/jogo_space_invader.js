"use strict"

class Engine {
    constructor(canvaId) {
        this.canvaId = canvaId;
        this.canva = document.querySelector(canva);
        this.ctx = this.canva.getContext("2d");
        this.objetcs = [];
        this.time = null;
        this.global_events_handle();
    }

    /* captura eventos de tecla na tela */
    global_events_handle() {
        window.onkeydown = (event) => {
            for(const obj of this.objetcs) {
                obs._onkeydown(this, event.key);
            }
        }

        window.onkeyup = (event) => {
            for(const obj of this.objetcs) {
                obs._onkeydown(this, event.key);
            }
        }
    }

    /* adiciona objetos no game */
    add_object(obj){
        
    }

}