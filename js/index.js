
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const roadImage = new Image();
roadImage.src = "images/road.png";

const carImage = new Image();
carImage.src = "images/car.png";

window.onload = () => {
  const canvas = document.getElementById("canvasBackground");
  const ctx = canvas.getContext("2d");
  const roadImage = new Image();
  roadImage.src = "images/road.png";

  roadImage.onload = () => {
    //loads the ROAD image when the window loads.(wait for the image to load before you can draw it onto the canvas)
    ctx.drawImage(roadImage, 0, 0, 500, 700);
  };
};

// -------My Class----------------
class Component {
  constructor(x, y, w, h, color, imgElement) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = color;
    this.imgElement = imgElement;
  }
  draw(ctx) {
    //ctx is the canvas context used for drawing
    if (this.imgElement) {
      //if the image is provided(ctx.drawImage), use the image. Else, use a rectangle.
      ctx.drawImage(this.imgElement, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = this.color; //draws a rectangle with the given color
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }


  //from here we are creating a function that checks if the position of the car is not the same as the obstacle´s one.
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    //This function checks if the car crashes with an obstacle object.
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

//-------

const myGameArea = {
  canvas: document.getElementById("canvas"),
  frames: 0,
  start: function () {
    this.ctx = this.canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
  const roadImage = new Image();
  roadImage.src = "images/road.png";

  },
  stop: function () {
    clearInterval(this.interval);
  },
  /*score: function () {
    const points = Math.floor(this.frames / 5);
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText(`Score: ${points}`, 350, 50);
  }, */
};

function updateGameArea() { //This function is called from the myGameArea.start() function(bottom document) and , once called, is the one that calls every function listed below, in each frame.
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  myGameArea.clear();
  myCar.draw(ctx); // Updates the car’s position before we draw them.
  //updateObstacles(); //call a new function named updateObstacles from the updateGameArea function
  //checkGameOver(); //checks if the game should stop
  //myGameArea.score(); //
}

//--------Event Listeners-------
document.addEventListener("keydown", (event) => {
  //37 and 39 are key codes that correspond to the ASCII codes for left and right position
  if (event.keyCode === 37) {
    // left arrow
    myCar.x -= 10; // move the car 10 pixels to the left
  } else if (event.keyCode === 39) {
    // right arrow
    myCar.x += 10; // move the car 10 pixels to the right
  }
});

document.getElementById("start-button").onclick = () => {
  startGame();
};
//--------------------------


const myCar = new Component(225, 600, 50, 70, "blue", carImage); //This constant allows me to easily refer to the Car object that I just created for, for example, updating the position.
myCar.draw(ctx);


function startGame() {
  myGameArea.start();
}













/*- cuando no lees bien el enunciado y crees que tienes que hacer tú el road...
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
*/
