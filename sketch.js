var x = 200;
var y = 200;

var a = 0;
var b = 0;

var newWidth = 50;
var newHeight = 50;
var colors;
var colours;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(50);
    
    noStroke();
    fill(250,0,0);
    ellipse(0,0,100,100);
    
    if(mouseIsPressed){
        flowers(mouseX,mouseY);
    }
    fill(0,255,0);
    a = 200;
    b +=3;
    rect(a, b, 100,height)

    if(b > height){
        b = 0 - height;
    }
}

    if(mouseIsPressed){
        colors = random(0,250);
        colours = random(0,255);
        noStroke();
        fill(colors,colours,255,50);
        ellipse(mouseX,mouseY,newWidth,newHeight);
    }

