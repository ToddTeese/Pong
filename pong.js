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

// scores

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
        this.xVel = 1;
        this.yVel = 1;
    }

    // update
    update(maxX, maxY) {
        this.x += this.xVel;
        this.y += this.yVel;

        if(this.x < 0 || this.x > maxX - this.width) {
            this.xVel *= -1;
        }
        if(this.y < 0 || this.y > maxY - this.height) {
            this.yVel *= -1;
        }
    }
}

const ball = new Ball(canvas.width / 2, canvas.height / 2, 16, '#FFF');

canvas.addEventListener('keydown', event => {
    console.log(event);
})

function update() {
    ball.update(canvas.width, canvas.height);
}

function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ball.draw(ctx);
}

while(true) {
    update();
    draw();
}
