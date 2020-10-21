console.log("Pong App Loaded!");

const canvas = document.querySelector('#gameArea');
const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

ctx.fillStyle = '#000';
ctx.fillRect(0,0, canvas.width, canvas.height);

// player

// computer player

// ball

//

class Actor {

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Ball extends Actor {
    constructor(x, y, size, color) {
        super(x, y, size, size, color);
    }
}

const ball = new Ball(canvas.width / 2, canvas.height / 2, 16, '#FFF');

ball.draw(ctx);