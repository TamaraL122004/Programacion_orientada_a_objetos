class Particula {
  // este método se ejecuta automáticamente
  constructor(_x, _y) {
    this.posX = _x;
    this.posY = _y;
    this.itIsAlive = true;
    // this.itIsDead = false;
    // lifespan es el tiempo de vida de la part
    this.lifespan = round(random(90, 120));
    this.tamano = 50;
  }

  update() {
    this.lifespan -= 1;
    if (this.lifespan <= 0) {
      this.itIsAlive = false;
      return;
    }
    this.posY -= 2;
    this.posX += 1;
    this.tamano -= 0.5;
    // this.posY += 2;
  }
  //   se refiere a la apariencia
  display() {
    fill(173, 216, 230, 100);
    stroke(250);
    strokeWeight(2);
    circle(this.posX, this.posY, this.lifespan);

    // fill(250);
    // noStroke();
    // circle(this.posX, this.posY, 20);
  }
}
