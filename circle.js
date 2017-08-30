var dots = {
  x: 100,
  y: 50
}

var size = 50;
var myCanvas;
var colour = {
 green: 0,
 blue: 0,
 red: 0
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(5);


}

function draw() {
  dots.x = random(0, windowWidth);
  dots.y = random(0,windowHeight);
  
  colour.green = random(0,255);
  colour.blue = random(0, 255);
  //colour.blue = 255;
  colour.red = random(0, 255) /2 ;
  
  var greyscale = random(0,255);
  var transparency = random(50,255);
  
  size = random(10,50);
  
  //stroke(0);
  noStroke();
  fill(colour.red,colour.green,colour.blue, transparency);
  //fill(greyscale);
  ellipse(dots.x, dots.y, size, size);

}
