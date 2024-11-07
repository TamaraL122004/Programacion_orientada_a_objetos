// let FondoRandom;
// let Pelotas = [];
// //para cambiar el color de la pelota
// let r = 255;
// let g = 255;
// let b = 255;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
//   for (let i = 0; i < 100; i++) {
//     let nuevaPelota = new Pelota();
//     Pelotas.push(nuevaPelota);
//   }
//   // Radio = ceil(random(5, 50));
//   // Diametro = Radio * 2;
//   // //   console.log(Diametro);
//   // posX = random(Radio, width - Radio);
//   // posY = random(Radio, height - Radio);

//   // //   VelX = random(-10, 10);
//   // //   VelY = random(-10, 10);
//   // VelX = random(-10, 10);
//   // VelY = random(-10, 10);
// }

// function draw() {
//   background(FondoRandom);
//   // fill(r, g, b);
//   // noStroke();

//   // posX += VelX;
//   // posY += VelY;

//   // if (posX > width - Radio || posX < Radio) {
//   //   VelX *= -1;
//   //   FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
//   //   changeColor();
//   //   // console.log("gone");
//   // }

//   // if (posY > height - Radio || posY < Radio) {
//   //   VelY *= -1;
//   //   FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
//   //   changeColor();
//   //   // console.log("gone");
//   // }

//   // circle(posX, posY, Diametro);
//   for (let i = 0; i < 100; i++) {
//     Pelotas[i].uptade();
//     Pelotas[i].display();
//   }
// }

// function changeColor() {
//   r = random(255);
//   g = random(255);
//   b = random(255);
// }

// class Pelota {
//   constructor() {
//     this.Radio = ceil(random(5, 40));
//     this.Diametro = this.Radio * 2;
//     this.posX = random(this.Radio, width - this.Radio);
//     this.posY = random(this.Radio, height - this.Radio);
//     this.VelX = random(-10, 10);
//     this.VelY = random(-10, 10);

//     console.log("vivo");
//   }

//   uptade() {
//     this.posX += this.VelX;
//     this.posY += this.VelY;

//     if (this.posX > width - this.Radio || this.posX < this.Radio) {
//       this.VelX *= -1;
//       changeColor();
//       // FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
//     }

//     if (this.posY > height - this.Radio || this.posY < this.Radio) {
//       this.posY *= -1;
//       changeColor();
//       // FondoRandom = color(random(100, 20), random(0, 0, 200), random(0, 200, 0));
//     }
//   }

//   display() {
//     fill(r, g, b);
//     noStroke();
//     circle(this.posX, this.posY, this.Diametro);
//   }
// }

let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // console.log(particula1.nombre);
}

function draw() {
  background(0, 0, 140);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }

  particulas = particulas.filter((pelota) => pelota.itIsAlive);

  noFill();
  stroke(200, 255, 250);
  strokeWeight(1);

  for (let i = 0; i < particulas.length - 1; i++) {
    line(
      particulas[i].posX,
      particulas[i].posY,
      particulas[i + 1].posX,
      particulas[i + 1].posY
    );
  }

  console.log(particulas.length);
}
//   background(37, 37, 64);

//   let nuevaParticula = new Particula(mouseX, mouseY);
//   particulas.push(nuevaParticula);

//   for (let i = 0; i < particulas.length; i++) {
//     particulas[i].update();
//     particulas[i].display();
//   }

//   // for (let i = 0; i < particulas.length; i++) {
//   //   if (!particulas[i].itIsAlive) {
//   //     particulas.splice(i, 1);
//   //   }
//   // }
//   particulas = particulas.filter((pelota) => pelota.itIsAlive);

//   noFill();
//   stroke(250, 99, 145);
//   strokeWeight(1);

// //   for (let i = 0; i < particulas.length - 1; i++) {
// //     //  if (particulas[i+1]!== undefined)
// //   }
// //   line(
// //     particulas[i].posX,
// //     particulas[i].posY,
// //     particulas[i + 1].posX,
// //     particulas[i + 1].posY
// //   );
// // }
// // console.log(particulas.length);
