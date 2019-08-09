function Snake(x, y, dx, dy, canvas) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.size = 10;
  this.canvas = canvas;
  this.lastUpdate = 0;

  //set direction
  this.setDir = function(x, y) {
    console.log(x, y);
    this.dx = x;
    this.dy = y;
  }
  //update position
  this.update = function(timestamp) {
    if(timestamp - this.lastUpdate >= 100) {
      this.lastUpdate = timestamp;
      this.x += this.dx * this.size;
      this.y += this.dy * this.size;
      this.checkCollisions();
      console.log('update');
    }
  }
  //draw the snake
  this.draw = function(ctx) {
    ctx.fillStyle = '#fff';
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  //check for collisions
  this.checkCollisions = function() {

    if(this.x < 0) {
      this.x = 0;
    }
    if(this.x + this.size > canvas.width) {
      this.x = canvas.width - this.size;
    }
    if(this.y + this.size > canvas.height) {
      this.y = canvas.height - this.size;
    }
    if(this.y < 0) {
      this.y = 0;
    }if(this.x === apple.x && this.y === apple.y) {
      alert('Apple has been eaten');
    }
  }
}
