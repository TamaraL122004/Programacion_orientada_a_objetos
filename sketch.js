let posX, posY;
let VelX, VelY;
let Diametro;
let Radio;
let FondoRandom;

function setup() {
  createCanvas(windowWidth, windowHeight);
  FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));

  Radio = ceil(random(5, 50));
  Diametro = Radio * 2;
  //   console.log(Diametro);
  posX = random(Radio, width - Radio);
  posY = random(Radio, height - Radio);

  //   VelX = random(-10, 10);
  //   VelY = random(-10, 10);
  VelX = random(-10, 10);
  VelY = random(-10, 10);
}

function draw() {
  background(FondoRandom);
  fill(255);
  noStroke();

  posX += VelX;
  posY += VelY;

  if (posX > width - Radio || posX < Radio) {
    VelX *= -1;
    FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
    // console.log("gone");
  }

  if (posY > height - Radio || posY < Radio) {
    VelY *= -1;
    FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
    // console.log("gone");
  }

  circle(posX, posY, Diametro);
}
