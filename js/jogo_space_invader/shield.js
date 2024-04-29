"use strict"

class Shield extends GameObject {

    constructor(x, y ,lv = 1){
        let alpha = 1 / lv;
        super(x, y, 15 ,15, `rgba(0, 255, 0, ${alpha})`);
        this.group = 'shield';
    }
}