var xPositie = 0;
var yPositie = 30;
var schaal = 0.25;
var draaing = 0;

function setup() {
  rectMode(CENTER);
  angleMode(DEGREES);
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  frameRate(120);
  colorMode(RGB,255,255,255,1);
  background(0,0,75,1);
}

function draw() {
  background(0,0,75,0.1);
  tekenSter(xPositie,yPositie,schaal,draaing);
  yPositie += 1;
  xPositie += 5;
  schaal += 0.05;
  draaing += 4;
}

function tekenSter(x,y,s,r) {
  push();
  scale(s);
  translate(x,y);
  rotate(r);
  strokeWeight(2);
  stroke('white');
  fill('khaki');
  triangle(0,0,80,0,40,65);
  translate(0,40);
  triangle(0,0,80,0,40,-65);
  pop();
}