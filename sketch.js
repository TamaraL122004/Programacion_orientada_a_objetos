let FondoRandom;
let Pelotas = [];
//para cambiar el color de la pelota
// let r = 255;
// let g = 255;
// let b = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
  for (let i = 0; i < 100; i++) {
    let nuevaPelota = new Pelota();
    Pelotas.push(nuevaPelota);
  }
  // Radio = ceil(random(5, 50));
  // Diametro = Radio * 2;
  // //   console.log(Diametro);
  // posX = random(Radio, width - Radio);
  // posY = random(Radio, height - Radio);

  // //   VelX = random(-10, 10);
  // //   VelY = random(-10, 10);
  // VelX = random(-10, 10);
  // VelY = random(-10, 10);
}

function draw() {
  background(FondoRandom);
  // fill(r, g, b);
  // noStroke();

  // posX += VelX;
  // posY += VelY;

  // if (posX > width - Radio || posX < Radio) {
  //   VelX *= -1;
  //   FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
  //   changeColor();
  //   // console.log("gone");
  // }

  // if (posY > height - Radio || posY < Radio) {
  //   VelY *= -1;
  //   FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
  //   changeColor();
  //   // console.log("gone");
  // }

  // circle(posX, posY, Diametro);
  for (let i = 0; i < 100; i++) {
    Pelotas[i].uptade();
    Pelotas[i].display();
  }
}

// function changeColor() {
//   r = random(255);
//   g = random(255);
//   b = random(255);
// }

class Pelota {
  constructor() {
    this.Radio = ceil(random(5, 40));
    this.Diametro = this.Radio * 2;
    this.posX = random(this.Radio, width - this.Radio);
    this.posY = random(this.Radio, height - this.Radio);
    this.VelX = random(-10, 10);
    this.VelY = random(-10, 10);

    console.log("vivo");
  }

  uptade() {
    this.posX += this.VelX;
    this.posY += this.VelY;

    if (this.posX > width - this.Radio || this.posX < this.Radio) {
      this.VelX *= -1;
      // FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
      // changeColor();
    }

    if (this.posY > height - this.Radio || this.posY < this.Radio) {
      this.posY *= -1;
      // FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
      // changeColor();
    }
  }
  display() {
    fill(220, 50);
    noStroke();
    circle(this.posX, this.posY, this.Diametro);
  }
}
