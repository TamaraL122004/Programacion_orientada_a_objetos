class Particula {
  // este método se ejecuta automáticamente
  constructor(_x, _y) {
    this.posX = _x;
    this.posY = _y;
    this.itIsAlive = true;
    // this.itIsDead = false;
    // lifespan es el tiempo de vida de la part
    this.lifespan = round(random(100, 220));
    this.tamano = 10;
    this.opacidad = 120;
  }

  update() {
    // this.lifespan -= 1;
    // if (this.lifespan <= 0) {
    //   this.itIsAlive = false;
    //   return;
    // }

    if (this.posY < this.tamano / 2) {
      this.itIsAlive = false;
      return;
    }

    this.opacidad -= 0.8;

    this.posY -= 5;
    this.posX += random(-10, 10);
    this.tamano += 0.9;
    // this.posY += 2;
  }
  //   se refiere a la apariencia
  display() {
    fill(153, 204, 250, this.opacidad);
    stroke(255);
    circle(this.posX, this.posY, this.tamano);
    // circle();
  }
}
// stroke(250);
// strokeWeight(2);

// fill(250);
// noStroke();
// circle(this.posX, this.posY, 20);
