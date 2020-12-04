//variables for the ball
var x = 400;
var y = 300;
const d = 10;
var xspeed = 5;
var yspeed = 1;
//variables for paddle 1&2
const padheight=100;
var pad1y = 250;
var pad2y = 250;
//variables for score
var p1score = 0;
var p2score = 0;
const max = 7;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(100);
}
//reset if somebody scores
function reset() {
    x = width/2;
    y = height/2;
    xspeed = -xspeed;
}
function draw() {
  //win thing  
  if(p1score == max) {
      alert('you win!');
      p1score = 0;
      p2score = 0;
      yspeed = 1;
    }
  if(p2score == max) {
      alert('you lost!');
      p1score = 0;
      p2score = 0;
      yspeed = 1;
    }
    //net
    for(var i = 0; i < height; i += 40) {
      fill(255);  
      rect(width/2-1, i, 2, 20);
    }
    //paddle position
    pad1y=mouseY-(padheight/2);
    var pad2ycenter= pad2y + (padheight/2);
    //background color  
    background(0);
    //speed
    x += xspeed;
    y += yspeed;
    //this is the ball
    rect(x, y, d, d, 10); 
    //this is paddle 1
    rect(0, pad1y, d, padheight, 10);
    //this is paddle 2
    rect(width-d, pad2y, d, padheight, 10);
    // paddle 2 movement
    if(pad2ycenter < y - 35){
        pad2y+=5;
    } else if (pad2ycenter > y + 35){
        pad2y-=5;
    }
    //this makes the ball bounce and reset after it's scored
    if(x < 0) {
        if(y > pad1y && y < pad1y+padheight) {
            xspeed = -xspeed;
            var deltay = y-(pad1y+padheight/2);
            yspeed=deltay * 0.35;       
        } else {
        reset();
        p2score++;
        }
    }
    if(x > width) {
        if(y > pad2y && y < pad2y+padheight) {
            xspeed = -xspeed;
            var delta2y = y-(pad2y+padheight/2);
            yspeed = delta2y * 0.35;
        } else {
        reset();
        p1score++;
        }
    }
    if(y > height-d) {
        yspeed = -yspeed;
    }
    if(y < 0) {
        yspeed = -yspeed;
    }
    //displays score
    textSize(10);
    fill(255);
    text(p1score, 100, 100);
    text(p2score, width-100, 100);
}
