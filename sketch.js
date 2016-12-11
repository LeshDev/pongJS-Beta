var bar1;
var ball;
var song;
var slider;

function preload() {
  song = loadSound('http://unleshed.net/p5/pongJS/assets/sounds/bleed.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 1, 0.5, 0.01);

  song.play();
  bar1 = new bar1();
  ball = new ball();
}

function draw() {
  background(50);
  bar1.show();
  ball.show();
  bar1.move();
  song.setVolume(slider.value());
}

window.onresize = function() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyReleased() {
  bar1.setDir(0);
}

function keyPressed() {
  // Start the game
//  if (keyCode == BACKSPACE) {
//    intro.stop();
//  } else{
//    intro.play();
//  }

  // Moving the first Bar
  if (keyCode === RIGHT_ARROW) {
    bar1.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    bar1.setDir(-1);
  }
}
