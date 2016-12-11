function bar1() {
  this.y = height/2;
  this.ydir = 0;

  this.show = function(){
    fill(255);
    rectMode(CENTER);
    rect(this.y, height-20, 20, 20);
  }

  this.setDir = function(dir) {
    this.ydir = dir;
  }

  this.move = function(dir) {
    this.y += this.ydir*5;
  }
}
