var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
canvas.width = window.screen.width
canvas.height = window.screen.height
var x = canvas.width / 2;
var y = canvas.height / 2;
r = 50;
var dx = 10;
var dy = -10;

function rect() {
    ctx.beginPath();
    ctx.rect(600, 400, 50, 50)
    ctx.stroke();
}

window.onkeypress = function(e) {


    console.log(e.keyCode)

    if (e.keyCode == 119) {
        keyW()
        rect()
    } else if (e.keyCode == 97) {
        keyA()
        rect()
    } else if (e.keyCode == 115) {
        keyS()
        rect()
    } else if (e.keyCode == 100) {
        keyD()
        rect()
    }
}

function keyWDraw() {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function keyW() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    keyWDraw();
    y += dy;
}

function keyADraw() {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function keyA() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    keyADraw();
    x -= dx;
}

function keySDraw() {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function keyS() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    keySDraw();
    y -= dy;
}

function keyDDraw() {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function keyD() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    keyDDraw();
    x -= dy;
}

window.onload = function() {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(600, 400, 50, 50)
    ctx.stroke();
}