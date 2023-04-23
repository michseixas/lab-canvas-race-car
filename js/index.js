window.onload = () => { 
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const roadImage = new Image();
  roadImage.src = "images/road.png";
  roadImage.onload = () => { //loads the ROAD image when the window loads.(wait for the image to load before you can draw it onto the canvas)
    ctx.drawImage(roadImage, 0, 0, 500, 700);
  };

  const carImage = new Image();
  carImage.src ="images/car.png";
  const myCar = new Car(225, 600, 50, 70, "blue", carImage);
  myCar.draw(ctx);
  carImage.onload = () => { //loads the CAR image when the window loads, and after the ROAD image loads.
    ctx.drawImage(carImage, 225, 600, 50, 70);
  };


  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {}
};

class Car {
    constructor (x, y, w, h, color, imgElement) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.imgElement = imgElement;
}
    draw(ctx) {
      if (this.imgElement) { //if the image is provided, use the image. Else, use a rectangle.
        ctx.drawImage(this.imgElement, this.x, this.y, this.width, this.height);
      } else {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
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
