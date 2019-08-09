function inputHandler() {
  window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 37:
        snake.setDir(-1, 0);
        break;
      case 38:
        snake.setDir(0, -1);
        break;
      case 39:
        snake.setDir(1, 0);
        break;
      case 40:
        snake.setDir(0, 1);
        break;

    }
  });
}
