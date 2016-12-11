function ball() {
  this.x = height/2;
  this.y = 50;

  this.show = function(){
    fill(83);
    rect(this.x, this.y, 50, 50);
  }

  this.move = function(dir) {
    this.x += dir*10;
  }
}
