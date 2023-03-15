const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

const paddleWidth = 10;
const paddleHeight = 100;
const ballSize = 10;

const leftPaddle = {
  x: 10,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  dy: 5,
};

const rightPaddle = {
  x: canvas.width - 10 - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  dy: 5,
};

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: ballSize,
  height: ballSize,
  dx: 4,
  dy: 4,
};

function drawPaddle(x, y, width, height) {
  ctx.fillStyle = "#fff";
  ctx.fillRect(x, y, width, height);
}

function drawBall(x, y, width, height) {
  ctx.fillStyle = "#fff";
  ctx.fillRect(x, y, width, height);
}

function movePaddles() {
  leftPaddle.y += leftPaddle.dy;
  rightPaddle.y -= rightPaddle.dy;

  if (leftPaddle.y < 0) {
    leftPaddle.y = 0;
  } else if (leftPaddle.y + leftPaddle.height > canvas.height) {
    leftPaddle.y = canvas.height - leftPaddle.height;
  }

  if (rightPaddle.y < 0) {
    rightPaddle.y = 0;
  } else if (rightPaddle.y + rightPaddle.height > canvas.height) {
    rightPaddle.y = canvas.height - rightPaddle.height;
  }
}

function moveBall() {
 
