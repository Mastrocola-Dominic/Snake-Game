function Apple(x, y) {
  this.x = x;
  this.y = y;
  this.size = 20;

  this.getNewPos = function() {
    this.x = Math.floor(Math.random() * row) * 20;
    this.y = Math.floor(Math.random() * col) * 20;
  }
  this.draw = function(ctx) {
    ctx.fillStyle = '#f00';
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
