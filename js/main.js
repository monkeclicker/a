var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var enterGame = document.getElementById('enterGame')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
window.addEventListener("resize", function(){
  canvas.width = window.innerWidth
canvas.height = window.innerHeight
});
var x2 = canvas.width-60
var y2 = canvas.height-60
console.log(canvas.width, canvas.height)


class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "lightgrey";
    this.dx = 0;
    this.dy = 0;
    this.centerX = canvas.width/2
    this.centerY = canvas.height/2
  }


  
  draw() {



    if (this.x <= 60) {
      this.x = 60
    } else if (this.x >= x2) {
      this.x = x2
    }

    if (this.y <= 60) {
      this.y = 60
    } else if (this.y >= y2) {
      this.y = y2
    }


    ctx.beginPath();
    var name = localStorage.getItem('name')
    ctx.font = "30px Comic Sans MS"; 
    ctx.textAlign = "center"
    ctx.fillText(name, this.x, this.y-70)
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(this.x+33, this.y-55, 18, 170);
    ctx.fillStyle='#964B00';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.x+40, this.y-30, this.r-30, 0, 2 * Math.PI)
    ctx.fillStyle='#964B00';
    ctx.fill();
    ctx.stroke()
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.x+40, this.y+30, this.r-30, 0, 2 * Math.PI)
    ctx.fillStyle='#964B00';
    ctx.fill();
    
    ctx.stroke()
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle='#964B00';
    var mathTestThing = localStorage.getItem('mathTest')
    /*
    ctx.translate(this.x, this.y);  
  ctx.rotate(-mathTestThing);  
  ctx.translate(-this.x,-this.y); 
  */
    ctx.fill()
    ctx.moveTo(this.x, this.y)
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
 

  }

  update() {

    //increasingly adds 0.5 to the dy or dx
    if (controller1.up) {this.dy -= 0.5}; 
    if (controller1.right) {this.dx += 0.5};
    if (controller1.down) {this.dy += 0.5};
    if (controller1.left) {this.dx -= 0.5};
    //if dy or dx is being added to so will the x and y. If not then they are 0.
    this.x += this.dx;  
    this.y += this.dy;
    this.dx *= 0.9;
    this.dy *= 0.9;
    this.draw(); 
  }
}

document.addEventListener("mousemove", (e) => {

  const { clientX, clientY } = e;
  localStorage.setItem('mathTest', Math.atan2(circle1.y - clientY, circle1.x - clientX) * Math.PI / 180)
});

class Controller {
  constructor() {
    this.up = false;
    this.right = false;
    this.down = false;
    this.left = false;
    
    let keyEvent = (e) => {
      if (e.code == "KeyW" || e.code == "ArrowUp") {this.up = e.type == 'keydown'};
      if (e.code == "KeyD" || e.code == "ArrowRight") {this.right = e.type == 'keydown'};
      if (e.code == "KeyS" || e.code == "ArrowDown") {this.down = e.type == 'keydown'};
      if (e.code == "KeyA" || e.code == "ArrowLeft") {this.left = e.type == 'keydown'};
      
    }
    addEventListener('keydown', keyEvent);
    addEventListener('keyup', keyEvent);
    addEventListener('mousemove', keyEvent)
    }
}



let circle1 = new Circle(canvas.width/2, canvas.height/2, 50, 0, Math.PI*2);
let circle2 = new Circle();
let controller1 = new Controller();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circle1.update();
  requestAnimationFrame(animate)
}

animate();

function enterGameTest() {
  var x = document.getElementById("canvas");
  var y = document.getElementById("inputElement")
  var z = document.getElementById("inputArea").value

  if (x.style.display === "none" && z.length != 0) {
    x.style.display = "block";
    y.style.display = "none";
    localStorage.setItem('name', z)
  } else if (z.length == 0) {
    var z = "unknown"
    localStorage.setItem('name', z)
    x.style.display = "block";
    y.style.display = "none";
  }
}

/*
ctx.save(); // save current transformations
  
ctx.translate(player.x + 25, player.y + 25); // go to where the player is

ctx.rotate(player.a); // rotate the canvas
  
ctx.fillRect(-player.w / 2, -player.h / 2, player.w, player.h); // draw the player around the origin (remember we moved the origin)
  
ctx.restore(); // restore the saved transformations
*/


