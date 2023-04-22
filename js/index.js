window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green"; // small green left
ctx.fillRect(0, 0, 30, 700);

ctx.fillStyle = "green"; // small green right
ctx.fillRect(470, 0, 30, 700);

ctx.fillStyle = "grey"; // small grey left
ctx.fillRect(30, 0, 10, 700);

ctx.fillStyle = "grey"; // small grey right
ctx.fillRect(460, 0, 10, 700);

ctx.fillStyle = "grey"; // big grey center
ctx.fillRect(50, 0, 400, 700);


