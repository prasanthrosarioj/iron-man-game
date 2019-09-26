const cvs = document.getElementById("my-game");
const ctx = cvs.getContext("2d");

const sprite = new Image();
sprite.src = "sprites.png";
const bg = {
    sX : 0,
    sY : 0,
    w : 1273,
    h : 690,
    x : 0,
    y : cvs.height -690,
    
    draw : function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
    
}
function draw(){
    // ctx.fillRect(0, 0, cvs.width, cvs.height);
        bg.draw();
}

function loop(){

    draw();

    
    requestAnimationFrame(loop);
}
loop();