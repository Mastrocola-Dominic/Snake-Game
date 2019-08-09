let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

var x = canvas.width/2;
var y = canvas.width/2;

var dx = 2;
var dy = -2;

var ballRadius = 10;

var snake = new Snake(canvas.width/2, canvas.height/2, 1, -1, canvas);
var apple = new Apple(canvas.width - 50, canvas.height/2);


//Gets input
new inputHandler(snake);

var lastFrameTimeMs = 0, maxFPS = 10;
function mainLoop(timestamp) {

  if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snake.update(timestamp);
      snake.draw(ctx);
      apple.draw(ctx);
      requestAnimationFrame(mainLoop);
      return;
    }
    lastFrameTimeMs = timestamp;

   requestAnimationFrame(mainLoop);
 }
requestAnimationFrame(mainLoop);
