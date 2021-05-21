var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var x2 = canvas.width-60
var y2 = canvas.height-60
console.log(canvas.width, canvas.height)

//classes allow you to easily build the same object over and over
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "lightgrey"; //if you wanted to add a fillStyle
    this.dx = 0;
    this.dy = 0;
  }
  //draws the object
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
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle='#964B00';
    ctx.fill()
    ctx.moveTo(this.x, this.y)
    ctx.lineWidth = 5;
    ctx.stroke();
    //ctx.fillStyle = "#964B00"
    //ctx.fill()
    ctx.closePath();

  }
  //updates anything related to the object
  update() {

    //increasingly adds 0.5 to the dy or dx
    if (controller1.up) {this.dy -= 0.5}; 
    if (controller1.right) {this.dx += 0.5};
    if (controller1.down) {this.dy += 0.5};
    if (controller1.left) {this.dx -= 0.5};
    //if dy or dx is being added to so will the x and y. If not then they are 0.
    this.x += this.dx;  
    this.y += this.dy;
    //Multiplying by a number less then 1 will prevent the object from gaining infinite speed and also cause the object to stop. Can be changed to anything below 1. This will also change how rigidly the circle comes to a stop. it can slide or absuplty stop.
    this.dx *= 0.9;
    this.dy *= 0.9;
    //calling the draw() in here so I don't have to call it in the animate loop. Either way works.
    this.draw(); 
  }
}

class Controller {
  constructor() {
    this.up = false;
    this.right = false;
    this.down = false;
    this.left = false;
    
    let keyEvent = (e) => {
      //if the condition is true it will set up/down/left/right to the true or false. e.type will either be 'keyup' or 'keydown'.
      if (e.code == "KeyW" || e.code == "ArrowUp") {this.up = e.type == 'keydown'};
      if (e.code == "KeyD" || e.code == "ArrowRight") {this.right = e.type == 'keydown'};
      if (e.code == "KeyS" || e.code == "ArrowDown") {this.down = e.type == 'keydown'};
      if (e.code == "KeyA" || e.code == "ArrowLeft") {this.left = e.type == 'keydown'};
      
    }
    addEventListener('keydown', keyEvent);
    addEventListener('keyup', keyEvent);
    }
}

//Create instances of you classes
let circle1 = new Circle(canvas.width/2, canvas.height/2, 50, 0, Math.PI*2);
//can add more circles if you want
//let circle2 = new Circle(100, 100, 20, 0, Math.Pi*2);
let controller1 = new Controller();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circle1.update();
  //can add circle2.draw() if you want the other circle to be staionary. 
  //circle2.draw();
  requestAnimationFrame(animate)
}


animate();
