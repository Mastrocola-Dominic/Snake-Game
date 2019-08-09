function Apple(x, y) {
  this.x = x;
  this.y = y;
  this.size = 10;

  this.checkCollisions = function() {
    
  }
  this.draw = function(ctx) {
    ctx.fillStyle = '#f00';
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
