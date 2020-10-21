console.log("Pong App Loaded!");

const canvas = document.querySelector('#gameArea');
const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

ctx.fillStyle = '#000';
ctx.fillRect(0,0, canvas.width, canvas.height);
