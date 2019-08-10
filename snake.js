function Snake(x, y, dx, dy, canvas) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.size = 20;
  this.canvas = canvas;
  this.lastUpdate = 0;
  this.body = [[]];
  this.length = 0;
  //set direction
  this.setDir = function(dx, dy) {
    if(dx !== 0) {
      if(this.dx === 0) {
        this.dx = dx;
        this.dy = 0;
      }
    }
    else {
      if(this.dy === 0) {
        this.dx = 0;
        this.dy = dy;
      }
    }

  }
  //update position
  this.update = function(timestamp) {

    if(timestamp - this.lastUpdate >= 50) {
      for(let i = 0; i < this.length; i++) {
        this.body[i] = this.body[i+1];
      }
      this.body[this.length - 1] = [this.x, this.y];
      this.lastUpdate = timestamp;

      this.x += this.dx * this.size;
      this.y += this.dy * this.size;
      this.checkCollisions();
    }
  }
  //draw the snake
  this.draw = function(ctx) {
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#000';
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.strokeRect(this.x, this.y, this.size, this.size);
    for(let i = 0; i < this.length; i++) {
      ctx.fillRect(this.body[i][0], this.body[i][1], this.size, this.size);
      ctx.strokeRect(this.body[i][0], this.body[i][1], this.size, this.size);
    }
  }
  //check for collisions
  this.checkCollisions = function() {
    for(let i = 0; i < this.length; i++) {
      if(this.x === this.body[i][0] && this.y === this.body[i][1]) {
        this.death();
      }
    }

    if(this.x < 0) {
      this.death();
    }
    if(this.x + this.size > canvas.width) {
      this.death();
    }
    if(this.y + this.size > canvas.height) {
      this.death();
    }
    if(this.y < 0) {
      this.death();
    }
    if(this.x === apple.x && this.y === apple.y) {
      apple.getNewPos();
      this.body[this.length] = [this.x, this.y];
      this.body.push([]);
      this.length++;
    }
  }
  this.death = function() {
    this.body = [[]];
    this.length = 0;
    this.dx = 1;
    this.dy = 0;
    this.x = canvas.width/2;
    this.y = canvas.height/2;
  }
}
