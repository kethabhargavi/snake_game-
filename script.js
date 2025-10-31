let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("color-display");
let message = document.getElementById("message");
let resetButton = document.getElementById("reset");
let scoreDisplay = document.getElementById("score");

let colors = [];
let pickedColor;
let score = 0;

function init() {
  generateColors();
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        message.textContent = "Correct!";
        score++;
        scoreDisplay.textContent = score;
        changeColors(pickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
      }
    });
  }
}

function generateColors() {
  colors = [];
  for (let i = 0; i < 6; i++) {
    colors.push(randomColor());
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener("click", init);

// Start game
init();
