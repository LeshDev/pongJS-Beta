var bar1;
var ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bar1 = new bar1();
  ball = new ball();
}

function draw() {
  background(50);
  bar1.show();
  ball.show();
  bar1.move();
}

window.onresize = function() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyReleased() {
  bar1.setDir(0);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    bar1.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    bar1.setDir(-1);
  }
}
