kleur='white';
var aantal = 9

function setup() {
  canvas = createCanvas(501,501);
  canvas.parent('processing');
  background('coral');
  noLoop();
}

function draw() {
  for (var rij = 0;rij < height-1;rij += height/aantal-1) {
    for (var kolom = 0;kolom < 450;kolom += 50) {
      fill(kleur);
      rect(kolom,rij,50,50);
      if (kleur == 'white') {
          kleur = 'black'
      }
      else {
          kleur = 'white'
      }
    }
  }
}