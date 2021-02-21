var hr;
var mn;
var sc;

function setup(){

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  createCanvas(800,400);

  scAngle = map(sc,0,60,0,360);

  push ();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,100,100,0);
  pop ();

}

function draw(){
  background("white");  
  drawSprites();
}